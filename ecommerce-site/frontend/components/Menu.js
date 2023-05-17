import Link from 'next/link';
import React from 'react';
import {BsChevronDown} from  'react-icons/bs'

const Menu = ({ShowCatMenu, setShowCatMenu}) => {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
        ];
        const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11 },
        { id: 2, name: "Sneakers", doc_count: 8 },
        { id: 3, name: "Running shoes", doc_count: 64 },
        { id: 4, name: "Football shoes", doc_count: 107 },
        ];


    return (
        <div className='hidden md:flex items-center gap-8 font-medium  list-none'>
        {data.map((item)=>{
            return (
            <React.Fragment key={item.id}>
                {!!item?.subMenu ?(
                    <li className='cursor-pointer flex items-center gap-2 relative'
                    onMouseEnter={()=>{setShowCatMenu(true)}}
                    onMouseLeave={()=>{setShowCatMenu(false)}}>
                        {item.name}
                        <BsChevronDown size={14}/>

                        {ShowCatMenu && (
                            <ul className='bg-black absolute top-6 left-0
                            min-w-[250px] px-1 py-1 rounded-xl text-white shadow-white shadow-lg'>{subMenuData.map((subMenu)=>{
                                return (
                                    <Link key={subMenu.id} href={`/category/${subMenu.name}`} onClick={()=>{setShowCatMenu(false)}} >
                                        <li className='h-12 flex justify-between
                                        items-center px-3 hover:bg-white/[0.1]
                                        rounded-md border-1 border-gray-50'>
                                        {subMenu.name}
                                        <span className='opacity-50 text-sm'>{`(${subMenu.doc_count})`}</span>
                                        </li>

                                        
                                    </Link>
                                )
                            })}</ul>
                        )}

                    </li>
                ):
                (<li className='cursor-pointer'>
                    <Link href={item?.url}>{item.name}</Link>
                </li>)}
            </React.Fragment>
            )
        })}
        </div>
    );
}

export default Menu;
