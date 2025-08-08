"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { src: "/image/bg.jpg", alt: "Project 1" },
    { src: "/image/bg2.jpg", alt: "Project 2" },
    { src: "/image/bg.jpg", alt: "Project 3" },
    { src: "/image/bg2.jpg", alt: "Project 4" },
];

function Portfolio() {
    const settings = {
        dots: false, // atau true kalau mau titik di bawah
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, // tampilkan tombol panah kiri-kanan
        responsive: [
            {
                breakpoint: 768, // untuk tablet dan HP
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="min-h-screen bg-[#0f172a] text-white px-4 md:px-10 py-16">
            <div className="text-center mb-12">
                <h4 className="text-cyan-400 text-lg font-semibold mb-2">Portofolio</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What We've Done</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We've had the opportunity to collaborate on meaningful digital projects across different needs and ideas.
                    Here's a glimpse of what we've created.
                </p>
            </div>

            <Slider {...settings}>
                {images.map((img, i) => (
                    <div key={i} className="px-2">
                        <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300">
                            <img src={img.src} alt={img.alt} className="w-full h-[200px] object-cover" />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Portfolio