import React, { useState } from "react";
import logo from "../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-[#FEFEFE]" >
      <nav className="flex items-center justify-between w-full px-8 py-0 ">
        <div className="z-50 flex items-center justify-between w-full md:w-auto ">
          <img
            alt="logo"
            style={{
              height: 55,
              width: 100,
              marginTop: 30,
              paddingBottom: "2rem",
            }}
            src={require("../images/Nextmovee.png")}
            width={80}
          />
          <div className="md:hidden" onClick={() => setOpen((open) => !open)}>
            {open ? (
              <AiOutlineClose size={30} color="#C69B7B" />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>

        <div className="hidden gap-8 md:flex">
          <NavLink
            to={"/"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
                : { color: "#3A3845", fontWeight: "600", fontSize: 12 }
            }
          >
            HOME
          </NavLink>

          <NavLink
            to={"/services"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
                : { color: "#3A3845", fontWeight: "600", fontSize: 12 }
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to={"/properties"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
                : { color: "#3A3845", fontWeight: "600", fontSize: 12 }
            }
          >
            PROPERTIES
          </NavLink>

          <NavLink
            to={"/about"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
                : { color: "#3A3845", fontWeight: "600", fontSize: 12 }
            }
          >
            ABOUT US
          </NavLink>
        </div>
        <div className="hidden md:inline-block">
          <button
            className="bg-[#3A3845] hover:bg-[#C69B7B] focus:bg-[#37064B] active:bg-[#1A0125] transition-colors 
            duration-300 ease-in-out transform hover:scale-105 focus:outline-none px-4 py-3 rounded-md"
            onClick={() => navigate("/contact")}
          >
            <p
              style={{ fontWeight: 700, fontSize: 12 }}
              className="text-[#FFF] leading-none"
            >
              CONTACT US
            </p>
          </button>
        </div>

        {/* mobile nav */}
        <div
          className={`flex flex-col md:hidden py-24 absolute top-0  gap-8 px-10 w-full ${
            open ? "bg-[#3A3845]" : "bg-transparent"
          } h-[fit-content] duration-500 ${
            open ? "left-0" : "-left-full"
          } transition-all`}
        >
          <NavLink
            reloadDocument
            to={"/"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#Fff",
                    fontWeight: "600",
                    marginTop: 20,
                    fontSize: 12,
                  }
                : {
                    color: "#C69B7B",
                    fontWeight: "600",
                    marginTop: 20,
                    fontSize: 12,
                  }
            }
          >
            HOME
          </NavLink>

          <NavLink
            to={"/services"}
            reloadDocument
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontWeight: "600", fontSize: 12 }
                : { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            reloadDocument
            to={"/properties"}
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontSize: 12 }
                : { color: "#C69B7B", fontSize: 12 }
            }
          >
            PROPERTIES
          </NavLink>
          <NavLink
            to={"/about"}
            reloadDocument
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontWeight: "600", fontSize: 12 }
                : { color: "#C69B7B", fontWeight: "600", fontSize: 12 }
            }
          >
            ABOUT US
          </NavLink>

          <div className="">
            <button
              className="bg-[#C69B7B] hover:bg-[#F7CCAd] focus:bg-[#C69B7B] active:bg-[#C69B7B] transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none px-6 py-3 rounded-md"
              onClick={() => navigate("/contact")}
            >
              <p
                style={{ fontWeight: 700, fontSize: 12 }}
                className="text-[#3a3845] leading-none"
              >
                CONTACT US
              </p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
