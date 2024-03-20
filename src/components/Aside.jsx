import img from "../assets/aside/Avatar.png";
import down from "../assets/aside/down.png";

function aside() {
  return (
    <>
      <div className='w-1/4 bg-black rounded-3xl ml-4  h-[765px] mt-5 '>
        <div className='w-[312px] h-24 p-6 border-b border-neutral-900 justify-between items-center inline-flex'>
            <div className="flex gap-3">
          <img src={img} alt='' className='h-12 w-12' />

          <div className='flex-col justify-start items-start gap-1 inline-flex'>
            <div className='text-center text-white text-base font-semibold  leading-normal tracking-tight'>
              Intellisys
            </div>
            <div className='text-center text-lime-200 text-xs font-medium leading-[18px] tracking-tight'>
              12 members
            </div>
          </div>
          </div>

          <div className='' />
          <img src={down} alt='' className='w-3 h-2' />
        </div>
      </div>
    </>
  );
}

export default aside;
