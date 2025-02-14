"use client"
import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Autocomplete, Avatar, Badge, Breadcrumbs, Link, Stack, TextField } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useRouter } from 'next/router';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { HiMiniBars3, HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoNotifications } from 'react-icons/io5';
import { MdAssessment, MdDashboard, MdFormatTextdirectionRToL, MdLogin, MdNotifications, MdOutlineReceiptLong, MdOutlineTableView, MdPerson, MdTableBar } from "react-icons/md";
import { usePathname } from 'next/navigation';

const drawerWidth = 240 +32;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ScrollHandler = (props: { children: React.ReactElement }) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? '#fff' : 'transparent',
      transition: 'background-color 0.3s ease-out',
    },
  });
};





export default function PersistentDrawerLeft() {
  useScrollTrigger
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  
  
  // React.useEffect(() => {
  //   const handleAriaCurrent = () => {
  //     const links = document.querySelectorAll('.sideLink');
  
  //     links.forEach((link) => {
  //       const anchorElement = link as HTMLAnchorElement;
  //       if (anchorElement.href === window.location.href) {
  //         anchorElement.setAttribute('aria-current', 'page');
  //       } else {
  //         anchorElement.removeAttribute('aria-current');
  //       }
  //     });
  //   };
  // },[]);
   


  const handleDrawer=()=>{
    setOpen(!open);
  }

  const data = [
    {
      Icon:<MdDashboard className='w-5 h-5'/>,
      Name:"Dashboard",
    },
    {
      Icon:<MdOutlineTableView className='w-5 h-5'/>,
      Name:"Tables",
    },
    {
      Icon:<MdOutlineReceiptLong className='w-5 h-5'/>,
      Name:"Billing",
    },
    {
      Icon:<MdFormatTextdirectionRToL className='w-5 h-5'/>,
      Name:"RTL",
    },
    {
      Icon:<MdNotifications className='w-5 h-5'/>,
      Name:"Notification",
    },
    {
      Icon:<MdPerson className='w-5 h-5'/>,
      Name:"Profile",
    },
    {
      Icon:<MdLogin className='w-5 h-5'/>,
      Name:"Sign In",
    },
    {
      Icon:<MdAssessment className='w-5 h-5'/>,
      Name:"Sign Up",
    },
  ]
  
  const pathname = usePathname();

  return (
    <>
     {/* <Box sx={{ display: 'flex' }}> */}
     <div className='relative'>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:"transparent",marginBlock:2,boxShadow:"none"}}>
        <Toolbar>
        <div className="w-full">
            <div className="flex justify-between flex-col md:flex-row">
                {/* <Typography variant="h6" noWrap component="div" sx={{color:"#f2f2f2"}}>
                  Mini variant drawer
                </Typography> */}
                <div className="flex">
                  <div className="min-[1200px]:mx-8 ">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="./">
                        <IoMdHome/>
                      </Link>
                      {/* <Typography color="text.primary">Dashboard</Typography> */}
                      <Typography color="text.primary" className='text-[14px]'>{pathname.slice(1)}</Typography>

                    </Breadcrumbs>

                      <Typography color="text.primary" variant="h6" component="h6" className='text-[14px]'>{pathname.slice(1)}</Typography>

                  </div>
              
                </div>
                <div className=" flex">
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    options={[]}
                    renderInput={(params) => <TextField {...params} label="Search" className='text-[#7b809a]' />}
                  />
                </Stack>


                  <div className=" flex items-center ">
                  <IconButton aria-label="delete">
                      {/* <Avatar sx={{ bgcolor: "#f2f2f2",color:"#7b809a" }}> */}
                        <FaUser className='text-[#7b809a] h-5 w-5'/>
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
                    }}
                    >
                    {/* <MenuIcon  /> */}
                    {open ? <HiMiniBars3CenterLeft className='' /> :<HiMiniBars3 className=''/> }
                </IconButton>
                  </div>
                  <IconButton aria-label="delete">
                      <IoMdSettings className='text-[#7b809a] h-5 w-5'/>
                  </IconButton>
                  {/* <IconButton aria-label="delete">
                      <IoNotifications className='text-[#7b809a] h-5 w-5'/>
                    </IconButton> */}
                  <Badge badgeContent={3} color="error">
                    <IoNotifications className='text-[#7b809a] h-5 w-5'/>
                  </Badge>
                  </div>
                </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          [`& .MuiDrawer-paper`]: { boxSizing: 'border-box',margin:"16px", borderTopLeftRadius:"12px" , borderEndStartRadius:"12px",height:"auto" },

          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        <div className="flex h-[calc(-2rem+100vh)]">

<div className="bg-gradient-to-r from-gray-700  to-gray-900 text-white box-border flex justify-between flex-col" >

  {/* <DrawerHeader >
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader> */}
  <div className="">

  <List sx={{p:0}}>
          {['Material Dashboard 2'].map((text, index) => (
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
                      }}>
                        <img src="Images/Logo.png" alt="" />
                      </Avatar>
                </ListItemIcon>
                <ListItemText  sx={{ opacity: open ? 1 : 0 , }}  />
                <h6 className='text-[14px] leading-[1.5] tracking-[0.399px] font-semibold' >{text}</h6>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
{
  // check
}
  {
    data.map((item,index)=>(
      <Link href={`./${item.Name}`}  className='sideLink text-[14px] text-white no-underline rounded-md' >
      <div className="flex items-center mx-4 my-[1.5px] py-2 px-2.5 rounded-md target:bg-[#1a73e8] active:bg-[#1a73e8] hover:shadow-md  hover:bg-[rgba(255, 255, 255, 0.2) focus:bg-[rgba(255, 255, 255, 0.2)] " >
        <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
          <span className='w-5 h-5'>{item.Icon}</span>
          </div>
        {/* <Link href={`./${item.Name}`}  className='text-[14px] text-white no-underline '>{item.Name}</Link> */}
        <span>{item.Name}</span>
      </div>
      </Link>
    ))
  }
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

    <Divider variant='middle' className='my-4' />
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
      </Drawer>
      
    </div>
    </>
  );
}

function handleAriaCurrent(): unknown {
  throw new Error('Function not implemented.');
}
