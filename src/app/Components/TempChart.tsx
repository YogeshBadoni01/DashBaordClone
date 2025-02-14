import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function TempChart() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
      yaxis:{
        categories:[0,20,40,60],
      },
      plotOptions: {
        bar: {
          columnWidth: "20px",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          {
            y: 50,
            color: "#FFFFFF", 

          },
          {
            y: 20,
            color: "#FFFFFF",
          },
          {
            y: 10,
            color: "#FFFFFF",
          },
          {
            y: 22,
            color: "#FFFFFF",
          },
          {
            y: 50,
            color: "#FFFFFF",
          },
          {
            y: 10,
            color: "#FFFFFF",
          },
          {
            y: 40,
            color: "#FFFFFF",
          },
        ],
      },
    ],
  });

  return (
    <div className="">
      <div className="bg-black">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
    </div>
  );
}
