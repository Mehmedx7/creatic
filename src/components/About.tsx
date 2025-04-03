"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import robotImg from '@/../public/img/about.svg';

export default function AboutSection() {
    return (
        <section className="relative min-h-screen bg-[#0B0F1A] overflow-hidden py-24 px-8 md:px-16 lg:px-24">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/60 z-0" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left - Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
                    >
                        {/* Soft Light Glow */}
                        <div className="absolute -inset-4 bg-blue-500/30 blur-[100px] -z-10" />
                        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500/30 via-cyan-400/30 to-transparent blur-3xl -z-10" />

                        <div className="relative w-full h-full">
                            <Image
                                src={robotImg}
                                alt="AI Robot Assistant"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right - Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-2xl text-white"
                    >
                        {/* Section Label */}
                        <span className="text-blue-400 text-sm tracking-widest uppercase">
                            About Us
                        </span>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            We Bring <span className="text-blue-400">Creative</span> Ideas <br />
                            To Life.
                        </h2>

                        {/* Subtext */}
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We don’t just design, we create **experiences** that leave a lasting impact.
                        </p>

                        {/* Additional Content */}
                        <div className="space-y-5 text-gray-300">
                            <p>
                                Our team thrives on innovation, pushing the boundaries of design and technology to create immersive digital solutions.
                            </p>
                            <p>
                                Whether it’s AI-powered projects or cutting-edge design systems, we turn concepts into reality with precision and creativity.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    className="px-6 py-3 text-lg font-medium border-blue-500 text-black hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 relative group"
                                >
                                    <span className="relative z-10">Read More</span>
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-lg transition-all duration-300 -z-10" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Glows for Aesthetic */}
            <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[450px] lg:w-[550px] h-[350px] sm:h-[450px] lg:h-[550px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[450px] lg:w-[550px] h-[350px] sm:h-[450px] lg:h-[550px] bg-cyan-400/10 blur-[150px] -z-10 animate-pulse" />

            {/* Soft Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl opacity-20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
