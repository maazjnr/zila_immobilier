import React from "react";
import AgentList from "../components/AgentList/AgentList";
import { IoIosArrowForward } from "react-icons/io";
import { FaUsers} from "react-icons/fa";

function Agents() {
  return (
    <main className="p-5 my-5">
      <div className="flex flex-wrap items-center py-4 justify-around bg-primary ">
        <section className="flex flex-row items-center py-4 ">
          <a href="/home">
            {" "}
            <h1 className="text-primaryx">Home </h1>
          </a>
          <IoIosArrowForward className="mt-1 text-primaryx" size={15} />
          <h1 className="text-primaryx"> Agents</h1>
        </section>
        <h1 className="font-hairline text-3xl text-center py-3 text-primaryx">
         Zima L’immobilier Property Agent
        </h1>
      </div>

      <div className="flex flex-wrap space-y-3 justify-between my-10 p-5 ">
        <h1 className="font-hairline text-3xl text-lef text-primaryx">
          Team of Agency
        </h1>

        <a href="/agentRegister" >
        <button className="bg-primary flex flex-row items-center space-x-2 items-center p-4 px-4 rounded">
        <FaUsers color={"#fff"} />
          <a className="text-secondaryx text-sm font-bold">Become an agent </a>
          
        </button>
        </a>
      </div>

      <AgentList />
    </main>
  );
}

export default Agents;
