"use client";

import React, { ReactEventHandler, useRef } from "react";
import { useForm } from "react-hook-form";
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
import SignatureCanvas, {
    ReactSignatureCanvasProps,
} from "react-signature-canvas";

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

export default function WasteCollectionForm({}) {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    const sigPad = useRef<SignatureCanvas>(null);

    const handleSelect = (day: Date | undefined) => {
        setDate(day);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const sig = handleGetTrimmed();
        console.log("signature", sig);
    };

    const handleSigClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sigPad.current?.clear();
    };

    const handleGetTrimmed = () => {
        return sigPad.current?.getTrimmedCanvas().toDataURL("image/png");
    };

    return (
        <main className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Waste Collection Notice</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        {/* Producer Selection */}
                        <div className="space-y-2">
                            <Label htmlFor="producer">Producer</Label>
                            <Select>
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
                        </div>

                        {/* Date Picker */}
                        <div className="space-y-2">
                            <Label>Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date
                                            ? format(date, "PPP")
                                            : "Select date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={handleSelect}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Collector Input */}
                        <div className="space-y-2">
                            <Label htmlFor="collector">Collector</Label>
                            <Input
                                id="collector"
                                placeholder="Enter collector name"
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
                                                <Checkbox
                                                    id={`${item.name}-${option}`}
                                                />
                                                <Label
                                                    htmlFor={`${item.name}-${option}`}
                                                >
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <Label>Number of units</Label>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            className="w-24"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Other */}
                            <div className="border p-4 rounded-lg space-y-2">
                                <Label>Other</Label>
                                <Input placeholder="Explain other services not listed" />
                                <div className="mt-2">
                                    <Label>Number of units</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        className="w-24"
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
                                        className: "sigCanvas",
                                    }}
                                />
                                <Button
                                    className="w-1/2"
                                    onClick={handleSigClear}
                                >
                                    Clear
                                </Button>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="printName">Print Name</Label>
                                <Input id="printName" />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
