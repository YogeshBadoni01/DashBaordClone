"use client"
import {Box, Paper, Typography, styled} from '@mui/material';
import React from 'react'
import AuthTable from '../../Components/AuthTable';
import ProjectTable from '../../Components/ProjectTable';



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
<DrawerHeader sx={{
          '@media (max-width: 768px)': {
            height:"130px"
          },
        }}/>

        <Paper sx={{backgroundColor:"background.custom1",width:"auto",boxShadow:"none"}}>

            <div className="pt-12 pb-6 ">
                    <div className="pt-12 pl-12">
        <Paper sx={{boxShadow:"shadow"}}>
                <div className="-mt-12 -ml-12">
                        <div className="text-[20px] leading-[1.625] ">
                            <div className="mx-4 px-4 py-6 text-[#344767] rounded-lg -mt-6 bg-gradient-to-l from-[rgb(73,163,241)] to-[rgb(26,115,232)]">
                                <Typography variant='h6' className='text-[16px] leading-[1.625] font-bold  text-white '>Authors Tables</Typography>
                            </div>

                            <div className="pt-6">
                                <div className="w-full overflow-x-scroll md:overflow-auto">
                                    <div className="w-[120%] md:w-full overflow-scroll md:overflow-auto">
                                        <AuthTable/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Paper> 
                </div>
            </div>   
                <div className="pt-12 pb-6">
                    <div className="-mt-12 -ml-12">
                        <div className="pt-12 pl-12">
            <Paper sx={{boxShadow:"shadow"}} className='myshadow'>
                            {/* <div className="text-[20px] leading-[1.625] "> */}
                                <Box  className="mx-4 px-4 py-6 text-[#344767] rounded-lg -mt-6 bg-gradient-to-l from-[rgb(73,163,241)] to-[rgb(26,115,232)]">
                                    <h6 className='text-[16px] leading-[1.625] font-bold  text-white '>Project Tables</h6>
                                </Box>
                                


                                <div className="pt-6">
                                    <div className="w-full overflow-x-scroll">
                                        <div className="w-[120%] md:w-full overflow-scroll">
                                    <ProjectTable/>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
            </Paper>
                        </div>
                    </div>
                </div>   
        </Paper>
    </>
  )
}

export default page