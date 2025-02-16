// import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// import Bar from 'react-apexcharts';
import '@mui/material';
import '../globals.css'

export default function TempChart() {
  const [state, setState] = useState({
  
      options: {
        colors: ['#ffffff'],
        markers:{
            size:[4,4],
        },
        chart: {
          id: "lineChart",
          background:"transparent",
          // type:"line",
        },
        theme:{
          mode:"dark",
        },
        // min:10,
        // max:20,
        xaxis: {
              categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"],
              
              labels:{
                style:{
                  colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'],
                },
                // maxHeight: 10,
              },
              // lines:{
              //   show:true,
              // },
            },
            yaxis:{
              type:"numeric",
              categories:[50,40,300,320,500,350,200,230,500],
              labels:{
                style:{
                  colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
                },
                borderRadius:"12px",
              },
              min:0,
              max:600,
              // tickAoumnt:3,
              tickAmount: 3,
              lines:{
                show:true
              }
            },
            stroke:{
              show: true,
              // curve: 'straight',
              // lineCap: 'butt',
              // colors: ["#f00"],
              // width: 5,
              // dashArray: 0,
            }
      },
      series: [
        {
          name: "Desktop app",
          data: [50,40,300,320,250,400,200,230,500]
        }
      ],
      // grid:{
      //   position:'front',
      // },

     
      fill: {
        colors:["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        type:"pattern",
        pattern: {
          width:6,
          // strokewidth:2
        }
      }
  });

  return (
    <div className=''>
      <div className='rounded-xl' style={{background:'linear-gradient(195deg, rgb(66, 66, 74), rgb(25,25,25'}}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
           width="100%"
           height="185"
          
        />
      </div>
    </div>
  );
}
