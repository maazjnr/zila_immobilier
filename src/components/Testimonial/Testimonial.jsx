import React from "react";
import "./Testimonial.style.css";
import { AiFillStar } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  return (
    <main className=" ">
      <section className="text-center mb-10 px-10">

        <h1 className="font-primary font-bold text-2xl text-secondary">
          Testimonial
        </h1>
        <p className="text-xs">
          Publish the best of your client testimonials and let the world know
          what a great agent or real estate agency you are. Testimonials build
          trust
        </p>
      </section>

      <section
        data-aos="zoom-in"
        className="flex py-10 flex-wrap bg-secondaryx justify-evenly"
      >
        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user1.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Norris Albear
              </h2>
              <p className="text-xs text-secondary">Happy Seller</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              I reviewed and purchased a number of different Properties before
              settling on Nextmovee.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user2.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Windy Floriani
              </h2>
              <p className="text-xs text-secondary">Happy Buyer</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              The Nextmovee Estate team did an outstanding job helping me buy an
              amazing property.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user3.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Humberto Gegner
              </h2>
              <p className="text-xs text-secondary">Happy Buyer</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              The Nextmovee Estate team did an outstanding job helping me buy an
              amazing property.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user5.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Darrin Boeh
              </h2>
              <p className="text-xs text-secondary">Happy Buyer</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              The Nextmovee Estate team did an outstanding job helping me buy an
              amazing property.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user4.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Zella Nicholos
              </h2>
              <p className="text-xs text-secondary">Happy Buyer</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              The Nextmovee Estate team did an outstanding job helping me buy an
              amazing property.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="user w-full md:w-1/6 mb-4 md:mb-0 flex flex-col"
        >
          <div className="flex flex-row items-center">
            <img className="user-img" src={require("../../images/user6.jpg")} />
            <div className="px-5 text-left">
              <h2 className="font-primary font-normal text-md text-primary">
                Osvaldo Muscella
              </h2>
              <p className="text-xs text-secondary">Happy Buyer</p>
            </div>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs px-5 mt-6">
              The Nextmovee Estate team did an outstanding job helping me buy an
              amazing property.
            </p>

            <div className="mt-7 ml-4 flex flex-row items-center">
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
              <AiFillStar color="#F7CCAC" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimonial;
