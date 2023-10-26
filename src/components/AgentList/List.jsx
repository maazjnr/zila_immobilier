import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function AgentItem({ name, agentImg, desc, properties, role }) {
  return (
    <div className="p-5 h-full mt-5 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="flex flex-row items-center space-x-3 shadow-md ">
        <div className="p-1 w-full ">
          <img src={agentImg} alt={name} className="rounded-md " />
        </div>
        <section className="p-5">
          <h1 className="text-lg font-semibold text-primary">{name}</h1>
          <p className="text-md font-hairline my-4 text-primaryx">{role}</p>
          <p className="text-sm mt-2">{desc}</p>

          <div className="py-5 flex flex-col  justify-start">
            <div>
              <button>
                <a href="https://www.google.com">
                  <AiOutlineInstagram
                    size={24}
                    className="text-primaryx"
                    style={{ margin: 5 }}
                  />
                </a>
              </button>

              <button>
                <a href="https://www.google.com">
                  <BiPhoneCall
                    size={24}
                    className="text-primaryx"
                    style={{ margin: 5 }}
                  />
                </a>
              </button>

              <button>
                <a className="text-xs" href="https://www.google.com">
                  <HiOutlineMail
                    size={24}
                    className="text-primaryx"
                    style={{ margin: 5 }}
                  />
                </a>
              </button>
            </div>

            <a href="/agentPropertyList" >
            <button  className="bg-primary hover:bg-primaryx my-4 text-[#fff] py-2 px-4 rounded-md  animate-bounce">
            Properties Listing
            </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AgentItem;
