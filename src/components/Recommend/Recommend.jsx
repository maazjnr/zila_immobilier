import React from "react";
import "./Recommend.style.css";
import { MdLocationOn } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineKitchen } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

export default function Recommend() {
  return (
    <div style={{ zIndex: 999 }} className="container">
      <section style={{ zIndex: 3 }} className="mt-0 w-full mb-2 ">
        <div className="text-center ">
          <h3 className="text-center font-bold mb-0 font-primary text-secondaryx bg-gray-200 p-2">
            Recommendation
          </h3>

          <h1 className="text-xs text-center font-normal px-5 text-primary">
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
                  className="text-primary  font-primary font-bold "
                >
                  $2 Million
                  <span className="text-[#999] font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
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

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house3.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-primary font-bold "
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

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house2.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-primary font-bold "
                >
                  $3,080
                  <span className="text-[#999] text-xs font-primary font-medium">
                    /6 weeks
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
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

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house4.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-primary font-bold "
                >
                  $7 million
                  <span className="text-[#999] font-primary text-xs font-medium">
                    /for sale
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
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

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house6.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-bold "
                >
                  $5 million
                  <span className="text-[#999] font-primary text-xs font-medium">
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

        <div className="card">
          <div className="w-full p-3">
            <div className="image-card">
              <img className="img" src={require("../../images/house5.jpg")} />
            </div>

            <div style={{ marginTop: 15 }}>
              <div className="flex flex-row justify-between items-center mb-3 pb-3 border border-solid border-secondary rounded p-2 ">
                <h1
                  style={{ fontSize: 20 }}
                  className="text-primary font-primary font-bold "
                >
                  $1,002
                  <span className="text-[#999] font-primary text-xs font-medium">
                    /2 weeks
                  </span>
                </h1>

                <div className="border border-solid border-secondary rounded p-2">
                  <BiSolidMessageSquareDetail />
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

      <section style={{ zIndex: 3 }} className="mt-10 w-full mb-1 ">
        <div className="">
          <h3 className="text-center font-bold mb-0 font-primary text-secondaryx bg-gray-200 p-2">
            WHY NEXTMOVEE ?
          </h3>

          <p className="text-sm pt-3 leading-[1.8] text-left text-justify px-2 text-primary">
            Navigating the complex real estate landscape can be a daunting task,
            but with Nextmovee by your side, the journey becomes effortless and
            exciting. Our commitment to excellence means that every step of your
            property journey is meticulously curated to match your preferences,
            needs, and aspirations.
          </p>

          <p className="text-sm pt-3 leading-[1.8] text-left text-justify px-2 text-primary">
            At Nextmovee, we understand that a home is more than just bricks and
            mortar; it's where your life story unfolds. Our cutting-edge
            technology empowers you to explore a diverse range of properties,
            ensuring that you're presented with options that resonate with your
            unique vision. Whether you're a first-time buyer, a seasoned
            investor, or someone looking to find a temporary haven, we have the
            solutions tailored to you.
          </p>

          <p className="text-sm pt-3 leading-[1.8] text-left text-justify px-2 text-primary">
            What sets us apart is our personalized approach. We believe that
            each individual's dream is distinct, and that's why our dedicated
            team of experts works closely with you to transform your vision into
            reality. From matching you with the right property to negotiating
            the best deals and guiding you through the intricate legal
            processes, we're your trusted partners at every stage.
          </p>

          <p className="text-md pt-3 leading-[1.8] text-left text-justify px-2 text-primary">
            So, if you're seeking to embark on a journey towards your dream
            home, let Nextmovee be your guide. Unveil a world of possibilities
            as we redefine the way you buy, sell, and rent properties. Your
            dream home is within reach, and we're here to make it a reality.
            Join us on this exciting venture and let's turn your dreams into
            addresses.
          </p>

          <div className="mt-7">
            <button
              className="bg-[#3a3845] hover:bg-[#F7CCAd] flex flex-row items-center justify-center focus:bg-[#C69B7B] active:bg-[#C69B7B] transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none px-6 py-3 rounded"
              onClick={() => navigate("/about")}
            >
                <BiSolidContact size={13} color={'#fff'} />
              <p
                style={{ fontWeight: 700, fontSize: 13 }}
                className="text-[#fff] ml-1 font-primary leading-none"
              >
               Contact us
              </p>
            
            </button>

            
          </div>
        </div>
      </section>
    </div>
  );
}
