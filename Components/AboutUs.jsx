"use client";
import React from 'react'
import Image from "next/image";
import banner from "@/public/image/bg2.jpg";
function AboutUs() {
    return (
        <div className="section">
            <section className="w-full bg-[#0f172a] px-8 lg:px-[100px] min-h-screen text-white flex flex-col justify-center">
                {/* <!-- About Us Top --> */}
                <div className="flex flex-col lg:flex-row items-center gap-10 w-full ">
                    {/* <!-- Left Text --> */}
                    <div className="flex-1">
                        <h3 className="text-primary text-xl font-semibold mb-2">About Us</h3>
                        <h1 className="text-4xl font-bold mb-4">We Always Serve Better.</h1>
                        <p className="text-base leading-relaxed text-gray-300">
                            Ahwan Solution is a service provider specializing in website and web application development,
                            focused on delivering solutions that are simple, functional, and tailored to your needs.
                            We believe that technology should be accessible to everyone. That’s why we take a more flexible
                            and open approach – designing digital solutions that are straightforward, easy to understand,
                            and ready to use for your specific goals.
                        </p>
                    </div>
                    {/* <!-- Right Image --> */}
                    <div className="flex-1">
                        <div className="rounded-xl overflow-hidden shadow-lg w-64 h-64 mx-auto mt-14">
                            <Image
                                src={banner}
                                className="w-full h-full object-cover"
                                alt="About Us Image"
                            />
                        </div>
                    </div>
                </div>
                {/* <!-- Garis Pemisah Horizontal --> */}
                <div className="w-full border-t border-gray-600 lg:my-[50px]"></div>
                {/* <!-- Visi Misi Bottom --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {/* <!-- Visi --> */}
                    <div className="border border-gray-600 p-4 rounded-lg max-w-md w-full ">
                        <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                        <p className="text-base text-gray-300 leading-relaxed">
                            Becoming a digital partner in helping deliver technology solutions that are simple, relevant, and
                            very
                            accessible to everyone.
                        </p>
                    </div>

                    {/* <!-- Misi --> */}
                    <div className="border border-gray-600 p-6 rounded-lg ">
                        <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                        <ul className="list-disc list-inside space-y-2 text-base text-gray-300">
                            <li>Design and develop websites and web applications that are simple, functional, and tailored to
                                each
                                client's needs.</li>
                            <li>Provide communication, transparent, and open services for a comfortable collaboration process.
                            </li>
                            <li>Create digital experiences that are easy to understand and ready to use without complicated
                                processes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs