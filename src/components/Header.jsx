import React from "react";
import img1 from "../assets/Users1.png";
import share from "../assets/Button.png";
import edit from "../assets/edit.png";
import arti from "../assets/header/Tab1.png";
import chat from "../assets/header/Tab2.png";
import folder from "../assets/header/Tab3.png";

function Header() {
  return (
    <div className="w-full    ">
    <div className="w-full rounded-3xl bg-black h-44"> 
      <div className='flex justify-between items-center w-full h-24'>
        <div className=' flex flex-col items-start'>
        <div className='text-xl font-medium pl-8 mb-1'>Orbital Oddysey</div>

<div className='text-gray-500 pl-8'>
  Marketing Campaign for a new TV series Launch
</div>
</div>
        <div className="hidden sm:flex flex-col sm:flex-row justify-evenly items-center w-1/2 ">
        <img
          src={img1}
          alt=''
          className=' w-56 h-56 object-contain select-none'
        />
        <img
          src={share}
          alt=''
          className=' w-28 h-28 object-contain select-none '
        />
        <img
          src={edit}
          alt=''
          className=' w-10 h-10 object-contain select-none'
        />
        </div>
      </div>
      <hr className="border-gray-800" />
    <div className="text-gray-500 m-5 ">
    <div className="flex justify-evenly items-center w-96 h-16 pt-7 ">
    
        <img
          src={arti}
          alt=''
          className=' w-40 h-40 object-contain -ml-28 xxs:ml-0 select-none'
        />
       
        <img
          src={chat}
          alt=''
          className=' w-24 h-24 object-contain mb-7 hidden xxs:block select-none'
        />
        <img
          src={folder}
          alt=''
          className=' w-28 h-28 object-contain mb-7 hidden xxs:block select-none'
        />
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Header;
