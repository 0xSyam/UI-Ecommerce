import React, { useState } from 'react';
import { Phone, Mail, Search, ShoppingCart, Heart, Menu, X, User, Instagram, Youtube, Facebook, Twitter, } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="hidden md:block w-full bg-[#23856D] text-white">
        <div className="container mx-auto px-20 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">michelle.rivera@example.com</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm">Follow Us and get a chance to win 80% off</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow Us :</span>
              <div className="flex space-x-2">
                <Instagram size={16} />
                <Youtube size={16} />
                <Twitter size={16} />
                <Facebook size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="container mx-auto px-20 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-[#737373] hover:text-[#23A6F0]">Home</a>
              <div className="relative group">
                <button className="flex items-center text-[#737373] hover:text-[#23A6F0]">
                  Shop
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-2">
                  <a href="#" className="block px-4 py-2 text-[#737373] hover:bg-gray-100">Men</a>
                  <a href="#" className="block px-4 py-2 text-[#737373] hover:bg-gray-100">Women</a>
                  <a href="#" className="block px-4 py-2 text-[#737373] hover:bg-gray-100">Kids</a>
                </div>
              </div>
              <a href="#" className="text-[#737373] hover:text-[#23A6F0]">About</a>
              <a href="#" className="text-[#737373] hover:text-[#23A6F0]">Blog</a>
              <a href="#" className="text-[#737373] hover:text-[#23A6F0]">Contact</a>
              <a href="#" className="text-[#737373] hover:text-[#23A6F0]">Pages</a>
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-2">
              <User className="w-5 h-5 text-[#23A6F0]" />
              <a href="#" className="text-[#23A6F0] hover:text-[#23856D]">
                Login / Register
              </a>
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-[#23A6F0]" />
                <div className="flex items-center space-x-1 relative">
               <ShoppingCart className="w-5 h-5 text-[#23A6F0]" />
               <span className="text-[#23A6F0] text-xs font-bold">
                1
              </span>
              </div>

                <div className="flex items-center space-x-1 relative">
               <Heart className="w-5 h-5 text-[#23A6F0]" />
               <span className="text-[#23A6F0] text-xs font-bold">
                1
              </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
       <div className="md:hidden border-b">
       <div className="bg-white">
         <div className="flex flex-col items-center py-4 px-4 space-y-4">
           <a href="#" className="text-lg text-[#252B42] font-medium text-center">Home</a>
           <a href="#" className="text-lg text-[#737373] text-center">Shop</a>
           <a href="#" className="text-lg text-[#737373] text-center">About</a>
           <a href="#" className="text-lg text-[#737373] text-center">Blog</a>
           <a href="#" className="text-lg text-[#737373] text-center">Contact</a>
           <a href="#" className="text-lg text-[#737373] text-center">Pages</a>
           <div className="flex items-center justify-center text-[#23A6F0]">
             <User className="w-5 h-5 mr-2" />
             <span>Login / Register</span>
           </div>
           <div className="flex flex-col items-center space-y-4">
             <div className="flex items-center justify-center">
               <Search className="w-5 h-5 text-[#23A6F0]" />
             </div>
             <div className="flex items-center space-x-1 relative">
               <ShoppingCart className="w-5 h-5 text-[#23A6F0]" />
               <span className="text-[#23A6F0] text-xs font-bold">
                1
              </span>
              </div>

                <div className="flex items-center space-x-1 relative">
               <Heart className="w-5 h-5 text-[#23A6F0]" />
               <span className="text-[#23A6F0] text-xs font-bold">
                1
              </span>
              </div>
           </div>
         </div>
       </div>
     </div>
     

      )}

      <div className="bg-gray-100">
        <div className="container mx-auto px-20 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <a href="#" className="text-[#252B42] font-bold hover:text-[#23A6F0]">Home</a>
            <span className="text-[#737373]">&gt;</span>
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;