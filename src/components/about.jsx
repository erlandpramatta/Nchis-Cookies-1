import React from "react";
import Cookies from "../asset/cookies-about.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-8 px-2">
      <div className="max-w-5xl text-start text-white">
        <h1 className="lg:text-5xl text-3xl lg:font-bold font-semibold justify-center lg:justify-start flex mb-6">About Us</h1>
        <div className="flex flex-col mt-14 mr-3 items-center sm:flex-row sm:items-start">
          <div className="sm:w-1/2">
            <img src={Cookies} alt="Cookies" className=" lg:w-96 w-64 mb-6 sm:mb-0" />
          </div>
          <div className="sm:w-1/2 pb-36 lg:pl-0 sm:pl-6">
            <p className="lg:text-xl text-md px-8 text-justify mt-16">
              Nchis Cookies is a Home Industry Manufacturer specializing in
              high-quality cookies. Initially focused on producing dry cakes,
              the business quickly gained popularity for its unique flavors and
              consistent quality. Over time, Nchis Cookies expanded its menu to
              include a variety of cookie options, catering to diverse tastes
              while maintaining its commitment to premium ingredients and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
