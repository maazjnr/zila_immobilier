import React from "react";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import Testimonial from "../components/Testimonial/Testimonial";
import Faqs from "../components/Faqs/Faqs";


function About_Us() {
  return (
    <main className="w-full">
      <section className="about-container">
        <div
          style={{ zIndex: 3, textAlign: "center", width: "100%", padding: 20 }}
          className=""
        >
          <h1 className="about-title">More About us</h1>
          <h1 className="text-xs text-center text-sm text-[#fff]">
            We help Clients Invest in Properties Since 2019
          </h1>
          <div
            style={{
              height: 0.1,
              marginTop: 40,
              marginBottom: 5,
              width: "100%",
              backgroundColor: "#F7CCAC",
            }}
          ></div>
          <p className="px-3 text-[#fff] text-xs font-hairline text-secondary text-center ">
            With over Million in sales, due to our great results, expertise
            and dedication, we rank amongst the best globally in property sales
            business. Our agency in the industry are among the best.
          </p>
        </div>
      </section>

      <section className="about-our-container mt-10 text-center">
        <div className="px-5">
          <h1 className="text-md text-center py-1 font-bold text-sm text-primary">
            More about our Company
          </h1>
          <p className="text-sm  text-secondaryx leading-[1.8] text-left text-justify px-2 ">
            Where Vision Meets Home Crafting Your Perfect Space with Expertise
            and Care. Discover the Pinnacle of Real Estate Excellence, Tailored
            to Your Aspirations and Lifestyle.
          </p>
        </div>

        <div
          style={{
            height: 0.1,
            marginTop: 40,
            marginBottom: 5,
            width: "100%",
            backgroundColor: "#F7CCAC",
          }}
        ></div>

        <AboutUsDetails />
        <Testimonial />
        
        <Faqs />
      </section>
    </main>
  );
}
export default About_Us;
