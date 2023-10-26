import React from "react";
import Property from "./Property"; // Import the Property component

const propertiesData = [
  {
    id: 1,
    price: "$500,000.00",
    address: "London, UK",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/property1.jpg"),
    sale: "for sale"
  },

  {
    id: 2,
    price: "$500,000.00",
    address: "Faulkner Ave",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house1.jpg"),
    sale: "for sale"
  },

  {
    id: 3,
    price: "$800,000.00",
    address: "Washington",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 5,
    bathrooms: 3,
    kitchen: 2,
    imageUrl: require("../../images/property2.jpg"),
    sale: "for sale"
  },

  {
    id: 4,
    price: "$2 Million",
    address: "Monochrome House",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 4,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house1.jpg"),
    sale: "for sale"
  },

  {
    id: 5,
    price: "$500,400.00",
    address: "United Kingdom",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 4,
    bathrooms: 3,
    kitchen: 3,
    imageUrl: require("../../images/property3.jpg"),
    sale: "for sale"
  },

  {
    id: 6,
    price: "$2,620",
    address: "Faulkner Ave",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house3.jpg"),
    sale: "for rent"
  },
  {
    id: 7,
    price: "$3,080",
    address: "Beverly Springfield",
    location: "2821 Lake, Sevilla, Palm Harbor, TX",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house2.jpg"),
    sale: "for rent"
  },
  {
    id: 8,
    price: "$7 million",
    address: "The Old Steele",
    location: "103 Lake Shores, Michiang, IN",
    beds: 2,
    bathrooms: 1,
    kitchen: 1,
    imageUrl: require("../../images/house4.jpg"),
    sale: "for sale"
  },
  
  {
    id: 9,
    price: "$300,200.00",
    address: "Wales",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 10,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/property4.jpg"),
    sale: "for sale"
  },
  {
    id: 10,
    price: "$5 million",
    address: "Curvy Black lite",
    location: "243 Crew Low road, International road",
    beds: 3,
    bathrooms: 2,
    kitchen: 2,
    imageUrl: require("../../images/house6.jpg"),
    sale: "for sale"
  },
  {
    id: 11,
    price: "$1,000",
    address: "Flat Rich Style",
    location: "Birmingham line 2033, Globe Itl",
    beds: 4,
    bathrooms: 2,
    kitchen: 2,
    imageUrl: require("../../images/house5.jpg"),
    sale: "for rent"
  },

  {
    id: 12,
    price: "$500,000.00",
    address: "Faulkner Ave",
    location: "2699 Green valley, Highlight Lake, FL",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house1.jpg"),
    sale: "for sale"
  },

];

function PropertyList() {
  return (
    <div className="property-container bg-primary flex flex-wrap">
      {propertiesData.map((property) => (
        <Property
          key={property.id}
          price={property.price}
          address={property.address}
          location={property.location}
          beds={property.beds}
          bathrooms={property.bathrooms}
          kitchen={property.kitchen}
          imageUrl={property.imageUrl}
          sale={property.sale}
        />
      ))}
    </div>
  );
}

export default PropertyList;
