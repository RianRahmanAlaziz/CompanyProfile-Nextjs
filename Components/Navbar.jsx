"use client";
import Link from 'next/link'
import React from 'react'

function Navbar() {
    // Fungsi untuk mengatur navigasi antar bagian menggunakan fullpage.js
    const handleMoveToSection = (index) => {
        if (window.fullpage_api) {
            window.fullpage_api.moveTo(index);
        }
    };
    // Fungsi untuk menentukan apakah bagian tertentu aktif
    const containIsActive = (index) => {
        if (window.fullpage_api) {
            const activeSection = window.fullpage_api.getActiveSection();
            console.log("Active Section Index:", activeSection.index); // Debugging untuk memeriksa index
            if (activeSection.index === index) {
                return "li active"; // Mengembalikan class 'active' jika bagian tersebut aktif
            }
        }
        return "li"; // Default class jika tidak aktif
    };
    return (
        <div
            className="fixed top-0 left-0 w-full z-50 bg-base-100 bg-opacity-70 backdrop-blur-md lg:px-[100px] navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>

                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <button
                                onClick={() => handleMoveToSection(2)}
                            >
                                About Us
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleMoveToSection(3)}
                            >
                                Our Service
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleMoveToSection(4)}
                            >
                                Product
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleMoveToSection(5)}
                            >
                                Contact Us
                            </button>

                        </li>
                    </ul>
                </div>

                <Link
                    href="/projects"
                    className="btn btn-ghost  text-xl hover:bg-transparent">
                    BVS
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" id="sidebar">
                    <li className="active">
                        <button
                            onClick={() => handleMoveToSection(2)}
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(3)}
                        >
                            Our Service
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(4)}
                        >
                            Product
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(5)}
                        >
                            Contact Us
                        </button>

                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link
                    href="/projects"
                    className="btn btn-ghost">
                    ENG
                </Link>
            </div>
        </div>
    )
}

export default Navbar