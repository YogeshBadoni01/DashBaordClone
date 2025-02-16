"use client";
import React from "react";
// import Sidemenu from "../../../Componentrs/Sidemenu";
// import Tempsidebar from '../Components/tempsidebar'
import { Box, Button, Divider, Menu, MenuItem, Paper, Typography, styled } from "@mui/material";
import {
  MdCheck,
  MdLanguage,
  MdLeaderboard,
  MdMoreVert,
  MdPersonAdd,
  MdSchedule,
  MdStore,
  MdWeekend,
} from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import ConnectedIcons from "@/app/Components/ConnectIcon";
import DashboardTable from "@/app/Components/DashboardTable";
import { StyledEngineProvider } from '@mui/material/styles';
import '@mui/material/styles';
import "../../globals.css"
import TempChart from "@/app/Components/TempChart";
import TempChartLine from "@/app/Components/TempChartLine";
import TempChartLine2 from "@/app/Components/TempChartLine2";
const Dashboard = () => {
  const data = [
    {
      Icon: <MdWeekend className="w-[24px] h-[24px]"/>,
      heading: "Booking",
      NumberOfItem: "281",
      ItemInPer: "+55%",
      Info: "than last week",
      bgColor: "bg-gradient-to-br from-[rgb(66,66,74)] to-[rgb(25,25,25)]",
    },
    {
      Icon: <MdLeaderboard className="w-[24px] h-[24px]"/>,
      heading: "Today's Work",
      NumberOfItem: "2,300",
      ItemInPer: "+3%",
      Info: "than last month",
      // bgColor:"bg-gradient-to-br from-[rgb(66,66,74)] to-[rgb(25,25,25)]"
      bgColor: "bg-gradient-to-br from-[rgb(73,163,241)] to-[rgb(26,115,232)]",
    },
    {
      Icon: <MdStore className="w-[24px] h-[24px]"/>,
      heading: "Revenue",
      NumberOfItem: "34K",
      ItemInPer: "+1%",
      Info: "than yesterday",
      bgColor: "bg-gradient-to-br from-[rgb(102,187,106)] to-[rgb(67,160,71)]",
    },
    {
      Icon: <MdPersonAdd className="w-[24px] h-[24px]"/>,
      heading: "Followers",
      NumberOfItem: "+91",
      ItemInPer: "",
      Info: "Just Updated",
      bgColor: "bg-gradient-to-br from-[rgb(236,64,122)] to-[rgb(216,27,96)]",
    },
  ];

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <>
    
  <Box dir="rtl">

      <div className=" bg-transparent">
        <DrawerHeader sx={{
          '@media (max-width: 768px)': {
            height:"130px"
          },
        }}/>
        <div className="py-6 ">
          {/* <div className="shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] bg-white rounded-[12px]">

                  <div className="flex relative items-center">
                    <div className="ml-[24px] mt-[-16px] bg-gradient-to-r from-green-500 to-green-700 p-5 rounded-[12px] text-white">
                      <MdLanguage className='w-[24px] h-[24px] '/>
                    </div>
                    <h6 className='text-[16px] m-4 mr-0 mb-2 font-bold tracking-[0.12px] leading-[1.625] text-[#344767]'>Sales By Country</h6>
                  </div>
                  <div className="p-4 flex">
                    <div className="w-1/2">
                      <CountoryTable />
                    </div>
                    <div className="">
                      <AnalysisSVG/>
                    </div>
                  </div>


                </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
            {data.map((item, index) => (
              <div className="pt-[24px] pl-[24px] "key={index}>
                {/* <Paper className="mb-3 bg-[#f0f2f5] "> */}
                <Paper className="mb-3 shadow-sm md:shadow-md lg:shadow-lg rounded-xl myshadow" sx={{backgroundImage:"none",borderRadius:"12px",backgroundColor:"background.custom1"}}>
                  {/* <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl "> */}
                  <div className="">
                    <div className="flex px-4 pt-2 justify-between  ">
                      <div className="">
                        <div
                          className={` mt-[-24px]  p-5 rounded-[12px]  text-white ${item.bgColor}`}>
                          {item.Icon}
                        </div>
                      </div>
                      <div className="">
                        <Typography  sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}}  className="text-[14px] leading-[1.5] tracking-[0.399px] text-[#7b809a] font-light ">
                          {item.heading}
                        </Typography>
                        <Typography variant="h4" sx={{color:"text.primary",fontSize:"24px",fontWeight:700}} className="text-[24px] leading-[1.375]  ">
                          {item.NumberOfItem}
                        </Typography>
                      </div>
                    </div>
                    <div className="my-4">

                    <Divider variant="middle" className=" h-[1px] opacity-25 bg-gradient-to-r from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />
                    </div>
                    <div className="px-4 pb-4">
                      <Typography paragraph sx={{fontSize:"14px",display:"flex", lineHeight:1.5}} className="text-[14px] leading-[1.5] tracking-[0.399px] text-[#7b809a] font-light ">
                        <Typography sx={{fontSize:"14px",fontWeight:700}} className="font-bold text-[#4caf50]">
                          {item.ItemInPer}
                        </Typography>
                        &nbsp;
                        <Typography  sx={{color:"text.secondary",fontSize:"14px"}}>{item.Info}</Typography>
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </div>
            ))}
          </div>

                {/* charts */}
              
                <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
              
              <div className="pt-6 pl-6 w-full">
                <Paper sx={{background:"background.custom1"}} className="mb-6 text-[#344767]">
                    {/* <div className="bg-white flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" > */}
                    <div className=" flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" >
                      <div className="p-4 text-[20px] leading-[1.625] tracking-[0.00938em]">

                        <div className=" rounded-xl -mt-10" >
                            <TempChart/>
                        </div>
                        <div className="p-2 pt-6 text-[20px] leading-[1.625] tracking-[0.00938em]">
                            <Typography variant="h6" sx={{color:"text.primary",fontSize:"16px",fontWeight:700}} className="text-[16px] font-bold leading-[1.625] tracking-[0.0075em] text-[#344767]">Webiste Views</Typography>
                            <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">Last Capaign Performance</Typography>
                            
                            <div className="my-4">
                              
                            <Divider variant="middle" className="h-[1px] opacity-25 bg-gradient-to-l from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />
                              </div>
                            <div className="flex items-center">
                              <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="mr-1 text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">
                                <MdSchedule className="mr-1"/>
                              </Typography>
                              <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}}  className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">campaign sent 2 days ago</Typography>
                            </div>
                        </div>
                      </div>
                    </div>
                </Paper>
                
              </div>
              <div className="pt-6 pl-6 w-full">
              <Paper sx={{background:"background.custom1"}} className="mb-6 text-[#344767]">
                    {/* <div className="bg-white flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" > */}
                    <div className=" flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" >
                      <div className="p-4 text-[20px] leading-[1.625] tracking-[0.00938em]">

                        <div className=" rounded-xl -mt-10" >
                            <TempChartLine/>
                        </div>
                        <div className="p-2 pt-6 text-[20px] leading-[1.625] tracking-[0.00938em]">
                        <Typography variant="h6" sx={{color:"text.primary",fontSize:"16px",fontWeight:700}} className="text-[16px] font-bold leading-[1.625] tracking-[0.0075em] text-[#344767]">Daily Sales</Typography>
                        <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]"><span>{`(`}</span> <strong>15%</strong> <span>{`)`}</span> Last Capaign Performance</Typography>
                            <div className="my-4">
                            <Divider variant="middle" className="h-[1px] opacity-25 bg-gradient-to-l from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />
                              </div>
                            <div className="flex items-center">
                            <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="mr-1 text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">
                                <MdSchedule className="mr-1"/>
                              </Typography>
                              <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">Update 4 min ago</Typography>
                            </div>
                        </div>
                      </div>
                    </div>
                </Paper>
                
              </div>
            <div className="pt-6 pl-6 w-full">
            <Paper sx={{background:"background.custom1"}} className="mb-6 text-[#344767]">
                  {/* <div className="bg-white flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" > */}
                  <div className=" flex flex-col shadow-sm md:shadow-md lg:shadow-lg rounded-xl" >
                    <div className="p-4 text-[20px] leading-[1.625] tracking-[0.00938em]">

                      <div className=" rounded-xl -mt-10" >
                          <TempChartLine2/>
                      </div>
                      <div className="p-2 pt-6 text-[20px] leading-[1.625] tracking-[0.00938em]">
                      <Typography variant="h6" sx={{color:"text.primary",fontSize:"16px",fontWeight:700}} className="text-[16px] font-bold leading-[1.625] tracking-[0.0075em] text-[#344767]">Completed Task</Typography>
                      <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">Last Capaign Performance</Typography>
                          
                          <div className="my-4">
                            
                          <Divider variant="middle" className="h-[1px] opacity-25 bg-gradient-to-l from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />
                            </div>
                          <div className="flex items-center">
                          <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="mr-1 text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">
                              <MdSchedule className="mr-1"/>
                            </Typography>
                            <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:300}} className="text-[14px] font-light leading-[1.5] tracking-[0.02857em] text-[#7b809a]">just updated</Typography>
                          </div>
                      </div>
                    </div>
                  </div>
              </Paper>
              
            </div>
          </div>

          

          {/* <div className="">
                  <div className=" grid grid-cols-3">
                    <AnalysisBar/>
                  </div>
                </div> */}

          <div className="flex flex-col md:flex-row basis-4/5">
            <div className="pt-[24px] pl-[24px] w-full md:w-1/2 h min-[992px]:w-2/3 ">
              <Paper sx={{background:"background.custom2"}} className="mb-3 bg-[#f0f2f5] ">
                {/* <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl bg-white"> */}
                <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl ">
                  <div className="p-6 flex justify-between text-[#344767]">
                    <div className="">
                    <Typography variant="h6" sx={{color:"text.primary",fontSize:"16px",fontWeight:700}} className="text-[16px] leading-[1.625] font-bold mb-1.5">
                        Projects
                      </Typography>
                      <div className="flex flex-row justify-start items-center text-[14px] leading-[1.5] text-[#7b809a]">
                        <MdCheck className="text-[#1a73e8] text-[20px] font-bold" />
                        <Typography sx={{fontSize:"14px",color:"text.secondary"}}>
                          &nbsp;<strong>30 done</strong> this month
                        </Typography>
                      </div>
                    </div>
                    <div className="px-4">
                      {/* <MdMoreVert /> */}
                      <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{fontSize:"20px",fontWeight:700}}
                          >
                            <MdMoreVert  className="w-5 h-5 text-[20px] font-bold text-[#7b809a]" />
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                              fontWeight:700,
                              color:"#7b809a",
                              fontSize:"20px"
                            }}
                          >
                            <MenuItem onClick={handleClose} className="text-[#7b809a]">Action</MenuItem>
                            <MenuItem onClick={handleClose} className="text-[#7b809a]">Another Action</MenuItem>
                            <MenuItem onClick={handleClose} className="text-[#7b809a]">Something else</MenuItem>
                          </Menu>
                    </div>
                  </div>
                  <div className="w-full overflow-x-scroll md:overflow-auto">
                    <div className="w-[150%] md:w-full overflow-scroll md:overflow-auto">
                       <DashboardTable />

                    </div>
                  </div>
                </div>
              </Paper>
            </div>
            <div  className="pt-[24px] pl-[24px] w-full md:w-1/2 min-[992px]:w-1/3 ">
            <Paper sx={{background:"background.custom2"}} className="mb-3 h-full bg-white">
                <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl  h-full">
                  <div className="px-6 pt-6 flex justify-between text-[#344767] flex-col">
                    <Typography variant="h6" sx={{color:"text.primary",fontSize:"16px",lineHeight:"1.625",fontWeight:700,marginBottom:"6px"}} >
                      Orders Overview
                    </Typography>
                    <div className="flex flex-row justify-start items-center text-[14px] leading-[1.5] text-[#7b809a] ">
                      <BiUpArrowAlt className="text-[#4caf50] text-[20px] font-bold" />
                      <Typography variant="button" sx={{color:"text.secondary",textTransform:"lowercase",fontSize:"16px",lineHeight:"1.25"}}>
                        &nbsp;<strong>24%</strong> this month
                      </Typography>
                    </div>
                  </div>
                  <div className="p-4">
                    <ConnectedIcons />
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
  </Box>
    </>
  );
};

export default Dashboard;
