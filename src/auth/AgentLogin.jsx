import React from "react";
import "./auth.style.css";

function AgentLogin() {
  return (
    <div className="min-h-screen p-3 flex flex-col md:flex-row bg-gray-100">
      <div className="bg-white mt-20  p-8 rounded-lg shadow-md flex flex-col md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form>
          <div className="mb-6">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="password"
                id="password"
                className="py-2 pl-4 pr-12 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" px-10 bg-primary animate-bounce my-2 text-[#fff] py-2 rounded hover:bg-secondary focus:outline-none focus:ring focus:secondary"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>

      <div
        className="md:w-1/2 bg-cover bg-center rounded-lg md:rounded-l-lg h-screen md:h-auto overflow-hidden md:flex-shrink-0"
        style={{
          backgroundImage: `url('https://source.unsplash.com/600x800/?property')`,
        }}
      >
        <div className="bg-black bg-opacity-40 h-full w-full"></div>
      </div>
    </div>
  );
}

export default AgentLogin;
