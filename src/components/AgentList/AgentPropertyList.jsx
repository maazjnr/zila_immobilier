import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import PropertyList from '../../components/Property/PropertyList';


function AgentPropertyList() {
  return (
    <main className="p-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 ">
        <section className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            className="rounded-lg w-full"
            src={require("../../images/user1.jpg")}
          />
        </section>

        <section className="w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-semibold text-primary">John Elvis</h1>
          <p className="text-md font-hairline my-2 text-primaryx">
            Property Consultant
          </p>
          <p className="text-sm mt-2 text-justify">
            Property Consultant who specializes in the real estate industry. In
            his role, he primarily provides professional guidance and services
            related to the buying, selling, or leasing of real estate
            properties. His responsibilities typically include <br />
            Market Analysis: John Elvis conducts thorough market research and
            analysis to stay updated on current trends and property values in
            specific areas. This knowledge helps his clients make informed
            decisions about their real estate investments. <br />
            Property Evaluation: He assesses the condition, value, and potential
            of various properties, offering advice on which ones are suitable
            for his clients' needs and goals. Client Consultation: John works
            closely with clients, understanding their preferences, budget, and
            objectives. He helps them define their property requirements and
            assists in identifying suitable options. Property Listings: <br />{" "}
            For sellers, John Elvis assists in listing properties, creating
            compelling marketing materials, and determining appropriate pricing
            strategies to attract potential buyers. Property Searches: For
            buyers or renters, he conducts property searches based on their
            criteria, arranging viewings, and providing insights on available
            options.
          </p>

          <div className="mt-10 items-center flex flex-wrap ">
           <span className="flex items-center flex-row mx-2 mt-2">
              <IoLocationOutline size={20} className="text-primaryx ml-1" />
              <h2 className="text-primaryx ml-1">London, UK</h2>
            </span>

           <span className="flex items-center flex-row mx-2 mt-2">
              <button>
                <a href="https://www.google.com">
                  <BiPhoneCall size={20} className="text-primaryx ml-1" />
                </a>
              </button>
              <h2 className="text-primaryx ml-1">+44 2832 922 823</h2>
            </span>

           <span className="flex items-center flex-row mx-2 mt-2">
              <HiOutlineMail size={20} className="text-primaryx ml-1" />
              <h2 className="text-primaryx ml-1">jelvis@gmail.com</h2>
            </span>

           <span className="flex items-center flex-row mx-2 mt-2">
              <AiOutlineInstagram size={20} className="text-primaryx ml-1" />
              <h2 className="text-primaryx ml-1"> John Elvis Home</h2>
            </span>
          </div>
        </section>
      </div>

      <PropertyList />
      
    </main>
  );
}

export default AgentPropertyList;
