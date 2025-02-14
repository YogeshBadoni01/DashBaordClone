import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  // Icon: number,
  Country: string,
  Sale: string,
  Value: number,
  Bounce: number,
) {
  return {  Country,Sale,Value,Bounce  };
}

const rows = [
  createData('United State', "2500", 230900, 29.9),
  createData('Germany', "3.900", 440000, 40.22),
  createData('Great Britain', "1.400", 190700, 23.44),
  createData('Brasil', "562", 143960, 32.14),
];

export default function CountoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody className='text-[#7b809a]'>
          {rows.map((row,index) => (
            <TableRow
              key={row.Country}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                 {row.Icon}
              </TableCell> */}
              <TableCell align="center" className='py-3 px-4'>
                <div className=" flex items-center flex-row">
                  <img src={`Images/Analysis/Country${index+1}.png`} alt=""  />
                  <div className="flex flex-col ml-[24px] items-start">

                      <div className="">
                        <p className='text-[12px] text-[#7b809a] leading-[1.25] font-semibold capitalize'>Countory</p>
                      </div>
                      <div className="leading-[1.5] tracking-[0.399px]  capitalize  font-normal text-[#344767] text-[14px]">
                        {row.Country}
                      </div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center"  className='py-3 px-4'>
                <p className='text-[12px] text-[#7b809a] leading-[1.25] font-semibold capitalize'>Sale</p>
                  <span className=" leading-[1.5] tracking-[0.399px]  capitalize  font-normal text-[#344767] text-[14px]">{row.Sale}</span>
                </TableCell>
              <TableCell align="center"  className='py-3 px-4'>
                <p className='text-[12px] text-[#7b809a] leading-[1.25] font-semibold capitalize'>Value</p>
                  <span className=" leading-[1.5] tracking-[0.399px]  capitalize  font-normal text-[#344767] text-[14px]">${row.Value}</span>
                </TableCell>
              <TableCell align="center"  className='py-3 px-4'>
                <p className='text-[12px] text-[#7b809a] leading-[1.25] font-semibold capitalize'>Bounce</p>
                  <span className=" leading-[1.5] tracking-[0.399px]  capitalize  font-normal text-[#344767] text-[14px]">{row.Bounce}%</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
