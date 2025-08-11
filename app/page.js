'use client'
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import AboutUs from "@/Components/AboutUs";
import OurServices from "@/Components/OurServices";
import Portfolio from "@/Components/Portfolio";
import Footer from "@/Components/Footer";



export default function Home() {
  const fullpageOptions = {
    anchors: ["Banner", "AboutUs", "OurServices", "Portfolio"],
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
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}
