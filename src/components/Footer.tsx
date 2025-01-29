"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export function Footer() {
    return (
        <footer className="bg-[#0B0F1A] py-20 border-t border-gray-800 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/30 blur-[150px] animate-pulse -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/20 blur-[150px] animate-pulse -z-10" />

            <div className="container mx-auto px-6 text-white relative z-10">
                <div className="text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold text-blue-400"
                    >
                        CREATIC
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-xl mx-auto"
                    >
                        Building innovative solutions with precision, creativity, and a passion for results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-8 mt-6"
                    >
                        <a
                            href="https://facebook.com"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/mehmedx7"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-400 hover:text-pink-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mehmedx7/"
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-12 text-gray-400">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col items-center sm:items-start space-y-4 mb-8 sm:mb-0"
                    >
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <MdLocationOn className="text-blue-400" />
                                <span>Vasai, India</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdPhone className="text-blue-400" />
                                <span>+917057045789</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdEmail className="text-blue-400" />
                                <span>mehmedkhan16@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row sm:space-x-12 items-center sm:items-start space-y-4 sm:space-y-0"
                    >
                        <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-col sm:items-start">
                            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-all">
                                About Us
                            </a>
                            <a href="#services" className="text-gray-400 hover:text-blue-400 transition-all">
                                Services
                            </a>
                            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-all">
                                Projects
                            </a>
                            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-all">
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center space-y-4">
                    <h4 className="text-xl font-semibold text-white">Stay Connected</h4>
                    <p className="text-lg text-gray-400">
                        Sign up for our newsletter to stay updated on our latest projects and news.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Input
                            placeholder="Enter your email"
                            className="bg-gray-800/50 text-white border-gray-700"
                        />
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-[#0B0F1A] py-6 mt-12 text-center text-gray-400">
                <p className="text-sm">
                    &copy; 2025 Creatic. All rights reserved. Developed by{" "}
                    <a href="https://mohammedkhan.netlify.app/" className="text-blue-400 hover:text-blue-500">
                        <IoIosArrowForward className="inline-block w-4 h-4 mb-1" />
                    </a>
                </p>
            </div>
        </footer>
    );
}
