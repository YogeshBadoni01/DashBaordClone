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
import { Avatar, AvatarGroup, LinearProgress, Link } from '@mui/material';

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
  createData(["Jessica Doe","miriam@creative-tim.com"],["Programator","Developer"] , false,"14/09/20" ,"Edit"),

];

export default function AuthTable() {
  return (
    <TableContainer component={Paper} className='justify-center '>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='uppercase'>
            <TableCell><span className="px-2 py-1.5 text-[10px] block text-[#7b809a] uppercase font-bold opacity-70">Companyes</span></TableCell>
            <TableCell align="center"><span className="px-2 py-1.5 text-[10px] block text-[#7b809a] uppercase font-bold opacity-70">Fucntion</span></TableCell>
            <TableCell align="center"><span className="px-2 py-1.5 text-[10px] block text-[#7b809a] uppercase font-bold opacity-70">status</span></TableCell>
            <TableCell align="center"><span className="px-2 py-1.5 text-[10px] block text-[#7b809a] uppercase font-bold opacity-70">employed</span></TableCell>
            <TableCell align="center"><span className="px-2 py-1.5 text-[10px] block text-[#7b809a] uppercase font-bold opacity-70">action</span></TableCell>
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
                    <div className="flex">

                        <img src={`Images/Dashboard/${row.author[0]}.jpg`} alt="" className=" w-[36px] h-[36px] p-1 rounded-full " />
                        <div className="flex flex-col">
                            <span className='ml-2 text-[#344767] font-semibold'>{row.author[1]}</span>
                            <span className='ml-2 text-[#344767] font-light text-[12px]'>{row.author[2]}</span>
                        </div>
                    </div>
                }
              </TableCell>
              <TableCell align="right" className='px-6 py-3'>
                <div className="flex justify-center items-center">

                    <div className="flex flex-col text-start">
                        <span className=' text-[#7b809a] leading-[1.625] font-semibold  text-[12px]'>{row.func[0]}</span>
                        <span className='text-[#344767] font-light text-[12px]'>{row.func[1]}</span>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right" className='px-6 py-3 text-white leading-[1.625] font-semibold  text-center'>
                    <span className={`px-2 py-1 rounded-md text-[9px] ${row.status?"bg-[#97eb9b]":"bg-[#42424a] "}`}>{row.status?"online":"offline"} </span>
                </TableCell>
              <TableCell align="right" className='px-6 py-3 text-center  '>
                    <Link href="" className='text-center text-[#7b809a] no-underline text-[12px]'>
                        {row.employed}
                        </Link>                
              </TableCell>
              <TableCell align="right" className='px-6 py-3 text-center  '>
                    <Link href="" className='text-[#7b809a] no-underline text-[12px]' >
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