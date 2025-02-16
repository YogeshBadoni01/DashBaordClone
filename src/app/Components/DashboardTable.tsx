import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ImInsertTemplate } from 'react-icons/im';
import { Avatar, AvatarGroup, LinearProgress, Tooltip } from '@mui/material';
// import "@tailwindcss"
function createData(
    companies: string,
    imgLink:string,
  memeber: Array<string>,
  budget: string,
  completion: Array<any>,
//   protein: number,
) {
  return { companies,imgLink, memeber, budget, completion };
}

const rows = [
  createData('Material UI XD Version',"adobe-xd" , 
  ['Ryan Tompson','Ryan Tompson2','Alexander Smith','Jessica Doe']
  ,"$14,000" ,[60,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))","#49a3f1"]),

  createData('Add Progress Tracker',"atlassian", 
  ['Ryan Tompson2','Jessica Doe']
  ,"$3,000" ,[10,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))","#49a3f1"]),

  createData('Fixed Plateform Error',"slack",  
  ['Ryan Tompson','Alexander Smith',]
  ,"Not set" ,[100,"bg-gradient-to-r from-[rgb(102,187,106)] to-[rgb(67,160,71)]","linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))","#66bb6a"]),

  createData('Launch our Mobile App',"spotify",  
  ['Ryan Tompson','Ryan Tompson2','Alexander Smith','Jessica Doe']
  ,"$20,500" ,[100,"bg-gradient-to-r from-[rgb(102,187,106)] to-[rgb(67,160,71)]","linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))","#66bb6a"]),

  createData('Add the New Pricing Page',"jira",  
  ['Jessica Doe']
  ,"$500" ,[25,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))","#49a3f1"]),

  createData('Redesign New Online Shop',"invesion" , 
  ['Ryan Tompson','Jessica Doe']
  ,"$2,000" ,[40,"bg-gradient-to-r from-[rgb(73,163,241)] to-[rgb(26,115,232)]","linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))","#49a3f1"]),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper} sx={{borderRadius:"12px"}} className='justify-center '>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='uppercase'>
            <TableCell sx={{color:"text.secondary"}} ><span className="px-2 py-1.5 text-[10px] block  uppercase font-bold">Companyes</span></TableCell>
            <TableCell sx={{color:"text.secondary"}}   align="center"><span className="px-2 py-1.5 text-[10px] block uppercase font-bold">memeber</span></TableCell>
            <TableCell sx={{color:"text.secondary"}}   align="center"><span className="px-2 py-1.5 text-[10px] block uppercase font-bold">budget</span></TableCell>
            <TableCell  sx={{color:"text.secondary"}}  align="center"><span className="px-2 py-1.5 text-[10px] block uppercase font-bold">completion</span></TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.companies}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className=' flex items-center px-6 py-3 bottom-0' sx={{display:'flex',alignItems:"center",bottom:0,paddingBlock:"12px",paddingInline:"24px" }}>
                <div className="h-9">
                  <img src={`/Images/Dashboard/${row.imgLink}.svg`} alt=""  className=" w-[36px] h-[30px] p-1" style={{width:36,height:30,padding:4}} />
                </div>
                <span className='ml-2 font-bold'>{row.companies}</span>
              </TableCell>
              <TableCell align="right" className='px-6 py-3'>
                <div className="py-2">
                    <AvatarGroup className='justify-end' >
                        {row.memeber.map((item, index) => (
                            <Tooltip  title={item} key={index} enterDelay={500} leaveDelay={200} >
                            <Avatar   key={index} alt={item} src={`/Images/Dashboard/${item}.jpg`} sx={{width:"20px",height:"20px",border:"2px solid #ffffff"}} className=' rounded-full w-[20px] h-[20px]' style={{border:"2px solid #ffffff"}} >
                            </Avatar>
                            </Tooltip>
                        ))}
                    </AvatarGroup>
                </div>
              </TableCell>
              <TableCell align="right" sx={{px:3,py:"12px",color:"text.secondary",lineHeight:1.625,fontWeight:700,textAlign:'center'}} className='px-6 py-3  leading-[1.625] font-semibold  text-center'>{row.budget}</TableCell>
              <TableCell align="right" className='px-6 py-3'>
                 <LinearProgress variant="determinate"  color={row.completion[0]>99?"success":"primary"}  value={row.completion[0]}  sx={{background:"#f0f2f5",height:"6px" ,borderRadius:2}} className={`bg-[#f0f2f5] h-1.5 rounded-md`}/>
              </TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}