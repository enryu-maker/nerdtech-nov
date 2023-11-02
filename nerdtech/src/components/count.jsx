import React from "react";

const Count = () => {
  return (
    <div className=" flex justify-evenly items-center px-8 py-5  w-[450px] h-[100px] bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <span className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-yellow-500"> 100+</h2>
        <p className="text-sm text-black">Clients</p>
      </span>

      <span className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-yellow-500"> 20</h2>
        <p className="text-sm text-black">Products Build</p>
      </span>

      <span className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-yellow-500"> 10K</h2>
        <p className="text-sm text-black">Hours of Code</p>
      </span>
    </div>
  );
};

export default Count;
