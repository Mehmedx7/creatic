"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import logoT from "@/../public/img/logoT.png";

export default function Header() {
    const pathname = usePathname(); // Get the current route

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 px-6 shadow-xl z-50 backdrop-blur-lg"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={logoT}
                        alt="Creatic Agency Logo"
                        width={50}
                        height={50}
                        className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map(({ name, path }) => {
                        const isActive = pathname === path;

                        return (
                            <Link
                                key={name}
                                href={path}
                                className={`text-sm uppercase font-bold tracking-widest relative transition-all duration-300 
                                    ${isActive ? "text-blue-400 after:w-full" : "text-gray-300 hover:text-blue-500 after:w-0"}
                                    after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:left-0 after:bottom-0 after:transition-all after:duration-300
                                    hover:scale-105`}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Search Icon */}
                <div className="hidden md:block">
                    <Search className="w-6 h-6 text-gray-300 hover:text-blue-500 transition-all duration-300 cursor-pointer hover:scale-110" />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="w-7 h-7 text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-110" />
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-gray-900 p-8 rounded-l-lg shadow-2xl">
                            <nav className="flex flex-col space-y-6">
                                {navItems.map(({ name, path }) => {
                                    const isActive = pathname === path;

                                    return (
                                        <Link
                                            key={name}
                                            href={path}
                                            className={`text-xl font-semibold tracking-wide transition-all duration-300 
                                                ${isActive ? "text-blue-400" : "text-white hover:text-blue-500"}
                                                hover:scale-105`}
                                        >
                                            {name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
