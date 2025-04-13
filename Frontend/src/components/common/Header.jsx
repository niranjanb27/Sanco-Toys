import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import {useUserStore} from "../../context/useUserStore.js"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const userData = useUserStore((state)=>state.userData);
  // if(!userData)return null;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    
     <nav className="bg-white shadow-md sticky top-0 z-50">
     <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      
    {/* Logo */}
    <a href="/" className="flex items-center">
      <img src="/Sanco.png" alt="Company Logo" className="h-16 w-auto" />
    </a>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-7 text-[17px]">
      <a href="/" className="px-2 py-1 hover:text-blue-600 transition">Home</a>
      <a href="/shop" className="px-2 py-1 hover:text-blue-600 transition">Shop</a>
      <a href="/about" className="px-2 py-1 hover:text-blue-600 transition">About</a>
      <a href="/orders" className="px-2 py-1 hover:text-blue-600 transition">My Orders</a>

      <a href="/cart" className="relative px-2 py-1 hover:text-blue-600 transition">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">3</span>
      </a>

      {/* Show UserButton if logged in, else show login icon */}
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="hover:text-blue-600 transition">
            <User className="w-5 h-5" />
          </button>
        </SignInButton>
      </SignedOut>

    </div>

    {/* Mobile Toggle Button */}
    <div className="md:hidden">
      <button onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden px-4 pb-4 space-y-3 text-[16px]">
      <a href="/" className="block px-2 py-1">Home</a>
      <a href="/shop" className="block px-2 py-1">Shop</a>
      <a href="/about" className="block px-2 py-1">About</a>
      <a href="/orders" className="block px-2 py-1">My Orders</a>
      <a href="/cart" className="flex items-center space-x-2 px-2 py-1">
        <ShoppingCart className="w-5 h-5" />
        <span>Cart</span>
      </a>

      {/* Auth-aware section */}
      <div className="border-t pt-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center space-x-2 px-2 py-1">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
          </SignInButton>
        </SignedOut>

      </div>
    </div>
  )}
     </nav>
    
  )

  // return (
  //   <nav className="bg-white shadow-md sticky top-0 z-50">
  //     {userData.role==="admin" ? (
  //       <>
  //         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
  //       {/* Logo */}
  //       <a href="/" className="flex items-center">
  //         <img src="/Sanco.png" alt="Company Logo" className="h-16 w-auto" />
  //       </a>

  //       {/* Desktop Menu */}
  //       <div className="hidden md:flex items-center space-x-7 text-[17px]">
  //         <a href="/" className="px-2 py-1 hover:text-blue-600 transition">DashBoard</a>
  //         <a href="/shop" className="px-2 py-1 hover:text-blue-600 transition">Products</a>
  //         <a href="/about" className="px-2 py-1 hover:text-blue-600 transition">Create Product</a>
  //         <a href="/orders" className="px-2 py-1 hover:text-blue-600 transition">All Orders</a>
  //         <a href="/orders" className="px-2 py-1 hover:text-blue-600 transition">All Users</a>

         

  //         {/* Show UserButton if logged in, else show login icon */}
  //         <SignedIn>
  //           <UserButton afterSignOutUrl="/" />
  //         </SignedIn>
  //         <SignedOut>
  //           <SignInButton mode="modal">
  //             <button className="hover:text-blue-600 transition">
  //               <User className="w-5 h-5" />
  //             </button>
  //           </SignInButton>
  //         </SignedOut>

  //       </div>

  //       {/* Mobile Toggle Button */}
  //       <div className="md:hidden">
  //         <button onClick={toggleMobileMenu}>
  //           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  //         </button>
  //       </div>
  //     </div>

  //     {/* Mobile Menu */}
  //     {isMobileMenuOpen && (
  //       <div className="md:hidden px-4 pb-4 space-y-3 text-[16px]">
  //         <a href="/" className="block px-2 py-1">Dashboard</a>
  //         <a href="/shop" className="block px-2 py-1">Product</a>
  //         <a href="/about" className="block px-2 py-1">Create Product</a>
  //         <a href="/orders" className="block px-2 py-1">All Orders</a>
  //         <a href="/orders" className="block px-2 py-1">All Users</a>
          

  //         {/* Auth-aware section */}
  //         <div className="border-t pt-3">
  //           <SignedIn>
  //             <UserButton afterSignOutUrl="/" />
  //           </SignedIn>
  //           <SignedOut>
  //             <SignInButton mode="modal">
  //               <button className="flex items-center space-x-2 px-2 py-1">
  //                 <User className="w-5 h-5" />
  //                 <span>Login</span>
  //               </button>
  //             </SignInButton>
  //           </SignedOut>

  //         </div>
  //       </div>
  //     )}
  //       </>
  //     )
  //     :(
  //       <>
  //       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
  //       {/* Logo */}
  //       <a href="/" className="flex items-center">
  //         <img src="/Sanco.png" alt="Company Logo" className="h-16 w-auto" />
  //       </a>

  //       {/* Desktop Menu */}
  //       <div className="hidden md:flex items-center space-x-7 text-[17px]">
  //         <a href="/" className="px-2 py-1 hover:text-blue-600 transition">Home</a>
  //         <a href="/shop" className="px-2 py-1 hover:text-blue-600 transition">Shop</a>
  //         <a href="/about" className="px-2 py-1 hover:text-blue-600 transition">About</a>
  //         <a href="/orders" className="px-2 py-1 hover:text-blue-600 transition">My Orders</a>

  //         <a href="/cart" className="relative px-2 py-1 hover:text-blue-600 transition">
  //           <ShoppingCart className="w-5 h-5" />
  //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">3</span>
  //         </a>

  //         {/* Show UserButton if logged in, else show login icon */}
  //         <SignedIn>
  //           <UserButton afterSignOutUrl="/" />
  //         </SignedIn>
  //         <SignedOut>
  //           <SignInButton mode="modal">
  //             <button className="hover:text-blue-600 transition">
  //               <User className="w-5 h-5" />
  //             </button>
  //           </SignInButton>
  //         </SignedOut>

  //       </div>

  //       {/* Mobile Toggle Button */}
  //       <div className="md:hidden">
  //         <button onClick={toggleMobileMenu}>
  //           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  //         </button>
  //       </div>
  //     </div>

  //     {/* Mobile Menu */}
  //     {isMobileMenuOpen && (
  //       <div className="md:hidden px-4 pb-4 space-y-3 text-[16px]">
  //         <a href="/" className="block px-2 py-1">Home</a>
  //         <a href="/shop" className="block px-2 py-1">Shop</a>
  //         <a href="/about" className="block px-2 py-1">About</a>
  //         <a href="/orders" className="block px-2 py-1">My Orders</a>
  //         <a href="/cart" className="flex items-center space-x-2 px-2 py-1">
  //           <ShoppingCart className="w-5 h-5" />
  //           <span>Cart</span>
  //         </a>

  //         {/* Auth-aware section */}
  //         <div className="border-t pt-3">
  //           <SignedIn>
  //             <UserButton afterSignOutUrl="/" />
  //           </SignedIn>
  //           <SignedOut>
  //             <SignInButton mode="modal">
  //               <button className="flex items-center space-x-2 px-2 py-1">
  //                 <User className="w-5 h-5" />
  //                 <span>Login</span>
  //               </button>
  //             </SignInButton>
  //           </SignedOut>

  //         </div>
  //       </div>
  //     )}</>
  //     )}
  //   </nav>
  // );
};

export default Navbar;
