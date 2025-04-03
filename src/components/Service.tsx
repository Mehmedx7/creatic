"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Monitor, PenTool, Code, FileEdit } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            icon: <Monitor className="w-12 h-12 text-blue-500" />,
            title: "Video Marketing",
            description: "Creating compelling visual content to elevate your brand and engage audiences.",
        },
        {
            icon: <PenTool className="w-12 h-12 text-blue-500" />,
            title: "Graphic Design",
            description: "Crafting stunning visuals and branding solutions tailored for your business.",
        },
        {
            icon: <Code className="w-12 h-12 text-blue-500" />,
            title: "Web Design",
            description: "Designing intuitive and responsive websites with a seamless user experience.",
        },
        {
            icon: <FileEdit className="w-12 h-12 text-blue-500" />,
            title: "Website Development",
            description: "Building fast, scalable, and dynamic websites using modern technologies.",
        }
    ];

    return (
        <section className="relative bg-[#0B0F1A] overflow-hidden py-24 px-8 md:px-16 lg:px-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 z-0" />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left - Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-2xl text-white"
                    >
                        {/* Section Label */}
                        <span className="text-blue-400 text-sm tracking-widest uppercase">
                            Our Services
                        </span>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Experience The Power <br />
                            Of <span className="text-blue-400">Innovation.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We offer cutting-edge digital solutions to help you stay ahead of the competition.
                            From **branding** to **development**, we craft experiences that make an impact.
                        </p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/services">
                                <Button
                                    variant="outline"
                                    className="px-6 py-3 text-lg font-medium border-blue-500 text-black hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 relative group"
                                >
                                    <span className="relative z-10">View All Services</span>
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-lg transition-all duration-300 -z-10" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right - Services Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-10"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl opacity-30 transition-all duration-500 group-hover:opacity-70" />

                                {/* Service Card */}
                                <div className="relative bg-gray-900/90 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                                    <div className="text-blue-400 mb-4 group-hover:text-white transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-white text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/10 group-hover:from-blue-500/20 group-hover:to-transparent transition-all duration-300 rounded-xl" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background Light Effects */}
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] -z-10 animate-pulse" />

            {/* Soft Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl opacity-20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
