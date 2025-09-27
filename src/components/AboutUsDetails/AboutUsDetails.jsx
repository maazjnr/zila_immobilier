import React from "react";
import { AiFillStar } from "react-icons/ai";

function AboutUsDetails() {
  return (
    <main className="w-full flex flex-wrap  justify-between md:justify-between mt-10 p-4 md:p-8 ">
      <div className="mt-8 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col px-3">
        <h1 className="text-primaryx font-bold text-lg">Mission</h1>
        <p className="text-sm pt-2 leading-[1.8] text-left text-justify  text-primary">
          At Zima L’immobilier, our mission is to empower individuals, families, and investors to
          achieve their property goals effortlessly. We are dedicated to leveraging our expertise
          and resources to streamline the real estate investment journey, providing innovative
          solutions that enhance the lives of our clients while maintaining a commitment to
          transparency, trust, and excellence.
        </p>
      </div>

      <div className="mt-8 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col px-3">
        <h1 className="text-primaryx font-bold text-lg">Vision</h1>
        <p className="text-sm pt-2 leading-[1.8] text-left text-justify text-primary">
          Our vision at Zima L’immobilier is to redefine the real estate investment experience,
          becoming the premier destination where dreams of property ownership and investment come
          to life. We aim to be the most trusted and sought-after real estate partner, recognized
          for our unwavering dedication to delivering personalized service, cutting-edge
          technology, and a seamless, rewarding path to your next investment.
        </p>
      </div>

      <div className="mt-8 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col px-3">
        <h1 className="text-primaryx font-bold text-lg">Resources</h1>
        <p className="text-sm pt-2 leading-[1.8] text-left text-justify text-primary">
          Backed by a team of seasoned real estate professionals, Zima L’immobilier harnesses the
          power of market insights, advanced technology, and industry connections to offer an
          unparalleled selection of investment properties. Our comprehensive database, combined
          with our commitment to staying ahead of market trends, ensures that our clients have
          access to the widest range of options when making their next investment move.
        </p>
      </div>

      <div className=" mt-8 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col px-3">
        <h1 className="text-primaryx font-bold text-lg">Our values</h1>
        <p className="text-sm pt-2 leading-[1.8] text-left text-justify  text-primary">
          <span className="font-bold">Integrity: </span> We uphold honesty and
          transparency in all our interactions, building trust through ethical
          business practices.{" "}
          <span className="font-bold">Customer-Centric: </span>
          Our clients are our priority. We personalize our services to exceed
          their expectations and make their dreams a reality.{" "}
          <span className="font-bold">Innovation:</span> We embrace change and
          leverage cutting-edge technology to enhance the real estate process
          for our clients. <span className="font-bold">Collaboration: </span>
          We believe in the power of teamwork, fostering
          cooperation to deliver exceptional results for our clients.{" "}
          <span className="font-bold">Excellence: </span> Striving for the best
          is ingrained in our culture. We consistently raise the bar to provide
          top-notch services and experiences.{" "}
          <span className="font-bold">Community: </span> We are committed to
          giving back, contributing positively to the communities we serve and
          creating a lasting impact.
        </p>
      </div>

      <section>
        
      </section>

    </main>
  );
}

export default AboutUsDetails;