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
import { Autocomplete, Avatar, Breadcrumbs, Link, Stack, TextField } from '@mui/material';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { HiMiniBars3, HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoNotifications } from 'react-icons/io5';
import { MdAssessment, MdDashboard, MdFormatTextdirectionRToL, MdLogin, MdNotifications, MdOutlineReceiptLong, MdOutlineTableView, MdPerson, MdTableBar } from "react-icons/md";

const drawerWidth = 240;

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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);



  const handleDrawer=()=>{
    setOpen(!open);
  }

  const data = [
    {
      Icon:<MdDashboard/>,
      Name:"Dashboard",
    },
    {
      Icon:<MdOutlineTableView/>,
      Name:"Tables",
    },
    {
      Icon:<MdOutlineReceiptLong/>,
      Name:"Billing",
    },
    {
      Icon:<MdFormatTextdirectionRToL/>,
      Name:"RTL",
    },
    {
      Icon:<MdNotifications/>,
      Name:"Notification",
    },
    {
      Icon:<MdPerson/>,
      Name:"Profile",
    },
    {
      Icon:<MdLogin/>,
      Name:"Sign In",
    },
    {
      Icon:<MdAssessment/>,
      Name:"Sign Up",
    },
  ]
  

  return (
    <>
     {/* <Box sx={{ display: 'flex' }}> */}
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:"transparent",marginBlock:2,boxShadow:"none"}}>
        <Toolbar>
        <div className="w-full">
            <div className="flex justify-between flex-col md:flex-row">
                {/* <Typography variant="h6" noWrap component="div" sx={{color:"#f2f2f2"}}>
                  Mini variant drawer
                </Typography> */}
                <div className="flex">
                  <div className="min-[1200px]:mr-8">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="/">
                        <IoMdHome/>
                      </Link>
                      <Typography color="text.primary">Dashboard</Typography>
                    </Breadcrumbs>

                      <Typography color="text.primary" variant="h6" component="h6">Dashboard</Typography>

                  </div>
                  {/* <div className=" hidden min-[1200px]:block ">
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          onClick={()=>setOpen(!open)}
                          edge="start"
                          sx={{
                            marginRight: 5,
                            color:"#000"
                          }}
                          >
                          {open ? <HiMiniBars3 className='ml-5'/> : <HiMiniBars3CenterLeft className='ml-5' />}
                        </IconButton>
                  </div> */}
                </div>
                <div className=" flex">
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    options={[]}
                    renderInput={(params) => <TextField {...params} label="freeSolo" />}
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
                      marginRight: 5,
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
                  <IconButton aria-label="delete">
                      <IoNotifications className='text-[#7b809a] h-5 w-5'/>
                  </IconButton>
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

<div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 text-white box-border" >

  {/* <DrawerHeader >
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader> */}
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
                        <img src="/Images/Logo.png" alt="" />
                      </Avatar>
                </ListItemIcon>
                <ListItemText  sx={{ opacity: open ? 1 : 0 , }}  />
                <h6 className='text-[14px] leading-[1.5] tracking-[0.399px] font-semibold' >{text}</h6>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  <Divider variant='middle' className='my-4' />
{
// check
}
  {
    data.map((item,index)=>(
      <div className="flex items-center mx-4 my-[1.5px] py-2 px-2.5 active:bg-[#1a73e8] hover:shadow-md hover:bg-[rgba(255, 255, 255, 0.2);] bg-${} " >
        <div className="mr-2 w-[32px] h-[32px] flex justify-center items-center">
          {item.Icon}
          </div>
        <p className='text-[14px]'>{item.Name}</p>
      </div>
    ))
  }

          <div className="mb-0 p-4 text-center   ">
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
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box> */}
    </>
  );
}