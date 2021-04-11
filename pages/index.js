import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
  }
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100' />
          <Avatar url="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </header>
      <form className='flex flex-col items-center mt-44 flex-grow'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
        />
        <div className='flex w-full nt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-3 items-center sm:max-w-xl
        '>
          <SearchIcon className='h-5 mr-5 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>

          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}