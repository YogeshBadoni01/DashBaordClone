"use client";
import { Divider, Paper, Typography, styled } from "@mui/material";
import React from "react";
import { IoLogoPaypal } from "react-icons/io5";
import {
  MdAccountBalance,
  MdAdd,
  MdDateRange,
  MdDelete,
  MdEdit,
  MdOutlineWifi,
  MdPictureAsPdf,
  MdPriorityHigh,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";

const Billing = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const data = [
    {
      date: "March,01,2020",
      code: "ms-415646",
      price: "180",
    },
    {
      date: "feburary,10,2021",
      code: "rv-126749",
      price: "250",
    },
    {
      date: "April,05,2020",
      code: "qw-103578",
      price: "120",
    },
    {
      date: "June, 25, 2019",
      code: "ms-415646",
      price: "180",
    },
    {
      date: "March, 01, 2019",
      code: "ar-803481",
      price: "300",
    },
  ];

  const BillInfo = [
    {
      Name: "Oliver Liam",
      CName: "Viking Burrito",
      EAddress: "oliver@burrito.com",
      VNumber: "FRB123456",
    },
    {
      Name: "Lucas Harper",
      CName: "Stone Tech Zone",
      EAddress: "lucas@stone-tech.com",
      VNumber: "FRB123456",
    },
    {
      Name: "Ethan James",
      CName: "Fiber Notion",
      EAddress: "ethan@fiber.com",
      VNumber: "FRB123456",
    },
  ];

  const transN = [
    {
      trans: "Netflix",
      date: "27 March 2020, at 12:30 PM",
      price: "2,500",
      Isprice: "Down",
    },
    {
      trans: "Apple",
      date: "27 March 2020, at 04:30 AM",
      price: "2,000",
      Isprice: "Up",
    },
  ];

  const transY = [
    {
      trans: "Stripe",
      date: "26 March 2020, at 13:45 PM",
      price: "750",
      Isprice: "Up",
    },
    {
      trans: "HubSpot",
      date: "26 March 2020, at 12:30 PM",
      price: "1,000",
      Isprice: "Up",
    },
    {
      trans: "Creative Tim",
      date: "26 March 2020, at 08:30 AM",
      price: "2,500",
      Isprice: "Up",
    },
    {
      trans: "Webflow",
      date: "26 March 2020, at 05:00 AM",
      price: "1,000",
      Isprice: "Same",
    },
  ];

  return (
    <>
      <div className="md:p-6  relative">
      <DrawerHeader sx={{
          '@media (max-width: 768px)': {
            height:"130px"
          },
        }}/>
                <div className="flex w-full max-[1025px]:flex-col flex-row mb-6">
          {/* first  */}
          <div className="-mt-6 -ml-6 grid grid-cols-1 md:grid-cols-2 min-[992px]:grid-cols-4 max-[1025px]:w-full w-2/3">
            {/* <div className="pt-6 pl-6 relative min-[1220px]:basis-1/2 rounded-xl md:col-span-2 "> */}
            <div className="pt-6 pl-6 relative  rounded-xl  basis-full md:col-span-2  ">
              <div className="relative">
                  <div className=" absolute top-0 left-0 w-full h-full opacity-20 bg-[/Images/Dashboard/pattern-tree.svg] billCard"></div>
                  <div className="p-4 text-[20px] tracking-[0.00938rem] leading-[1.625] text-white rounded-xl" style={{
                    backgroundImage:'linear-gradient(to right, rgb(66, 66, 74), rgb(25, 25, 25))'
                    // backgroundImage:" linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) ",
                  }} 
                  >
                    <div className="p-2">
                      <span>
                        <MdOutlineWifi />
                      </span>
                    </div>
                    <Typography variant="h5"  className="mt-6 mb-12 pb-2 leading-[1.375]">
                      4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                    </Typography>
                    <div className="flex justify-between items-center ">
                      <div className="flex">
                        <div className="mr-6">
                          <span className="text-[14px] tracking-[0.02857em] leading-[1.5] opacity-80">
                            Card Holder
                          </span>
                          <h6 className="text-[16px] font-semibold tracking-[0.12px] leading-[1.625] capitalize">
                            jack peterson
                          </h6>
                        </div>
                        <div className="">
                          <span className="text-[14px] tracking-[0.02857em] leading-[1.5] opacity-80">
                            Expies
                          </span>
                          <h6 className="text-[16px] font-semibold tracking-[0.12px] leading-[1.625] capitalize">
                            11/22
                          </h6>
                        </div>
                      </div>
                      <div className=" w-1/5">
                        <img
                          src="/Images/mastercard.webp"
                          alt="mastercard"
                          className="w-3/5 "
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* <div className="pt-6 pl-6 relative rounded-xl min-[1220px]:basis-1/4  flex justify-center items-center flex-col"> */}
            <div className="pt-6 pl-6 relative rounded-xl basis-full md:basis-1/2 flex justify-center items-center ">
              <div
                className="flex w-full flex-col text-center rounded-xl"
                // style={{
                //   boxShadow:
                //     "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
                // }}
              >
                <Paper sx={{boxShadow:"none",borderRadius:"12px"}} style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>
                <div className="p-4 mx-6 flex justify-center ">
                  <div className="w-16 h-16   bg-gradient-to-r from-[rgb(73,163,241)]  to-[rgb(26,115,232)] text-white rounded-xl flex justify-center items-center">
                    <MdAccountBalance className="w-6 h-6  " />
                  </div>
                </div>


                <div className="px-4 pb-4 leading-[1.25] text-[#344767] text-center">
                  <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] leading-[1.625] tracking-[0.0075em] font-semibold capitalize">
                    salary
                  </Typography>
                  <Typography variant="button" sx={{color:"text.secondary",textTransform:"initial"}} className="text-[12px] tracking-[0.033em] text-[#7b809a]">
                    Belong Interactive
                  </Typography>
                  <Divider
                    variant="middle"
                    className="my-4 h-[1px]"
                    style={{
                      marginBlock: 16,
                      backgroundImage:
                        " linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) ",
                    }}
                  />
                  <Typography variant="h5" sx={{color:"text.primary",fontSize:20}} className=" font-semibold leading-[1.375]">
                    +$2000
                  </Typography>
                </div>
                </Paper>
              </div>
            </div>

            {/* <div className="pt-6 pl-6 relative rounded-xl min-[1220px]:basis-1/4 flex justify-center items-center flex-col"> */}
            <div className="pt-6 pl-6 relative rounded-xl basis-full md:basis-1/2 flex justify-center items-center ">
              <div
                className="flex w-full flex-col text-center rounded-xl"
                // style={{
                //   boxShadow:
                //     "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
                // }}
              >
                                <Paper sx={{boxShadow:"none",borderRadius:"12px"}} style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>

                <div className="p-4 mx-6 flex justify-center ">
                  <div className="w-16 h-16   bg-gradient-to-r from-[rgb(73,163,241)]  to-[rgb(26,115,232)] text-white rounded-xl flex justify-center items-center">
                    <IoLogoPaypal className="w-6 h-6  " />
                  </div>
                </div>

                <div className="px-4 pb-4 leading-[1.25] text-[#344767] text-center">
                  
                  <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] leading-[1.625] tracking-[0.0075em] font-semibold capitalize">
                    paypal
                  </Typography>
                  <Typography variant="button" sx={{color:"text.secondary",textTransform:"initial"}} className="text-[12px] tracking-[0.033em] text-[#7b809a]">
                    Freelance Payment
                  </Typography>
                  <Divider
                    variant="middle"
                    className="my-4 h-[1px]"
                    style={{
                      marginBlock: 16,
                      backgroundImage:
                        " linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) ",
                    }}
                  />
                  
                  <Typography variant="h5" sx={{color:"text.primary",fontSize:20}} className=" font-semibold leading-[1.375]">
                    $455.00
                  </Typography>
                </div>
                </Paper>
              </div>
            </div>

            <div className="pt-6 pl-6 relative rounded-xl basis-full md:col-span-4">
            <Paper sx={{boxShadow:"none",borderRadius:"12px"}}style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>

              <div
                className="flex flex-col rounded-xl "
                style={{
                  boxShadow:
                    "rgba(52, 71, 103, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(52, 71, 103, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(52, 71, 103, 0.15) 0rem 0.0625rem 0.3125rem 0rem;",
                }}
              >
                <div className="flex justify-between items-center px-4 pt-4 text-[#344767] text-[16px] leading-[1.625] tracking-[0.0075em]">
                <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold capitalize ">
                    Payment Method
                  </Typography>
                  <button
                    className="align-middle min-w-16 text-white flex items-center px-6 py-2.5 rounded-xl font-bold text-[12px] uppercase"
                    style={{
                      boxShadow:
                        "rgba(52, 71, 103, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(52, 71, 103, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(52, 71, 103, 0.15) 0rem 0.0625rem 0.3125rem 0rem;",
                      backgroundImage:
                        "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                    }}
                  >
                    <span>
                      <MdAdd />
                    </span>
                    &nbsp;Add New Card
                  </button>
                </div>

                <div className="flex flex-col md:flex-row p-4 -mt-6 -ml-6">
                  <div className="pt-6 pl-6 relative rounded-xl basis-1/2 tracking-[0.00938em] leading-[1.625] flex ">
                    <div className="p-6 border-[1px] border-solid border-[#dee2e6] rounded-lg text-[#344767] flex items-center w-full ">
                      <img
                        src="/Images/mastercardnum.webp"
                        alt="mastercard"
                        className="mr-4 w-[10%] h-[31px]"
                      />
                      <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold tracking-[0.12px] leading-[26px] ">
                        ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
                      </Typography>
                      <div className="ml-auto">
                        <Typography sx={{color:"text.primary"}}>
                          <MdEdit  />{" "}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 pl-6 relative rounded-xl basis-1/2 tracking-[0.00938em] leading-[1.625] flex ">
                    <div className="p-6 border-[1px] border-solid border-[#dee2e6] rounded-lg text-[#344767] flex items-center w-full">
                      <img
                        src="/Images/visa.webp"
                        alt="mastercard"
                        className="mr-4 w-[10%] h-[31px]"
                      />
                      <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold tracking-[0.12px] leading-[26px] ">
                        ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
                      </Typography>
                      <div className="ml-auto">
                      <Typography variant="h6" sx={{color:"text.primary"}}>

                          <MdEdit />{" "}
                      </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Paper>
            </div>
          </div>

          {/* second */}
          <div className="pt-6 pl-6 lg:w-1/3 ">
          <Paper sx={{boxShadow:"none",borderRadius:"12px",height:"100%"}}>

            <div
              className="flex flex-col rounded-xl"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}
            >
              <div className="flex justify-between items-center px-4 pt-4 text-[#344767] text-[16px] leading-[1.625] tracking-[0.0075em]">
              <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold capitalize ">
                  Invoices
                </Typography>
                <button className="align-middle min-w-16 text-[#1a73e8] border-[1px] border-solid border-[#1a73e8] bg-transparent flex items-center px-6 py-2.5 rounded-xl font-bold text-[12px] uppercase">
                  View All
                </button>
              </div>
              <ul className="flex flex-col p-4  ">
                {data.map((item, index) => (
                  <li key={index} className="flex justify-between py-2 pr-2 mb-2 ">
                    <div className="flex flex-col leading-[1.125] h-[41px] justify-between ">
                    <Typography variant="button" sx={{color:"text.primary",textDecoration:"initial"}} className="text-[14px] font-semibold tracking-[0.02857em] leading-[1.5] ">
                        {item.date}
                      </Typography>
                      <Typography variant="h6" sx={{color:"text.secondary",}} className="text-[12px] font-normal tracking-[0.033em] leading-[1.25]  uppercase">
                        #{item.code}
                      </Typography>
                    </div>

                    <div className="text-[20px] font-normal tracking-[0.0098em] leading-[1.625] flex items-center">
                    <Typography variant="h6" sx={{color:"text.secondary"}} className=" text-[14px]  tracking-[0.02857em] leading-[1.5]">
                        ${item.price}
                      </Typography>
                      <div className="flex  items-center text-[#344767] ml-6 ">
                      <span  className="flex items-center">
                          &nbsp;
                          <MdPictureAsPdf />
                        </span>
                        <Typography variant="h6" sx={{color:"text.primary"}} className="text-[14px] font-bold">PDF</Typography>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>
          </div>
        </div>

        <div className="mb flex w-full max-[1025px]:flex-col ">
          {/* third */}
          <div className="-mt-6 -ml-6 flex w-full">

          <div className="pt-6 pl-6 max-[1025px]:w-full w-7/12 rounded-xl  ">
          <Paper sx={{boxShadow:"none",borderRadius:"12px",height:"100%"}} style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>

            <div
              className=" rounded-xl "
              // style={{
              //   boxShadow:
              //     "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              // }}
            >
              <div className="flex justify-between items-center px-4 pt-6 text-[#344767] text-[16px] leading-[1.625] tracking-[0.0075em]">
              <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold capitalize ">
                  Billing Information
                </Typography>
              </div>

              <div className="p-4 pt-2 rounded-xl ">
                <ul className="">
                  {BillInfo.map((item, index) => (
                    <li key={index} className="p-6 mt-4 mb-2 flex ">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-col justify-between ">
                          <div className="flex justify-between items-center flex-col md:flex-row mb-4 h-9">
                          <Typography variant="button" sx={{color:"text.primary",textTransform:"initial"}} className="text-[14px] font-semibold tracking-[0.02857em] leading-[1.5] ">
                              {item.Name}
                            </Typography>
                            <div className="flex text-[12px] font-semibold uppercase">
                              <div className="-ml-3 mt-4 flex">
                              <div className="mr-2  ">
                              <Typography variant="button" sx={{color:"text.primary"}} className="uppercase px-6 py-2.5 text-[#f44335] flex items-center">
                                  <span className="text-[16px]">
                                    <MdDelete />
                                  </span>
                                  &nbsp;DELETE
                                </Typography>
                              </div>

                              <Typography variant="button" sx={{color:"text.primary"}} className="uppercase px-6 py-2.5 flex items-center">
                                  <span className="text-[16px]">
                                    <MdEdit />
                                  </span>
                                  &nbsp;Edit
                                </Typography>
                              </div>
                            </div>
                          </div>
                          <div className=" leading-[0px]">
                          <Typography variant="caption" sx={{color:"text.secondary"}} className="mb-2 tracking-[0.0333em] leading-[1.25] text-[12px] font-light  ">
                              Company Name &nbsp;&nbsp;&nbsp;
                              <Typography variant="caption" sx={{color:"text.primary"}} className=" font-semibold ">
                                {item.CName}{" "}
                              </Typography>
                            </Typography>
                          </div>
                          <div className=" leading-[0px]">
                          <Typography variant="caption" sx={{color:"text.secondary"}} className="mb-2 tracking-[0.0333em] leading-[1.25] text-[12px] font-light ">
                              Email Address &nbsp;&nbsp;&nbsp;
                              <Typography variant="caption" sx={{color:"text.primary"}} className=" font-semibold ">
                                {item.EAddress}{" "}
                              </Typography>
                            </Typography>
                            
                          </div>
                          <div className=" leading-[0px]">
                          <Typography variant="caption" sx={{color:"text.secondary"}} className="mb-2 tracking-[0.0333em] leading-[1.25] text-[12px] font-light  ">
                              VAT Number &nbsp;&nbsp;&nbsp;
                              <Typography variant="caption" sx={{color:"text.primary"}} className=" font-semibold ">
                                {item.VNumber}{" "}
                              </Typography>
                            </Typography>
                            
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </Paper>
          </div>

          {/* fourth */}
          <div className="pt-6 pl-6 max-[1025px]:w-full w-5/12  rounded-xl  ">
          <Paper sx={{boxShadow:"none",borderRadius:"12px",height:"100%",display:"flex",width:"100% "}} className="w-full" style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
              }}>

            <div
              className=" rounded-xl w-full"
            //   style={{
            //     boxShadow:
            //       "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
            //   }}
            >
              <div className="flex justify-between items-center px-4 pt-6 text-[#344767] text-[16px] leading-[1.625] tracking-[0.0075em]">
              <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold capitalize ">
                  Your Transaction
                </Typography>
                <div className="flex text-[#7b809a] items-center">
                  <div className="">
                  <Typography variant="button" sx={{color:"text.secondary"}}>
                      <MdDateRange className="w-6 h-6 mr-1"  />
                    </Typography>
                  </div>
                  <Typography variant="button" sx={{color:"text.secondary"}}>23 - 30 March 2020</Typography>
                </div>
              </div>
              <div className="p-4 pt-6">
                <div className="mb-4">
                <Typography variant="caption" sx={{color:"text.secondary"}} className="text-[12px] font-bold tracking-[0.033em] leading-[1.25] text-[#7b809a] uppercase">
                    Newest
                  </Typography>
                </div>

                <ul>
                  {transN.map((items, index) => (
                    <li  className="py-2 pr-4 mb-2" key={index}>
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="mr-4">
                            <button
                              className={`p-[11px] pb-2.5 border-[1px] border-solid rounded-full ${
                                items.Isprice === "Up" ? "border-[#4caf50]" : ""
                              } ${
                                items.Isprice === "Down"
                                  ? "border-[#f44335]"
                                  : ""
                              } ${
                                items.Isprice === "Same"
                                  ? "border-[#344767]"
                                  : ""
                              }`}
                            >
                              {items.Isprice === "Up" && (
                                <MdExpandMore className="text-[#4caf50]" />
                              )}
                              {items.Isprice === "Down" && (
                                <MdExpandLess className="text-[#f44335]" />
                              )}
                              {items.Isprice === "Same" && (
                                <MdPriorityHigh className="text-[#344767]" />
                              )}
                            </button>
                          </div>
                          <div className="">
                            <div className="flex flex-col leading-[1.125] h-[41px] justify-between ">
                            <Typography variant="button" sx={{color:"text.primary"}} className="text-[14px] font-semibold tracking-[0.02857em] leading-[1.5] ">
                                {items.trans}
                              </Typography>
                              <Typography variant="button" sx={{color:"text.secondary"}} className="text-[12px] font-normal tracking-[0.033em] leading-[1.25]  uppercase">
                                #{items.date}
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`
          ${items.Isprice === "Up" ? "text-[#4caf50]" : ""}
          ${items.Isprice === "Down" ? "text-[#f44335]" : ""}
          ${items.Isprice === "Same" ? "text-[#344767]" : ""}
        `}
                        >
                          {items.Isprice === "Up" && "+"}
                          {items.Isprice === "Down" && "-"}
                          {items.Isprice === "Same" && "pending"}
                          <span className="text-[14px] font-semibold">
                            &nbsp; $ &nbsp;{items.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 pt-6">
                <div className="mb-4">
                  <span className="text-[12px] font-bold tracking-[0.033em] leading-[1.25] text-[#7b809a] uppercase">
                    Newest
                  </span>
                </div>

                <ul>
                  {transY.map((items, index) => (
                    <li className="py-2 pr-4 mb-2" key={index}>
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="mr-4">
                            <button
                              className={`p-[11px] pb-2.5 border-[1px] border-solid rounded-full ${
                                items.Isprice === "Up" ? "border-[#4caf50]" : ""
                              } ${
                                items.Isprice === "Down"
                                  ? "border-[#f44335]"
                                  : ""
                              } ${
                                items.Isprice === "Same"
                                  ? "border-[#344767]"
                                  : ""
                              }`}
                            >
                              {items.Isprice === "Up" && (
                                <MdExpandMore className="text-[#4caf50]" />
                              )}
                              {items.Isprice === "Down" && (
                                <MdExpandLess className="text-[#f44335]" />
                              )}
                              {items.Isprice === "Same" && (
                                <MdPriorityHigh className="text-[#344767]" />
                              )}
                            </button>
                          </div>
                          <div className="">
                            <div className="flex flex-col leading-[1.125] h-[41px] justify-between ">
                            <Typography variant="button" sx={{color:"text.primary"}} className="text-[14px] font-semibold tracking-[0.02857em] leading-[1.5] ">
                                {items.trans}
                              </Typography>
                              <Typography variant="button" sx={{color:"text.secondary"}} className="text-[12px] font-normal tracking-[0.033em] leading-[1.25]  uppercase">
                                #{items.date}
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`
          ${items.Isprice === "Up" ? "text-[#4caf50]" : ""}
          ${items.Isprice === "Down" ? "text-[#f44335]" : ""}
          ${items.Isprice === "Same" ? "text-[#344767]" : ""}
        `}
                        >
                          {items.Isprice === "Up" && "+"}
                          {items.Isprice === "Down" && "-"}
                          {/* {items.Isprice === "Same" && "pending"} */}
                          <span className="text-[14px] font-semibold">
                            {/* &nbsp; $ &nbsp; */}

                            {/* {items.Isprice ==={`&nbsp; $ &nbsp;`} && ""} */}
                            {items.Isprice === "&nbsp; $ &nbsp;" && ""}

                            {items.Isprice === "Same"
                              ? "pending"
                              : ` $${items.price}`}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              </Paper>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
