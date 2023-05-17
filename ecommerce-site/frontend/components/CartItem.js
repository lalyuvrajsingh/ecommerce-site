import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'


const CartItem = () => {
    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-[50px]  md:w-[120px]"> 
                <img src="/assets/product-1.webp" className='rounded-lg'/>
            </div>

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-xl font-semibold Otext-black/[0.8]">
                        Jordan Retro 6 G R/diva
                    </div> 

                    <div className="text-sm md:text-md font-medium text-white/[0.65] block md:hidden">
                        Men&apos;s Golf Shoes
                    </div> 

                    <div className="text-sm md:text-md font-medium text-white/[0.65] mt-2">
                        MRP : $ 19,695.00
                    </div> 

                </div>

                <div className="text-sm md:text-md font-medium text-white/[0.65] block">
                        Men&apos;s Golf Shoes
                </div> 

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 m:gap-10 Otext-black/[0.5] text-sm md:text-md">
                        <div className='flex items-center gap-1'>
                            <div className="font-semibold text-white/[0.5]">Size:</div>
                            <select className='text-white/[0.5] hover:text-white' >
                                <option value="1">UK 6</option>
                                <option value="2">UK 6.5</option>
                                <option value="3">UK 7</option>
                                <option value="4">UK 7.5</option>
                                <option value="5">UK 8</option>
                                <option value="6">UK 8.5</option>
                                <option value="7">UK 9</option>
                                <option value="8">UK 9.5</option>
                                <option value="9">UK 10</option>
                                <option value="10">UK 10.5</option>
                                <option value="11">UK 11</option>
                            </select>
                        </div> 


                        <div className='flex items-center gap-1'>
                            <div className="font-semibold text-white/[0.5]">Quantity:</div>
                            <select className='text-white/[0.5] hover:text-white' >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                            </select>
                        </div> 


                    </div>

                    <RiDeleteBin6Line className="cursor-pointer text-white/[0.5]
                        hover:text-white text-[16px] md:text-[20px]" />

                </div>

            </div>




        </div>
    );
}

export default CartItem;
