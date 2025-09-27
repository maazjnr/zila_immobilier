import React from "react";
import "./Footer.Style.css";

function Footer() {
  return (
    <div className="footer-container w-full flex flex-wrap justify-between md:justify-between p-4 md:p-8">
      <section className="w-full md:w-1/5 mb-4 md:mb-0 flex flex-col ">
        <h1
          className="text-secondary tracking-wider font-primary 
        text-md font-normal"
        >
          Zima L’immobilier
        </h1>

        <div className="flex flex-col py-3">
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Explore for sale properties
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Explore for rent properties
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Buy properties
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">See prices</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Sign in / Create account
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">Blog</a>
        </div>
      </section>

      <section className="w-full md:w-1/5 mb-4 md:mb-0 flex flex-col ">
        <h1
          className="text-secondary tracking-wider font-primary 
                    text-md font-normal"
        >
          Checkout Resources
        </h1>

        <div className="flex flex-col py-3">
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Looking for a place to invest?
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">Schools</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">Students</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">See prices</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Property guides help
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Help to buy property
          </a>
        </div>
      </section>

      <section className="w-full md:w-1/5 mb-4 md:mb-0 flex flex-col ">
        <h1
          className="text-secondary tracking-wider font-primary 
                    text-md font-normal"
        >
          Quick links access
        </h1>

        <div className="flex flex-col py-3">
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Property investment
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            Find an agent
          </a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">
            High-value properties for sale
          </a>
        </div>
      </section>

      <section className="w-full md:w-1/5 mb-4 md:mb-0 flex flex-col ">
        <h1
          className="text-secondary tracking-wider font-primary 
                    text-md font-normal"
        >
          Location
        </h1>

        <div className="flex flex-col py-3">
          <a className="text-[#ffffff] text-xs py-1 font-primary">England</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">London</a>
          <a className="text-[#ffffff] text-xs py-1 font-primary">Manchester</a>
        </div>
      </section>

      {/* <img
        alt="logo"
        style={{
          height: 55,
          width: 100,
          marginTop: 30,
          paddingBottom: "2rem",
        }}
        src={require("../images/ZimaImmobilier.png")}
        width={80}
      /> */}
    </div>
  );
}

export default Footer;