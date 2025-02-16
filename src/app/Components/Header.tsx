import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { MdAccountCircle, MdDonutLarge, MdKey, MdPerson } from 'react-icons/md';
import Link from 'next/link';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const data=
  [
    {
        LinName:"Dashboard",
        Link:"./Dashboard",
        Icon:<MdDonutLarge className='w-[20px] h-[20px] text-[#7b809a]' />,
    },
    {
      LinName:"Profile",
      Link:"./Dashboard/Profile",
        Icon:<MdPerson className='w-[20px] h-[20px] text-[#7b809a]' />,
    },
    {
      LinName:"Sign Up",
      Link:"./SignUp",
        Icon:<MdAccountCircle className='w-[20px] h-[20px] text-[#7b809a]' />,
    },
    {
      LinName:"Sign In",
      Link:"./SignIn",
        Icon:<MdKey className='w-[20px] h-[20px] text-[#7b809a]' />,
  },
]

  return (
    <Box sx={{ flexGrow: 1 }} className="">
   
      <div className='rounded-xl' style={{background:'rgba(255, 255, 255, 0.8)', WebkitBackdropFilter:'saurate(200%) blur(30px),borderRadius:12 ]'}}>
        <Toolbar className='rounded-xl min-h-auto px-4 py-2' style={{borderRadius:12,minHeight:"auto"}}>
        <div className="flex justify-between items-center w-full ">

          {/* <Typography variant="h6" component="div" >
          </Typography> */}
          <h6 className='text-[14px] text-[#344767] leading-[1.5] Tracking-[0.02857em] font-bold'>
            Material Dashboard 21
          </h6>

          {/* <ul>
            <li className='mx-2 p-2'><MdDonutLarge className='w-[20px] h-[20px] text-[#7b809a]' /> <span className='text-[#344767]'>Dashboard</span> </li>
            <li><MdPerson className='w-[20px] h-[20px] text-[#7b809a]' /> <span>Profile</span> </li>
            <li><MdAccountCircle  className='w-[20px] h-[20px] text-[#7b809a]' /> <span>Sign Up</span> </li>
        </ul> */}
         
          <ul className='md:flex hidden '>
                {
                    data.map((item,index)=>(
                         <Link key={index} href={item.Link}>
                        <li key={index} className='flex items-center text-[14px]  leading-[1.5] Tracking-[0.02857em] mx-2 p-2'>{item.Icon}
                          <span className='text-[#344767]' >&nbsp;{item.LinName}</span>
                          </li>
                         </Link>
                    ))
                }
          </ul>

          <button className='hidden md:block px-4 py-1.5 text-[#fff] mt-[-2.4px] cursor-pointer align-middle leading-[1.4] Tracking-[0.02857em] min-w-[64px] font-bold rounded-lg min-h-[32px] text-[12px] uppercase' style={{background:'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'}}>Free Download</button>
        </div>

          {auth && (
            <div className='block md:hidden'>
              
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenu}
                >
                    <MenuIcon />

                    
                </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                <MenuItem onClick={handleClose}>Sign In</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </div>
    </Box>
  );
}
