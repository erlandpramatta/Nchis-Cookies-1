import React from 'react';
import logo from '../asset/logo.png';
import shopping from '../asset/shopping.png';
import add from '../asset/add.png'

const Dashboard = () => { 
  return (
    <div className="bg-orange-100 w-full">
      <div className="flex bg-amber-700/65 w-1/3 px-52 h-screen justify-center">
        <div className="relative rounded-2xl bg-orange-100 px-44 h-44 flex flex-col items-center justify-center my-10">
          <div className="absolute -left-2"> 
            <img src={logo} alt="logo" className="h-40 w-40" />
          </div>
          <div className="absolute ml-32"> 
            <h1 className="font-bold text-3xl">Nchis Cookies</h1>
            <p className="text-xl">Cookies & Cake</p> 
          </div>
        </div>
        <div className='absolute my-60 gap-y-2'>
          <h1 className='text-white text-2xl font-bold mr-32'>Admin Dashboard</h1>
        </div>
        <div className='absolute rounded-2xl bg-orange-100 px-44 h-[440px] flex flex-col items-center justify-center my-72'>
          <button className='flex-col bg-amber-800 text-white absolute w-72 h-20 rounded-xl shadow-md shadow-gray-700 -mt-44'>
            <div className='absolute -left-2 bottom-2'>
              <img src={shopping} alt='shopping' className='h-16 w-16 ml-4'/>
            </div>
            <div className='font-bold text-3xl text-center'>
               <h1>Product</h1>
            </div>
          </button>
          <button className='mt-4 flex-col bg-white hover:bg-amber-800 hover:text-white transition duration-300 absolute w-72 h-20 rounded-xl shadow-md shadow-gray-700'>
            <div className='absolute -mt-2'>
              <img src={add} alt='add' className='h-10 w-10 ml-4'/>
            </div>
            <div className='font-bold text-3xl text-center'>
               <h1>Add</h1>
            </div>
          </button>
        </div>
      </div>
      <div className=''>

      </div>
    </div>
  );
};

export default Dashboard;
