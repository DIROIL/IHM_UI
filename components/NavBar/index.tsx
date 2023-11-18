import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

const NavBar = () => {
    return (
        
        <div className="flex w-full px-4 py-4 gap-x-8 ">
            <div className='w-24'>
            <Link href="/" className="flex gap-2 ">
                <Image
                    src=""
                    alt="Skillhub"
                    width={30}
                    height={30}
                    className='object-contain'  />
            </Link>
            </div>
           
        
          <div className="flex w-24 space-x-4 text-black">
            <div>
            <Link href="/notAvailable">About Us </Link> 
            </div>
            <div>
            <Link href="/notAvailable">Courses </Link>
            </div>
            <div>
            <Link href="/notAvailable">resources </Link>
            </div>
              <div>
              <Link href="/notAvailable">Online Learning </Link>
              </div>
            </div>
            

            <div className='w-24'>
                <button  type="button" 
                  className='w-12 text-black bg-green-600 '> <Link href='/notAvailable'>Log In</Link>
                </button>
            </div>


        </div>
    )
    
};

export default NavBar;