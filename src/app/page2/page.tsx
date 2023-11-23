import NavBar from '@/components/NavBar/page';
import React from 'react';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar/page';
import Link from 'next/link';

function page2() {
  return (
    <>
    <div className='w-full h-full space-y-8'>
      <NavBar />
      <div className='flex justify-center space-x-12'>
      <section className="flex w-[600px] h-full">
         <div className='space-y-4'>
           <h1> Grow yourself with us </h1>
            <p className='text-6xl font-bold text-black'>
             Grow your skill & <br /> get world class <br /> job's
            </p>
           <p className='mt-2 text-small'>
              Non-disclosure agreement seed round seed money accelerator influencer.
               Growth hacking return nondis sure agreement <br /> seed
              round seed.
           </p>
         </div>
        </section>
        <section>
        <div className='flex w-96 justify'>
          <Image src="/images/icons/ihm.png" alt="" width={320} height={120} />
         </div>
      </section>
      </div>
       
    </div>
    <div className="flex justify-center mt-30">
          <button className="font-bold rounded w-[100px] mt-20 text-center text-white bg-green-400">
            <Link href='/'>Prev Page</Link>
          </button>
        </div>
    </>
    
  );
}

export default page2;
