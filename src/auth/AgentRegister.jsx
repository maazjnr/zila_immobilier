import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgentRegister= () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    gender: "",
    mobileNumber: "",
    currentLocation: "", // Initialize with an empty string
    email: "",
    password: "",
    retypePassword: "",
    yearsOfExperience: "",
    highestEducation: "",
    cvFile: null,
    desiredJobRole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cvFile: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the formData to your server or perform other actions
    console.log(formData);
  };

 

  const countryOptions = [
    "Select your country",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo (Congo-Kinshasa)",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (fmr. 'Swaziland')",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div className="min-h-screen md:p-20 flex flex-col bg-white md:flex-row bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>

        <h1 className="p-5 my-3 bg-primary text-secondaryx rounded">
          Your Personal Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-6">
            <select
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              style={{ maxWidth: "80%" }}
            >
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <h1 className="p-5 my-7 bg-primary text-secondaryx rounded">
              Your Login Information
            </h1>
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
              value={formData.retypePassword}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Retype Password"
            />
          </div>



          <h1 className="p-5 my-3 bg-primary text-secondaryx rounded">
          Your Social Platforms
        </h1>


        <div className="mb-6">
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.retypePassword}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Business phone number"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.password}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <input
              type="instagram"
              id="instagram"
              name="text"
              value={formData.email}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your instagram username"
            />
          </div>

          <div className="mb-6">
            <input
              type="instagram"
              id="instagram"
              name="text"
              value={formData.email}
              onChange={handleChange}
              className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your instagram url link here"
            />
          </div>


          


          
      
          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            className=" bg-primary text-[#fff] py-5 my-5 text-secondaryx animate-bounce uppercase text-xs  px-10 rounded hover:bg-secondary focus:outline-none focus:ring focus:secondary"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/agentLogin" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
      <div
        className="md:w-1/2 bg-cover bg-center h-screen md:h-auto overflow-hidden md:flex-shrink-0"
        style={{
          backgroundImage: `url('https://source.unsplash.com/600x800/?house')`,
        }}
      >
        <div className="bg-black bg-opacity-40 h-full w-full"></div>
      </div>
    </div>
  );
};

export default AgentRegister ;
