import React from 'react'
import Coin from '../images/coin.png'
import Card from '../images/card.png'
// import Clock from '../images/clock.png'
import Clock from '../images/clock-removebg-preview (1).png'
import Image from 'next/image'
import { HiArrowLeft } from 'react-icons/hi2'
import { HiArrowRight } from 'react-icons/hi2'
import { GoQuestion } from 'react-icons/go'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { GoTrophy } from 'react-icons/go'

const Header = () => {
  return (
    <>
      <div className='w-screen px-0 py-4 '>
        <div className='flex flex-row flex-wrap items-center justify-between w-11/12 mx-auto text-black gap-y-5'>
          <div className='relative flex flex-row gap-3 px-3 py-2 pl-10 bg-white rounded-full'>
            <Image
              src={Coin}
              alt='coin'
              className='absolute -left-5 z-10 -top-3 w-[60px] h-[60px]'
            />
            <h2 className='font-bold'>BNBUSD</h2>
            <p>$228.5332</p>
          </div>
          <div className='relative flex flex-row items-center px-3 py-1 bg-white rounded-full gap-[90px] md:ml-36'>
            <HiArrowLeft className='text-2xl font-bold cursor-pointer text-[#1EC7D3]' />
            <Image
              src={Card}
              alt='coin'
              className='absolute left-[50%] right-[50%] w-[70px] h-[60px] -translate-x-[50%]'
            />
            <HiArrowRight className='text-2xl font-bold cursor-pointer text-[#1EC7D3]' />
          </div>
          <div className='flex flex-row items-center gap-5'>
            <div className='relative flex flex-row gap-3 px-3 py-2 pr-10 mr-8 bg-white rounded-full'>
              <h2 className='font-bold text-lg text-[#1EC7D3]'>00:38</h2>
              <p className='text-sm text-[#1EC7D3]'>5pm</p>
              <Image
                src={Clock}
                alt='clock'
                className='absolute -right-7 z-10 -top-4 w-[65px] h-[65px]'
              />
            </div>
            <div className='bg-[#7A6EAA] p-3 rounded-xl shadow-md shadow-[#100e1a]'>
              <GoQuestion className='text-3xl text-white ' />
            </div>
            <div className='bg-[#7A6EAA] p-3 rounded-xl shadow-md shadow-[#100e1a]'>
              <GoTrophy className='text-3xl text-white ' />
            </div>
            <div className='bg-[#E9EAEB] p-3 rounded-xl shadow-md shadow-[#dfdced]'>
              <FaClockRotateLeft className='text-3xl text-white ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
