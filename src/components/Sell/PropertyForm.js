import React, { useState } from "react";

const PropertyForm = ({ onPropertySubmit }) => {
  const [propertyInfo, setPropertyInfo] = useState({
    propertyId: "",
    price: "",
    propertyType: "",
    location: "",
    bedrooms: 0,
    bathrooms: 0,
    kitchens: 0,
    parkingSpaces: 0,
    landSize: "",
    imageUrls: [], // Array to store multiple images
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo({ ...propertyInfo, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      const urls = files.map((file) => URL.createObjectURL(file));
      setPropertyInfo((prevInfo) => ({
        ...prevInfo,
        imageUrls: [...prevInfo.imageUrls, ...urls.slice(0, 10)],
      }));
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...propertyInfo.imageUrls];
    updatedImages.splice(index, 1);
    setPropertyInfo({ ...propertyInfo, imageUrls: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPropertySubmit(propertyInfo);
    // Reset the form after submission
    setPropertyInfo({
      propertyId: "",
      price: "",
      propertyType: "",
      location: "",
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      parkingSpaces: 0,
      landSize: "",
      imageUrls: [],
    });
  };

  return (
    <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg rounded-lg">
      {/* Form Section */}
      <div className="md:w-1/2 mr-8">
        <h2 className="text-2xl font-bold mb-4">Post a Property</h2>
        <form onSubmit={handleSubmit}>
          {/* Property ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property ID</label>
            <input
              type="text"
              name="propertyId"
              value={propertyInfo.propertyId}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Price</label>
            <input
              type="text"
              name="price"
              value={propertyInfo.price}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Property Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property Type</label>
            <input
              type="text"
              name="propertyType"
              value={propertyInfo.propertyType}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={propertyInfo.location}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Bedrooms */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={propertyInfo.bedrooms}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Bathrooms */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={propertyInfo.bathrooms}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Kitchens */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Kitchens</label>
            <input
              type="number"
              name="kitchens"
              value={propertyInfo.kitchens}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {/* Parking Spaces (Optional) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Parking Spaces</label>
            <input
              type="number"
              name="parkingSpaces"
              value={propertyInfo.parkingSpaces}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Land Size (Optional) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Land Size</label>
            <input
              type="text"
              name="landSize"
              value={propertyInfo.landSize}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Image Upload (Multiple) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Upload Images (Up to 10)</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={handleImageUpload}
              multiple
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Image Preview */}
          <div className="flex flex-wrap -m-2">
            {propertyInfo.imageUrls.map((url, index) => (
              <div key={index} className="m-2 relative">
                <img src={url} alt={`Property ${index}`} className="h-20 w-20 object-cover rounded-md" />
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-secondary my-10 text-sm py-2 px-6 rounded hover-bg-primary-dark focus:outline-none focus-ring focus-ring-primary-dark"
          >
            Post Property
          </button>
        </form>
      </div>

      <div
        className="md:w-1/2 bg-cover bg-center rounded-lg md:rounded-l-lg h-screen md:h-auto overflow-hidden md:flex-shrink-0"
        style={{
          backgroundImage: `url('https://source.unsplash.com/600x800/?home')`,
        }}
      >
        <div className="bg-black bg-opacity-40 h-full w-full"></div>
      </div>
    </div>
  );
};

export default PropertyForm;
