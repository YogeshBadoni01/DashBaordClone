"use client";
import React, { useState,ReactNode } from "react";
// import Sidemenu from "../Components/Sidemenu";
// import Tempsidebar from '../Components/tempsidebar'
import { Box, Link, Paper, ThemeProvider, Typography, createTheme, styled } from "@mui/material";
import {
  MdCheck,
  MdCopyright,
  MdLanguage,
  MdLeaderboard,
  MdMoreVert,
  MdPersonAdd,
  MdStore,
  MdWeekend,
} from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";
// import Link from "next/link";
import Sidemenu from "../Components/Sidemenu"
import Setting from "../Components/Setting"
// import page from "../page";
import { useRouter } from 'next/navigation';
// import { Theme } from "../Theme/Theme";
import { useThemeContext } from "../Theme/ThemeContextProvider";
import TempSideBar from "../Components/TempSideMenu"
import { GlobalContextProvider } from "../Theme/myThemeContext";


export default function Layout({children}){
 const [rtl, setrtl] = useState(false)
 //try  usereducer for theme
//  const { state, dispatch } = useReducer(ThemeReducer, {theme : "white"});

  // const router = useRouter();
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

  const RtlHandler =() =>{
    setrtl(!rtl)
  }

  // const theme = useThemeContext();
  // const theme= createTheme({
  //   palette:{
  //     mode==="dark" ?
  //      {
  //       background:{
  //         default:"#191919",
  //         paper:"#191919",
  //       },
  //       text:{
  //         primary:"#344767",
  //         secondary:"#7b809a",
  //       },
        
  //     }:
  //     {
  //       background:{
  //         default:"#191919",
  //         paper:"#191919",
  //       },
  //       text:{
  //         primary:"#344767",
  //         secondary:"#7b809a",
  //       },
        
  //     }
  //   }
  // })
  return (
    <>
    <GlobalContextProvider >

      <Box sx={{ display: 'flex', mr:"16",width:"100%",backgroundColor:"background.default" }} dir="ltr">
         {/* <TempSideBar/>  */}
         <Sidemenu/>  
        {/* <SideMenuBtn/> */}
        {/* <Paper sx={{display:"flex",width:"100%",background:"background.body"}}> */}
        <div className="flex w-full" >
        <Paper sx={{backgroundColor:"background.default",backgroundImage:"none",width:"100%",boxShadow:"none"}}>

            <Box component="main" sx={{ flexGrow: 1,padding:3  }} className="bg-transparent p-6" >
              
            {children}

            <Box component="footer" className="flex justify-between px-3 items-center lg:items-start flex-col lg:flex-row">
                <Box sx={{color:"text.secondary",px:"12px",lineHeight:1.625,display:"flex",alignItems:"center",fontSize:14}} className="">
                  <div><MdCopyright/></div>2024, made with <span><IoMdHeart/></span> <Link sx={{color:"text.primary",fontWeight:600,textDecoration:"none"}} href="" className=" ">&nbsp; Creative Tim &nbsp;</Link> for better web.
                </Box>
                <div className="px-3">
                  <ul className="flex ">
                    <li className="px-4">
                      <Link className="no-underline" href={""}>
                        <Typography variant="button" sx={{fontSize:14 ,color:"text.secondary",textDecoration:"none",textTransform:"capitalize"}} >Create Tim</Typography>
                      </Link>
                    </li>
                    <li className="px-4">
                      <Link className="no-underline" href={""}>
                        <Typography variant="button" sx={{fontSize:14 ,color:"text.secondary",textDecoration:"none",textTransform:"capitalize"}} >About as</Typography>
                      </Link>

                    </li>
                    <li className="px-4">
                      <Link className="no-underline" href={""}>
                        <Typography variant="button" sx={{fontSize:14 ,color:"text.secondary",textDecoration:"none",textTransform:"capitalize"}} >Blog</Typography>
                      </Link>
                    </li>
                    <li className="px-4">
                      <Link className="no-underline" href={""}>
                        <Typography variant="button" sx={{fontSize:14 ,color:"text.secondary",textDecoration:"none",textTransform:"capitalize"}} >Licence</Typography>
                      </Link>
                    </li>
                  </ul>

                </div>
            </Box>
            <Setting/>
          </Box>
          </Paper>
        </div>
        {/* </Paper> */}

    </Box>
    </GlobalContextProvider>

    </>
  );
};

