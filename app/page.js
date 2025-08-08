import Image from "next/image";
import banner from "@/public/image/bg.jpg";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import AboutUs from "@/Components/AboutUs";
import OurServices from "@/Components/OurServices";
import Portfolio from "@/Components/Portfolio";
import Footer from "@/Components/Footer";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <Footer />
    </>
  );
}
