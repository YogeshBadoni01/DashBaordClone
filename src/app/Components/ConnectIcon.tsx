// ConnectedIcons.js

import React from 'react';
import { List, ListItem, ListItemIcon, Typography } from '@mui/material';
import {
  MdNotifications,
  MdInventory2,
  MdShoppingCart,
  MdOutlinePayment,
  MdVpnKey,
} from 'react-icons/md';

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
        <List key={index}>
          <ListItem>
            <ListItemIcon className='mt-[-10px]'>

            <div className={`bg-[${item.color}] h-8 w-8 text-white flex justify-center items-center rounded-full `} style={{ backgroundColor: item.color }} >
                    <item.Icon className='' />
                </div>
            </ListItemIcon>
            <div>
              <Typography variant="h6" className='text-[#344767] text-[14px] font-semibold leading-[1.5] '>{item.Heading}</Typography>
              <Typography variant="subtitle1" className='text-[#7b809a] text-[12px]'>{item.Subheading} </Typography>
            </div>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default ConnectedIcons;
