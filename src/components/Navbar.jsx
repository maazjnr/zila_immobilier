import React, { useState } from "react";
import logo from "../images/logo.svg"
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidUser} from "react-icons/bi";
import { MdSell } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-[#FEFEFE]" >
      <nav className="flex items-center justify-between w-full px-8 py-0 ">
        <div className="z-50 flex items-center justify-between w-full md:w-auto ">
          {/* <img
            alt="logo"
            style={{
              height: 55,
              width: 100,
              marginTop: 30,
              paddingBottom: "2rem",
            }}
            src={require("../images/Nextmovee.png")}
            width={80}
          /> */}
                      <button
                        onClick={() => navigate("/buy")}
                        className="home-btn "
                        style={{
                          backgroundColor: "#3A3845",
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
                        <p className="ml-1 text-xs  text-[#fff] font-primary">
                         Zima Immobilier
                        </p>
                      </button>
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
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            HOME
          </NavLink>

          <NavLink
            to={"/agents"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            AGENTS
          </NavLink>

          <NavLink
            to={"/services"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to={"/properties"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            PROPERTIES
          </NavLink>

          <NavLink
            to={"/about"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            ABOUT US
          </NavLink>

          
          <NavLink
            to={"/adminDashboard"}
            style={({ isActive }) =>
              isActive
                ? { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
                : { color: "#3A3845", fontWeight: "500", fontSize: 10 }
            }
          >
            ADMIN DASHBOARD
          </NavLink>


        </div>
        <div className="hidden md:inline-block">
        <button className="bg-primary rounded ml-2 " onClick={() => navigate("/login")}>
            <p className="text-secondaryx text-xs p-3 px-5  font-primary">
              <BiSolidUser />
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
            to={"/agents"}
            reloadDocument
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontWeight: "500", fontSize: 10}
                : { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
            }
          >
            AGENTS
          </NavLink>

          <NavLink
            to={"/services"}
            reloadDocument
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontWeight: "500", fontSize: 10}
                : { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
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
                ? { color: "#Fff", fontWeight: "500", fontSize: 10}
                : { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
            }
          >
            ABOUT US
          </NavLink>

          <NavLink
            to={"/adminDashboard"}
            reloadDocument
            style={({ isActive }) =>
              isActive
                ? { color: "#Fff", fontWeight: "500", fontSize: 10}
                : { color: "#C69B7B", fontWeight: "500", fontSize: 10 }
            }
          >
            ADMIN DASHBOARD
          </NavLink>

          <div className="">
          <button className="bg-secondaryx rounded " onClick={() => navigate("/login")}>
            <p className="text-primary text-xs p-3 px-7  font-primary">
              <BiSolidUser />
            </p>
          </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
