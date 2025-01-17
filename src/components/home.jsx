import React from 'react';
import background from '../asset/Background-Home.png';
import CookiesImage from '../asset/background-cookies.jpg'
import About from '../components/about'
import Product from '../components/product'
import Contact from '../components/contact'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section id="home" className="h-screen relative">
      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden"></div>

      {/* Mobile Content */}
      <div className="bg-gradient-to-b from-amber-950 to-black relative lg:hidden h-full flex flex-col justify-end px-4 pb-24 z-10">
        <h1 className="text-5xl font-bold text-start text-white">
          Bite Into <span className="text-amber-700/80">Happiness.</span>
        </h1>
        <h2 className="lg:text-4xl text-2xl text-white mt-2 text-start opacity-80">
          One Cookie at a Time
        </h2>
        <div className='mt-4'>
          <img src={CookiesImage} className='rounded-2xl' alt="" />
        </div>
        <a href='#product' className="flex justify-center items-center bg-amber-900 w-32 h-10 mx-32 rounded-lg text-center text-md font-semibold mt-8 text-white hover:text-amber-900 hover:bg-white transition duration-300">
          Order Now
        </a>
      </div>

      {/* Desktop Background */}
      <div
        className="hidden lg:flex bg-center bg-cover h-full text-white"
        style={{ backgroundImage: `url(${background})` }}
        >
        <div className="absolute top-1/2 px-24 transform -translate-y-1/2">
          <h1 className="text-8xl font-bold text-start text-white">
            Bite Into <span className="text-amber-600">Happiness.</span>
          </h1>
          <h2 className="text-6xl text-white mt-4 text-start opacity-80">
            One Cookie at a Time
          </h2>
          <a href="#product" className="flex justify-center items-center bg-amber-900 w-40 h-14 rounded-lg text-center text-xl font-semibold mt-8 text-white hover:bg-white hover:text-amber-900 transition duration-300">
            Order Now
          </a>
        </div>
      </div>
    </section>
    <div className="bg-gradient-to-b from-black via-amber-950 to-black">
      <About/>
      <Product/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
};

export default Home;
