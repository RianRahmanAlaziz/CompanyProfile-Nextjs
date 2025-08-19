"use client";
import { motion } from "framer-motion";

import Footer from "./Footer";

function Contact() {
    return (
        <div className="section min-h-screen flex flex-col bg-[#0f172a] text-white" data-anchor="ContactUs">

            {/* Bagian Konten (flex-1 supaya sisa layar diisi) */}
            <section className="flex-1 px-6 md:px-20 flex items-center py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
                    {/* Bagian Kiri - Info Kontak */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.01,
                            // kasih transisi default khusus untuk scale
                            scale: { type: "tween", duration: 0.1 }
                        }}
                    >
                        <h3 className="text-xl md:text-4xl font-bold mb-4 text-cyan-400 ">Contact US</h3>
                        <p className="text-gray-400 mb-6 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta modi, quidem fugiat debitis voluptatum nisi! Ducimus officiis eos suscipit illo, labore ut modi sed? Nulla laudantium
                        </p>
                        <div className="mb-6">
                            <h4 className="text-base font-semibold mb-2">Address</h4>
                            <p className="text-gray-400 text-sm md:text-base">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                            </p>
                        </div>
                        <div className="mb-4 flex items-center space-x-3 text-base">
                            <span>+0812-3456-78910</span>
                        </div>
                        <div className="flex items-center space-x-3 text-base">
                            <span>bvs@gmail.com</span>
                        </div>
                    </motion.div>

                    {/* Bagian Kanan - Form Kontak */}
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.01,
                            // kasih transisi default khusus untuk scale
                            scale: { type: "tween", duration: 0.1 }
                        }}
                        className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold text-white"
                            >
                                Send Letter
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>

            {/* Footer di bawah */}
            <Footer />
        </div>
    )
}

export default Contact;
