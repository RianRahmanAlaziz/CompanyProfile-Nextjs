"use client";
import React from 'react'
import { motion } from "framer-motion";

function HorizontalLine() {
    return (
        <svg
            className="w-full lg:my-[50px]"
            height="1"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >


            <motion.line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="#0099FF "
                strokeWidth="2"
                strokeDasharray="110 110"
                strokeLinecap="round"
                style={{
                    filter:
                        "drop-shadow(0 0 4px #0099FF ) drop-shadow(0 0 10px #0099FF ) drop-shadow(0 0 20px #0099FF )",
                }}
                animate={{ strokeDashoffset: [110, -110] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </svg>

    )
}

export default HorizontalLine