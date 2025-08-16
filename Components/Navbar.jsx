"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    // Navigasi antar section (fullpage.js)
    const handleMoveToSection = (index) => {
        if (window.fullpage_api) {
            window.fullpage_api.moveTo(index);
            setIsOpen(false);
        }
    };

    // Tambahkan highlight menu aktif
    const containIsActive = (index) =>
        activeSection === index ? "bg-primary text-white rounded-lg" : "";

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md lg:px-[100px] navbar">
            {/* START (logo + menu toggle mobile) */}
            <div className="navbar-start">
                <div className="lg:hidden">
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                </div>
                <button
                    onClick={() => handleMoveToSection(1)}
                    className="btn btn-ghost text-xl hover:bg-transparent"
                >
                    BVS
                </button>
            </div>

            {/* Sidebar Mobile */}
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="lg:hidden absolute top-0 left-0 w-[250px] h-full "
            >
                <motion.div
                    className="absolute top-0 left-0 w-[250px] h-full "
                    variants={sidebarVariants}
                />
                <motion.ul
                    className="relative mt-20 ml-6 space-y-6 bg-gray-800 rounded-lg"
                    variants={navVariants}
                >
                    <motion.li
                        className=" px-4 py-2 rounded-lg hover:bg-gray-700"
                        variants={itemVariants}>
                        <button onClick={() => handleMoveToSection(2)}>About Us</button>
                    </motion.li>
                    <motion.li
                        className=" px-4 py-2 rounded-lg hover:bg-gray-700"
                        variants={itemVariants}>
                        <button onClick={() => handleMoveToSection(3)}>Our Service</button>
                    </motion.li>
                    <motion.li
                        className=" px-4 py-2 rounded-lg hover:bg-gray-700"
                        variants={itemVariants}>
                        <button onClick={() => handleMoveToSection(4)}>Product</button>
                    </motion.li>
                    <motion.li
                        className=" px-4 py-2 rounded-lg hover:bg-gray-700"
                        variants={itemVariants}>
                        <button onClick={() => handleMoveToSection(5)}>Contact Us</button>
                    </motion.li>

                </motion.ul>
            </motion.nav>

            {/* Navbar Desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" id="sidebar">
                    <li>
                        <button
                            onClick={() => handleMoveToSection(2)}
                            className={containIsActive(2)}
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(3)}
                            className={containIsActive(3)}
                        >
                            Our Service
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(4)}
                            className={containIsActive(4)}
                        >
                            Product
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMoveToSection(5)}
                            className={containIsActive(5)}
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>

            {/* Right Button */}
            <div className="navbar-end">
                <Link href="/projects" className="btn btn-ghost hover:bg-transparent">
                    ENG
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

/* ==================== Animations ==================== */
const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: { type: "spring", stiffness: 20, restDelta: 2 },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
    },
};

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        backgroundColor: "rgba(31,41,55,1)"
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        backgroundColor: "rgba(0,0,0,0)",
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: { y: { stiffness: 1000 } },
    },
};

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle, isOpen }) => (
    <button
        onClick={toggle}
        className="relative w-10 h-10 flex items-center justify-center z-50"
    >
        <motion.svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </motion.svg>
    </button>
);

/* ==================== Utils ==================== */
const useDimensions = (ref) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            setDimensions({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            });
        }
    }, [ref]);

    return dimensions;
};
