import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-500 w-full h-20 flex items-center justify-between">
      {/* logo */}
      <div className="ml-7 text-white hover:text-black duration-700 hover:cursor-pointer"> 
        <p className="text-5xl font-bold">LOGO</p>
      </div>


      {/* menu */}
      <div className="flex mr-10 ">
        <p className="text-2xl text-white">Home</p>
        <p className="text-2xl text-white mx-10">Product</p>
        <p className="text-2xl text-white">Cart</p>
        <p className="text-2xl text-white mx-10">Setting</p>
      </div>
    </div>
  );
};

export default Navbar;
