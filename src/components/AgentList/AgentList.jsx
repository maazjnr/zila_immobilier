
import React from "react";
import AgentItem from "./List";

const agentPro = [
  {
    key: 1,
    agentImg: require("../../images/user1.jpg"),
    name: "John Elvis",
    desc: "John is a highly experienced property consultant with over 10 years in the London real estate market. He specialises in luxury apartments and investment properties, guiding clients through every step of the buying and selling process.",
    phone: "+44 330 212 2132",
    email: "AnnaProperty@gmail.com",
    instagram: "AnnabelPro",
    properties: "View Listings",
    role: "Property Consultant",
  },
  {
    key: 2,
    agentImg: require("../../images/user2.jpg"),
    name: "Angela Okoye",
    desc: "Angela has built a strong reputation as a trusted property agent, helping families and investors find their dream homes across London and the surrounding areas. She prides herself on professionalism and client satisfaction.",
    phone: "+44 330 212 2133",
    email: "JohnSmithProperties@gmail.com",
    instagram: "JohnSmithRealty",
    properties: "View Listings",
    role: "Property Agent",
  },
  {
    key: 3,
    agentImg: require("../../images/user3.jpg"),
    name: "Emily Davis",
    desc: "Emily is passionate about real estate and has a keen eye for modern property trends. She specialises in residential homes and is dedicated to making the buying process smooth and stress-free for her clients.",
    phone: "+44 330 212 2134",
    email: "EmilyRealEstate@gmail.com",
    instagram: "EmilyProperties",
    properties: "View Listings",
    role: "Real Estate Dealer",
  },
  {
    key: 4,
    agentImg: require("../../images/user4.jpg"),
    name: "Sophia Turner",
    desc: "Sophia brings a wealth of knowledge in property consultancy, focusing on both sales and lettings. Known for her clear communication and attention to detail, she ensures her clients always feel supported.",
    phone: "+44 330 212 2135",
    email: "DanielRealty@gmail.com",
    instagram: "DanielHomes",
    properties: "View Listings",
    role: "Property Adviser",
  },
  {
    key: 5,
    agentImg: require("../../images/user5.jpg"),
    name: "Daniel Clark",
    desc: "Daniel specialises in luxury and investment properties in central London. With a strong network of clients and investors, he provides personalised advice to ensure the best returns on property investments.",
    phone: "+44 330 212 2136",
    email: "SophiaRealty@gmail.com",
    instagram: "SophiaEstates",
    properties: "View Listings",
    role: "Property Consultant",
  },
  {
    key: 6,
    agentImg: require("../../images/user6.jpg"),
    name: "Michael Johnson",
    desc: "Michael has extensive experience in property development and sales. His focus is on helping clients find long-term value, whether buying their first home or expanding a property portfolio.",
    phone: "+44 330 212 2137",
    email: "MichaelHomes@gmail.com",
    instagram: "MichaelRealty",
    properties: "View Listings",
    role: "Property Consultant",
  },
  {
    key: 7,
    agentImg: require("../../images/user7.jpg"),
    name: "Olivia White",
    desc: "Olivia is a friendly and approachable consultant, known for her dedication to client needs. She works extensively with young professionals and families looking for modern homes across London.",
    phone: "+44 330 212 2138",
    email: "OliviaRealEstate@gmail.com",
    instagram: "OliviaProperties",
    properties: "View Listings",
    role: "Property Consultant",
  },
];

function AgentList() {
  return (
    <div className="flex flex-wrap">
      {agentPro.map((item) => (
        <AgentItem
          key={item.key}
          name={item.name}
          agentImg={item.agentImg}
          desc={item.desc}
          role={item.role}
        />
      ))}
    </div>
  );
}

export default AgentList;

