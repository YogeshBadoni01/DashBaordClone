"use client";
import React from "react";
import Sidemenu from "../Components/Sidemenu";
// import Tempsidebar from '../Components/tempsidebar'
import { Box, Typography, styled } from "@mui/material";
import {
  MdCheck,
  MdLanguage,
  MdLeaderboard,
  MdMoreVert,
  MdPersonAdd,
  MdStore,
  MdWeekend,
} from "react-icons/md";
import CountoryTable from "../Components/CountoryTable";
import AnalysisSVG from "../Components/AnalysisSVG";
import AnalysisBar from "../Components/AnalysisBar";
import DashboardTable from "../Components/DashboardTable";
import { BiUpArrowAlt } from "react-icons/bi";
import ConnectedIcons from "../Components/ConnectIcon";
import TempChart from "../Components/tempChart";

const page = () => {
  const data = [
    {
      Icon: <MdWeekend />,
      heading: "Booking",
      NumberOfItem: "281",
      ItemInPer: "+55%",
      Info: "than last week",
      bgColor: "bg-gradient-to-br from-[rgb(66,66,74)] to-[rgb(25,25,25)]",
    },
    {
      Icon: <MdLeaderboard />,
      heading: "Today's Work",
      NumberOfItem: "2,300",
      ItemInPer: "+3%",
      Info: "than last month",
      // bgColor:"bg-gradient-to-br from-[rgb(66,66,74)] to-[rgb(25,25,25)]"
      bgColor: "bg-gradient-to-br from-[rgb(73,163,241)] to-[rgb(26,115,232)]",
    },
    {
      Icon: <MdStore />,
      heading: "Revenue",
      NumberOfItem: "34K",
      ItemInPer: "+1%",
      Info: "than yesterday",
      bgColor: "bg-gradient-to-br from-[rgb(102,187,106)] to-[rgb(67,160,71)]",
    },
    {
      Icon: <MdPersonAdd />,
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
  return (
    <>
      <div className="m-4 bg-transparent">
        <DrawerHeader />
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
          <div className="flex">
            {/* <TempChart/> */}
            {/* <TempChart/> */}
            {/* <TempChart/> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
            {data.map((item, index) => (
              <div className="pt-[24px] pl-[24px] ">
                <div className="mb-3 bg-[#f0f2f5] ">
                  <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl bg-white">
                    <div className="flex px-4 pt-2 justify-between  ">
                      <div className="">
                        <div
                          className={` mt-[-16px]  p-5 rounded-[12px]  text-white ${item.bgColor}`}
                        >
                          {item.Icon}
                        </div>
                      </div>
                      <div className="">
                        <span className="text-[14px] leading-[1.5] tracking-[0.399px] text-[#7b809a] font-light ">
                          {item.heading}
                        </span>
                        <h4 className="text-[24px] leading-[1.375] font-bold text-[#344767]">
                          {item.NumberOfItem}
                        </h4>
                      </div>
                    </div>
                    <hr className="h-[1px] opacity-25 bg-gradient-to-r from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />
                    <div className="px-4 pb-4">
                      <p className="text-[14px] leading-[1.5] tracking-[0.399px] text-[#7b809a] font-light ">
                        <span className="font-bold text-[#4caf50]">
                          {item.ItemInPer}
                        </span>
                        &nbsp;
                        <span>than last week</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="">
                  <div className=" grid grid-cols-3">
                    <AnalysisBar/>
                  </div>
                </div> */}

          <div className="flex flex-col md:flex-row">
            <div className="pt-[24px] pl-[24px] w-full md:w-1/2 h min-[992px]:w-2/3 ">
              <div className="mb-3 bg-[#f0f2f5] ">
                <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl bg-white">
                  <div className="p-6 flex justify-between text-[#344767]">
                    <div className="">
                      <h6 className="text-[16px] leading-[1.625] font-bold mb-1.5">
                        Projects
                      </h6>
                      <div className="flex flex-row justify-start items-center text-[14px] leading-[1.5] text-[#7b809a]">
                        <MdCheck className="text-[#1a73e8] text-[20px] font-bold" />
                        <span>
                          &nbsp;<strong>30 done</strong> this month
                        </span>
                      </div>
                    </div>
                    <div className="px-4">
                      <MdMoreVert />
                    </div>
                  </div>
                  <div className="flex ">
                    <DashboardTable />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[24px] pl-[24px] w-full md:w-1/2 min-[992px]:w-1/3 bg-[#f0f2f5]">
              <div className="mb-3 h-full bg-white">
                <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl  h-full">
                  <div className="px-6 pt-6 flex justify-between text-[#344767] flex-col">
                    <h6 className="text-[16px] leading-[1.625] font-bold mb-1.5">
                      Projects
                    </h6>
                    <div className="flex flex-row justify-start items-center text-[14px] leading-[1.5] text-[#7b809a] ">
                      <BiUpArrowAlt className="text-[#4caf50] text-[20px] font-bold" />
                      <span>
                        &nbsp;<strong>24%</strong> this month
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <ConnectedIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
