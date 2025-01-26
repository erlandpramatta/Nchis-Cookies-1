import React, { useState } from 'react';
import Cookies from '../asset/cookies-about.png';
import Brownies from '../asset/brownies.png';

const ProductCard = ({ item, isBundle, addToCart, image }) => {
  return (
    <div className="lg:h-auto lg:w-64 h-80 w-44 rounded-2xl bg-gray-100 shadow-2xl shadow-black flex flex-col items-center justify-between pb-4">
      <img src={image} alt="cookies" className="lg:h-36 h-32 mt-4 lg:mt-8"/>
      <h2 className="font-semibold lg:text-2xl text-lg text-center mt-2">{item[0]}</h2>

      {isBundle ? (
        <details className='text-gray-500 text-center mt-2'>
          <summary className='font-light lg:text-lg text-md cursor-pointer'>
            Lihat Deskripsi
          </summary>
          <p className='mt-2 px-1 font-light text-sm'>
            {item[1]}
          </p>
        </details>
      ) : (
        <h2 className='font-light lg:text-lg text-md text-gray-500 mt-2'>{item[1]}</h2>
      )}

      <h2 className="font-semibold lg:text-2xl text-xl text-amber-600">Rp. {item[2].toLocaleString("id-ID")}</h2>
      <button
        onClick={() => addToCart(item[0], item[1], item[2])}
        className="mt-4 lg:px-12 lg:py-2 px-8 py-1 text-amber-700 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition duration-300"
      >
        Add
      </button>
    </div>
  );
};

const ProductCategory = ({ title, data, addToCart, image, isBundle = false }) => {
  return (
    <>
      <div className="max-w-4xl text-start ml-10 mt-20 text-white">
        <h2 className="text-3xl lg:font-bold font-semibold lg:px-24">{title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 gap-y-4 mx-6 md:mx-36 mt-11">
        {data.map((item, index) => (
          <ProductCard key={index} item={item} isBundle={isBundle} addToCart={addToCart} image={image} />
        ))}
      </div>
    </>
  );
};

const Product = () => {
  const [cart, setCart] = useState([])

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

  const categories = [
    { title: "Nastar", data: data, image: Cookies },
    { title: "Pastel Mini", data: data1, image: Cookies },
    { title: "Flower Cookies", data: data2, image: Cookies },
    { title: "Dream Cookies", data: data3, image: Cookies },
    { title: "Castangel", data: data4, image: Cookies },
    { title: "Fudge Brownies", data: data5, image: Cookies },
    { title: "Cheese Cream", data: data7, image: Cookies },
    { title: "Other Snacks", data: data6, image: Brownies },
    { title: "Bundles", data: data8, image: Brownies, isBundle: true },
  ];

  const addToCart = (productName, variant, price) => {
    setCart(prevCart => [...prevCart, { productName, variant, price }]);
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const handleOrder = () => {
    if (cart.length === 0) return;

    const itemsList = cart.map((item, index) => `
      ${index + 1}. ${item.productName} - ${item.variant} - Rp. ${item.price.toLocaleString("id-ID")}
    `).join('\n');

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const message = `Halo Kak Nchis👋, saya ingin memesan:
    
      Detail Pesanan:
      ${itemsList}
      
      Total Harga: Rp. ${totalPrice.toLocaleString("id-ID")}
  
      Ini data saya:
      - Nama:
      - Alamat Lengkap:
      - Email:
      - No. HP:
  
      Apakah Produk ini masih Tersedia?😀
  
      Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6285701557609?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="product" className='min-h-screen  flex flex-col '>
      <h1 className='text-center lg:font-bold font-semibold lg:text-5xl text-3xl mb-8 text-white'>Product</h1>
      <div>
        {categories.map((cat, index) => (
          <ProductCategory
            key={index}
            title={cat.title}
            data={cat.data}
            addToCart={addToCart}
            image={cat.image}
            isBundle={cat.isBundle || false}
          />
        ))}
      </div>

      {/* Cart */}
      <div className="min-h-auto flex items-center justify-center pt-8 px-2">
        {cart.length > 0 && (
          <div
            className='w-full bg-amber-900 bg-opacity-50 border-2 rounded-lg text-white p-4 flex flex-col items-center mt-10 mx-32'>
            <h2 className='text-lg font-semibold'>Keranjang</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className='flex justify-between w-full px-4'>
                  {item.productName} - {item.variant} - Rp. {item.price.toLocaleString("id-ID")}
                  <button onClick={() => removeFromCart(index)} className='ml-4 text-red-500 hover:text-red-700'>Hapus
                  </button>
                </li>
              ))}
            </ul>
            <h3 className='font-bold mt-2'>Total:
              Rp. {cart.reduce((total, item) => total + item.price, 0).toLocaleString("id-ID")}</h3>
            <button onClick={handleOrder}
                    className='mt-4 px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition duration-300'>Order Now
            </button>
          </div>
        )}
      </div>

    </section>
  );
};

export default Product;