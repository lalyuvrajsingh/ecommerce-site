import React, {useState, useEffect} from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs"; 
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from './MobileMenu';

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [ShowCatMenu, setShowCatMenu] = useState(false);
    const [Show, setShow] = useState("translate-y-0");
    const [LastScrollY, setLastScrollY] = useState(0);

    return (
        <header className={`w-full h-[50px] md:h-[80px] bg-black/[0.9] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${Show} `}>
        
        <Wrapper className='h-[60px] flex justify-between items-center'>

            <Link href={'/'}>
                <h1 className='text-xl'>Lal Yuvraj Singh</h1>
            </Link>

            <Menu ShowCatMenu = {ShowCatMenu} setShowCatMenu = {setShowCatMenu}/>

            <div className='flex items-center gap-2 '>

                {/********************** cart & heart Icon ************************/}

                <div className="w-10 md:-12 h-8 md:h-12 rounded-full justify-center flex  items-center  cursor-pointer relative">
                    <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/>
                    <div className='h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px]
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center
                    items-center px-[2px] md:px-[5px]'>51</div>
                </div>

                <div className="w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex  items-center  cursor-pointer relative">
                    <BsCart className='text-[15px] md:text-[18px] '/>
                    <div className='h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px]
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center
                    items-center px-[2px] md:px-[5px]'>5</div>
                </div>

                {/********************** cart & heart Icon ************************/}



                {/********************** Mobile Icon ************************/}

                <div className="w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex  items-center  cursor-pointer relative">
                    {mobileMenu ? (
                        <VscChromeClose className='text-[16px]' onClick={()=>{setMobileMenu(false)}}/>
                    ):(
                        <BiMenuAltRight className='text-[20px]' onClick={()=>{setMobileMenu(true)}}/>
                    )}
                    
                </div>

                {/********************** Mobile Icon ************************/}

                {mobileMenu && <MobileMenu ShowCatMenu = {ShowCatMenu} setShowCatMenu = {setShowCatMenu}/>}



            </div>
        
        </Wrapper>

        </header>
    )
}

export default Header