"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import p1 from '@/../public/img/p1.png';
import p2 from '@/../public/img/p2.png';
import p3 from '@/../public/img/p3.png';

export function ProjectsSection() {
    const projects = [
        { image: p1, title: "Project 1" },
        { image: p2, title: "Project 2" },
        { image: p3, title: "Project 3" }
    ];

    return (
        <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        ENJOY OUR <span className="text-blue-400">LATEST</span> PROJECTS
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden transition-all duration-500 ease-in-out rounded-lg transform ${index === 1 ? 'md:scale-110' : 'md:scale-95'
                                }`}
                        >
                            <div className="relative w-full h-64 md:h-80">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-10 text-center"
                >
                    <Button
                        variant="outline"
                        className="bg-transparent text-white border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                    >
                        VIEW ALL PROJECTS
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
