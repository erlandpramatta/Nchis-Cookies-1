import React from 'react';
import Cookies from '../asset/cookies-about.png';
import Brownies from '../asset/brownies.png';

const Product = () => {

  const data = [
    ["Nastar Tabur Keju","300 Gram", 50000],
    ["Nastar Tabur Keju", "500 Gram", 95000],
    ["Nastar Polos","250 Gram", 45000],
    ["Nastar Polos","350 Gram", 60000],
    ["Nastar Polos","500 Gram", 80000],
  ]

  const data1 = [
    ["Pastel Mini Abon Sapi","100 Gram", 18000],
    ["Pastel Mini Abon Sapi","200 Gram", 35000],
    ["Pastel Mini Abon Sapi","350 Gram", 60000],

  ]

  const data2 = [
    ["Flower Cookies (Jar)","250 Gram", 28000],
    ["Flower Cookies (Pouch)","200 Gram", 18000],
  ]
  
  const data3 = [
    ["Dream Cookies (Jar)","160 Gram", 25000],
    ["Dream Cookies (Jar)","250 Gram", 40000],

  ]

  const data4 = [
    ["Castangel","250 Gram", 50000],
    ["Castangel","500 Gram", 90000],
  ]

  const data5 = [
    ["Fudge Brownies","uk. 22x10", 50000],
    ["Fudge Brownies","uk. 15x10", 38000],
    ["Fudge Brownies","uk. 2x1", 6000],
  ]

  const data6 = [
    ["Bolu Cake","uk. 22x10", 38000],
    ["Soes Fla Mini","10 Pcs", 20000],
    ["Crispy Almond Cookies","100 Gram", 40000],
    ["Nugget Frozen","450 Gram", 40000],
  ]

  const data7 = [
    ["Chese Cream","Oreo", 15000],
    ["Chese Cream","Matcha", 15000],
    ["Chese Cream","Green Tea", 15000],
    ["Chese Cream","Red Velvet", 15000],
  ]

  const data8 = [
    ["Paket 1","Bolu Jadul, Misoa Goreng, Gabin Tape, Soesvla Vanilla", 12000],
    ["Paket 2","Fudge Brownies, Puding & Fla, Risol Sayur & Telur, Emping Mlinjo", 12000],
    ["Paket 3","Tahu Baso, Cendol Keju, Bolu Cake Tabur Keju, Chese Cream Red Velvet", 12000],
    ["Paket 4","Bolu Jadul, Tahu Baso, Klepon, Cendol Keju", 12000],
  ]

  return (
    <section id="product" className='min-h-screen  flex flex-col '>
      <h1 className='text-center lg:font-bold font-semibold lg:text-5xl text-3xl mb-8 text-white'>Product</h1>
      {/* Nastar */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Nastar</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data.map((data, index) => (
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Pastel */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Pastel Mini</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data1.map((data1, index) => (
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data1[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data1[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data1[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Flower Cookies */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Flower Cookies</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data2.map((data2, index) => (
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data2[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data2[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data2[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Dream Cookies */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Dream Cookies </h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data3.map((data3, index) => (
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data3[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data3[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data3[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Castangel */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Castangel</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data4.map((data4, index) => (
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Cookies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data4[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data4[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data4[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Fudge Brownies */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Fudge Brownies</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data5.map((data5, index) => (  
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Brownies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data5[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data5[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data5[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Cheese Cream */}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Cheese Cream</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data7.map((data7, index) => (  
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Brownies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data7[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data7[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data7[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Other*/}
      <div className='max-w-4xl text-start ml-10 mt-20 text-white'>
        <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Other Snacks</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
        {data6.map((data6, index) => (  
          <div key={index} className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-start'>
            <img src={Brownies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
            <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data6[0]}</h2>
            <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{data6[1]}</h2>
            <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data6[2].toLocaleString("id-ID")}</h2>
            <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
          </div>
        ))}
      </div>
      {/* Bundles */}
<div className='max-w-4xl text-start ml-10 mt-20 text-white'>
  <h2 className='text-3xl lg:font-bold font-semibold lg:px-24'>Bundles</h2>
</div>
<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11'>
  {data8.map((data8, index) => (
    <div 
      key={index} 
      className='lg:h-96 lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-between pb-4'
    >
      <img src={Brownies} alt='cookies' className='lg:h-36 h-32 mt-4 lg:mt-8'/>
      <h2 className='font-semibold lg:text-2xl text-lg text-center mt-2'>{data8[0]}</h2>
      <details className='text-gray-500 text-center mt-2'>
        <summary className='font-light lg:text-lg text-md cursor-pointer'>
          Lihat Deskripsi
        </summary>
        <p className='mt-2 font-light text-sm'>
          {data8[1]}
        </p>
      </details>
      <h2 className='font-semibold lg:text-2xl text-xl text-amber-600'>Rp. {data8[2].toLocaleString("id-ID")}</h2>
      <button className='mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300'>Order</button>
    </div>
  ))}
</div>

    </section>
  );
};

export default Product;
