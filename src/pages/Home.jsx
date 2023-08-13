import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Make sure to adjust the path to your Navbar component
import Recommend from "../components/Recommend/Recommend";
import { MdSell } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import {BiSearch} from "react-icons/bi";

const imageUrls = [
  "https://img.freepik.com/free-photo/corridor-unfocused_1203-1210.jpg",
  // Add more image URLs here
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "right", // Change to "right" to hide left side
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
  };

  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(
          "https://source.unsplash.com/featured/?house"
        );
        setRandomImage(response.request.responseURL);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <div className="flex flex-col items-center p-5 ">
        {/* Background image */}
        <div style={backgroundImageStyle}></div>

        <div className="flex flex-col items-center mt-5 relative z-10">
          <section className="text-center">
            <h1
              className="text-primary text-2xl  sm:text-5xl font-primary leading-tight font-bold"
              style={{ lineHeight: 1.5 }}
            >
              Buy, Sell and Rent Properties with
              <span className="text-secondaryx"> Nextmovee</span>.
            </h1>

            <p className="py-2 text-justify">
              Finding your dream home now is quite difficult, but we can help
              you make your dreams come true. Come find your dream house with us
            </p>
          </section>
          <div className="w-full mt-6 relative">
  <input
    type="text"
    placeholder="Search for your dream home..."
    className="border shadow-lg rounded px-5 py-3 w-full bg-white"
  />
  <div className="absolute inset-y-0 right-0 flex items-center mr-2">
    <button style={{backgroundColor: '#aeaeae'}}
      className="bg-gray rounded px-3 py-2 text-white focus:outline-none"
    >
      <BiSearch color='white' className="h-5 w-5" />
    </button>
  </div>
</div>



  
        </div>

        <div className="mt-5 mb-8 flex flex-wrap justify-evenly ">
          <button
            style={{
              backgroundColor: "#3A3845",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "220px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MdSell />
            <p className="ml-2 text-secondary"> BUY A PROPERTY</p>
          </button>
          <button
            style={{
              backgroundColor: "#3A3845",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "220px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiFillShopping />
            <p className="ml-2 text-secondary "> SELL A PROPERTY</p>
          </button>
          <button
            style={{
              backgroundColor: "#3A3845",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "220px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaBookmark />
            <p className="ml-2 text-secondary"> RENT A PROPERTY</p>
          </button>
        </div>
      </div>

      <section className="mt-5 px-5 ">
        <div className="text-center ">
          <h3 className="text-center font-bold mb-0 text-primary uppercase bg-gray-200 p-2">
            Why Nextmovee
          </h3>

          <p className="text-md text-center text-justify text-primary">
            At nextomovee, we're more than just a real estate service – we're
            your trusted partner in finding the perfect property. Our mission is
            simple: we recommend the best price, the ideal location, and a safe
            environment tailored to your needs.
     
          </p>

          <p className="text-md text-center text-justify text-primary mt-3">       Join us in your real estate journey, and experience the difference
            of personalized recommendations that prioritize your needs. Your
            dream property is out there, and we're here to help you find it."</p>
        </div>
      </section>

      {/* Recommend component */}
      <Recommend />
      {/* Recommend component */}
    </main>
  );
}
