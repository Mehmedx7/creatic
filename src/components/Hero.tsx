"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
    const [contentTransform, setContentTransform] = useState({
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setContentTransform(prev => ({
                ...prev,
                rotation: prev.rotation + 1,
            }));
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/70 z-10" />

            <div className="relative z-20 container mx-auto px-6 h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-8 max-w-lg"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm tracking-[0.2em] text-blue-400 uppercase relative"
                        >
                            Welcome to Creatic
                            <div className="absolute -inset-4 bg-blue-500/10 blur-md -z-10" />
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                WE ARE{" "}
                                <span className="text-blue-400 relative inline-block">
                                    CREATIVE
                                    <div className="absolute -inset-2 bg-blue-500/20 blur-xl -z-10" />
                                    <div className="absolute -inset-1 bg-blue-400/10 blur-lg -z-10" />
                                </span>
                                <br />
                                DESIGN AGENCY
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Transforming ideas into stunning digital experiences. Let’s build something unforgettable.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent text-white border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 relative group"
                            >
                                <Link href={'https://mohammedkhan.netlify.app/'} target="_blank">
                                    <span className="relative z-10">GET IN TOUCH</span>
                                </Link>
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-lg transition-all duration-300 -z-10" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative hidden lg:block h-[600px] w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="absolute inset-0 flex justify-center items-center">
                            <motion.div
                                className="w-[300px] h-[300px] border-[10px] border-blue-400 rounded-xl transform perspective-1000"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: `rotateX(${contentTransform.rotation}deg) rotateY(${contentTransform.rotation}deg)`
                                }}
                            >
                                <div className="absolute inset-0 w-full h-full border-[2px] border-gray-600">
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center w-full h-full bg-blue-500/40"
                                        style={{
                                            transform: `rotateY(${contentTransform.rotation}deg)`,
                                        }}
                                        animate={{
                                            rotateX: [0, 90, 0],
                                            rotateY: [0, 90, 0],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
