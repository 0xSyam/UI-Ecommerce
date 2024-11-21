import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "src/assets/kursi.jpg",  
    "src/assets/kursi2.jpg",  
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 relative">
        <img
          src={images[currentImageIndex]}
          alt="Product"
          className="w-full aspect-[4/3] object-cover bg-gray-100"
        />
        
        <button 
  onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center"
>
  <svg width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4993 44.3017C23.3409 44.4595 23.1528 44.5847 22.9458 44.6701C22.7387 44.7556 22.5167 44.7996 22.2925 44.7996C22.0682 44.7996 21.8462 44.7556 21.6392 44.6701C21.4321 44.5847 21.244 44.4595 21.0856 44.3017L0.631092 23.9645C0.472353 23.8071 0.346413 23.6201 0.260481 23.4142C0.174551 23.2083 0.130318 22.9875 0.130318 22.7646C0.130318 22.5417 0.174551 22.321 0.260481 22.1151C0.346413 21.9092 0.472353 21.7221 0.631092 21.5647L21.0856 1.22756C21.4057 0.909324 21.8398 0.730545 22.2925 0.730545C22.7451 0.730545 23.1792 0.909325 23.4993 1.22756C23.8193 1.54579 23.9992 1.9774 23.9992 2.42745C23.9992 2.87749 23.8193 3.30911 23.4993 3.62734L4.24814 22.7646L23.4993 41.9019C23.658 42.0593 23.784 42.2463 23.8699 42.4522C23.9558 42.6581 24 42.8788 24 43.1018C24 43.3247 23.9558 43.5454 23.8699 43.7513C23.784 43.9572 23.658 44.1442 23.4993 44.3017Z" fill="white"/>
  </svg>
</button>

<button
  onClick={() => setCurrentImageIndex(prev => (prev + 1) % images.length)}
  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center"
>
  <svg width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.565898 0.69834C0.724235 0.540513 0.912334 0.415294 1.11942 0.329856C1.32651 0.244418 1.54851 0.200439 1.77272 0.200439C1.99692 0.200439 2.21893 0.244418 2.42601 0.329856C2.6331 0.415294 2.8212 0.540513 2.97953 0.69834L23.4341 21.0355C23.5928 21.1929 23.7188 21.3799 23.8047 21.5858C23.8906 21.7917 23.9349 22.0125 23.9349 22.2354C23.9349 22.4583 23.8906 22.679 23.8047 22.8849C23.7188 23.0908 23.5928 23.2779 23.4341 23.4353L2.97953 43.7724C2.65947 44.0907 2.22536 44.2695 1.77272 44.2695C1.32007 44.2695 0.885966 44.0907 0.565898 43.7724C0.24583 43.4542 0.066017 43.0226 0.066017 42.5726C0.066017 42.1225 0.24583 41.6909 0.565898 41.3727L19.817 22.2354L0.565898 3.09813C0.40716 2.9407 0.281218 2.75368 0.195286 2.54778C0.109355 2.34188 0.0651245 2.12115 0.0651245 1.89823C0.0651245 1.67531 0.109355 1.45458 0.195286 1.24869C0.281218 1.04279 0.40716 0.855769 0.565898 0.69834Z" fill="white"/>
  </svg>
</button>


        <div className="flex gap-2 mt-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-20 h-20 ${currentImageIndex === index ? 'ring-2 ring-blue-500' : ''}`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">Floating Phone</h1>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-gray-600">10 Reviews</span>
        </div>

        <div className="text-2xl font-bold mb-4">$1,139.33</div>

        <div className="mb-4">
          Availability: <span className="text-blue-500">In Stock</span>
        </div>

        <p className="text-gray-600 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

        <div className="flex gap-2 mb-6">
          <button className="w-8 h-8 rounded-full bg-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-green-500"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500"></button>
          <button className="w-8 h-8 rounded-full bg-blue-900"></button>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Select Options
          </button>
          <button className="p-2 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="p-2 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="p-2 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;