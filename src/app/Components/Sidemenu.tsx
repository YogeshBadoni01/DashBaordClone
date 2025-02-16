"use client"
import  React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Autocomplete, Avatar, Badge, Breadcrumbs, Paper, Stack, TextField, Tooltip } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useRouter } from 'next/navigation';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { HiMiniBars3, HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoNotifications } from 'react-icons/io5';
import { MdAccountCircle, MdAssessment, MdClose, MdDashboard, MdFormatTextdirectionRToL, MdLogin, MdNotifications, MdOutlineReceiptLong, MdOutlineTableView, MdPerson, MdTableBar } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
// import SideDrawer from './SideDrawer';
import { relative } from 'path';
import SideDrawer from './SideDrawer';
import { useGlobalContext } from '../Theme/myThemeContext';
import Link from 'next/link';



const drawerWidth = 240 +32;


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function PersistentDrawerLeft() {
  const router = useRouter();
  useScrollTrigger
  const [open, setOpen] = React.useState(true);


  // useEffect(() => {
  //   function handleResize() {
  //     // Set open to false if screen width is less than 768px
  //     setOpen(window.innerWidth >= 768);
  //   }
  //   window.addEventListener('resize', handleResize);
  //   // Initial check for screen size
  //   handleResize();
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const data = [
    {
      Icon:<MdDashboard className='w-5 h-5'/>,
      Name:"Dashboard",
      Link:"/Dashboard"
    },
    {
      Icon:<MdOutlineTableView className='w-5 h-5'/>,
      Name:"Tables",
      Link:"/Dashboard/Tables"
    },
    {
      Icon:<MdOutlineReceiptLong className='w-5 h-5'/>,
      Name:"Billing",
      Link:"/Dashboard/Billing"
    },
    {
      Icon:<MdFormatTextdirectionRToL className='w-5 h-5'/>,
      Name:"RTL",
      Link:"/Dashboard/RTL"
    },
    {
      Icon:<MdNotifications className='w-5 h-5'/>,
      Name:"Notification",
      Link:"/Dashboard/Notification"
    },
    {
      Icon:<MdPerson className='w-5 h-5'/>,
      Name:"Profile",
      Link:"/Dashboard/Profile"
    },
  ]
  
  const pathname = usePathname();

  const [headerBg,setHeaderBg]=useState(false)

  const {DrawerMode,Drawerbg,setDrawerbg, setDrawerMode,DashboardMode, setDashboardMode, ToggleDrawer,ToggleDashboard }= useGlobalContext();

  // const AppBar = document.querySelectorAll('.appBar')
  
  // const headerHandler = () =>{
  //   if(window.scrollY > 100)
  //   setHeaderBg(true)
  // }

  



 const trigger =useScrollTrigger();

  return (
    <>
    {/* {console.log(pathname)} */}
     <Box sx={{ 
      display: 'flex',
      backgroundColor:"background.default"
      }}>
        {/* <Paper sx={{      backgroundColor:"background.default"}}> */}
        <Paper sx={{backgroundColor:"background.paper",backgroundImage:"none"}}>
          
        <div className='relative '>
          <CssBaseline />

              <AppBar position="fixed" open={open} sx={{marginBlock:3,background:"transparent",boxShadow:"none", py:"8px",
            '@media (max-width: 768px)': {
              marginLeft:0,
              zIndex:998,
              width:"100%"
            },
            }}
              style={{background:trigger ? 'background.custom1' : "transparent"}}>

                
          <div className='px-4 py-1'>
                <Toolbar sx={{
                  backdropFilter:trigger? 
                DrawerMode=="dark"?
                "saturate(200%) blur(1.875rem)":""
                :
                ""
                ,borderRadius:"12px",paddingBlock:"8px",
                  backgroundColor:trigger? 
                DrawerMode=="dark"?
                "transparent":"#ffffff"
                :
                ""
                }}>
                <div className="w-full">
                    <div className="flex justify-between flex-col md:flex-row">
                        {/* <Typography variant="h6" noWrap component="div" sx={{color:"#f2f2f2"}}>
                          Mini variant drawer
                        </Typography> */}
                        <div className="flex">
                          <div className="min-[1200px]:mx-8 ">
                            <Breadcrumbs aria-label="breadcrumb">
                              <Link  color="inherit" href="./">
                                <IoMdHome/>
                              </Link>
                              {/* <Typography color="text.primary">Dashboard</Typography> */}
                              <Typography color="text.primary" sx={{fontSize:"14px"}} className=''>{pathname.slice(11)===""?`Dashboard`:`${pathname.slice(11)}`}</Typography>

                            </Breadcrumbs>

                              <Typography color="text.primary" sx={{fontSize:"16px",color:"text.primary",fontWeight:700}} variant="h6" component="h6" className=' '>{pathname.slice(11)===""?`Dashboard`:`${pathname.slice(11)}`}</Typography>

                          </div>
                      
                        </div>
                        <div className=" flex md:justify-start justify-between" style={{color:trigger ?"#344767":"#7b809a"}}>
                        <div className="">
                          <p>{DrawerMode}mode</p>
                          {/* <button onClick={()=>{ToggleDrawer}}> toggle me</button> */}
                          <button onClick={()=>{setDrawerMode(DrawerMode == "dark" ? "light": "dark")}}> toggle me</button>
                          
                        </div>
                        <Stack spacing={2} sx={{ width: 180 }}>
                          <Autocomplete
                            freeSolo
                            options={[]}
                            renderInput={(params) => <TextField {...params} label="Search" className='text-[#7b809a]' />}
                            style={{color:trigger ?"#344767":"#7b809a"}}
                          />
                        </Stack>


                          <div className=" flex items-center ">
                          <IconButton aria-label="delete" style={{color:trigger ?"#344767":"#7b809a"}}>
                              {/* <Avatar sx={{ bgcolor: "#f2f2f2",color:"#7b809a" }}> */}
                                <MdAccountCircle className='text-[#7b809a] h-5 w-5' style={{color:trigger ?"#344767":"#7b809a"}}/>
                              {/* </Avatar> */}
                          </IconButton>
                          <div className=" block min-[1200px]:hidden ">
                              <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={()=>setOpen(!open)}
                            edge="start"
                            sx={{
                              color:"#000"
                            }
                            
                            
                          }
                            style={{color:trigger ?"#344767":"#7b809a"}}
                            className={``}
                            >
                            {/* <MenuIcon  /> */}
                            {open ? <HiMiniBars3CenterLeft className='' /> :<HiMiniBars3 className=''/> }
                        </IconButton>
                          </div>
                          {/* <IconButton aria-label="delete">
                              <IoMdSettings className='text-[#7b809a] h-5 w-5'/>
                          </IconButton> */}

                          
                          <div className=""     style={{color:trigger ?"#344767":"#7b809a"}}>
                            <SideDrawer trigger={trigger}/>
                          </div>
                          {/* <IconButton aria-label="delete">
                              <IoNotifications className='text-[#7b809a] h-5 w-5'/>
                            </IconButton> */}
                          {/* <Badge badgeContent={3} color="error"> */}
                            <IoNotifications className='text-[#7b809a] h-5 w-5' style={{color:trigger ?"#344767":"#7b809a"}}/>
                          {/* </Badge> */}
                          </div>
                        </div>
                    </div>
                  </div>
                </Toolbar>
          </div>
              </AppBar>
          
          
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  position:'relative',
                  top:0,
                  left:0,
                  [`& .MuiDrawer-paper`]: { boxSizing: 'border-box',margin:"16px",  borderRadius:"12px",height:"auto" },
                  '@media (max-width: 768px)': {
                    position: 'absolute',
                    width: '100%',
                    maxWidth: '100%',
                    zIndex:999,
                  },
                  
                }}
                variant="persistent"
                anchor="left"
                open={open}
                >
                <Paper sx={{ backgroundColor:Drawerbg == 'dark'?"#191919":`${Drawerbg}`,border:"none" }} >
                {/* <DrawerHeader>
                  <IconButton onClick={handleDrawer}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </DrawerHeader> */}
                <div className="relative flex h-[calc(-2rem+100vh)]">

        {/* <div className="bg-gradient-to-tl from-[#191919] to-[#42424a] text-white box-border flex justify-between flex-col" > */}
        <div className="text-white box-border flex justify-between flex-col" >
        {/* <div className="bg-[#191919] text-white box-border flex justify-between flex-col" > */}

          {/* <DrawerHeader >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader> */}
          <div className="">
            <div className="absolute top-0 right-0 md:hidden">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={()=>setOpen(!open)}
                edge="start"
                sx={{
                  color:"#000",
                  zIndex:100
                }
                
                
              }
                style={{color:trigger ?"#344767":"#7b809a"}}
                className={``}
                >
                  <MdClose className='w-4 h-4'/>
                  </IconButton>
            </div>
          <List sx={{p:0}}>
                  {['Material Dashboard 2'].map((text) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block', paddingInline:"32px",paddingTop:"24px", paddingBottom:"8px" }}>
                      <ListItemButton
                      href='./'
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          p:0,
                          fontSize:"14px"
                        }}
                        className='bg-transparent '
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                          className='bg-transparent '
                        >
                          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                              <Avatar className='Avtar ' sx={{
                                bgcolor:'transparent',
                                borderRadius:"0",
                                maxHeight:"32px",
                                maxWidth:"32px",
                              }}
                              // style={{border:"2px solid #ffffff"}}
                              >
                                <img src="/Images/Logo.png" alt="" />
                              </Avatar>
                        </ListItemIcon>
                        <ListItemText  sx={{ opacity: open ? 1 : 0 , }}  />
                        <Typography variant="h6" sx={{color:Drawerbg=='white'?'text.mydrawer':'#fff',fontSize:"14px",fontWeight:600,lineHeight:1.5,letterSpacing:"0.399px"}} className='' >{text}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
        {
          // check
          <Divider variant="middle" className="h-[1px] opacity-25 bg-gradient-to-l from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4" />

        }
        {data.map((item, index) => (

                  <Link href={`${item.Link}`} key={index}  className={`sideLink text-[14px] text-white no-underline rounded-md `} style={{color:"#fff",textDecoration:"none"}}  >
                    {/*}  <div className={`flex items-center mx-4 my-[1.5px] py-2 px-2.5 rounded-md target:bg-[#1a73e8] active:bg-[#1a73e8] hover:shadow-md  hover:bg-[rgba(255, 255, 255, 0.2) focus:bg-[rgba(255, 255, 255, 0.2)] ${pathname.slice(11)==${item.Name}?`bg-[#1a73e8]`:`bg-red-200`}`} > */} 
                    <div className={`flex items-center mx-4 my-[1.5px] py-2 px-2.5 rounded-md target:bg-[#1a73e8] active:bg-[#1a73e8] hover:shadow-md  hover:bg-[rgba(255, 255, 255, 0.2) focus:bg-[rgba(255, 255, 255, 0.2)] `} >
                      <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
                      <Typography variant="caption" sx={{color:Drawerbg=='white'?'text.mydrawer':'#fff',fontSize:"14px",fontWeight:300,lineHeight:1.5,letterSpacing:"0.399px"}} className='w-5 h-5'>{item.Icon}</Typography>
                      </div>
                      <Typography variant="caption" sx={{color:Drawerbg=='white'?'text.mydrawer':'#fff',fontSize:"14px",fontWeight:300,lineHeight:1.5,letterSpacing:"0.399px"}}>{item.Name}</Typography>
                    </div>
                  </Link>
          // </Tooltip>
                ))}
                <Link href="/SignIn"  className='sideLink text-[14px] text-white no-underline rounded-md'   style={{color:"#fff",textDecoration:"none"}}>
                    <div className="flex items-center mx-4 my-[1.5px] py-2 px-2.5 rounded-md target:bg-[#1a73e8] active:bg-[#1a73e8] hover:shadow-md  hover:bg-[rgba(255, 255, 255, 0.2) focus:bg-[rgba(255, 255, 255, 0.2)] " >
                      <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
                        <span className='w-5 h-5'><MdAssessment className='w-5 h-5'/></span>
                      </div>
                      <span>SignIn</span>
                    </div>
                  </Link>
                <Link href="/SignUp"  className='sideLink text-[14px] text-white no-underline rounded-md'  onClick={() => router.push('./SignUp')} style={{color:"#fff",textDecoration:"none"}}>
                    <div className="flex items-center mx-4 my-[1.5px] py-2 px-2.5 rounded-md target:bg-[#1a73e8] active:bg-[#1a73e8] hover:shadow-md  hover:bg-[rgba(255, 255, 255, 0.2) focus:bg-[rgba(255, 255, 255, 0.2)] " >
                      <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
                        <span className='w-5 h-5'><MdLogin className='w-5 h-5'/></span>
                      </div>
                      <span>SignUp</span>
                    </div>
                  </Link>

          {/* {
            data.map((item,index)=>(
              <div className="flex items-center mx-4 my-[1.5px] py-2 px-2.5 active:bg-[#1a73e8] hover:shadow-md hover:bg-[rgba(255, 255, 255, 0.2);] " >
              <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
              {item.Icon}
              </div>
              <Link href={`./${item.Name}`}  className='text-[14px] text-white no-underline '>{item.Name}</Link>
              </div>
              ))
            } */}

            </div>
            <div className="">

            {/* <Divider variant='middle' className='my-4 bg-white text-white ' style={{backgroundImage:'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0)'}} /> */}
                  <div className="mb-0 p-4 text-center  mt-auto ">
                    <div className="bg-[#1a73e8] px-6 py-2.5 rounded-xl">

                      <Link href="" className=''>
                        <p className="text-[14px] text-white font-bold uppercase leading-[1.4] rounded-xl">
                          Upgrade to Pro
                        </p>
                      </Link>
                    </div>
                    </div>
            </div>
        </div>
        </div>
          </Paper>
              </Drawer>
          
        </div>
          </Paper>
      </Box>


    </>
  );
}

