"use client";

import { useRouter } from "next/navigation";

type CardProps = {};

export default function Card({}: CardProps) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push("/jobs/1/form")}
            className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto hover:opacity-90 cursor-pointer"
        >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                New Job
            </h2>
            <p className="text-gray-600">Create a new job form (CHANGE THIS)</p>
        </div>
    );
}
