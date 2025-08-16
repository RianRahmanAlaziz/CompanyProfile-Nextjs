"use client";
import { motion } from "framer-motion";

function OurServices() {
    return (
        <div className="section">
            <section className="bg-[#0f172a] text-white w-full min-h-screen flex items-center justify-center" data-anchor="OurServices">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            // kasih transisi default khusus untuk scale
                            scale: { type: "tween", duration: 0.1 }
                        }}
                    >
                        <h3 className="text-xl text-cyan-400 font-semibold mb-2">Our Service</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Company Services</h2>
                        <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-300 mb-12">
                            We offer practical and user-focused digital solutions to support your growth. From websites to custom
                            web applications and SEO, our services are designed to help you move forward — cleverly and confidently.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
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
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg ">
                            <div className="text-4xl mb-4">🔍</div>
                            <h4 className="text-xl font-semibold mb-2">SEO Optimization</h4>
                            <p className="text-sm text-gray-300">
                                Boost your website’s visibility on search engines with the right and sustainable SEO strategies.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                delay: 0.7,
                                // kasih transisi default khusus untuk scale
                                scale: { type: "tween", duration: 0.1 }
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg ">
                            <div className="text-4xl mb-4">🌐</div>
                            <h4 className="text-xl font-semibold mb-2">Website Development</h4>
                            <p className="text-sm text-gray-300">
                                Professional, responsive, and easy-to-use websites tailored to your business needs and identity.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                delay: 0.9,
                                // kasih transisi default khusus untuk scale
                                scale: { type: "tween", duration: 0.1 }
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.1 } // transisi hover cepat
                            }}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg ">
                            <div className="text-4xl mb-4">💻</div>
                            <h4 className="text-xl font-semibold mb-2">Application Development</h4>
                            <p className="text-sm text-gray-300">
                                Functional and efficient web-based applications – ideal for internal systems, service platforms, or
                                custom solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default OurServices