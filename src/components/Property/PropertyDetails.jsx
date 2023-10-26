import React from "react";
import { MdLocationOn, MdOutlineKitchen } from "react-icons/md";
import { BiSolidMessageSquareDetail, BiSolidContact } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { PiPhoneCallThin } from "react-icons/pi";
import { BsCarFrontFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { GrStatusInfo } from "react-icons/gr";
import { PiIdentificationCardLight } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PropertyDetails() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="w-full">
      <div className="w-full mx-auto">
        <Slider {...sliderSettings}>
          <div className="w-full h-full">
            <img
              src={require("../../images/property4.jpg")}
              alt="Property"
              className="w-full h-full object-cover md:max-w-full"
            />
          </div>

          <div className="w-full h-full">
            <img
              src={require("../../images/living-room-565060_1280.jpg")}
              alt="Property"
              className="w-full h-full object-cover md:max-w-full"
            />
          </div>

          <div className="w-full h-full">
            <img
              src={require("../../images/real-estate-4955093_1280.jpg")}
              alt="Property"
              className="w-full h-full object-cover md:max-w-full"
            />
          </div>

          <div className="w-full h-full">
            <img
              src={require("../../images/room-2269591_1280.jpg")}
              alt="Property"
              className="w-full h-full object-cover md:max-w-full"
            />
          </div>

          <div className="w-full h-full">
            <img
              src={require("../../images/kitchen-1940177_1280.jpg")}
              alt="Property"
              className="w-full md:max-w-full "
            />
          </div>
        </Slider>
      </div>

      <section className="w-full flex flex-col md:flex-row items-center justify-around p-5 md:py-10">
        <div className="text-sm text-justify mb-5 md:mb-0 md:mr-10">
          {" "}
          {/* Added md:mr-10 to add margin right on medium screens and above */}
          <h1 className="text-secondaryx text-left text-3xl py-5 font-primary font-normal mb-3">
            Bumba's Mansions
          </h1>
          <h1 className="text-secondaryx text-left text-sm uppercase pt-5  mb-3">
            Property Information:
          </h1>
          <h1 className="md:max-w-3xl">
            Introducing our new minimalist two bedrooms. -Enjoy the simplicity
            and view of our new 4 bedroom in the most secured and elite part of
            Lekki phase one. Features: Beautiful Roof Top Lounge with both city
            and Seaview Swimming pool Gym 24/7 Light Super fast WIFI Dstv
            Netflix Very secured environment All rooms en-suite Content from
           
          </h1>

          <h1 className="text-secondaryx bg-primary p-3 rounded text-left text-1xl py-5 font-primary font-normal mb-3 mt-3">
            Price: <span className="text-[#fff]">$2 Million</span>
          </h1>
        </div>

        <div className="p-5 bg-white rounded-lg mt-7 shadow-lg">
          <div className="flex flex-wrap items-center mb-3">
            <MdLocationOn className="text-secondaryx" />
            <p className="ml-2 font-primary text-sm">
              2699 Green valley, Highlight Lake, FL
            </p>
          </div>

          <div className="flex flex-wrap items-center mb-3">
            <div className="flex items-center mr-6 mb-2">
              <IoIosBed className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">4 Bedrooms</p>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <IoIosBed className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">2 Bathrooms</p>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <MdOutlineKitchen className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">1 Kitchen</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-3">
            <div className="flex items-center mr-6 mb-2">
              <BsCarFrontFill className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">
                {" "}
                4 Parking spaces{" "}
              </p>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <GrLocationPin className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">
                {" "}
                Land Size (Sqm){" "}
              </p>
            </div>

            <div className="flex items-center mr-6 mb-2 mt-1">
              <PiIdentificationCardLight
                className="text-secondaryx"
                size={20}
              />
              <p className="ml-2 font-primary text-[#aeaeae]">
                {" "}
                Property ID: P8290727107
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-3">
            <div className="flex items-center mr-6 mb-2">
              <BiCategoryAlt className="text-secondaryx" size={18} />
              <p className="ml-2 font-primary text-[#aeaeae]">For sale</p>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <GrStatusInfo className="text-secondaryx" size={16} />
              <p className="ml-2 font-primary text-[#aeaeae]">
                {" "}
                Status: Active{" "}
              </p>
            </div>
          </div>
      
        </div>

       
      </section>

      <div className="w-full p-5 flex flex-wrap items-center md:space-x-5 ">
        <button className="bg-secondaryx p-3 text-primary rounded my-2">
          Purchase Property
        </button>

        <button className="bg-primary p-3 text-secondary space-x-2 flex flex-row items-center rounded my-2">
          <PiPhoneCallThin size={24} /> <p>+234 814 576 5479</p>
        </button>
      </div>

      
    </main>
  );
}

export default PropertyDetails;
