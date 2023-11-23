"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main  style={{ backgroundColor: 'black',minHeight: '100vh' }} >
      <div className='flex justify-center'>
        
        <section className='justify-start mt-10 h-full p-2 space-y-8 w-[600px]' >
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

        <section className='h-full p-2 mt-4 space-y-6 text-white'>

        <div className='items-center space-y-2 bg-gray-800 text-center rounded-xl w-[240px] h-[190px]'>
          <div className="flex justify-center">
          <img src="/images/icons/ihm3.png.png" alt="" width={37} height={37}/>
          </div>
            
            <p>Study with me</p>
            <p>Study learn via live-time with <br /> people around the world</p>
            <button className='text-black  bg-green-400 rounded-full w-[150px] h-[42px] '> Join now </button>
        </div>

          <div className='p-2 space-y-2 text-white bg-gray-800 rounded'>
           <p className='text-white'>Discover the community you want</p>
           <p >From design,programming,to study stream</p>
           <button className='h-10 pl-2 bg-black rounded w-72 text-start'> Discover communities </button>
        </div>

          <div className='flex h-8 align-middle bg-gray-800 rounded'>
            <div className="mt-1 ml-2">
            <img src="/images/icons/ihm2.png.png" alt="."  width={25} height={8} />
            </div>
            
            <p className="mt-1 ml-2"> Framer Community</p>
          </div>

          <div className='flex h-8 align-middle bg-gray-800 rounded'>
            <div className="mt-1 ml-2">
            <img src="/images/icons/ihm1.png.png" alt="."  width={25} height={10} />
            </div>
            
            <p className="mt-1 ml-2">Behance Network</p>
          </div>

        </section>
        
      </div>
      <div className="flex justify-center ">
          <button className="font-bold rounded w-[100px] text-center ml-4 mt-4 text-black bg-green-400">
            <Link href='/page2'>Next Page</Link>
          </button>
        </div>
    </main>
  );
}
