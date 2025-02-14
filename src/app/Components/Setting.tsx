import React from 'react'
import { MdSettings } from 'react-icons/md'

const Setting = () => {
  return (
    <>
     <div className="fixed bottom-[32px] right-[32px] z-[99] ">
        <div className="w-[52px] h-[52px] rounded-full bg-white text-[#344767] shadow-black/12 shadow-md flex justify-center items-center">
            <MdSettings/>
        </div>
    </div>   
    </>
  )
}

export default Setting