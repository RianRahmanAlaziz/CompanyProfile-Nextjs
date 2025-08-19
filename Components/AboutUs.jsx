"use client";
import React from 'react'
import Image from "next/image";
import banner from "@/public/image/bg2.jpg";
import { motion } from "framer-motion";
import HorizontalLine from './HorizontalLine';

function AboutUs() {
    return (
        <div className="section" data-anchor="AboutUs">
            <section className="w-full bg-[#0f172a] px-8 lg:px-[100px] min-h-screen text-white flex flex-col justify-center">
                {/* <!-- About Us Top --> */}
                <div className="flex flex-col lg:flex-row items-center gap-10 w-full ">
                    {/* <!-- Left Text --> */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1
                        }}
                        className="flex-1 mt-16 md:mt-14">
                        <h3 className="text-primary text-xl font-semibold mb-2">About Us</h3>
                        <h1 className="text-base md:text-4xl font-bold mb-4">We Always Serve Better.</h1>
                        <p className="text-sm leading-relaxed text-gray-300">
                            Ahwan Solution is a service provider specializing in website and web application development,
                            focused on delivering solutions that are simple, functional, and tailored to your needs.
                            We believe that technology should be accessible to everyone. That’s why we take a more flexible
                            and open approach – designing digital solutions that are straightforward, easy to understand,
                            and ready to use for your specific goals.
                        </p>
                    </motion.div>
                    {/* <!-- Right Image --> */}
                    <div className="flex-1 hidden">
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                delay: 0.4,
                                // kasih transisi default khusus untuk scale
                                scale: { type: "tween", duration: 0.1 }
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.1 } // transisi tap lebih singkat
                            }}

                            className="rounded-xl overflow-hidden shadow-lg w-64 h-64 mx-auto md:mt-16 ">
                            <Image
                                src={banner}
                                className="w-full h-full object-cover"
                                alt="About Us Image"
                            />
                        </motion.div>
                    </div>
                </div>
                {/* <!-- Garis Pemisah Horizontal --> */}
                <HorizontalLine />
                {/* <!-- Visi Misi Bottom --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* <!-- Visi --> */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.7
                        }}
                        className="relative max-w-md w-full p-4 rounded-lg">
                        {/* SVG border */}
                        <motion.svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 400 200"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0099FF" />
                                    <stop offset="100%" stopColor="#0099FF" />
                                </linearGradient>

                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <motion.rect
                                x="2"
                                y="2"
                                width="396"
                                height="196"
                                rx="12"
                                ry="12"
                                fill="none"
                                filter="url(#glow)"
                                stroke="url(#gradientStroke)"
                                strokeWidth="1"
                                strokeDasharray="1200 1200"
                                strokeLinecap="round"
                                animate={{ strokeDashoffset: [1200, -1200] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </motion.svg>

                        {/* Konten */}
                        <h3 className="text-base md:text-xl font-bold mb-3">Our Vision</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Becoming a digital partner in helping deliver technology solutions that
                            are simple, relevant, and very accessible to everyone.
                        </p>
                    </motion.div>

                    {/* <!-- Misi --> */}
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.9
                        }}
                        className="relative p-4 rounded-lg max-w-lg">
                        {/* SVG border */}
                        <motion.svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 300"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                {/* Gradient */}
                                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0099FF" />
                                    <stop offset="100%" stopColor="#0099FF" />
                                </linearGradient>

                                {/* Glow */}
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <motion.path
                                d="M 498,286 A 12 12 0 0 1 486,298 H 14 A 12 12 0 0 1 2,286 V 14 A 12 12 0 0 1 14,2 H 486 A 12 12 0 0 1 498,14 V 286 Z"
                                fill="none"
                                stroke="url(#gradientStroke)"
                                strokeWidth="1"
                                strokeDasharray="1600 1600"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                animate={{ strokeDashoffset: [1600, -1600] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                        </motion.svg>

                        {/* Konten */}
                        <h3 className="ext-base md:text-xl font-bold mb-3">Our Mission</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
                            <li>
                                Design and develop websites and web applications that are simple,
                                functional, and tailored to each client's needs.
                            </li>
                            <li>
                                Provide communication, transparent, and open services for a
                                comfortable collaboration process.
                            </li>
                            <li>
                                Create digital experiences that are easy to understand and ready to
                                use without complicated processes.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs