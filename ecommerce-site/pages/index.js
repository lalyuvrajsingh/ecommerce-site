import HeroBanner from '@/components/HeroBanner'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


      <main className='text-3xl h-[2000px]'>
        <HeroBanner/>
      </main>

    </>

  )
}
