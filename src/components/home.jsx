import React from "react";

const Home = () => {
  return (
    <main className="text-center mt-8 font-sans flex justify-center items-center flex-col">
      <h1 className="text-[#1E0E62] text-[72px] font-[700]">Startup Framework</h1>
      <h3 className="text-[22px] text-[#151439] opacity-[40%] font-[500] w-[560px]">
        We made it so beutiful and simple. It combines landings, pages, blogs
        and shop screens. It is definitely the tool you need in your collection!
      </h3>
      <button className=" bg-[#25DAC5] rounded-full w-[300px] h-[60px] capitalize text-[20px] text-[#fff] font-[500] mt-10 ">Purchase Now for $248</button>
      <p className=" text-[#25DAC5] text-[18px] font-[500] mt-2">Learn More</p>
    </main>
  );
};

export default Home;
