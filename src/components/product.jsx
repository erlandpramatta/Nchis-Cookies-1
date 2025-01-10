import React from 'react';
import Cookies from '../asset/cookies-about.png';
import Brownies from '../asset/brownies.png';

const Product = () => {
  return (
    <section id="product" className='min-h-screen  flex flex-col '>
      <h1 className='text-center lg:font-bold font-semibold lg:text-5xl text-3xl mb-8 text-white'>Product</h1>
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Cookies</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {[...Array(9)].map((_, index) => (
          <div key={index} className='lg:h-80 lg:w-64 h-64 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-2 lg:mt-4'/>
            <h2 className='font-semibold lg:text-2xl text-xl mt-2'>Choco Cookies</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. 40.000</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Brownies</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-10 mx-6 lg:mx-36 mt-11 mb-4'>
        {[...Array(9)].map((_, index) => (
          <div key={index} className='lg:h-80 lg:w-64 h-64 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Brownies} alt='cookies' className='h-28 w-36 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-xl mt-4'>Brownies</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. 80.000</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
