import React from "react";
import AgentItem from "./List";

const agentPro = [
  {
    key: 1,
    agentImg: require("../../images/user1.jpg"),
    name: "John Elvis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2132",
    email: "AnnaProperty@gmail.com",
    instagram: "AnnabelPro",
    properties: "View Listings",
    role: 'Property Consultant'
  },
  {
    key: 2,
    agentImg: require("../../images/user2.jpg"),
    name: "Angela Okoye",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2133",
    email: "JohnSmithProperties@gmail.com",
    instagram: "JohnSmithRealty",
    properties: "View Listings",
    role: 'Property Agent'
  },
  {
    key: 3,
    agentImg: require("../../images/user3.jpg"),
    name: "Emily Davis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2134",
    email: "EmilyRealEstate@gmail.com",
    instagram: "EmilyProperties",
    properties: "View Listings",
    role: 'Real estate dealer'
  },
  {
    key: 4,
    agentImg: require("../../images/user4.jpg"),
    name: "Sophia Turner",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2135",
    email: "DanielRealty@gmail.com",
    instagram: "DanielHomes",
    properties: "View Listings",
    role: 'Property Adviser '
  },
  {
    key: 5,
    agentImg: require("../../images/user5.jpg"),
    name: "Daniel Clark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2136",
    email: "SophiaRealty@gmail.com",
    instagram: "SophiaEstates",
    properties: "View Listings",
    role: 'Property Consultant'
  },
  {
    key: 6,
    agentImg: require("../../images/user6.jpg"),
    name: "Michael Johnson",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2137",
    email: "MichaelHomes@gmail.com",
    instagram: "MichaelRealty",
    properties: "View Listings",
    role: 'Property Consultant'
  },
  {
    key: 7,
    agentImg: require("../../images/user7.jpg"),
    name: "Olivia White",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nihil? Tempora inventore quibusdam tempore, est eveniet rerum eum soluta doloremque nostrum reprehenderit sit assumenda vero id magni illum vel adipisci.",
    phone: "+44 330 212 2138",
    email: "OliviaRealEstate@gmail.com",
    instagram: "OliviaProperties",
    properties: "View Listings",
    role: 'Property Consultant'
  },
];




function AgentList() {
  return (
    <div className="flex flex-wrap">
      {agentPro.map((item) => (
        <AgentItem key={item.key} name={item.name} agentImg={item.agentImg} desc={item.desc} role={item.role} />
      ))}
    </div>
  );
}

export default AgentList;