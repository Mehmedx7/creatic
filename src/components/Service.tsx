"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Monitor, PenTool, Code, FileEdit } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Monitor className="w-12 h-12 text-blue-500" />,
            title: "VIDEO MARKETING",
            description: "Lorem Ipsum Neque do porro quisquam est qui dolorem ipsum sit amet"
        },
        {
            icon: <PenTool className="w-12 h-12 text-blue-500" />,
            title: "GRAPHIC DESIGN",
            description: "Lorem Ipsum Neque do porro quisquam est qui dolorem ipsum sit amet"
        },
        {
            icon: <Code className="w-12 h-12 text-blue-500" />,
            title: "WEB DESIGN",
            description: "Lorem Ipsum Neque do porro quisquam est qui dolorem ipsum sit amet"
        },
        {
            icon: <FileEdit className="w-12 h-12 text-blue-500" />,
            title: "WEBSITE DESIGN",
            description: "Lorem Ipsum Neque do porro quisquam est qui dolorem ipsum sit amet"
        }
    ];

    return (
        <section className="relative bg-[#0B0F1A] overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-blue-400 text-sm tracking-widest uppercase">
                            OUR SERVICES
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Experience The Power<br />
                            Of <span className="text-blue-400">Innovation.</span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit
                            amet, consectetur adipisci velit.
                        </p>

                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                        >
                            VIEW ALL
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl opacity-30 transition-all duration-500 group-hover:opacity-70" />
                                <div className="relative bg-gray-900/90 p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="text-blue-400 mb-4 group-hover:text-white transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-white text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {service.description}
                                    </p>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/10 group-hover:from-blue-500/20 group-hover:to-transparent transition-all duration-300 rounded-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[150px] -z-10 animate-pulse" />
        </section>
    );
}
