import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "@/components/Hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Golden Hygiene",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="fixed top-0 w-full bg-white shadow-sm flex justify-between items-center h-16 px-4">
                    <h1 className="text-xl font-bold">Golden Hygiene</h1>
                    <HamburgerMenu />
                </nav>
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
