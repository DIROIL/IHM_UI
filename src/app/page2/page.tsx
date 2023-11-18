import NavBar from '@/components/NavBar';
import React from 'react';
import Image from 'next/image';

function page2() {
  return (
    <>
    <div className='w-full h-full'>
      <NavBar />
      <div className='flex justify-center m-4'>
        <h1> SEARCH BAR </h1>
      </div>
      <section className="flex w-full h-full">
        <div>
          <h1> Grow yourself with us </h1>
          <p className='text-6xl font-bold text-black'>
            Grow your skill & <br /> get world class <br /> job's
          </p>
          <p>
            Non-disclosure agreement seed round seed money accelerator influencer.
             Growth hacking return nondis sure agreement <br /> seed
            round seed.
          </p>
        </div>

        <div>
          <Image src="/images/icons/diroil.jpeg" alt="" width={220} height={50} />
        </div>
      </section>
    </div>
    </>
    
  );
}

export default page2;
