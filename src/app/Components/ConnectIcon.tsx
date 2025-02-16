// ConnectedIcons.js

import React from 'react';
import { Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import {
  MdNotifications,
  MdInventory2,
  MdShoppingCart,
  MdOutlinePayment,
  MdVpnKey,
} from 'react-icons/md';
import "../globals.css"


const ConnectedIcons = () => {
  const data = [
    {
      Icon: MdNotifications,
      Heading: '$2400, Design changes',
      Subheading: '22 DEC 7:20 PM',
      color: '#4caf50',
    },
    {
      Icon: MdInventory2,
      Heading: 'New order #1832412',
      Subheading: '21 DEC 11 PM',
      color: '#f44335',
    },
    {
      Icon: MdShoppingCart,
      Heading: 'Server payments for April',
      Subheading: '21 DEC 9:34 PM',
      color: '#1a73e8',
    },
    {
      Icon: MdOutlinePayment,
      Heading: 'New card added for order #4395133',
      Subheading: '20 DEC 2:20 AM',
      color: '#fb8c00',
    },
    {
      Icon: MdVpnKey,
      Heading: 'New card added for order #4395133',
      Subheading: '18 DEC 4:54 AM',
      color: '#e91e63',
    },
  ];

  return (
    <div className="">
      {data.map((item, index) => (
        <List key={index} className='relative'>
          <ListItem sx={{position:"relative"}}>
          {/* <Divider orientation="vertical" variant="middle" /> */}
            <ListItemIcon className='mt-[-10px] z-10'>

            <div className={`bg-[${item.color}] h-8 w-8 text-white flex justify-center items-center rounded-full `} style={{ backgroundColor: item.color }} >
                    <item.Icon className='' />
                </div>
            </ListItemIcon>

            <div className="absolute bottom-0 left-[1%] rotate-90 ">
              <Divider orientation='horizontal' sx={{width:"50px",height:"1px",backgroundColor:"text.secondary",display:"block",
              "&:last-child":{
                // display:"none",
                visibility:"hidden"
              }
                
                }}></Divider>
            </div>
            <div>
              <Typography variant="h6" sx={{fontSize:14,fontWeight:600,lineHeight:"1.5",color:"text.primary"}} >{item.Heading}</Typography>
              <Typography variant="subtitle1" sx={{fontSize:12,color:"text.secondary"}} className=''>{item.Subheading} </Typography>
            </div>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default ConnectedIcons;
