import React from 'react';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full">
                        <ProductDetailsCarousel/>
                    </div>
                    <div className="flex-[1] py-3">

                        <div className="text-[34px] font-semibold mb-2">
                        Jordan N1F4
                        </div>

                        <div className="text-md font-semibold my-2">
                            Men&apos;s Golf Shoes
                        </div>

                        <div className="font-semibold mt-6">
                            MRP : $ 19,695.00
                        </div>

                        <div className="text-sm text-white/[0.5]">
                            incl. of taxes
                        </div>

                        <div className="text-sm text-white/[0.5] mb-10">
                            {`Also includes all applicable duties`}
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <div className="font-semibold">
                                Select Size
                            </div>
                            <div className=" align-right text-white/[0.5]">
                                Select Guide
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-3 text-sm gap-2"> 
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        <div className="border text-sm border-black/[0.5] bg-white/[0.1] rounded-lg text-center  py-3
                        font-medium hover:bg-black/[0.1] cursor-pointer">
                            UK 6
                            
                        </div>
                        </div>

                        <div className="text-sm my-1 text-red-500">
                                Size selection is required
                            </div>

                    <button className="w-full py-4 rounded-full mt-4 bg-black text-white Obg-black text-lg font-medium transition-transform active: scale-95 mb-3
                    hover:opacity-75">
                    Add to Cart
                    </button>

                    <button className="w-full py-4 rounded-full border Obg-black text-lg font-medium transition-transform  active: scale-95 mb-3
                    hover:opacity-75">
                    Buy Now
                    </button>

                    <div>
                        <div className="text-xl mt-5 mb-5 font-semibold">
                            Product Details
                        </div>
                        <div className="text-md mb-5">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Officiis pariatur, 
                            amet corporis natus perferendis dolorem. 
                            Repudiandae ad eius officiis iure adipisci 
                            quod natus magnam rerum facilis asperiores 
                            iste necessitatibus incidunt illum maiores 
                            beatae, modi minima voluptas tempore distinctio 
                            libero? Inventore aliquid blanditiis, iste animi 
                            incidunt sequi eum hic perferendis porro.
                        </div>
                        <div className="text-md mb-5">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Officiis pariatur, 
                            amet corporis natus perferendis dolorem. 
                            Repudiandae ad eius officiis iure adipisci 
                            quod natus magnam rerum facilis asperiores 
                            iste necessitatibus incidunt illum maiores 
                            beatae, modi minima voluptas tempore distinctio 
                            libero? Inventore aliquid blanditiis, iste animi 
                            incidunt sequi eum hic perferendis porro.
                        </div>
                    </div>

                    </div>
                </div>

                <RelatedProducts/>

            </Wrapper>
        </div>
    );
}

export default ProductDetails;
