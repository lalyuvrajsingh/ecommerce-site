import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
    return (
        <div className='text-white text-[20px] w-full max-w-[1360px] max-auto sticky top-[50px]'>
            <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            width={400}
            thumbWidth={60}
            showStatus={false}
            showThumbs={true}
            showIndicators={false}
            className='productCarousel'>
            <img src="/assets/p1.png" alt="" />
            <img src="/assets/p2.png" alt="" />
            <img src="/assets/p3.png" alt="" />
            <img src="/assets/p4.png" alt="" />
            <img src="/assets/p5.png" alt="" />
            <img src="/assets/p6.png" alt="" />
            <img src="/assets/p5.png" alt="" />
            </Carousel>
        </div>
    );
}

export default ProductDetailsCarousel;
