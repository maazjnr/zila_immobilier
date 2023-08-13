import React from "react";
import "./Recommend.style.css";
import { MdLocationOn } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineKitchen } from "react-icons/md";

export default function Recommend() {
  return (
    <div className="container">
      <section className="mt-10 w-full mb-10 ">
        <div className="text-center mt-10 ">
          <h3 className="text-center font-bold mb-0  text-secondary bg-gray-200 p-2">
            Recommendation
          </h3>

          <h1 className="text-1xl text-center font-normal px-5 text-primary">
            We recommend the best price, location and a safe environment for you
          </h1>
        </div>
      </section>

      <section className="flex flex-wrap justify-evenly">
        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house1.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-bold "
                >
                  $2 Million
                  <span className="text-[#999] text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-normal "
              >
                Monochrome House
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 text-xs text-poppins">
                  2699 Green valley, Highlight Lake, FL
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    4 Beds
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    2 Bathrooms
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house3.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-bold "
                >
                  $2,620
                  <span className="text-[#999] text-xs font-medium">
                    /month
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-normal "
              >
                Faulkner Ave
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 text-xs text-poppins">
                  2699 Green valley, Highlight Lake, FL
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    3 Beds
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    2 Bathrooms
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house2.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-bold "
                >
                  $3,080
                  <span className="text-[#999] text-xs font-medium">
                    /6 weeks
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-normal "
              >
                Beverly Springfield
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 text-xs text-poppins">
                  2821 Lake, Sevilla, Palm Harbor, TX
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    3 Beds
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    2 Bathrooms
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
                    className="ml-2, text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
