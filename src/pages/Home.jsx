import Navbar from "../components/Navbar"; // Make sure to adjust the path to your Navbar component
import Recommend from "../components/Recommend/Recommend";
import { MdSell } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import VideoBg from '../video/homevid.mp4';

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className="flex home-bg flex-col items-center p-3 ">

      <video autoPlay muted loop>
        <source src={VideoBg} type="video/mp4" />
      </video>

        <div className="flex flex-col items-center mt-5 relative z-10">
          <section className="text-center">
            <h1
              className="text-secondary pt-3 text-2xl  sm:text-5xl font-primary leading-tight font-bold"
              style={{ lineHeight: 1.5 }}
            >
              Buy, Sell and Rent Properties with
              <span className="text-[#ffffff]"> Nextmovee</span>.
            </h1>

            <p className="py-2 text-[#fff] text-justify">
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
              <button
                style={{ backgroundColor: "#aeaeae" }}
                className="bg-gray rounded px-3 py-2 text-white focus:outline-none"
              >
                <BiSearch color="white" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div style={{zIndex: 3}} className="mt-5 mb-8 flex flex-wrap justify-evenly ">
          <button className="home-btn"
            style={{
              backgroundColor: "#F7CCAC",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "90px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <MdSell color={'#3A3845'} />
            <p className="ml-1 text-[#3A3845]">BUY</p>
          </button>
          <button className="home-btn"
            style={{
              backgroundColor: "#F7CCAC",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "90px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiFillShopping  color={'#3A3845'} />
            <p className="ml-1 text-[#3A3845] "> SELL</p>
          </button>
          <button className="home-btn"
            style={{
              backgroundColor: "#F7CCAC",
              color: "#ffffff",
              borderRadius: "0.25rem",
              fontWeight: "600",
              fontSize: "15px",
              margin: "5px",
              width: "90px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaBookmark color={'#3A3845'} />
            <p className="ml-1 text-[#3A3845]"> RENT</p>
          </button>
        </div>

        <section style={{zIndex: 3}} className="mt-10 w-full mb-10 ">
        <div className="text-center ">
          <h3 className="text-center font-bold mb-0  text-secondary bg-gray-200 p-2">
            Recommendation
          </h3>

          <h1 className="text-1xl text-center font-normal px-5 text-[#fff]">
            We recommend the best price, location and a safe environment for you
          </h1>
        </div>
      </section>
      
      </div>

      

      {/* Recommend component */}
      <Recommend />
      {/* Recommend component */}
    </main>
  );
}
