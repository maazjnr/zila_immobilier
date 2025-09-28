import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  return (
    <main className="">
      <div className="service-container">
        <div
          style={{ zIndex: 3, textAlign: "center", width: "100%", padding: 20 }}
          className=""
        >
          <h1 className="text-xs text-[#fff] "> Welcome to</h1>
          <h1 className="about-title">Zima Immobilier</h1>
          <h1 className="text-xs text-center text-sm text-[#fff]">
            Your trusted partner in the world of Property Business.
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
            At Zima Immobilier, we provide a comprehensive range of property services tailored to
            meet your unique needs. Whether you are buying, selling, renting, or
            investing, our dedicated team of experts is here to assist you every
            step of the way. With a commitment to professionalism, integrity,
            and customer satisfaction, we ensure a seamless and rewarding
            experience for all our clients.
          </p>
        </div>
      </div>

      <section className=" w-full h-full p-5 md:p-20 flex  flex-wrap items-center justify-evenly">
        <img
          style={{ borderRadius: 30 }}
          className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5 "
          src={require("../images/house7.jpg")}
        />
        <div className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
          <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">
            Property Buying and Selling:
          </h1>

          <div>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Expert guidance in buying and selling residential, commercial, and
              industrial properties.
            </li>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Accurate property valuation to ensure fair deals.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Comprehensive marketing strategies to attract potential buyers.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Detailed property inspections to ensure buyers are well-informed
              about their investment
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Dedicated support throughout the entire buying or selling process,
              from property search to closing the deal.
            </li>
          </div>
        </div>
      </section>

      <section className=" w-full h-full p-5 md:p-20 flex  flex-wrap items-center justify-evenly">
        <img
          style={{ borderRadius: 30 }}
          className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5 "
          src={require("../images/1000_F_273671468_GOilKAE4OvJSTiB8fPSTVlitASnhpUav.jpg")}
        />
        <div className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
          <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">
            Property Rentals:
          </h1>

          <div>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Customized rental property searches based on specific client
              preferences and requirements.
            </li>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Comprehensive background checks on potential tenants, including
              credit history and rental references.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Timely and efficient handling of maintenance requests to keep
              rental properties in optimal condition.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Proactive tenant communication and conflict resolution to maintain
              positive landlord-tenant relationships.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Assistance in finding the perfect rental property, whether it's a
              home, office, or retail space.
            </li>
          </div>
        </div>
      </section>

      <section className=" w-full h-full p-5 md:p-20 flex  flex-wrap items-center justify-evenly">
        <img
          style={{ borderRadius: 30 }}
          className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5 "
          src={require("../images/360_F_255057402_lnNmxiQZcomGkFY4ji4JUzolOy11zZda.jpg")}
        />
        <div className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
          <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">
            Property Management:
          </h1>

          <div>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Proven strategies to optimize rental yields and increase property
              value over time.
            </li>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Emergency response services to address unexpected property issues
              promptly.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Detailed financial reporting, including income and expense
              statements, for transparent investment tracking.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Strict adherence to local and national property laws, ensuring
              landlords' legal obligations are met.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Market analysis and risk assessment for informed investment
              decisions.
            </li>
          </div>
        </div>
      </section>

      <section className=" w-full h-full p-5 md:p-20 flex  flex-wrap items-center justify-evenly">
        <img
          style={{ borderRadius: 30 }}
          className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5 "
          src={require("../images/rental-property-investment-strategy.jpeg")}
        />
        <div className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
          <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">
            Real Estate Investments:
          </h1>

          <div>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Customized investment plans tailored to clients' financial goals
              and risk tolerance.
            </li>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Access to exclusive real estate investment opportunities and
              off-market properties.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Portfolio diversification strategies to minimize risks and
              maximize returns.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Continuous market monitoring to identify emerging investment
              trends and opportunities.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Expert advice on lucrative real estate investment opportunities.
            </li>
          </div>
        </div>
      </section>

      <section className=" w-full h-full p-5 md:p-20 flex  flex-wrap items-center justify-evenly">
        <img
          style={{ borderRadius: 30 }}
          className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5 "
          src={require("../images/360_F_255057402_lnNmxiQZcomGkFY4ji4JUzolOy11zZda.jpg")}
        />

        <div className="w-full md:w-1/2 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
          <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">
            Consultation and Advisory:
          </h1>

          <div>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Tailored advisory services for property buying, selling, and
              investment strategies.
            </li>
            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              In-depth analysis of market trends and property values to assist
              clients in making informed decisions.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Comprehensive guidance on property tax laws, regulations, and
              potential deductions.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Expert recommendations on property enhancement and staging for
              increased market appeal.
            </li>

            <li className="  text-1xl text-left text-primary font-hairline font-primary py-3">
              Ongoing support and advice even after property transactions,
              ensuring clients' long-term satisfaction and success.
            </li>
          </div>
        </div>
      </section>

      <div className="bg-primary p-14 ">
        <h1 className=" text-1xl text-secondary font-bold  font-primary py-2">
          What we provide for you
        </h1>
        <div className="w-full h-full flex  flex-wrap  justify-evenly">
          <section className="w-full md:w-1/3 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
            <RiHome5Line className="my-2 text-secondaryx" size={28} />

            <h5 className="text-1xl font-normal font-primary text-[#fff]">
              10 Years of Experience in Real Estate Property Business
            </h5>
            <h5 className="text-xs font-hairline font-primary py-5  text-secondary">
              Zima Immobilier has been established since 2012, earning a
              wealth of positive reviews and achievements over the past decade.
            </h5>

            <span className="flex flex-row items-center space-x-2">
              <a className="text-[#fff] " href="/properties">
                See more
              </a>
              <BsArrowRight className="text-[#fff] mt-1" />
            </span>
          </section>

          <section className="w-full md:w-1/3 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
            <FiCreditCard className="my-2 text-secondaryx" size={24} />

            <h1 className="text-1xl font-normal font-primary text-[#fff]">
              Affordable price with world-class quality properties.
            </h1>
            <h5 className="text-xs font-hairline font-primary py-5  text-secondary">
              At Zima Immobilier, we offer the perfect balance of affordability
              and world-class quality. Our properties redefine luxurious living
              at a price that’s accessible, ensuring exceptional quality for all.
            </h5>

            <span className="flex flex-row items-center space-x-2">
              <a className="text-[#fff] " href="/properties">
                See more
              </a>
              <BsArrowRight className="text-[#fff] mt-1" />
            </span>
          </section>

          <section className="w-full md:w-1/3 py-3 mb-4 md:mb-0 flex flex-col md:px-5">
            <BiLike className="my-2 text-secondaryx" size={24} />

            <h1 className="text-1xl font-normal font-primary text-[#fff]">
              Bring your ideas into a living reality
            </h1>

            <h5 className="text-xs font-hairline font-primary py-5  text-secondary">
              At Zima Immobilier, we empower your vision by transforming ideas
              into reality. Whether you dream of unique properties or innovative
              real estate solutions, our expert team is dedicated to bringing
              your concepts to life.
            </h5>

            <span className="flex flex-row items-center space-x-2">
              <a className="text-[#fff] " href="/properties">
                See more
              </a>
              <BsArrowRight className="text-[#fff] mt-1" />
            </span>
          </section>
        </div>
      </div>

      <div className="px-5 py-20">
        <h1 className="text-center md:text-left text-1xl text-secondaryx font-bold  font-primary py-2">Why Choose Us:</h1>
        <p className="text-justify">
          <span className="font-bold"> Expertise:</span> Our team at Zima Immobilier comprises experienced real estate
          professionals with in-depth knowledge of the local market trends and
          regulations.  <span className="font-bold"> Customer-Centric Approach:</span>  We prioritize your needs and
          preferences, ensuring a personalized and hassle-free experience.
          <span className="font-bold"> Integrity:</span>  We operate with transparency and integrity, building trust
          with our clients through honest and ethical practices.   <span className="font-bold"> Timely Support:</span> 
          We understand the importance of timely responses and support, and we
          are always available to assist you. <span className="font-bold">  Comprehensive Solutions: </span> From
          property search to legal documentation and post-sale services, we
          offer end-to-end solutions for all your real estate requirements.
          Whether you are a first-time homebuyer, a seasoned investor, or a
          property owner looking to sell or rent, Zima Immobilier is your reliable partner. Contact us today to explore the
          endless possibilities in the world of real estate.
        </p>
      </div>
    </main>
  );
}