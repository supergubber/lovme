import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import { MdBlock } from 'react-icons/md'

import { HiArrowDown } from 'react-icons/hi2'
import './section.css'
const Section = () => {
  const data = [
    {
      title: 'Expired',
      up: '1.94x',
      down: '2.06x',
      icon: <MdBlock />,
      price: '229.6330',
      prize: '7.5771',
    },
    {
      title: 'Expired',
      up: '1.76x',
      down: '2.32x',
      icon: <MdBlock />,
      price: '229.5264',
      prize: '5.2427',
    },
    {
      title: 'Expired',
      up: '1.84x',
      down: '2.32x',
      icon: <MdBlock />,
      price: '228.9473',
      prize: '8.5143',
    },
    {
      title: 'Expired',
      up: '1.96x',
      down: '2.32x',
      icon: <MdBlock />,
      price: '229.6330',
      prize: '7.5771',
    },
    {
      title: 'Live',
      up: '1.26x',
      down: '2.32x',
      icon: <FaRegPlayCircle />,
      price: '229.6330',
      prize: '7.5771',
    },
    {
      title: 'Next',
      up: '1.66x',
      down: '2.32x',
      icon: <FaRegPlayCircle />,
      price: '228.9473',
      prize: '8.5143',
    },
    {
      title: 'Later',
      up: '1.36x',
      down: '2.32x',
      icon: <FaRegClock />,
      price: '2.3760',
      prize: '7.5771',
    },
  ]
  const Card = ({ data }) => {
    return (
      <>
        <div className='border rounded-3xl w-[370px] overflow-hidden border border-[#ccc]'>
          <div className='flex flex-row items-center justify-between w-full p-3 bg-white border-b border-[#ccc] rounded-tr-3xl rounded-tl-3xl'>
            <div className='flex flex-row items-center gap-2'>
              {data.title === 'Next' || data.title === 'Live' ? (
                <FaRegPlayCircle className='text-xl text-[#7645D9]' />
              ) : data.title === 'Expired' ? (
                <MdBlock className='text-xl text-[#7645D9]' />
              ) : (
                <FaRegClock className='text-xl text-[#7645D9]' />
              )}
              <p className='font-bold text-[#7645D9]'>
                {data.title === 'Live'
                  ? 'Live'
                  : data.title === 'Expired'
                  ? 'Expired'
                  : data.title === 'Next'
                  ? 'Next'
                  : 'Later'}
              </p>
            </div>
            <div>
              <p className='text-[#6615D6]'>#218486</p>
            </div>
          </div>
          <div className='flex flex-col items-center overflow-hidden bg-white  h-[85%]'>
            <div className='w-9/12 overflow-hidden'>
              <div className='hexagon bg-[#dce3e4]'>
                <div className='content'>
                  <h3 className='text-[#24CFA9]'>UP</h3>
                  <p className='text-[#7364A6] text-sm'>{data.up}x Payout</p>
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
                  <p>${data.price}</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h3 className='text-xl font-bold'>Prize Pool:</h3>
                  <p className='text-xl font-bold'>{data.prize} BNB</p>
                </div>
              </div>
            </div>
            <div className='w-9/12 overflow-hidden'>
              <div className='hexagontop bg-[#ED4B9E]'>
                <div className='contenttop'>
                  <p className='text-sm'>{data.down} Payout</p>
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
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  )
}

export default Section
