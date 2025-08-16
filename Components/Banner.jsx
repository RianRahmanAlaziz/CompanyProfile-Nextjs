"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import { NextArrow, PrevArrow } from '@/Components/Arrow';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import banner1 from "@/public/image/bg.jpg";
import banner2 from "@/public/image/bg2.jpg";
import banner3 from "@/public/image/bg.jpg";
import mobile1 from "@/public/image/mobile.jpg";
import mobile2 from "@/public/image/mobile1.jpg";
import mobile3 from "@/public/image/mobile.jpg";

const banners = [banner1, banner2, banner3];
const mobiles = [mobile1, mobile2, mobile3];

function Banner() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,             // <-- wajib
        autoplaySpeed: 4000,        // <-- jeda 4 detik
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };

    useEffect(() => {
        // Hitung tinggi layar sesungguhnya
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setVH();
        window.addEventListener("resize", setVH);
        return () => window.removeEventListener("resize", setVH);
    }, []);

    return (
        <div className="section" data-anchor="Home">
            <div className=" relative w-full h-[100dvh] overflow-hidden">
                {/* Slider Desktop */}
                <div className="hidden md:block h-full">
                    <Slider {...settings}>
                        {banners.map((img, i) => (
                            <div key={i} className="relative w-full h-[100dvh]">
                                <Image src={img} alt={`Slide ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Slider Mobile */}
                <div className="block md:hidden h-full">
                    <Slider {...settings}>
                        {mobiles.map((img, i) => (
                            <div key={i} className="relative w-full h-[calc(var(--vh)*100)]">
                                <Image src={img} alt={`Slide ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Banner