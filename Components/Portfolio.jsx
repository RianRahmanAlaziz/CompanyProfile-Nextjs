"use client";
import Slider from "react-slick";
import useWindowSize from "@/hooks/useWindowSize"; // pastikan path sesuai
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '@/Components/Arrow';
import { motion } from "framer-motion";


const images = [
    { src: "/image/bg.jpg", alt: "Project 1" },
    { src: "/image/bg2.jpg", alt: "Project 2" },
    { src: "/image/bg.jpg", alt: "Project 3" },
    { src: "/image/bg2.jpg", alt: "Project 4" },
    { src: "/image/bg2.jpg", alt: "Project 45" },
];

function Portfolio() {
    const { width } = useWindowSize();

    let slidesToShow = 4;
    if (width <= 480) slidesToShow = 1;
    else if (width <= 768) slidesToShow = 2;
    else if (width <= 1024) slidesToShow = 3;

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="section" data-anchor="Portfolio">
            <section className="h-screen bg-[#0f172a] text-white flex flex-col justify-center">
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        delay: 0.01,
                        // kasih transisi default khusus untuk scale
                        scale: { type: "tween", duration: 0.1 }
                    }}
                    className="text-center mb-12">
                    <h4 className="text-cyan-400 text-lg font-semibold mb-2">Portofolio</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What We've Done</h2>
                    <p className="text-gray-400 w-full mx-auto max-w-2xl">
                        We've had the opportunity to collaborate on meaningful digital projects across different needs and ideas.
                        Here's a glimpse of what we've created.
                    </p>
                </motion.div>

                <Slider {...settings}>
                    {images.map((img, i) => (
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.4 // stagger biar muncul bergantian
                            }}
                            key={i} className="px-2">
                            <div className="rounded-xl overflow-hidden shadow-md ">
                                <img src={img.src} alt={img.alt} className="w-full h-[200px] object-cover" />
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </section>
        </div>



    )
}

export default Portfolio