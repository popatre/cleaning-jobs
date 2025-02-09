"use client";

import React, { ReactEventHandler, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import SignatureCanvas from "react-signature-canvas";

type FormData = {
    producer: string;
    date: Date;
    collector: string;
    services: Record<
        string,
        {
            options: string[];
            units: number;
        }
    >;
    other: {
        description: string;
        units: number;
    };
    printName: string;
};

const serviceItems = [
    {
        name: "Sanitary Disposal Units",
        options: ["serviced", "cleaned"],
    },
    {
        name: "Airfresh Units",
        options: ["Fragrance", "batteries serviced"],
    },
    {
        name: "Water Sanitiser Units",
        options: ["Serviced", "fluid replenished"],
    },
    {
        name: "Hand drier Units",
        options: ["Operation checked"],
    },
    {
        name: "Sharps disposal",
        options: ["checked", "exchanged"],
    },
    {
        name: "Clinical/mediwaste disposal Units",
        options: ["serviced", "cleaned"],
    },
    {
        name: "Nappy Disposal Units",
        options: ["serviced", "cleaned"],
    },
    {
        name: "Vending machines",
        options: ["serviced", "replenished"],
    },
    {
        name: "Soap dispensers",
        options: ["Replenished"],
    },
];

export default function WasteCollectionForm() {
    const sigPad = useRef<SignatureCanvas>(null);
    const { control, register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            producer: "",
            date: new Date(),
            collector: "",
            services: serviceItems.reduce(
                (acc, item) => ({
                    ...acc,
                    [item.name]: { options: [], units: 0 },
                }),
                {}
            ),
            other: { description: "", units: 0 },
            printName: "",
        },
    });

    const handleSigClear = () => {
        sigPad.current?.clear();
    };

    const onSubmit = (data: FormData) => {
        const signature = sigPad.current
            ?.getTrimmedCanvas()
            .toDataURL("image/png");
        console.log({
            ...data,
            signature,
        });
    };

    return (
        <main className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Waste Collection Notice</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Producer Selection */}
                        <div className="space-y-2">
                            <Label>Producer</Label>
                            <Controller
                                name="producer"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select producer" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="producer1">
                                                Producer 1
                                            </SelectItem>
                                            <SelectItem value="producer2">
                                                Producer 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        {/* Date Picker */}
                        <div className="space-y-2">
                            <Label>Date</Label>
                            <Controller
                                name="date"
                                control={control}
                                render={({ field }) => (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left font-normal"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value
                                                    ? format(field.value, "PPP")
                                                    : "Select date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                )}
                            />
                        </div>

                        {/* Collector Input */}
                        <div className="space-y-2">
                            <Label>Collector</Label>
                            <Input
                                placeholder="Enter collector name"
                                {...register("collector")}
                            />
                        </div>

                        {/* Service Items */}
                        <div className="space-y-6">
                            {serviceItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="space-y-2 border p-4 rounded-lg"
                                >
                                    <Label>{item.name}</Label>
                                    <div className="flex gap-4">
                                        {item.options.map((option) => (
                                            <div
                                                key={option}
                                                className="flex items-center space-x-2"
                                            >
                                                <Controller
                                                    name={`services.${item.name}.options`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Checkbox
                                                            checked={field.value.includes(
                                                                option
                                                            )}
                                                            onCheckedChange={(
                                                                checked
                                                            ) => {
                                                                const newValue =
                                                                    checked
                                                                        ? [
                                                                              ...field.value,
                                                                              option,
                                                                          ]
                                                                        : field.value.filter(
                                                                              (
                                                                                  v: string
                                                                              ) =>
                                                                                  v !==
                                                                                  option
                                                                          );
                                                                field.onChange(
                                                                    newValue
                                                                );
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <Label>{option}</Label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <Label>Number of units</Label>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            className="w-24"
                                            {...register(
                                                `services.${item.name}.units`,
                                                {
                                                    valueAsNumber: true,
                                                }
                                            )}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Other Section */}
                            <div className="border p-4 rounded-lg space-y-2">
                                <Label>Other</Label>
                                <Input
                                    placeholder="Explain other services not listed"
                                    {...register("other.description")}
                                />
                                <div className="mt-2">
                                    <Label>Number of units</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        className="w-24"
                                        {...register("other.units", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Signature Section */}
                        <div className="space-y-4 border-t pt-4">
                            <div className="space-y-2">
                                <SignatureCanvas
                                    ref={sigPad}
                                    penColor="black"
                                    canvasProps={{
                                        width: 238,
                                        height: 200,
                                        className: "border border-slate-600",
                                    }}
                                />
                                <Button
                                    type="button"
                                    className="w-1/2"
                                    onClick={handleSigClear}
                                >
                                    Clear
                                </Button>
                            </div>
                            <div className="space-y-2">
                                <Label>Print Name</Label>
                                <Input {...register("printName")} />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
