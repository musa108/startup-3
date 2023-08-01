import React from "react";

const Header = () => {
  return (
    <header>
      <nav className=" flex justify-around mt-4 font-sans items-center">
                <h1 className="text-[#1E0E62] text-[24px] font-[700]">Startup 3</h1>

        <ul className="flex gap-x-4 text-[18px] text-[#151439] opacity-[40%] text-center font-[500] ">
          <li>Home</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Shop</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-5 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </ul>
        <div className=" flex gap-x-3">
            <button className=" text-[18px] text-[#151439] opacity-[40%] font-[500]">Sign Up</button>
        <button className="rounded-full bg-[#25DAC5] p-1 text-[18px] text-[#fff] font-[500]">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
