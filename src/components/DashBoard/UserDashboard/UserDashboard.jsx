import React from "react";
import "./style.css";
import { BsLink } from "react-icons/bs";
import { AiOutlineUser} from "react-icons/ai";
import { PiLockKeyOpenLight } from "react-icons/pi";
import { CiSaveDown1} from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  return (
    <main className="p-5 userDashboard-container my-20">
      <section
        style={{ zIndex: 3 }}
        className="text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl p-1 uppercase font-hairline text-primary ">
          Welcome to your Nextmovee Property Account Andrew Bumba
        </h1>

        <div style={{ zIndex: 3 }} className="mt-3 ">
          <div className="p-3 w-full md:w-1/3 mb-4 md:mb-0 flex flex-col">
            <button
              style={{ width: 250, height: 50, borderRadius: 100 }}
              className=" flex flex-row justify-center items-center hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white"
              onClick={() => navigate("/properties")}
            >
              <p
                style={{ fontWeight: 700 }}
                className="text-[#fff] text-xs p-2 font-primary"
              >
                EXPLORE PROPERTIES
              </p>

              <BsLink className="text-primary" />
            </button>
          </div>
        </div>
      </section>

    <section className="flex flex-wrap items-center justify-center my-2 ">
   <a href='/savedProperty'>
    <section style={{ zIndex: 3 }}>
        <div  className="overlay-container1 flex flex-col items-center justify-center py-2 m-3  text-center">
          <CiSaveDown1 style={{zIndex: 3}} size={35} color={'#fff'} />
          <h1 style={{zIndex: 3}} className="text-center  text-secondary ">Your Saved Property</h1>
        </div>
      </section>
      </a>

      <a href='/updateAcc'>
    <button>
    <section style={{ zIndex: 3 }}>
        <div  className="overlay-container2 flex flex-col items-center justify-center py-2 m-3  text-center">
          <AiOutlineUser style={{zIndex: 3}} size={35} color='#fff' />
          <h1 style={{zIndex: 3}} className="text-center  text-secondary ">My Account Details</h1>
        </div>
      </section>
    </button>
    </a>

    <a href='/updatePass'>
    <button>
    <section style={{ zIndex: 3 }}>
        <div  className="overlay-container3 flex flex-col items-center justify-center py-2 m-3  text-center">
        <PiLockKeyOpenLight style={{zIndex: 3, color: "#fff"}} size={35}  />
          <h1 style={{zIndex: 3}} className="text-center  text-secondary ">Update Password</h1>
        </div>
      </section>
    </button>
    </a>


    </section>


    </main>
  );
}

export default UserDashboard;
