import React from "react";
import chat from "../assets/main/comment-circle.png";
import code from "../assets/main/code.png";
import pencil from "../assets/main/pencil.png";
import bulb from "../assets/main/bulb.png";
import micro from "../assets/main/microphone.png";
import attachment from "../assets/main/attachment.png";
import plane from "../assets/main/paper-plane.png";
import arrow from "../assets/main/arrow-right.png";

function Center() {
  return (
    <div className='w-full h-full flex-col justify-center items-center gap-4 inline-flex'>
      <div className='flex-col justify-start items-center gap-4 flex'>
        <div className='text-white text-3xl font-bold  leading-9'>
          Innovation Starter Pack
        </div>
        <div className='text-center text-neutral-400 text-base font-medium leading-normal tracking-tight'>
          Kickstart your innovation process with our comprehensive selection of
          predefined prompts.
        </div>
      </div>
      <div className='self-stretch px-28 justify-start items-start gap-16 inline-flex w-full '>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex'>
          <div className='self-stretch h-24 flex-col justify-center items-center gap-4 flex'>
            <div className='w-12 h-12   rounded-3xl shadow border-t border-white border-opacity-10 justify-center items-center gap-4 inline-flex'>
              <img src={chat} alt='' className='w-full h-full mt-4' />
            </div>
            <div className='self-stretch text-center text-white text-lg font-semibold  leading-7 tracking-tight'>
              Creative Assets
            </div>
          </div>
          <div className='self-stretch h-56 flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                UI wireframe
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0  text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Brochure design
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Social media
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Brand guidelines
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex'>
          <div className='self-stretch h-24 flex-col justify-center items-center gap-4 flex'>
          <div className='w-12 h-12   rounded-3xl shadow border-t border-white border-opacity-10 justify-center items-center gap-4 inline-flex'>
              <img src={code} alt='' className='w-full h-full mt-4' />
            </div>
            <div className="self-stretch text-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-7 tracking-tight">
              Developer Tools
            </div>
          </div>
          <div className='self-stretch h-56 flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                API Integration
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Test automation
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                DB optimization
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Code review
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex'>
          <div className='self-stretch h-24 flex-col justify-center items-center gap-4 flex'>
          <div className='w-12 h-12   rounded-3xl shadow border-t border-white border-opacity-10 justify-center items-center gap-4 inline-flex'>
              <img src={pencil} alt='' className='w-full h-full mt-4' />
            </div>
            <div className="self-stretch text-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-7 tracking-tight">
              Content Creation
            </div>
          </div>
          <div className='self-stretch h-56 flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Product description
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                E-mail copy
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Whitepaper
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Press release
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex'>
          <div className='self-stretch h-24 flex-col justify-center items-center gap-4 flex'>
          <div className='w-12 h-12   rounded-3xl shadow border-t border-white border-opacity-10 justify-center items-center gap-4 inline-flex'>
              <img src={bulb} alt='' className='w-full h-full mt-4' />
            </div>
            <div className="self-stretch text-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-7 tracking-tight">
              Idea Generation
            </div>
          </div>
          <div className='self-stretch h-56 flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Hashtag ideas
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Brainstorming
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Trend analysis
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
            <div className='self-stretch p-4 bg-gradient-to-r from-neutral-900 to-gray-800 hover:from-gray-800 hover:to-neutral-900 rounded-xl border-t border-white border-opacity-10 justify-start items-center gap-2 inline-flex'>
              <div className="grow shrink basis-0 text-neutral-300 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                Social media posts
              </div>
              <div className='w-2 h-2 px-0.5 py-1 justify-center items-center flex' />
              <img src={arrow} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out transform hover:scale-150" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 p-6 bg-neutral-950 rounded-2xl justify-start items-center gap-16 inline-flex ml-10 mt-7">
      
  <div className="w-16 h-16 px-4 py-2 rounded-xl justify-center items-center gap-3 flex object-contain">
 
    <div className="w-6 h-6  justify-center items-center flex" />
    <img src={micro} alt="" className="h-full w-full object-contain -ml-14" />
  </div>
  <div className="grow shrink basis-0 h-12 py-3 justify-start items-start gap-2 flex">
  
  <input
 className="text-white font-semibold w-full leading-normal tracking-tight bg-black border-none focus:ring-0 focus:border-none focus:border-transparent focus:outline-none placeholder-text-neutral-700 animate-typing overflow-hidden"
 placeholder="You can ask me anything! I am here to help."
/>
  </div>
  <div className="w-16 h-16 px-4 py-2 rounded-xl justify-center items-center gap-3 flex">
    <div className="w-6 h-6 px-0.5 py-0.5 justify-center items-center flex" />
    <img src={attachment} alt=""  />
  </div>
  <div className="w-16 h-16 px-4 py-2 bg-zinc-900 rounded-xl justify-center items-center gap-3 flex">
    <div className="w-6 h-6 p-1 justify-center items-center flex" />
    <img src={plane} alt="" className="-ml-4"  />
  </div>
</div>
    </div>
  );
}

export default Center;
