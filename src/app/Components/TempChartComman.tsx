import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
// import Bar from 'react-apexcharts';

export default function TempChart() {
  const [state, setState] = useState({
   
    options: {
      colors: ['#ffffff'],
      chart: {
          id: "basic-bar",
          type: "bar",
          width: '100%', 
      },
      xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
              style: {
                  colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
              },
          },
      },
      yaxis: {
          type: "numeric",
          categories: [0, 20, 40, 60],
          labels: {
              style: {
                  colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
              },
              borderRadius: "12px",
          },
          min: 0,
          max: 60,
          tickAmount: 3,
          lines: {
              show: true,
          },
      },
      stroke: {
          show: true,
      },
      
      // plotOptions: {
      //     bar: {
      //         borderRadius: "4px",
      //         // columnWidth: '30%', 
      //         colors: "#fff",
      //     },
      // },
      fill: {
          color: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
          type: "pattern",
          pattern: {
              width: 20,
              strokeWidth: 2,
          },
      },
  },
  series: [
    {
        name: "WeekReport",
        data: [50, 20, 10, 22, 50, 10, 40],
    },
],
  
     
  });

  return (
    <div className=''>
      <div className='py-4 pr-1'>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="450"
          
        />
      </div>
    </div>
  );
}
