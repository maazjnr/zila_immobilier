import React from "react";
import "./Testimonial.style.css";
import { AiFillStar } from "react-icons/ai";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {

    AOS.init({
        duration: 800,     // Duration of animations
        easing: 'ease-in-out', // Easing for animations
        delay: 100,        // Delay before animations start
        once: true         // Only animate elements once
      });

      
  return (
    <main className="w-full flex flex-col justify-center">
      <section className="text-center px-10">
        <div
          style={{
            height: 0.1,
            marginTop: 40,
            marginBottom: 10,
            width: "100%",
            backgroundColor: "#F7CCAC",
          }}
        ></div>
        <h1 className="font-primary font-bold text-2xl text-secondary">
          Testimonial
        </h1>
        <p className="text-xs">
          Publish the best of your client testimonials and let the world know
          what a great agent or real estate agency you are. Testimonials build
          trust
        </p>
      </section>

      <section data-aos="zoom-out" className="w-full flex flex-wrap justify-between md:justify-between mt-10 p-4 md:p-8  ">
        <div data-aos="zoom-in" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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

        <div data-aos="fade-left" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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

        

        <div data-aos="fade-right" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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

       

        

        
        <div data-aos="fade-down" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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

        <div data-aos="fade-up" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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
        
        <div data-aos="fade-left" className="user mt-8 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col px-3">
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
