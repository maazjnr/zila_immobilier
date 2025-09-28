import React from "react";
import Property from "./Property"; // Import the Property component

const propertiesData = [
  {
    id: 1,
    price: "£500,000.00",
    address: "London, UK",
    location: "2699 Green Valley, Camden, London NW1",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/property1.jpg"),
    sale: "for sale"
  },

  {
    id: 2,
    price: "£500,000.00",
    address: "Manchester, UK",
    location: "14 Faulkner Street, Manchester M1",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house1.jpg"),
    sale: "for sale"
  },

  {
    id: 3,
    price: "£800,000.00",
    address: "Birmingham, UK",
    location: "21 Washington Street, Birmingham B1",
    beds: 5,
    bathrooms: 3,
    kitchen: 2,
    imageUrl: require("../../images/property2.jpg"),
    sale: "for sale"
  },

  {
    id: 4,
    price: "£2,000,000",
    address: "Monochrome House, London",
    location: "77 Mayfair Road, Westminster, London W1",
    beds: 4,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house1.jpg"),
    sale: "for sale"
  },

  {
    id: 5,
    price: "£500,400.00",
    address: "Leeds, UK",
    location: "203 Headingley Lane, Leeds LS6",
    beds: 4,
    bathrooms: 3,
    kitchen: 3,
    imageUrl: require("../../images/property3.jpg"),
    sale: "for sale"
  },

  {
    id: 6,
    price: "£2,620 / month",
    address: "Liverpool, UK",
    location: "88 Faulkner Avenue, Liverpool L1",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house3.jpg"),
    sale: "for rent"
  },

  {
    id: 7,
    price: "£3,080 / month",
    address: "Bristol, UK",
    location: "42 Springfield Road, Bristol BS1",
    beds: 3,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/house2.jpg"),
    sale: "for rent"
  },

  {
    id: 8,
    price: "£7,000,000",
    address: "The Old Steele, London",
    location: "103 Lakeview Crescent, Richmond, London TW9",
    beds: 2,
    bathrooms: 1,
    kitchen: 1,
    imageUrl: require("../../images/house4.jpg"),
    sale: "for sale"
  },

  {
    id: 9,
    price: "£300,200.00",
    address: "Cardiff, Wales",
    location: "55 Cathedral Road, Cardiff CF11",
    beds: 10,
    bathrooms: 2,
    kitchen: 1,
    imageUrl: require("../../images/property4.jpg"),
    sale: "for sale"
  },

  {
    id: 10,
    price: "£5,000,000",
    address: "Edinburgh, Scotland",
    location: "243 Crewe Road, Edinburgh EH4",
    beds: 3,
    bathrooms: 2,
    kitchen: 2,
    imageUrl: require("../../images/house6.jpg"),
    sale: "for sale"
  },

  {
    id: 11,
    price: "£1,000 / month",
    address: "Birmingham, UK",
    location: "203 Globe Road, Birmingham B12",
    beds: 4,
    bathrooms: 2,
    kitchen: 2,
    imageUrl: require("../../images/house5.jpg"),
    sale: "for rent"
  },

  {
    id: 12,
    price: "£500,000.00",
    address: "Sheffield, UK",
    location: "12 Faulkner Avenue, Sheffield S1",
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
