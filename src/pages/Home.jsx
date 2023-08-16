import Navbar from "../components/Navbar"; // Make sure to adjust the path to your Navbar component
import Recommend from "../components/Recommend/Recommend";
import { MdSell } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import VideoBg from "../video/homevid.mp4";
import { useNavigate } from "react-router-dom";
import {HiUserGroup} from 'react-icons/hi';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center ">
      <div className="flex home-bg justify-center flex-col items-center px-3 ">
        <video autoPlay muted loop>
          <source src={VideoBg} type="video/mp4" />
        </video>

        <div className="flex flex-col  items-center text-center  relative z-10">
          <section className="text-center">
            <h1
              className="text-secondary  text-4xl font-primary  mb-3  font-primary leading-normal font-bold"
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
            className="home-btn "
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
            <MdSell color={"#3A3845"} />
            <p className="ml-1 text-[#3A3845] font-primary">BUY</p>
          </button>
          <button
            className="home-btn"
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
            <AiFillShopping color={"#3A3845"} />
            <p className="ml-1 text-[#3A3845] font-primary"> SELL</p>
          </button>
          <button
            className="home-btn"
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
            <FaBookmark color={"#3A3845"} />
            <p className="ml-1 text-[#3A3845] font-primary"> RENT</p>
          </button>
        </div>

          <div className="w-full mt-14 relative">
            <input
              type="text"
              placeholder="Search for your dream home..."
              className="border font-primary shadow-lg rounded px-5 py-3 w-full bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-2">
              <button
                style={{ backgroundColor: "#3A3845" }}
                className="bg-gray rounded px-3 py-2 text-white focus:outline-none"
              >
                <BiSearch color="white" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

       
        <section style={{zIndex: 3, marginTop: 15}}>
          <h1 className="text-md text-center py-1 font-bold text-sm text-[#fff]">Find Your Next Home Anywhere Around the Globe</h1>
          <p className="py-1 px-3 text-[#fff] text-xs font-hairline text-center ">
            Through our proprietary platform, Nextmovee is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </section>

        <div className="mt-7">
            <button
              className="bg-[#fff] hover:bg-[#F7CCAd] flex flex-row items-center focus:bg-[#C69B7B] active:bg-[#C69B7B] transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none px-6 py-3 rounded"
              onClick={() => navigate("/about")}
            >
                <HiUserGroup size={11} color={'#3a3845'} />
              <p
                style={{ fontWeight: 700, fontSize: 12 }}
                className="text-[#3a3845] ml-1 font-primary leading-none"
              >
               More about nextmovee
              </p>
            
            </button>

            
          </div>

      </div>

      {/* Recommend component */}
      <Recommend />
      {/* Recommend component */}
    </main>
  );
}


//https://lasvegas.wpresidence.net/