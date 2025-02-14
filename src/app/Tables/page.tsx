"use client"
import {styled} from '@mui/material';
import React from 'react'
import AuthTable from '../Components/AuthTable';
import ProjectTable from '../Components/ProjectTable';



const page = () => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
  return (
    <>
         <DrawerHeader />
        <div className="pt-12 pb-6">
            <div className="-mt-12 -ml-12">
                <div className="pt-12 pl-12">
                    <div className="text-[20px] leading-[1.625] bg-[#fff]">
                        <div className="mx-4 px-4 py-6 text-[#344767] rounded-lg -mt-6 bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]">
                            <h6 className='text-[16px] leading-[1.625] font-bold  text-white '>Authors Tables</h6>
                        </div>

                        <div className="pt-6">
                            <AuthTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        <div className="pt-12 pb-6">
            <div className="-mt-12 -ml-12">
                <div className="pt-12 pl-12">
                    <div className="text-[20px] leading-[1.625] bg-[#fff]">
                        <div className="mx-4 px-4 py-6 text-[#344767] rounded-lg -mt-6 bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]">
                            <h6 className='text-[16px] leading-[1.625] font-bold  text-white '>Project Tables</h6>
                        </div>

                        <div className="pt-6">
                            <ProjectTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}

export default page