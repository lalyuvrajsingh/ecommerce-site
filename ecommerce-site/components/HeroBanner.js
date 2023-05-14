import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className='relative text-white text-[20px] w-full h-fit max-w-[800px]  mx-auto'>
            <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}>
                <div className=''> 
                    <img src="/yuvi_a_boy_sitting_on_a_chair_and_table_laptop_on_the_table_and_c358dc85-2291-4c26-ad8d-71c42c68e604.png" 
                        className='aspect-[16/10] md:aspect-auto object-cover max-h-[400px] rounded-xl'
                    /> 
                    <div className="px-[15px] md:px-[40px] py-[5px] md:py-[5px] font-oswald absolute bottom-[15px] md:bottom-[10px] left-2 Otext-black/[0.9] text-[15px] md:teft-[30px] uppercase bg-white text-black rounded-lg font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div> 
                <div> 
                    <img src="/yuvi_a_boy_watching_his_big_dreams_boy_is_facing_his_back_to_th_dc017fbc-1491-4f46-949a-d429f878cd5d.png"
                    className='aspect-[16/10] md:aspect-auto object-cover max-h-[400px] rounded-xl'/>
                    <div className="px-[15px] md:px-[40px] py-[5px] md:py-[5px] font-oswald absolute bottom-[15px] md:bottom-[10px] left-2 Otext-black/[0.9] text-[15px] md:teft-[30px] uppercase bg-white text-black rounded-lg font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div>
                <div> 
                    <img src="/yuvi_a_landscape_image_of_a_boy_in_his_crazy_and_futuristic_des_7b3dcc6e-1d5b-4cec-8975-a290151f2600.png" 
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
