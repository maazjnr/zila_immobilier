import React from "react";

function About_Us() {
  return (
    <main className="about-container">
      <div
        style={{ zIndex: 3, textAlign: "center", width: "100%", padding: 20 }}
        className=""
      >
        <h1 className="about-title">More About us</h1>
        <h1 className="text-xs text-center text-sm text-[#fff]">
          We help clients buy and sell houses since 2019
        </h1>
        <div
          style={{
            height: 0.1,
            marginTop: 40,
            marginBottom: 5,
            width: "100%",
            backgroundColor: "#F7CCAC",
          }}
        ></div>
        <p className="px-3 text-[#fff] text-xs font-hairline text-secondary text-center ">
          With over $ Billion in sales, due to our great results, expertise and
          dedication, we rank amongst the best globally in property sales
          business. Our agency is the industry are among the best.
        </p>
      </div>
    </main>
  );
}
export default About_Us;
