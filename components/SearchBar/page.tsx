import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="w-80 h-8 justify-center">

      <div className="w-full h-full border-2 border-gray-800 rounded-lg  flex items-center ">

        <div className="h-full w-12 flex justify-center items-center"> <CiSearch size={16} /> </div>

        <input type="text" className="text-black cursor-auto h-full ml-4 w-80 outline-none " placeholder="type..." />

        <div className="w-full h-full bg-green-400 rounded flex justify-end items-center">
          <button className="text-white h-full w-full"> Search </button>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
