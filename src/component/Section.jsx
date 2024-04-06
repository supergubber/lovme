import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi2'
import './section.css'
const Section = () => {
  const Card = () => {
    return (
      <>
        <div className='border rounded-3xl w-[370px] overflow-hidden'>
          <div className='flex flex-row items-center justify-between w-full p-3 bg-white rounded-tr-3xl rounded-tl-3xl'>
            <div className='flex flex-row items-center gap-2'>
              <FaRegPlayCircle className='text-xl text-[#7645D9]' />
              <p className='font-bold text-[#7645D9]'>LIVE</p>
            </div>
            <div>
              <p className='text-[#6615D6]'>#218486</p>
            </div>
          </div>
          <div className='flex flex-col items-center overflow-hidden bg-green-100 h-[85%]'>
            <div className='w-9/12 overflow-hidden'>
              <div className='hexagon bg-[#dce3e4]'>
                <div className='content'>
                  <h3 className='text-[#24CFA9]'>UP</h3>
                  <p className='text-[#7364A6] text-sm'>1.76x Payout</p>
                </div>
              </div>
            </div>
            <div className='w-[90%]  border-[3px] border-[#EE60A7] rounded-md relative p-3 flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <div>
                  <h3 className='text-sm text-[#7364A6] font-bold'>
                    LAST PRICE
                  </h3>
                </div>
                <div className='flex flex-row justify-between sitems-center text-bold'>
                  <h2 className='font-bold text-[#EE60A7] text-2xl'>
                    $228.9473
                  </h2>
                  <button className='flex flex-row items-center bg-[#EE60A7] px-3 py-2 text-white rounded-md font-bold gap-2'>
                    <HiArrowDown className='font-[900]' />
                    <p>$-0.4141</p>
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center justify-between'>
                  <h3>Locked Price:</h3>
                  <p>$228.9473</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h3>Prize Pool:</h3>
                  <p>8.5164 BNB</p>
                </div>
              </div>
            </div>
            <div className='w-9/12 overflow-hidden'>
              <div className='hexagontop bg-[#ED4B9E]'>
                <div className='contenttop'>
                  <p className='text-sm'>2.32x Payout</p>
                  <h3>Down</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='flex flex-row items-center justify-center gap-10 py-2 overflow-scroll w-min g-p-10'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Section
