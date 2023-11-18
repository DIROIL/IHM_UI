"use client"
import Link from "next/link";

// modules import

// projects import

export default function Home() {
  return (
    <main  style={{ backgroundColor: 'black',minHeight: '100vh' }} >
      <div className='flex justify-center'>
        
        <section className='justify-start mt-10 h-full p-2 space-y-12 w-[600px]' >
          <p className='text-6xl font-medium text-green-600'>
            Tons of <br /> supportive <br /> community you <br /> can discover
          </p>
          <p className='text-white '>
            Search any type and field of community you want, by searching on <br />
            the Search page you can discover tons of supportive <br />
            community that will help you with your work
          </p>
          <button type="button" className="text-blue-900 bg-black rounded-full w-[260px] h-[50px] border border-gray-700">
            Explore the communities
          </button>
        </section>

        <section className='h-full p-2 space-y-8 text-white'>

        <div className='items-center space-y-2 bg-gray-800 text-center rounded-xl w-[240px] h-[190px]'>
            <img src="" alt=".1" />
            <p>Study with me</p>
            <p className='text-gray-600'>Study learn via live-time with <br /> people around the world</p>
            <button className='text-black  bg-green-400 rounded-full w-[150px] h-[42px] '> Join now </button>
        </div>

          <div className='p-4 space-y-2 bg-gray-800 rounded-xl'>
           <p className='text-white'>Discover the community you want</p>
           <p className='text-gray-600'>From design,programming,to study stream</p>
           <button className='h-10 text-gray-600 bg-black w-72 rounded-xl text-start'> Discover communities </button>
        </div>

          <div className='flex h-12 bg-gray-800 rounded-xl'>
            <img src="" alt="." />
            <p> Framer Community</p>
          </div>

          <div className='flex h-12 bg-gray-800 rounded-xl'>
            <img src="" alt="." />
            <p>Behance Network</p>
          </div>

        </section>
        
      </div>
      <div className="flex justify-center mt-6">
          <button className="font-bold rounded w-[100px] text-center text-black bg-green-400">
            <Link href='/page2'>Next Page</Link>
          </button>
        </div>
    </main>
  );
}
