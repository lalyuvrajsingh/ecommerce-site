import HeroBanner from '@/components/HeroBanner'
import { Inter } from '@next/font/google'
import Wrapper from '@/components/Wrapper'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


      <main className=''>
        <HeroBanner/>
        <Wrapper>
          <div className=' text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <h1>HEading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus recusandae sunt dolor aliquid unde, enim voluptate aliquam dolores delectus?</p>
          </div>
        </Wrapper>
      </main>

    </>

  )
}
