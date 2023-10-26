import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons library
import Property from "../components/Property/Property";
import PropertyList from "../components/Property/PropertyList";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  require("../images/property-7046997_1280.jpg"),
  require("../images/luxury-home-2409518_1280.jpg"),
  require("../images/bedroom-3778695_1280.jpg"),
  "https://cdn.pixabay.com/photo/2017/06/19/04/06/house-2418106_1280.jpg",
  require("../images/kitchen-1940177_1280.jpg"),
  "https://cdn.pixabay.com/photo/2016/09/04/12/38/living-room-1643855_1280.jpg",
  require("../images/house-409451_1280.jpg"),
  require("../images/floor-2623897_1280.jpg"),
  require("../images/house-2511060_1280.jpg"),
  require("../images/real-estate-4955093_1280.jpg"),
];
export default function Properties() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(
    propertyImages.length - 1
  );
  const [isZooming, setIsZooming] = useState(false);

  const goToNextImage = () => {
    if (!isZooming) {
      setIsZooming(true);
      setTimeout(() => {
        setIsZooming(false);
        const newIndex = (currentImageIndex + 1) % propertyImages.length;
        setPreviousImageIndex(currentImageIndex);
        setCurrentImageIndex(newIndex);
      }, 1000);
    }
  };

  const goToPreviousImage = () => {
    if (!isZooming) {
      setIsZooming(true);
      setTimeout(() => {
        setIsZooming(false);
        const newIndex =
          (currentImageIndex - 1 + propertyImages.length) %
          propertyImages.length;
        setPreviousImageIndex(currentImageIndex);
        setCurrentImageIndex(newIndex);
      }, 1000);
    }
  };

  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        <div className="blurImg absolute top-0 left-0 right-0 bottom-0 z-0"></div>
        <div className="relative z-10 text-white text-center">
          {/* <h1 className="text-4xl font-bold mb-4">Property Details</h1> */}
          {/* Other content components */}
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-4 z-10">
          <button
            onClick={goToPreviousImage}
            className="bg-secondary text-primary font-bold py-2 px-4 rounded shadow-md"
          >
            <FaArrowLeft className="text-primary" size="10px" />{" "}
            {/* Use React Icons for the back arrow */}
          </button>
          <button
            onClick={goToNextImage}
            className="bg-secondary text-primary font-bold py-2 px-4 rounded shadow-md"
          >
            <FaArrowRight className="text-primary" size="10px" />{" "}
            {/* Use React Icons for the next arrow */}
          </button>
        </div>
        {propertyImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-1000 ${
              isZooming
                ? index === previousImageIndex
                  ? "scale-150" // Adjust the scale values here (e.g., 110 for a less deep zoom-out)
                  : "scale-50"  // Adjust the scale values here (e.g., 90 for a less deep zoom-out)
                : ""
            } ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

   <PropertyList />
    </main>
  );
}
