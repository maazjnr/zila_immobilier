import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineKitchen } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import "./Buy.style.css";
import "aos/dist/aos.css";
import PropertyList from "../Property/PropertyList";

function BuyProperty() {
  return (
    <main className=" buy-container">
      <PropertyList />
    </main>
  );
}

export default BuyProperty;
