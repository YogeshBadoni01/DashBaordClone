import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography, Typography, colors } from '@mui/material';
import { getDesignTokens } from '../Theme/myTheme';
import { text } from 'stream/consumers';


const theme = getDesignTokens
export default function ChartsOverviewDemo() {
  const data=[
    {
      Axis:[
        {
          X:{ data: ['Page 1', 'Page 2', 'Page 3'], scaleType: 'band' },
          Y:{ data: ['Page 1', 'Page 2', 'Page 3'], scaleType: 'band' },
        }
      ],
      colors:"colors",
      Background:"Background",
      type:"",
      height:"",
    },
  ]
  return (
    <>
    <div className="">
    <div className="grid grid-cols-4 justify-center items-center">
                 
                      <div className="pt-[24px] pl-[24px] ">
                        <div className="mb-3 bg-[#f0f2f5] ">
                          <div className="shadow-sm md:shadow-md lg:shadow-lg rounded-xl bg-white">
                            <div className="flex flex-col px-4 pt-2 justify-between  ">
                              <div className="">

                                <div className={` mt-[-16px]  p-5 rounded-[12px]  text-white `}>
                                  Icon
                                </div>
                              </div>
                              <div className="">
                                  <Typography variant='overline' sx={{color:'text.primary'}} className={`text-[14px] leading-[1.5] tracking-[0.399px] text-[${theme.palette.text.primary}] font-light `}>heading</Typography>
                                  <Typography variant='h4' sx={{color:"text.primary"}} className='text-[24px] leading-[1.375] font-bold text-[#344767]'>NumberOfItem</Typography>
                              </div>
                            </div>
                            <hr className='h-[1px] opacity-25 bg-gradient-to-r from-transparent via-[rgba(52,71,103,0.4)] to-transparent my-4'/>
                            <div className="px-4 pb-4">
                              <p className='text-[14px] leading-[1.5] tracking-[0.399px] text-[#7b809a] font-light '>
                                <span className='font-bold text-[#4caf50]'>ItemInPer</span>
                                &nbsp;
                                <span>than last week</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                </div>
        <div className="bg-gradient-to-br from-[rgb(73,163,241)] to-[rgb(26,115,232)]">

                <BarChart
                series={[
                    { data: [35, 44, 24, 34],color:"white",
                    // borderRadius: 12,
                },
                    
                ]}
                //   width={20}
                height={290}
                xAxis={[
                    { data: ['Page 1', 'Page 2', 'Page 3'], scaleType: 'band' }
                ]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                seriesOptions={{
                    bar: {
                    // borderRadius: 12, // Set the border radius for columns
                    fill: 'white', // Set the column color to white

                    },
                }}
                />
        </div>

    </div>
    </>
  );
}

// import * as React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from '@mui/x-charts';
// import { colors } from '@mui/material';

// export default function ChartsOverviewDemo() {
//   return (
//     <BarChart
//       height={290}
//       data={[
//         { name: 'Page 1', value: 35 },
//         { name: 'Page 2', value: 44 },
//         { name: 'Page 3', value: 24 },
//         { name: 'Page 4', value: 34 },
//       ]}
//     >
//       <CartesianGrid />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="value" fill="white" radius={12} />
//     </BarChart>
//   );
// }
