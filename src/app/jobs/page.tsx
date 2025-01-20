import Card from "@/components/Card";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <main className="bg-green-200 h-screen">
            <section className="grid grid-cols-1 pt-10">
                {" "}
                <Card />
            </section>
        </main>
    );
}
