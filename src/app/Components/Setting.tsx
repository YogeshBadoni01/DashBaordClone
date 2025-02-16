import { Box } from '@mui/material'
import React from 'react'
import { MdSettings } from 'react-icons/md'

const Setting = () => {
  return (
    <>
     <div className="fixed bottom-[32px] right-[32px] z-[99] ">
        <Box sx={{width:"52px",height:"52px",}} className=" rounded-full bg-white text-[#344767] shadow-black/12 shadow-md flex justify-center items-center" >
            <MdSettings style={{width:"20px",height:"20px"}}/>
        </Box>
    </div>   
    </>
  )
}

export default Setting