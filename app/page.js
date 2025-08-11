'use client'
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import AboutUs from "@/Components/AboutUs";
import OurServices from "@/Components/OurServices";
import Portfolio from "@/Components/Portfolio";
import Footer from "@/Components/Footer";
import Contact from '@/Components/Contact';



export default function Home() {
  const fullpageOptions = {
    anchors: ["", "AboutUs", "OurServices", "Portfolio", "ContactUs"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  return (
    <>
      <Navbar />
      <div>
        <ReactFullpage
          {...fullpageOptions}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Banner />
                <AboutUs />
                <OurServices />
                <Portfolio />
                <Contact />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>

    </>
  );
}
