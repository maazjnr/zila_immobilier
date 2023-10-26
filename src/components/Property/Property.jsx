import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { PiPhoneCallThin } from "react-icons/pi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineKitchen } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import "./Property.style.css";
import { useNavigate } from "react-router-dom";
import { CiSaveDown1 } from "react-icons/ci";

function Property({
  price,
  location,
  address,
  beds,
  bathrooms,
  imageUrl,
  sale,
  kitchen,
}) {
  const navigate = useNavigate();
  return (
    <main style={{ zIndex: 3 }} className="p-5  ">
      <div
        className="property-card"
        onClick={() => navigate("propertyDetails")}
      >
        <div className="w-full p-3">
          <div className="property-image-card ">
            <img className="property-img " src={imageUrl} />
          </div>

          <div style={{ marginTop: 10 }}>
            <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
              <h1 className="text-primary text-secondaryx text-xs  font-primary font-bold">
                {price}
                <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                  / {sale}
                </span>
              </h1>

              <div className="border border-solid border-secondary rounded p-2">
                <PiPhoneCallThin color="#fff" />
              </div>
            </div>

            <h1
              style={{ fontSize: 20 }}
              className="text-secondaryx pt-2 font-primary font-normal  "
            >
              {address}
            </h1>

            <div className="flex flex-row mt-0 items-center">
              <MdLocationOn />
              <p className=" ml-1 font-primary text-xs text-poppins">
                {location}
              </p>
            </div>

            <div className="mt-3 flex flex-row justify-start ">
              <div
                style={{
                  marginTop: 3,
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoIosBed size={12} className="text-secondaryx" />
                <p
                  style={{
                    fontSize: 10,
                    marginLeft: 3,
                    fontWeight: "bold",
                    color: "700",
                  }}
                  className="ml-2 font-primary text-[#aeaeae]"
                >
                  {beds}
                </p>
              </div>

              <div
                style={{
                  marginTop: 3,
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoIosBed size={12} className="text-secondaryx" />
                <p
                  style={{
                    fontSize: 10,
                    marginLeft: 3,
                    fontWeight: "bold",
                    color: "700",
                  }}
                  className="ml-2 font-primary text-[#aeaeae]"
                >
                  {bathrooms}
                </p>
              </div>

              <div
                style={{
                  marginTop: 3,
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineKitchen size={12} className="text-secondaryx" />
                <p
                  style={{
                    fontSize: 10,
                    marginLeft: 3,
                    fontWeight: "bold",
                    color: "700",
                  }}
                  className="ml-2 font-primary text-[#aeaeae]"
                >
                  {kitchen} Kitchen
                </p>
              </div>
            </div>
          </div>
        </div>

       <button className="mb-3 flex flex-row items-center space-x-1 ">
       <h1 className="text-xs">Save Property</h1> <CiSaveDown1 style={{zIndex: 3}} size={16} className="text-primary mt-1" />
       </button>

      </div>
    </main>
  );
}

export default Property;
