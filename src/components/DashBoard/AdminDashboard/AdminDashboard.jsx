import React from "react";
import "./Admin.style.css";
import { AiOutlineDelete, AiOutlineCheckSquare } from "react-icons/ai";

function AdminDashboard() {
  return (
    <main>
      <h1 className="text-2xl text-primary p-10 font-normal">
        Requested Posts
      </h1>

      <div className="bg-[#Ffffff] p-6">
        <button className="w-full bg-[#fff] p-3 requestBtn  rounded-md flex flex-row justify-between items-center">
    
        <div>
        <div className="flex flex-row items-center space-x-2">
            <div className="h-20 w-20">
              <img
                className="rounded-md"
                src={require("../../../images/user1.jpg")}
              />
            </div>

            <div>
              <h4 className="text-uppercase font-hairline">Benjamin White</h4>
              <h4 className="font-normal text-xs text-left">Kingston Lane</h4>
              <p className="text-[10px] py-1 text-[#f00] text-left">10/29/2023</p>
            </div>
          </div>

        </div>

          <div>
            <button>
              <AiOutlineCheckSquare className="m-1" color="green" size={24} />
            </button>
            <button>
              <AiOutlineDelete className="m-1" color="red" size={24} />
            </button>
          </div>
        </button>
      </div>
    </main>
  );
}

export default AdminDashboard;
