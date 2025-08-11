"use client";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import { NextArrow, PrevArrow } from '@/components/Arrow';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import banner1 from "@/public/image/bg.jpg";
import banner2 from "@/public/image/bg2.jpg";
import banner3 from "@/public/image/bg.jpg";

const banners = [banner1, banner2, banner3];

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


    return (
        <div className="section overflow-x-hidden">
            <div className="relative w-full h-screen overflow-hidden">
                <Slider {...settings}>
                    {banners.map((img, i) => (
                        <div key={i} className="relative w-full h-screen">
                            <Image
                                src={img}
                                alt={`Slide ${i + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner