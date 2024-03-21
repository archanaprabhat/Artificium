import React from 'react';
import img from "../assets/aside/Avatar.png";
import down from "../assets/aside/down.png";
import search from "../assets/aside/search.png";
import bill from "../assets/aside/credit-card.png";
import badge from "../assets/aside/Badge.png";
import octagon from "../assets/aside/octagon.png";
import triangle from "../assets/aside/triangle.png";
import pic from "../assets/aside/plus-circle.png";
import avatar from "../assets/aside/Avatar1.png";
import settings from "../assets/aside/settings.png";

const Aside = () => {
 return (
    <div className='w-80 bg-black rounded-3xl ml-4 self-stretch my-4 flex flex-col items-stretch justify-start overflow-hidden hidden laptop:block'>
      <div className='w-[312px] h-24 p-6 border-b border-neutral-900 justify-between items-center inline-flex'>
        <div className="flex gap-3">
          <img src={img} alt='' className='h-12 w-12 select-none' />
          <div className='flex-col justify-start items-start gap-1 inline-flex'>
            <div className='text-center text-white text-base font-semibold leading-normal tracking-tight'>Intellisys</div>
            <div className='text-center text-lime-200 text-xs font-medium leading-[18px] tracking-tight'>12 members</div>
          </div>
        </div>
        <div className='' />
        <img src={down} alt='' className='w-3 h-2 select-none' />
      </div>
      <div className="w-80 h-48 px-2 py-6 border-b border-neutral-900 flex-col justify-start items-start gap-6 inline-flex">
        <div className=" px-4">
          <div className="text-neutral-500 text-xs font-semibold font-sans leading-none tracking-tight">GENERAL</div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="flex-grow flex-shrink-0 flex-basis-0 justify-start items-center gap-0 flex">
              <div className="w-10 h-10 "><img src={search} alt="" className='object-cover -ml-3 mt-2 select-none' /></div>
              <div className="text-center text-gray-200 text-sm font-semibold font-sans leading-tight cursor-pointer tracking-tight">Search</div>
            </div>
            <div className=" rounded shadow border border-gray-950 border-opacity-55 justify-end flex">
              <div className="text-center "><img src={badge} alt="" className='w-15 h-10 select-none' /></div>
            </div>
          </div>
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="flex-grow flex-shrink-0 flex-basis-0 justify-start items-center gap-0 flex">
              <div className="w-10 h-10 "><img src={bill} alt="" className='object-cover -ml-3 mt-2 select-none' /></div>
              <div className="text-center text-gray-200 text-sm font-semibold font-sans leading-tight cursor-pointer tracking-tight">Billing</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-80  px-2 py-6 flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch px-4 justify-start items-start gap-2 inline-flex">
          <div className="text-neutral-500 text-xs font-semibold  leading-none tracking-tight">PROJECTS</div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="w-72 h-12 px-4 py-3.5  rounded-lg border-t border-white border-opacity-10 justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="w-5 h-5 p-0.5 shadow justify-center items-center flex">
                <div className="w-3.5 h-3.5 rounded-sm border border-lime-200" />
              </div>
              <div className="text-center text-gray-200 text-sm font-semibold cursor-pointer  leading-tight tracking-tight">Orbital Oddysey</div>
            </div>
          </div>
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="w-5 h-5 px-px pt-px pb-0.5 shadow justify-center items-center flex" />
              <img src={triangle} alt="" className='w-10 h-10 -ml-12 mt-4 select-none' />
              <div className="text-center text-gray-200 text-sm font-semibold cursor-pointer leading-tight tracking-tight -ml-2">Digital Product Launch</div>
            </div>
          </div>
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="w-5 h-5 p-0.5 shadow justify-center items-center flex">
                <div className="w-3.5 h-3.5 rounded-sm border border-orange-500" />
              </div>
              <div className="text-center text-gray-200 text-sm font-semibold cursor-pointer leading-tight tracking-tight">Brand Refresh</div>
            </div>
          </div>
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="w-5 h-5 p-0.5 shadow justify-center items-center flex" />
              <img src={octagon} alt="" className='w-10 h-10 -ml-12 mt-4 select-none' />
              <div className="text-center text-gray-200 text-sm font-semibold cursor-pointer leading-tight tracking-tight -ml-2">Social Media Strategy</div>
            </div>
          </div>
          <div className="w-72 h-12 px-4 py-3.5 rounded-lg justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="w-5 h-5 p-0.5 justify-center items-center flex" />
             
              
              <div className="text-center text-neutral-500 text-sm font-semibold cursor-pointer  leading-tight tracking-tight">Add new project</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-80  px-2 flex-col inline-flex mt-auto align-bottom ">
        <div className=" p-4  rounded-2xl border-t border-white border-opacity-10 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <div className="w-16 h-16 flex">
            <img src={avatar} alt="" className='mb-3 select-none ' />
              
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-center text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-tight">Ryan Lee</div>
              <div className="text-center text-lime-200 text-xs font-medium font-['Plus Jakarta Sans'] leading-none tracking-tight">Premium</div>
            </div>
          </div>
          <div className=" px-1 py-0.5 justify-center items-center flex" />
          <img src={settings} alt="" className=' w-6 h-6 select-none' />
        </div>
      </div>
      
    </div>
 );
};

export default Aside;