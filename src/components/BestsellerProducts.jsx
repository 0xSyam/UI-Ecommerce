import React from 'react';

const BestsellerProducts = () => {
  const products = [
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/1.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/2.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/3.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/4.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/5.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/6.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/7.jpg" 
    },
    {
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      imgSrc: "/assets/8.jpg" 
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 m-20">
      <h2 className="text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
      <hr className="border-t border-[#ECECEC] mb-8" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4 aspect-square">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.department}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 font-medium">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {product.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;
