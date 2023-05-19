import HeroBanner from '@/components/HeroBanner'
import { Inter } from '@next/font/google'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'
import { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '@/utils/api'





export default function Home({products}) {


  return (
    <>
      <main className=''>
        <HeroBanner/>
        <Wrapper>
          <div className=' text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <h1 className='text-[30px] my-5 font-semibold'>{products.data?.[0]?.attributes?.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus recusandae sunt dolor aliquid unde, enim voluptate aliquam dolores delectus?</p>
          </div>
        </Wrapper>


        {/************************* Product Grid *********************************/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-14 mx-auto md:px-0 ">

        {products.data.map((product)=>(
          <ProductCard key={product.id} data={product}/>
        ))}
        
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


export async function getStaticProps(){

  const products = await fetchDataFromAPI("/api/products?populate=*")

  return{
    props: {products}
  }
}





