"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
    return (
        <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                            25 YEARS OF <span className="text-blue-400">EXPERIENCE</span>
                            <br />
                            AS A CREATIVE AGENCY
                        </h2>
                        <p className="text-gray-400 text-lg max-w-lg">
                            We have been delivering innovative solutions with a passion for creating meaningful, high-impact digital experiences. Our expertise spans across design, technology, and strategy to help brands grow.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent text-white border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 mt-6"
                            >
                                DISCOVER MORE
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex justify-center items-center">
                            <div className="absolute w-72 h-72 border-4 border-blue-500 rounded-full animate-spin-smooth opacity-50 ring-layer"></div>

                            <div className="absolute w-80 h-80 border-4 border-cyan-400 rounded-full animate-spin-smooth opacity-30 ring-layer"></div>

                            <div className="absolute w-96 h-96 border-4 border-purple-400 rounded-full animate-spin-3d-smooth opacity-50 ring-layer"></div>

                            <div className="absolute w-32 h-32 bg-blue-400 rounded-full animate-pulse-smooth pulse-core"></div>

                            <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-500/30 to-transparent opacity-30 blur-[80px] animate-glow-trail-smooth"></div>

                            <div className="absolute w-24 h-24 bg-white rounded-full animate-pulse-smooth inner-core"></div>

                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-transparent opacity-50 blur-3xl z-0"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse-smooth" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 blur-[150px] -z-10 animate-pulse-smooth" />

            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl opacity-20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
