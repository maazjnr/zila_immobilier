import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineKitchen } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import './Buy.style.css';
import "aos/dist/aos.css";

 function BuyProperty() {
  return (
    <main className=' buy-container'>

      <div style={{zIndex: 3}} className='py-10'>
       <h1 className='font-primary text-2xl text-center text-primary font-normal'> Discover Most Suitable Properties for Sale </h1>
      </div>


      <section className="flex flex-wrap justify-evenly">

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house1.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold "
                >
                  $2 Million
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                     /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Monochrome House
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs ">
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house3.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $2,620
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Faulkner Ave
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs text-poppins">
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house2.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $3,080
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Beverly Springfield
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 text-xs font-primary text-poppins">
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house4.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $7 million
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                The Old Steele
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 text-xs font-primary text-poppins">
                  103 Lake Shores, Michiang, IN
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
                    2 Beds
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
                    1 Bathrooms
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
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house6.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx font-bold "
                >
                  $5 million
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-normal "
              >
                Curvy Black lite
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs text-poppins">
                  243 Crew Low road, International road
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    2 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house5.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $1,002
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Flat Rich Style
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs ">
                  Birmingham line 2033, Globe Itl
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    2 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house1.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold "
                >
                  $2 Million
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                     /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Monochrome House
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs ">
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house3.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $2,620
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Faulkner Ave
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs text-poppins">
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    1 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} data-aos="zoom-out" className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house5.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row bg-primary justify-between items-center  rounded p-2">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary text-secondaryx  font-primary font-bold"
                >
                  $1,002
                  <span className="text-[#fff] ml-1 font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail color='#fff' />
                </div>
              </div>

              <h1
                style={{ fontSize: 20 }}
                className="text-secondaryx font-primary font-normal "
              >
                Flat Rich Style
              </h1>

              <div className="flex flex-row mt-1 items-center">
                <MdLocationOn />
                <p className=" ml-1 font-primary text-xs ">
                  Birmingham line 2033, Globe Itl
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
                    className="ml-2 font-primary text-[#aeaeae]"
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
                    className="ml-2 font-primary text-[#aeaeae]"
                  >
                    2 Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default BuyProperty;
