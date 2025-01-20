"use client";

import { useState } from "react";
import { X } from "lucide-react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 z-50 relative"
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <div className="space-y-1.5">
                    <span
                        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                            isOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                            isOpen ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </div>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Navigation Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Menu</h2>
                        {/* <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button> */}
                    </div>

                    <nav className="space-y-4">
                        <a
                            href="/"
                            className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="/jobs"
                            className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Jobs
                        </a>
                        {/* <a
                            href="/services"
                            className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Contact
                        </a> */}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
