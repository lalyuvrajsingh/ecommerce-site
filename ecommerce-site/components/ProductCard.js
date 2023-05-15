import React from 'react';
import Link from 'next/link';

const ProductCard = () => {
    return (
        <Link href='/product/1' className="transform overflow-hidden my-2 mx-5 duration-200 hover:scale-105 cursor-pointer">
            
                <img src="/assets/product-1.webp" className='rounded-[20px] shadow-md shadow-white/[0.5]' alt="" />
                <div className="mx-2">
                    <h2 className='text-lg bg-transparent my-4 '>Jordan N1F4</h2>
                    <div className="flex items-center ">
                        <p className='mr-3 text-lg font-semibold'>$20.00</p>
                        <p className='text-white/[0.5] text-base font-medium line-through'>$25.00</p>
                        <p className='ml-auto text-green-300 text-base font-medium'>20% off</p>
                    </div>
                </div>
                
            
        </Link>
    );
}

export default ProductCard;
