import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className='relative shadow-xl rounded-xl text-white text-[20px] w-full h-fit my-10  max-w-[800px]  mx-auto'>
            <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}>
                <div className=''> 
                    <img src="/assets/slide-2.png" 
                        className='aspect-[16/10] md:aspect-auto object-cover max-h-[400px] rounded-xl'
                    /> 
                    <div className="px-[15px] md:px-[40px] py-[5px] md:py-[5px] font-oswald absolute bottom-[15px] md:bottom-[10px] left-2 Otext-black/[0.9] text-[15px] md:teft-[30px] uppercase bg-white text-black rounded-lg font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div> 
                <div> 
                    <img src="/assets/slide-3.png"
                    className='aspect-[16/10] md:aspect-auto object-cover max-h-[400px] rounded-xl'/>
                    <div className="px-[15px] md:px-[40px] py-[5px] md:py-[5px] font-oswald absolute bottom-[15px] md:bottom-[10px] left-2 Otext-black/[0.9] text-[15px] md:teft-[30px] uppercase bg-white text-black rounded-lg font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div>
                <div> 
                    <img src="/assets/slide-1.png" 
                    className='aspect-[16/10] md:aspect-auto object-cover max-h-[400px] rounded-xl'
                    /> 
                    <div className="px-[15px] md:px-[40px] py-[5px] md:py-[5px] font-oswald absolute bottom-[15px] md:bottom-[10px] left-2 Otext-black/[0.9] text-[15px] md:teft-[30px] uppercase bg-white text-black rounded-lg font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div> 
            </Carousel>
        </div>
    );
}

export default HeroBanner;
