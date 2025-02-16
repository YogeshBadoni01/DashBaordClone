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
import { Avatar, AvatarGroup, LinearProgress, Link, Typography } from '@mui/material';
import { MdMoreVert } from 'react-icons/md';

function createData(
    brand: string,
    budget:string,
  status: string,
  completion: Array<any>,
  action: string,
) {
  return { brand,budget, status,  completion,action, };
}

const rows = [
 
  createData('asana' , "2,500" ,"working" ,[60,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","primary"],""),
  createData('github' , "5,000" ,"done" ,[100,"bg-gradient-to-r from-[rgb(102,187,106)] to-[rgb(67,160,71)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","success"],""),
  createData('atlassian' , "3,400" ,"canceled" ,[30,"bg-gradient-to-r from-[rgb(239,83,80)] to-[rgb(229,57,53)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","error"],""),
  createData('spotify' , "14,000" ,"working" ,[80,"bg-gradient-to-r from-[rgb(239,83,80)] to-[rgb(229,57,53)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","primary"],""),
  createData('slack' , "1,000" ,"canceled" ,[0,"bg-gradient-to-r from-[rgb(239,83,80)] to-[rgb(229,57,53)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","primary"],""),
  createData('invesion' , "2,300" ,"done" ,[100,"bg-gradient-to-r from-[rgb(239,83,80)] to-[rgb(229,57,53)]","linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))","success"],""),
];

export default function ProjectTable() {
  return (
    <TableContainer component={Paper} className='justify-center tracking-[0.028rem] '>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='uppercase'>
            <TableCell sx={{color:"text.secondary"}}  ><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-75">Projects</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="left"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-75">budget</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-75">status</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-75">completion</span></TableCell>
            <TableCell sx={{color:"text.secondary"}} align="center"><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold opacity-75">action</span></TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },borderColor:'white' }}
            >
              <TableCell component="th" scope="row" className=' flex items-center px-6 py-3 bottom-0 '>
                <div className="flex items-center">
                    <img src={`/Images/Dashboard/${row.brand}.svg`} alt="" className=" w-[36px] h-[30px] p-1" />
                    <Typography variant='button' sx={{color:"text.primary"}} className='ml-2 capitalize leading-none  font-semibold tracking-[0.028rem]'>{row.brand}</Typography>
                </div>
              </TableCell>
              <TableCell align="left" className='px-6 py-3  leading-normal font-semibold  '>
                <Typography variant='button' sx={{color:"text.secondary",fontWeight:700}}>${row.budget}</Typography>
              </TableCell>
              <TableCell align="right" className='px-6 py-3  leading-[1.625] font-semibold  text-center text-[12px]'>
                <Typography variant='caption' sx={{color:"text.secondary",lineHeight:"1.625"}}>{row.status}</Typography>
              </TableCell>
              
              <TableCell align="right" className='px-6 py-3 ' >
                <div className="flex justify-start items-center">

                <Typography variant='caption' sx={{lineHeight:"1.625",color:"text.secondary"}} className='block  leading-[1.625] font-semibold'>
                    {row.completion[0]}%
                </Typography>
                 <LinearProgress variant="determinate"  color={row.completion[3]}  value={row.completion[0]}   className={`bg-[#f0f2f5] h-1.5 rounded-md  ml-2 max-w-36 w-full opacity-85`}/>
                {/* <div className="text-[#7b809a] leading-[1.625] font-semibold  text-center "> */}
                {/* </div> */}
                </div>
                
              </TableCell>
              <TableCell  className='px-6 py-3 text-center  '>
                    <Link sx={{color:"text.secondary"}} href="./Dashboard" className='  no-underline text-[20px] flex justify-center items-center'>
                        <MdMoreVert className=''/>
                    </Link>                
              </TableCell>

              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}