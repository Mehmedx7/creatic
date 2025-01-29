"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import robotImg from '@/../public/img/about.svg';

export default function AboutSection() {
    return (
        <section className="relative min-h-screen bg-[#0B0F1A] overflow-hidden py-20 px-6 sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/60 z-0" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
                    >
                        <div className="absolute -inset-4 bg-blue-500/30 blur-[80px] -z-10" />
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

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6 max-w-lg text-white"
                    >
                        <span className="text-blue-400 text-sm tracking-widest uppercase">
                            ABOUT US
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            We Bring <span className="text-blue-400">Creative</span> Ideas<br />
                            To Life.
                        </h2>

                        <p className="text-gray-300 text-lg">
                            We Love Creating Experiences, Not Just Designs.
                        </p>

                        <div className="space-y-4 text-gray-200">
                            <p>
                                Our team thrives on innovation, creating unique solutions that redefine digital experiences.
                            </p>
                            <p>
                                From AI-driven projects to groundbreaking design systems, we explore all facets of creativity to deliver.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent text-white border-blue-500 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 mt-4"
                            >
                                READ MORE
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-cyan-400/10 blur-[150px] -z-10 animate-pulse" />

            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl opacity-20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
