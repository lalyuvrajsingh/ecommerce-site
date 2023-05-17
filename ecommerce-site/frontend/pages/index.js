import HeroBanner from '@/components/HeroBanner'
import { Inter } from '@next/font/google'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'
import client from '../backend/lib/client'; // Replace with the correct path to your sanity client file
import product from '@/backend/schemas/product';


const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {

  return (
    <>
      <main className=''>
        <HeroBanner/>
        <Wrapper>
          <div className=' text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <h1 className='text-[30px] my-5 font-semibold'>{product.title[0]}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus recusandae sunt dolor aliquid unde, enim voluptate aliquam dolores delectus?</p>
          </div>
        </Wrapper>


        {/************************* Product Grid *********************************/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-14 mx-auto md:px-0 ">
        {products?.map((product) => {
          product.name
        })}
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        {/************************* Product Grid *********************************/}
        
      </main>

    </>

  )
}




export async function handler(req, res) {
  try {
    const data = await client.fetch('*[_type == "product"]');
    const products = await client.fetch(query)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }

  return{
    props: {products}
  }

}



