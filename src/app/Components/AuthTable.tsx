"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ImInsertTemplate } from 'react-icons/im';
import { Avatar, AvatarGroup, Badge, LinearProgress, Link, Typography } from '@mui/material';

function createData(
    author: Array<string>,
    func:Array<string>,
  status: boolean,
  employed: string,
  action: string,
//   protein: number,
) {
  return { author,func, status, employed, action };
}

const rows = [
//   createData('Material UI XD Version',"adobe-xd" , 
//   ['Ryan Tompson','Ryan Tompson2','Alexander Smith','Jessica Doe']
//   ,"$14,000" ,[60,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))","#49a3f1"]),
  
  createData(["Ryan Tompson2","John Michael","john@creative-tim.com"],["Manager","Organization"] , true,"23/04/18" ,"Edit"),
 
  createData(["Alexander Smith" ,"Alexa Liras","alexa@creative-tim.com"],["Programator","Developer"] , false,"11/09/19" ,"Edit"),
  createData(["Jessica Doe","Laurent Perrier","laurent@creative-tim.com"],["Executive","Projects"] , true,"19/09/19" ,"Edit"),
  createData(["Alexander Smith","Michael Levi","michael@creative-tim.com"],["Programator","Developer"] , true,"24/12/08" ,"Edit"),
  createData(["Alexander Smith","Richard Gran","richard@creative-tim.com"],["Manager","Organization"] , false,"04/10/21" ,"Edit"),
  createData(["Jessica Doe","Miriam Eric","miriam@creative-tim.com"],["Programator","Developer"] , false,"14/09/20" ,"Edit"),

];

export default function AuthTable() {
  return (
    <TableContainer component={Paper} className='justify-center '>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='uppercase'>
            <TableCell sx={{color:"text.secondary"}}><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-70">Companyes</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-70">Fucntion</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-70">status</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-70">employed</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-70">action</span></TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" className=' flex items-center px-6 py-3 bottom-0'>
                {
                    <div className="flex items-center ">

                        <img src={`/Images/Dashboard/${row.author[0]}.jpg`} alt="" className=" w-[36px] h-[36px] rounded-full " />
                        <div className="flex flex-col justify-center">
                            <Typography variant='overline'  sx={{color:"text.primary",lineHeight:"1.25",textTransform:"capitalize"}} className='ml-2  font-semibold'>{row.author[1]}</Typography>
                            <Typography sx={{color:"text.primary",lineHeight:"1.25"}} className='ml-2  font-light text-[12px]'>{row.author[2]}</Typography>
                        </div>
                    </div>
                }
              </TableCell>
              <TableCell align="right" className='px-6 py-3'>
                <div className="flex justify-stretch items-center ">

                    <div className="flex flex-col text-start">
                        <Typography sx={{color:"text.secondary",textTransform:"capitalize",lineHeight:"1.25" }} variant='button' className='  leading-[1.625] font-semibold  text-[12px]'>{row.func[0]}</Typography>
                        <Typography sx={{color:"text.primary",textTransform:"capitalize",lineHeight:"1.25"}} variant='caption' className=' font-light text-[12px]'>{row.func[1]}</Typography>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right" className='px-6 py-3 text-white leading-[1.625] font-semibold  text-center'>
                    {/* <span className={`px-2 py-1 rounded-md text-[9px] uppercase ${row.status?"bg-[#43a047]":"bg-[#191919] "}`}>{row.status?"online":"offline"} </span> */}
                    <Badge color="secondary" badgeContent={0} className={`px-2 py-1 rounded-md text-[9px] uppercase ${row.status?"bg-[#43a047]":"bg-[#191919] "}`}>
                    {row.status?"online":"offline"}
                    </Badge>
                </TableCell>
              <TableCell align="right" className='px-6 py-3 text-center  '>
                    <Link sx={{color:"text.secondary"}} href="" className='text-center  no-underline text-[12px] font-semibold'>
                        {row.employed}
                        </Link>                
              </TableCell>
              <TableCell align="right" className='px-6 py-3 text-center  '>
                    <Link sx={{color:"text.secondary"}} href="" className=' no-underline text-[12px]' >
                        {row.action}
                        </Link>                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}