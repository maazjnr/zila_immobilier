import Navbar from "../components/Navbar"; // Make sure to adjust the path to your Navbar component
import Recommend from "../components/Recommend/Recommend";
import { MdSell } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import VideoBg from "../video/homevid.mp4";
import { useNavigate } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import PropertyList from "../components/Property/PropertyList";
import { BiSolidContact } from "react-icons/bi";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center ">
      <div className="flex home-bg justify-center flex-col items-center px-3 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VideoBg} type="video/mp4" />
        </video>

        <div className="flex flex-col  items-center text-center  relative z-10">
          <section className="text-center">
            <h1
              className="text-secondary  text-4xl font-primary  mb-3 pt-36  font-primary leading-normal font-bold"
              style={{ lineHeight: 1.5 }}
            >
              Buy, Sell and Rent Properties with
              <span className="text-[#ffffff] font-primary"> Nextmovee</span>.
            </h1>

            <p className="py-1 px-3 text-[#fff] text-xs font-hairline text-center ">
              Finding your dream home now is quite difficult, but we can help
              you make your dreams come true. Come find your dream house with
              us.
            </p>
          </section>
          <div
            style={{ zIndex: 3 }}
            className="mt-4  flex flex-wrap justify-evenly "
          >
            <button
              onClick={() => navigate("/buy")}
              className="home-btn "
              style={{
                backgroundColor: "#C69B7B",
                color: "#ffffff",
                borderRadius: "0.25rem",
                fontWeight: "800",
                fontSize: "15px",
                margin: "5px",
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MdSell size={12} color={"#3A3845"} />
              <p className="ml-1 text-xs  text-[#3A3845] font-primary">
                BUY PROPERTY
              </p>
            </button>
            <button onClick={() => navigate('/sell')}
              className="home-btn"
              style={{
                backgroundColor: "#C69B7B",
                color: "#ffffff",
                borderRadius: "0.25rem",
                fontWeight: "800",
                fontSize: "15px",
                margin: "5px",
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillShopping size={12} color={"#3A3845"} />
              <p className="ml-1 text-xs  text-[#3A3845] font-primary">
                {" "}
                SELL PROPERTY
              </p>
            </button>
            <button
              onClick={() => navigate("/rent")}
              className="home-btn "
              style={{
                backgroundColor: "#C69B7B",
                color: "#ffffff",
                borderRadius: "0.25rem",
                fontWeight: "800",
                fontSize: "15px",
                margin: "5px",
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaBookmark size={12} color={"#3A3845"} />
              <p className="ml-1 text-[#3A3845] text-xs font-primary">
                {" "}
                RENT PROPERTY{" "}
              </p>
            </button>
          </div>

          <div className="w-full mb-5 mt-14 relative">
            <input
              type="text"
              placeholder="Search for your dream home..."
              className="border text-xs font-primary shadow-lg rounded px-5 py-5 w-full bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-2">
              <button
                style={{ backgroundColor: "#3A3845" }}
                className="bg-gray rounded px-3 py-3 text-white focus:outline-none"
              >
                <BiSearch color="white" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-x-3">
            <select
              className="py-2 px-7 mt-3 shadow-lg rounded "
              id="house-type"
            >
              <option className="text-xs" value="apartment">
                Apartment
              </option>
              <option className="text-xs" value="house">
                House
              </option>
              <option className="text-xs" value="Apartment">
                Rent
              </option>
              <option className="text-xs" value="Flat">
                Flat
              </option>
              <option className="text-xs" value="Apartment">
                Land
              </option>
            </select>

            <select id="bedrooms shadow-lg rounded " className="py-2 px-7 mt-3">
              <option className="text-xs" value="1">
                1 Bedroom
              </option>
              <option className="text-xs" value="2">
                2 Bedrooms
              </option>
              <option className="text-xs" value="3">
                3 Bedrooms
              </option>
              <option className="text-xs" value="4">
                4 Bedrooms
              </option>
              <option className="text-xs" value="5">
                5 Bedrooms
              </option>
            </select>
          </div>
        </div>

        <section style={{ zIndex: 3, marginTop: 15 }}>
          <h1 className="text-md text-center py-1 font-bold text-sm text-[#fff]">
            Find Your Next Home Anywhere Around the Globe
          </h1>
          <p className="py-1 px-3 text-[#fff] text-xs font-hairline text-center ">
            Through our proprietary platform, Nextmovee is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </section>

        <div className="mt-7 pb-20">
          <button
            className="bg-[#fff] hover:bg-[#F7CCAd] flex flex-row items-center justify-center focus:bg-[#C69B7B] active:bg-[#C69B7B] transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none px-6 py-3 rounded"
            onClick={() => navigate("/about")}
          >
            <HiUserGroup size={13} color={"#3a3845"} />
            <p
              style={{ fontWeight: 700, fontSize: 13 }}
              className="text-[#3a3845] ml-1 font-primary leading-none"
            >
              More about nextmovee
            </p>
          </button>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center md:p-20 p-5 ">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col md:pr-10">
          <h1 className="text-center md:text-left text-3xl text-secondaryx text-right font-primary py-2">
            THE BEST PLACE TO LIVE IN YOUR CITY ACCORDING TO REAL ESTATE AGENT &
            Developers
          </h1>

          <h1 className="text-center md:text-left text-xs text-primary text-justify font-primary py-2">
            It's one of the most exciting moment in your life but it can also be
            overwhelming. As you start house hunting, they're few easy steps you
            should take to make sure you'll be happy in your next home
          </h1>
        </div>

        <img
          className="rounded-lg"
          src={require("../images/service_img.jpg")}
          alt="Service Image"
        />
      </section>

      <section style={{ zIndex: 3 }} className="mt-0 w-full mb-2 ">
        <div className="text-center py-5">
          <h3 className="text-center font-bold mb-0 font-primary text-secondaryx bg-gray-200 p-2">
            Recommendation
          </h3>

          <h1 className="text-xs text-center font-normal px-5 text-primary">
            We recommend the best price, location and a safe environment for you
          </h1>
        </div>
      </section>

      {/* Recommend component */}
      {/* <Recommend /> */}
      <PropertyList />
      {/* Recommend component */}

      <section style={{ zIndex: 3 }} className="mt-10 w-full mb-1 p-8 ">
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
              <BiSolidContact size={13} color={"#fff"} />
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
    </main>
  );
}

//https://lasvegas.wpresidence.net/
//https://dribbble.com/shots/22644705-Willcoon-Property-Landing-Page-For-Real-Estate-Agency
