import Header from '@/component/Header'
import Section from '@/component/Section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center w-screen min-h-screen'>
      <Header />
      <div className='w-screen p-5 overflow-scroll'>
        <Section />
      </div>
    </main>
  )
}
