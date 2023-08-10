import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Make sure to adjust the path to your Navbar component

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
    <main className="flex flex-col items-center min-h-screen">


      <div className="flex flex-col items-center p-10 min-h-screen ">
        {/* Background image */}
        <div style={backgroundImageStyle}></div>

        <div className="flex flex-col items-center relative z-10">
          <section className="text-center">
            <h1
              className="text-primary text-3xl sm:text-7xl font-primary leading-tight font-bold"
              style={{ lineHeight: 1.3 }}
            >
              Buy, sell and rent homes easily with{" "}
              <span className="text-secondaryx">Nextmovee</span>.
            </h1>

            <p className="p-3">
              Finding your dream home now is quite difficult, but we can help
              you make your dreams come true. Come find your dream house with us
            </p>
          </section>

          <div className="w-full mt-6">
            <input
              type="text"
              placeholder="Search for your dream home..."
              className="border shadow-lg border-gray-600 rounded-lg px-4 py-3 w-full"
            />
          </div>
        </div>

        <section className="mt-10 w-full justify-between flex flex-col md:flex-row justify-center items-center md:space-x-2">
          <div className="text-center">
           <h3 className="text-center md:text-left font-bold mb-3  text-primary bg-gray-200 p-2">Recommendation</h3>

            <h1 className="text-3xl text-center md:text-left  font-normal text-primary">
              We recommend the best price, location <br />  and a safe environment for you
            </h1>
          </div>

          <div style={{textAlign: "left"}} className="mt-5 flex-col md:flex md:flex-row md:justify-start md:items-center md:mt-0 space-y-2 md:space-y-0 md:space-x-2">
            <button
              style={{
                backgroundColor: "#3A3845",
                color: "#ffffff",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                marginRight: 20
              }}
            >
              Buy
            </button>
            <button
              style={{
                backgroundColor: "#3A3845",
                color: "#ffffff",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                marginRight: 20
              }}
            >
              Sell
            </button>
            <button
              style={{
                backgroundColor: "#3A3845",
                color: "#ffffff",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                marginRight: 20
              }}
            >
              Rent
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
