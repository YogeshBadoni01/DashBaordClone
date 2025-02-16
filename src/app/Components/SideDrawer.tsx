import { Box, Button, ButtonGroup, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Switch, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoMdSettings, IoMdStar, IoMdStarOutline } from "react-icons/io";
import React, { useState } from "react";
import { MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useThemeContext } from "../Theme/ThemeContextProvider";
import { useGlobalContext } from '../Theme/myThemeContext';

export default function sideDrawer(props: { trigger: any; }) {
    const [open, setOpen] = React.useState(false);
    const [alignment, setAlignment] = React.useState('web');

    const [drawerOpen, setDrawerOpen] = useState(false);

    // test
    // const [alignment, setAlignment] = React.useState('Dark');
    // const myhandleChange = (event, newAlignment) => {
    //   if (newAlignment !== null) {
    //     setAlignment(newAlignment);
    //   }
    // };

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };
  // const toggleDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
      
    };

    // const {mode,toggleColorMode}=useThemeContext();
   
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);



    const trigger=props.trigger;
    const colors=[
      {
        color:"bg-[#df2869]",
      },
      {
        color:"bg-[#313136]",
      },
      {
        color:"bg-[#338cec]",
      },
      {
        color:"bg-[#5cb360]",
      },
      {
        color:"bg-[#fd9c17]",
      },
      {
        color:"bg-[#e9423f]",
      },
    ]

    const {DrawerMode,Drawerbg,setDrawerbg, setDrawerMode,DashboardMode, setDashboardMode, ToggleDrawer,ToggleDashboard }= useGlobalContext();

  
    const DrawerList = (
      
      // <Box sx={{ width: 360,padding:'10px' }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ width: 360, }} role="presentation" >
        
        <Paper sx={{boxShadow:"none",padding:'10px',borderRadius:"12px",backgroundColor:"transparent",backgroundImage:"none"}} >
        <div className="pt-8 px-6 pb-1 flex justify-between">
            <div className="">
            <Typography variant="h5" sx={{color:"text.primary",fontSize:20,fontWeight:700,lineHeight:1.375}} className="">Material UI Configurator</Typography>
            <Typography paragraph sx={{color:"text.secondary",fontSize:16,fontWeight:300,lineHeight:1.6,letterSpacing:"0.01071rem"}} className="">See our dashboard options.</Typography>
            </div>
            <span>
              <MdClose onClick={toggleDrawer(false)} />
            </span>
        </div>

        {/* <div className="">
          <Divider orientation="vertical" flexItem  sx={{my:2,color:"#7b809a"}}/>
        </div>
        <Divider /> */}

<div className="my-4">
          <Divider orientation="vertical" flexItem  sx={{background:"#fff",height:"1px"}}/>
        </div>

        <div className="p-6 pt-1">
            <div className="">
            <Typography variant="h6" sx={{color:"text.primary",fontSize:16,fontWeight:700,lineHeight:1.625,}} className="  ">Sidenav Colors</Typography>
              <div className="flex leading-[1.625]">
                {
                  colors.map((item,index)=>(
                    <button className="mr-2 flex items-center rounded-full " key={index}>
                        <Typography variant="button" sx={{color:"text.primary"}} className={`${item.color} w-6 h-6 rounded-full`}></Typography>
                      </button>
                  ))
                }
              </div>
            </div>
        <div className="mt-6">
              <Typography variant="h6" sx={{color:"text.primary",fontSize:16,fontWeight:700,lineHeight:1.625}} className="">Sidenav Type</Typography>
              <Typography paragraph sx={{color:"text.secondary",fontSize:14,fontWeight:300,lineHeight:1.6,letterSpacing:"0.01071rem"}} className=" ">Choose between different sidenav types</Typography>
                  {/* <div className="flex mt-4">
                    <Button type="button" className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 active:bg-white bg-[#191919] active:text-[#191919] text-white font-bold ">Dark </Button>
                    <Button type="button" className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 bg-white active:bg-[#191919] active:text-white font-bold ">transparent</Button>
                    <Button type="button" className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 bg-white active:bg-[#191919] active:text-white font-bold ">white</Button>
                  </div> */}
                  {
                    
                  }
                 <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton  value="Dark" onClick={()=>{console.error(Drawerbg,DrawerMode,setDrawerbg('dark'))}} sx={{ borderRadius:"4px",borderWidth:"1px",borderStyle:"solid",borderColor:DrawerMode!=="dark"?"#344767":"#ffffff",fontSize:12,py:"8px",px:"18px"
                  ,backgroundColor:"background.myButton"
                  ,color:DrawerMode=="dark"
                  ? 
                  Drawerbg!=="transparent"?"#344767":"#ffffff"
                  :
                  Drawerbg!=="transparent"?"#ffffff":"#344767"
                  
                  ,'&:hover':{
                    color:DrawerMode=="dark"?"#ffffff":"#344767"
                    ,backgroundColor:"background.myButton"
                  }
                }} style={{borderRadius:"8px"}}>Dark</ToggleButton>
                  {/* <ToggleButton  value="Dark" onClick={()=>{console.error(Drawerbg,setDrawerbg('dark'))}} sx={{ borderRadius:"4px",backgroundColor:"background.myButton",borderWidth:"1px",borderStyle:"solid",borderColor:DrawerMode?"#344767":"#ffffff",color:DrawerMode!=="dark"?"#ffffff":"#344767",fontSize:12,py:"8px",px:"18px"}}>Dark</ToggleButton> */}
                  <div className="m-2"></div>
                  <ToggleButton  value="Dark" onClick={()=>{console.error(Drawerbg,setDrawerbg('transparent'))}} sx={{ borderRadius:"4px",backgroundColor:"background.myButton",borderWidth:"1px",borderStyle:"solid",borderColor:DrawerMode!=="dark"?"#344767":"#ffffff",borderLeftColor:DrawerMode?"#344767":"#ffffff",fontSize:12,py:"8px",px:"18px"  
                  ,color:DrawerMode=="dark"
                  ? 
                  Drawerbg!=="transparent"?"#344767":"#ffffff"
                  :
                  Drawerbg!=="transparent"?"#ffffff":"#344767"
                  
                  ,'&:hover':{
                    color:DrawerMode=="dark"?"#ffffff":"#344767"
                  }
                 }}style={{borderRadius:"8px"}}>transparent</ToggleButton>
                  {/* <ToggleButton value="transparent" onClick={()=>{console.error(Drawerbg,setDrawerbg('transparent'))}} sx={{borderLeft:"1px solid #fff"}} className=""  >transparent</ToggleButton> */}
                  <div className="m-2"></div>
                  <ToggleButton  value="Dark" onClick={()=>{console.error(Drawerbg,setDrawerbg('white'))}} sx={{ borderRadius:"4px",backgroundColor:"background.myButton",borderWidth:"1px",borderStyle:"solid",borderColor:DrawerMode!=="dark"?"#344767":"#ffffff",borderLeftColor:DrawerMode?"#344767":"#ffffff",fontSize:12,py:"8px",px:"18px"  
                  ,color:DrawerMode=="dark"
                  ? 
                  Drawerbg!=="transparent"?"#344767":"#ffffff"
                  :
                  Drawerbg!=="transparent"?"#ffffff":"#344767"
                  
                  ,'&:hover':{
                    color:DrawerMode=="dark"?"#ffffff":"#344767"
                  }
                 }}style={{borderRadius:"8px"}}>white</ToggleButton>
                  {/* <ToggleButton value="white" onClick={()=>{console.error(Drawerbg,setDrawerbg('white'))}}>white</ToggleButton> */}
                </ToggleButtonGroup>

                  {/* {console.error(Drawerbg,setDrawerbg)} */}
                  {/* <Box 
                  sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    bgcolor:"background.default",
                    // color:"text.primary",
                    border:"1px solid",
                    p:2,
                  }}
                  >

                  
                  </Box> */}
                  {/* <ButtonGroup
                  sx={{
                    border: "none",
                    display: "flex",
                    gap: "10px",
                    boxShadow: "none",
                  }}
                  className="mt-4 border-none bg-white rounded-xl   font-bold tracking-[0.00938em] leading-[1.625]  " >
                  <Button
                    sx={{
                      width: "100%",
                      outline: "none",
                      // border:"1px solid #344767"
                      borderWidth:'1px',
                      borderStyle:"solid",
                      borderColor:"#344767",
                      borderRightWidth:'1px',
                      borderRightStyle:"solid",
                      borderRightColor:"#344767",
                      paddingBlock:"10px",
                      paddingInline:"24px",
                      borderRadius:"8px",
                      fontWeight:700,
                      color:"#344767",
                      "&:hover": { borderColor: "#fff",color:"#fff",background:"#191919" },
                      
                    }}
                    className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 bg-white active:bg-[#191919] active:text-white " >
                    dark
                    
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      outline: "none",
                      borderWidth:'1px',
                      borderStyle:"solid",
                      borderColor:"#344767",
                      borderRightWidth:'1px',
                      borderRightStyle:"solid",
                      borderRightColor:"#344767",
                      paddingBlock:"10px",
                      paddingInline:"24px",
                      borderRadius:"8px",
                      fontWeight:700,
                      color:"#344767",
                      "&:hover": { borderColor: "#fff",color:"#fff",background:"#191919" },
                      
                    }}
                    className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 bg-white active:bg-[#191919] active:text-white " >
                  
                    transprent
                  </Button>
                  <Button
                    sx={{
                       width: "100%",
                      outline: "none",
                      borderWidth:'1px',
                      borderStyle:"solid",
                      borderColor:"#344767",
                      borderRightWidth:'1px',
                      borderRightStyle:"solid",
                      borderRightColor:"#344767",
                      paddingBlock:"10px",
                      paddingInline:"24px",
                      borderRadius:"8px",
                      fontWeight:700,
                      color:"#344767",
                      "&:hover": { borderColor: "#fff",color:"#fff",background:"#191919" },
                                          
                    }}
                    className="hover:myshadow uppercase border-[1px] text-[12px] border-solid border-[#344767] rounded-lg py-2.5 px-6 w-full mr-2 bg-white active:bg-[#191919] active:text-white " >

                    white
                  </Button>
                </ButtonGroup> */}
        </div>

        <div className="mt-6 flex justify-between items-center">
        <Typography variant="h6" sx={{color:"text.primary",fontSize:16,fontWeight:700,lineHeight:1.625}} className="">Navbar Fixed</Typography>
          <div className="">
            <Switch
                defaultChecked
                color="default"
                sx={{ color: "#f2f2f2" }}
                
              />
          </div>
        </div>

        <div className="my-4">
          <Divider orientation="vertical" flexItem  sx={{background:"#fff",height:"1px"}}/>
        </div>

        <div className="mt-6 flex justify-between items-center">
        <Typography variant="h6" sx={{color:"text.primary",fontSize:16,fontWeight:700,lineHeight:1.625}} className="">Light/Dark</Typography>
          <div className="">            

            <Switch
                // defaultChecked
                color="default"
                sx={{ color: "#f2f2f2" }}
                onChange={()=>{setDrawerMode(DrawerMode == "light" ? "dark": "light")}}
                checked={DrawerMode == "light"}
              />
          </div>
        </div>

        <div className="my-4">
          <Divider orientation="vertical" flexItem  sx={{background:"#fff",height:"1px"}}/>
        </div>

        <div className="mt-6 mb-4 ">
          <Link href="https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/?_ga=2.261105485.1746401024.1710735134-263874884.1710735134" className="border-[1px] text-[12px] border-solid border-[#344767] uppercase flex justify-center items-center px-6 py-2.5 rounded-xl  font-bold no-underline " style={{textDecoration:"none",fontSize:"12px"}}>
           {/* <span className="text-[#344767]">
            view documentation
           </span> */}
           <Typography variant="button" sx={{color:"background.custom3",fontSize:12}} className={`text-[${DrawerMode=="dark"?"#f0f2f566":"#344767"}]`}>
            view documentation
           </Typography>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <span>
            <div className="flex">
              <Link href="https://github.com/creativetimofficial/material-dashboard-react" className="flex py-[5px] px-2.5 text-[12px] leading-[16px] text-[#24292f] items-center bg-[#ebf0f4] rounded-[3px] border-[1px] border-solid border-[#1f232826]" style={{alignItems:"center",textDecoration:"none",fontSize:"12px"}} >
                   <span className="text-[#000] flex items-center">
                <IoMdStarOutline className="w-4 h-4 bg-[#ebf0f4] " />
                    &nbsp;
                    Star
                
                   </span>
              </Link>
              <Link href="https://github.com/creativetimofficial/material-dashboard-react" className="flex py-[5px] px-2.5 text-[12px] leading-[16px] text-[#24292f] bg-[#ebf0f4] rounded-[3px] border-[1px] border-solid border-[#1f232826]" style={{textDecoration:"none",fontSize:"12px"}}>
              <span className="text-[#000] flex items-center bg-[#ebf0f4] ">

                2,703  
                </span>                  
              </Link>
            </div>
          </span>
        </div>

        <div className="mt-4">
          <div className="mb-1">
          <Typography variant="h6" sx={{color:"text.primary",fontSize:16,fontWeight:700,lineHeight:1.625,textAlign:"center"}} className="">Thank you for sharing!</Typography>
          </div>

          <div className="flex justify-center items-center">
            <div className="mr-3">
              <Link href="" className="py-2.5 px-6 uppercase text-white flex bg-[#344767] text-[12px] rounded-lg no-underline items-center" style={{textDecoration:"none",fontSize:"12px"}}>
                <span className="text-white no-underline flex items-center ">
                <FaTwitter className="w-4 h-4"/>
                &nbsp;

                Tweet
                </span>
              </Link>
            </div>
            <div className="mr-3">
              <Link href="" className="py-2.5 px-6 uppercase text-white flex bg-[#344767] text-[12px] rounded-lg no-underline items-center" style={{textDecoration:"none",fontSize:"12px"}}>
                <span className="text-white no-underline flex items-center">
                <FaFacebook className="w-4 h-4"/>
                &nbsp;
                share
                </span>
              </Link>
            </div>
          </div>
        </div>
        </div>
        </Paper>
        
      </Box>
    );
  
    return (
      <div>
        <Drawer open={open}  onClose={toggleDrawer(false)} anchor="right" >
        {/* <Drawer anchor='right' open={drawerOpen} ModalProps={{ onBackdropClick: toggleDrawer }}> */}
        {/* <Drawer anchor='right' open={drawerOpen} onClick={()=>{setDrawerOpen(true)}}> */}
        <Paper sx={{boxShadow:"none",padding:'10px',borderRadius:"12px",height:"100%",backgroundColor:"background.custom1"}} style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>
          {DrawerList}
        </Paper>
        </Drawer>
  
        <IconButton  onClick={toggleDrawer(true)}>
          <IoMdSettings className='text-[#7b809a] h-5 w-5' style={{color:trigger ?"#344767":"#7b809a"}}/>
        </IconButton>
      </div>
    );
  }
  