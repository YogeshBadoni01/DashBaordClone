// import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
// import Bar from 'react-apexcharts';
import "../globals.css"

export default function TempChart() {
  const [state, setState] = useState({
    // options: {
    //   chart: {
    //     id: "WeekChart",
    //     type:"bar"
    //   },
    //   xaxis: {
    //     categories: ["M", "T", "W", "T", "F", "S", "S"],
    //   },
    //   yaxis:{
    //     categories:[0,20,40,60],
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: "20px",
    //     },
    //   },
    // },

    // series: [
    //   {
    //     name: "series-1",
    //     data: [
    //       {
    //         y: 50,
    //         color: "#FFFFFF", 

    //       },
    //       {
    //         y: 20,
    //         color: "#FFFFFF",
    //       },
    //       {
    //         y: 10,
    //         color: "#FFFFFF",
    //       },
    //       {
    //         y: 22,
    //         color: "#FFFFFF",
    //       },
    //       {
    //         y: 50,
    //         color: "#FFFFFF",
    //       },
    //       {
    //         y: 10,
    //         color: "#FFFFFF",
    //       },
    //       {
    //         y: 40,
    //         color: "#FFFFFF",
    //       },
    //     ],
    //   },
    // ],

      options: {
        colors: ['#ffffff'],
        chart: {
          id: "basic-bar",
          // foreColor: '#373d3f',
          background: 'transparent',
          width:'10%',
        },
        plotOptions: {
          bar: {
            columnWidth: '10%',
            horizontal: false,
            borderRadius: 2,
            borderRadiusApplication:"around",
          },

        },
        dataLabels: {
          enabled: false
        },
        // responsive:{
        //   breakpoints:768,
        //   option:{
        //     yaxis:{
        //       tickAmount:2,
        //     }
        //   }
        // },
        // min:10,
        // max:20,
        theme: {
          mode: "dark", 
      },
        xaxis: {
              categories: ["M", "T", "W", "T", "F", "S", "S"],
              labels:{
                // show:false,
                style:{
                  colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
                },
                // maxHeight: 10,
              },
              // lines:{
              //   show:true,
              // },
            },
            yaxis:{
              type:"numeric",
              categories:[0,20,40,60],
              
              labels:{
                enable:false,
                style:{
                  colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
                },
                borderRadius:"12px",
              },
              min:0,
              max:60,
              tickAmount:3,
              lines:{
                show:true
              }
            },
            stroke:{
              // show: true,
              // curve: 'straight',
              // lineCap: 'butt',
              // colors: ["#f00"],
              // width: 5,
              // dashArray: 0,
            },
            // plotOptions: {
            //   bar: {
            //     borderRadius: "50%",
            //     barWidth: '20%',
            //     columnWidth:"50%"
            //     color:"#fff",
            //     horizontal:false,
            //     borderRadiusApplication:'around'
            //   }
            // },
      },
      series: [
        {
          name: "Sales",
          data: [50,20,10,22,50,10,40]
        }
      ],
      // grid:{
      //   position:'front',
      // },

   
      fill: {
        color:["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        type:"pattern",
        pattern: {
          width:6,
          // strokewidth:2
        }
      }
  });

  return (
    <div className=''>
      <div className='rounded-xl'style={{background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))'}}>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          // width="450"
          height="185"
          
          
        />
      </div>
    </div>
  );
}
