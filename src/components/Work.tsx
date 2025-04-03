"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import p1 from '@/../public/img/p1.png';
import p2 from '@/../public/img/p2.png';
import p3 from '@/../public/img/p3.png';

export function ProjectsSection() {
    const projects = [
        { image: p1, title: "Project 1" },
        { image: p2, title: "Project 2" },
        { image: p3, title: "Project 3" }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="relative py-24 bg-[#0B0F1A] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#111827] to-[#0B0F1A] opacity-90" />

            <div className="container mx-auto px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        ENJOY OUR <span className="text-blue-400">LATEST</span> PROJECTS
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-xl transition-all duration-500 ease-in-out shadow-lg transform`}
                            // @ts-expect-error hs hs s
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Clickable Image with Zoom-Out Effect */}
                            <motion.div
                                className="relative w-full h-72 md:h-96 cursor-pointer"
                                whileHover={{
                                    scale: 0.9, // Zoom out effect
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500"
                                />

                                {/* Glow Aura Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                            </motion.div>

                            {/* Clickable Project Title */}
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <h3 className="text-2xl font-semibold tracking-wide text-white drop-shadow-lg">
                                    {project.title}
                                </h3>
                                <p className="text-blue-400 text-sm mt-2 opacity-80">
                                    Click to expand →
                                </p>
                            </motion.div>

                            {/* Neon Hover Glow */}
                            <div className="absolute inset-0 rounded-xl border border-blue-500/20 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-[3px]" />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-14 text-center"
                >
                    <Button
                        variant="outline"
                        className="bg-transparent text-white border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 px-6 py-3 text-lg font-semibold"
                    >
                        VIEW ALL PROJECTS
                    </Button>
                </motion.div>
            </div>

            {/* Floating Glow Effects */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/20 blur-[200px] opacity-30 -z-10 animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#60A5FA]/20 blur-[200px] opacity-30 -z-10 animate-pulse" />

            {/* Modal for Expanded Project */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl p-6 bg-gray-900 rounded-lg shadow-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div
                                className="relative w-full h-[500px] rounded-lg overflow-hidden"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image
                                    // @ts-expect-error hs hs hs
                                    src={selectedProject.image}
                                    // @ts-expect-error hs hs s
                                    alt={selectedProject.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                            {/* @ts-expect-error hs hs s */}
                            <h2 className="text-3xl text-white font-bold mt-4">{selectedProject.title}</h2>
                            <p className="text-gray-400 mt-2">More details about the project...</p>
                            <Button
                                onClick={() => setSelectedProject(null)}
                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all"
                            >
                                Close
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
