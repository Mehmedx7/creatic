"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-blue-500/10 blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-cyan-400/10 blur-[120px] -z-10 animate-pulse" />

            {/* Section Content */}
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-white text-center sm:text-left">
                            GET IN TOUCH
                        </h2>
                        <p className="text-gray-400 text-center sm:text-left">
                            We&apos;re here to help. Reach out to us with any questions or feedback!
                        </p>

                        <div className="space-y-6">
                            <motion.div
                                className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <MapPin className="text-blue-400" />
                                <span>123 Main Street, City, Country</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Phone className="text-blue-400" />
                                <span>+123 456 7890</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Mail className="text-blue-400" />
                                <span>info@example.com</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 relative z-10"
                    >
                        <div className="space-y-4">
                            <Input
                                placeholder="Your Name"
                                className="bg-gray-800/50 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 z-20"
                            />
                            <Input
                                placeholder="Your Email"
                                className="bg-gray-800/50 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 z-20"
                            />
                            <Textarea
                                placeholder="Your Message"
                                className="bg-gray-800/50 border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 transition-all duration-300 z-20"
                            />
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 mt-4 transition-all duration-300 transform hover:scale-105 z-20">
                                Send Message
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl opacity-20 z-0"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
