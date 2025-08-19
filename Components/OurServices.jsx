"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurServices() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,   // mobile tampil 1
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // < md jadi slider
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1024, // >= md tampil grid biasa
                settings: "unslick" // disable slider jadi grid
            }
        ]
    };

    const cards = [
        {
            icon: "🔍",
            title: "SEO Optimization",
            desc: "Boost your website’s visibility on search engines with the right and sustainable SEO strategies."
        },
        {
            icon: "🌐",
            title: "Website Development",
            desc: "Professional, responsive, and easy-to-use websites tailored to your business needs and identity."
        },
        {
            icon: "💻",
            title: "Application Development",
            desc: "Functional and efficient web-based applications – ideal for internal systems, service platforms, or custom solutions."
        }
    ];

    return (
        <div className="section" data-anchor="OurServices">
            <section className="w-full min-h-screen bg-[#0f172a] text-white  flex items-center justify-center" >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        className=""
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.4,
                            // kasih transisi default khusus untuk scale
                            scale: { type: "tween", duration: 0.1 }
                        }}
                    >
                        <h3 className="text-xl text-cyan-400 font-semibold mb-2">Our Service</h3>
                        <h2 className="text-xl md:text-4xl font-bold mb-4">Our Company Services</h2>
                        <p className="text-sm md:text-base w-full mx-auto max-w-2xl text-gray-300 mb-12 px-40 md:px-0">
                            We've had the opportunity to collaborate on meaningful digital projects across different needs and ideas.
                            Here's a glimpse of what we've created.
                        </p>
                    </motion.div>

                    {/* Cards - Grid di Desktop, Slider di Mobile */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    delay: i * 0.6,
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
                                className="bg-slate-800 p-6 rounded-xl shadow-lg"
                            >
                                <div className="text-3xl md:text-4xl mb-4">{card.icon}</div>
                                <h4 className="text-base md:text-xl font-semibold mb-2">{card.title}</h4>
                                <p className="text-sm text-gray-300">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Slider di Mobile */}
                    <div className="md:hidden ">  {/* kasih padding kiri kanan */}
                        <Slider {...settings}>
                            {cards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        delay: i * 0.4,
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
                                    className="bg-slate-800 p-6 rounded-xl shadow-lg max-w-sm mx-auto h-[200px]" // w-full biar lebar penuh
                                >
                                    <div className="text-3xl md:text-4xl mb-4">{card.icon}</div>
                                    <h4 className="text-base md:text-xl font-semibold mb-2">{card.title}</h4>
                                    <p className="text-sm text-gray-300">{card.desc}</p>
                                </motion.div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default OurServices