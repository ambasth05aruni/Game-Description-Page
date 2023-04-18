import React from 'react'
import myLogo from '../assets/gamelogo.jpg'
import gameImg from '../assets/gameImage.jpeg'

const Page = () => {
  return (
    <div className='body h-fit  w-full bg-gradient-to-b from-zinc-800 to-stone-600 text-white lg:flex lg:flex-col lg:justify-between'>
    < div className='head flex items-center'>
        <div>
        <img className='w-20 mx-10 lg:ml-80 my-6 rounded-md ' src={myLogo} alt="" />
        </div>
      <div className=''>
         <h2 className='font-bold lg:text-xl'>CryptoKitties</h2>
         <p className='my-2'>Etherum</p>
         <p>Genre:Virtual-Pet</p>
      </div>
      <div className='button bg-slate-900  hover:bg-neutral-800 rounded-full duration-300 py-1 px-6 relative mx-20 lg:mx-96'>
        <button className=''>Play Now</button>
      </div>
    </div>


    <div className='img2 flex flex-row w-52 items-center my-6  lg:w-72'>
    <img className=' mx-12 lg:ml-96 ' src={gameImg} alt="" />
    <img className='mx-12 ' src={gameImg} alt="" />
    </div>


    <div className="data mx-12 my-10  lg:mx-16 ">
        <h3 className='font-bold my-2 lg:text-2xl'>Short Description:</h3>
        <p className='my-2 sm:break-words lg:text-lg'>
            CryptoKitties is a game centered around breedable, collectible,
             and oh-so-adorable creatures we call CryptoKitties! Each cat is
             one-of-a-kind and 100% owned by you.
        </p>
        <p className='my-3 lg:text-xl lg:font-semibold'>
            Publisher: Dapper Labs
        </p>
        <p className='my-3 lg:text-xl lg:font-semibold'>
            Release Date: 28 November 2017
        </p>
        <p className='lg:text-xl'>
            Developer: Roham, Raul Piirimees, Jack Pickett, Vivian, Jordan
        </p>
        <p className='my-4 lg:text-2xl lg:font-bold'>
            Minimum System Requirements
        </p>
        <p>
          <li className='lg:text-lg'>os:MacBook, Windows</li>
          <li className='lg:text-lg'>processor:------</li>
          <li className='lg:text-lg'>memory:-----</li>
          <li className='lg:text-lg'>graphics:-----</li>
          <li className='lg:text-lg'>storage:-----</li>
        </p>
        <p className='my-5 lg:text-2xl lg:font-bold'>Long Description</p>
        <p className='my-2 flex justify-center lg:text-lg'>
            In CryptoKitties, users collect and breed oh-so-adorable creatures that we 
            call CryptoKitties! Each kitty has a unique genome that defines its appearence and traits. Players can breed their kitties to 
            create new furry  friends and unlock rare attributes. CryptoKitties is one of the world's first 
            blockchain games.'Blockchain' is the technology that make things like  Bitcoin possible. While CryptoKitties isn't a 
            digital currency, it does offer  the same security: each CryptoKitty is one-of-a-kind and 100% owned by  you. It 
            cannot be replicated, taken away, or destroyed.
        </p>
    </div>
    </div>
  )
}

export default Page
