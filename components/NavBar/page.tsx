import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import SearchBar from '../SearchBar/page';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 ">
      <div className="w-20">
        <Link href="/" className="flex gap-2 ">
          <Image src="/images/icons/skill.png" alt="Skillhub"  width={100} height={50} />
        </Link>
      </div>

      <div className="flex justify-center gap-4 text-black ">
        
        <div className=''>
        <SearchBar />
      </div>
      <div className='mr-2'>
          <Link href="/notAvailable">About Us </Link>
        </div>
        <div className='ml-2'>
          <Link href="/notAvailable">Courses </Link>
        </div>
        <div className='ml-2'>
          <Link href="/notAvailable">Resources </Link>
        </div>
        <div className='ml-2'>
          <Link href="/notAvailable">Online Learning </Link>
        </div>
      </div>

        <button className="w-[100px] h-8 rounded text-white bg-green-400 ">
          <Link href="/notAvailable">Log In</Link>
        </button>
    </div>
  );
};

export default NavBar;
