"use client";
import { Button, ButtonGroup, Switch, styled,Divider, Avatar, Card, CardMedia, CardContent, CardActions, AvatarGroup, Paper, Typography,Link } from "@mui/material";
// import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { MdEdit, MdEmail, MdFacebook, MdHome, MdSettings } from "react-icons/md";

const page = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const platset = [
    {
      name: "Account",
      option: [
        {
          checked: false,
          text: "Email me when someone follows me",
        },
        {
          checked: false,
          text: "Email me when someone answers on my post",
        },
        {
          checked: true,
          text: "Email me when someone mentions me",
        },
      ],
    },
    {
      name: "Application",
      option: [
        {
          checked: false,
          text: "New launches and projects",
        },
        {
          checked: true,
          text: "Monthly product updates",
        },
        {
          checked: false,
          text: "Subscribe to newsletter",
        },
      ],
    },
  ];

  const PersInfo=[
    {
      title:"Full Name ",
      info:"Alec M. Thompson",
    },
    {
      title:"Mobile ",
      info:"(44)  123 1234 123",
    },
    {
      title:"Email",
      info:"&nbsp; alecthompson@mail.com",
    },
    {
      title:"Locaiton",
      info:"USA",
    },
  ]

  const Conve=[
    {
      Person:"Sophie B.",
      Reply:"Hi! I need more information.."
    },
    {
      Person:"Anne Marie",
      Reply:"Awesome work can you"
    },
    {
      Person:"Ivanna",
      Reply:"About files i can"
    },
    {
      Person:"Peterson",
      Reply:"Have a great afternoon"
    },
    {
      Person:"Nick Daninel",
      Reply:"Hii i need more information"
    },
  ]

  const Projects=[
    {
      Project:2,
      Heading:"Modern",
      peara:"As Uber works through a huge amount of internal management turmoil.",
      imgGroup:["Ryan Tompson","Ryan Tompson2","Nick Daninel","Peterson" ]
    },
    {
      Project:1,
      Heading:"scandinavian",
      peara:"Music is something that everyone has their own specific opinion about.",
      imgGroup:["Peterson","Nick Daninel","Ryan Tompson2","Ryan Tompson" ]
    },
    {
      Project:3,
      Heading:"minimalist",
      peara:"Different people have different taste, and various types of music.",
      imgGroup:["Peterson","Nick Daninel","Ryan Tompson2","Ryan Tompson" ]
    },
    {
      Project:4,
      Heading:"gothic",
      peara:"Why would anyone pick blue over pink? Pink is obviously a better color.",
      imgGroup:["Peterson","Nick Daninel","Ryan Tompson2","Ryan Tompson" ]
    },
  ]

  return (
    <>
      <div className="p-6">
      <DrawerHeader sx={{
          '@media (max-width: 768px)': {
            height:"130px"
          },
        }}/>
                <div className="mb-2"></div>
        <div className="bgProfile"></div>
        <div className="z-[1] relative">

        <Paper sx={{borderRadius:"12px",backgroundColor:"background.custom1"}} className="-mt-16 mx-6  p-4  rounded-xl myshadow">
            <div className="  text-[20px] tracking-[0.00938em] leading-[1.625] text-[#344767]">
              <div className="w-full flex -mt-6 -mr-6 items-center flex-wrap">
                <div className="pt-6 pl-6 ">
                  <img
                    src="/Images/bruce-mars.jpg"
                    alt=""
                    className="w-[74px] h-[74px] rounded-full"
                  />
                </div>
                <div className="pt-6 pl-6">
                  <div className="mt-1 flex flex-col">
                    <Typography variant="h5" sx={{color:"text.primary",lineHeight:1.375,fontWeight:600}} className="">
                      Richard Davis
                    </Typography>
                    <Typography variant="button" sx={{color:"text.secondary",fontSize:14,lineHeight:1.5,textTransform:"initial"}} className="text-[14px] leading-[1.5] ">
                      CEO / Co-Founder
                    </Typography>
                  </div>
                </div>
                <div className="basis-full md:basis-1/2 lg:basis-1/3 lg:ml-auto  pt-6 pl-6 mr-2 ">
                  <ButtonGroup
                    sx={{
                      border: "none",
                      display: "flex",
                      gap: "10px",
                      boxShadow: "none",
                    }}
                    className="border-none  rounded-xl  text-[16px] tracking-[0.00938em] leading-[1.625] text-[#344767] flex-col hmd:flex-row "
                  >
                    <Button
                      sx={{
                        border: "none",
                        color: "text.primary",
                        width: "100%",
                        outline: "none",
                        
                        "&:hover": { border: "none",boxShadow:1, },
                          '@media (max-width: 768px)': {
                            
                          },
                      }}
                      className="hover:myshadow"
                    >
                      <span className="mr-1.5 flex items-center justify-center capitalize  ">
                        <MdHome className="flex justify-center items-center w-5 h-5  " />
                      </span>
                      App
                    </Button>
                    <Button
                      sx={{
                        border: "none",
                        color: "text.primary",
                        width: "100%",
                        outline: "none",
                        "&:hover": { border: "none",boxShadow:1, },
                          '@media (max-width: 768px)': {
                            
                          },
                      }}
                      className="hover:myshadow"
                    >
                      <span className="mr-1.5 flex items-center justify-center capitalize myshadow ">
                        <MdEmail className="flex justify-center items-center w-5 h-5  " />
                      </span>
                      Message
                    </Button>
                    <Button
                      sx={{
                        border: "none",
                        color: "text.primary",
                        width: "100%",
                        outline: "none",
                        
                        // boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem'

                        "&:hover": { border: "none",boxShadow:1, },
                          '@media (max-width: 768px)': {
                          },
                      }}
                      className="hover:myshadow "
                    >
                      <span className="mr-1.5 flex items-center justify-center capitalize myshadow ">
                        <MdSettings className="flex justify-center items-center w-5 h-5  " />
                      </span>
                      Settings
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className="mt-10">
                <div className=" -mt-2 w-full -ml-2 text-[20px] tracking-[0.00938em] leading-[1.625] text-[#344767] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  
                <div className="pt-2 pl-2 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">

                    <div className="flex flex-col relative  rounded-xl ">
                      <div className="p-4">
                        <Typography variant="h6" sx={{fontSize:16,color:"text.primary"}} className="  font-semibold tracking-[0.0075em] capitalize ">
                          platform settings
                        </Typography>
                      </div>

                      {platset.map((item, index) => (
                        <div className="leading-[1.25] py-2 px-4" key={index}>
                          <Typography variant="caption" sx={{color:"text.primary"}} className="text-[12px] font-bold tracking-[0.033em] leading-[1.25] uppercase">
                            {item.name}
                          </Typography>
                          {item.option.map((option, idx) => (
                            <div
                              className="flex items-center mb-1 -ml-3"
                              key={idx}
                            >
                              <div className="mt-1">
                                <Switch
                                  defaultChecked={option.checked}
                                  color="default"
                                  sx={{ color: "#f2f2f2" }}
                                />
                              </div>
                              <div className="ml-1">
                                <Typography variant="button" sx={{color:"text.secondary",textTransform:"capitalize"}} className="text-[14px] leading-[1.5] ">
                                  {option.text}
                                </Typography>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                <div className="pt-2 pl-2 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <Divider orientation="vertical" />
                  <div className="p-4">
                    <div className="flex flex-col relative  rounded-xl ">
                      <div className="p-4 pb-0 flex justify-between">
                      <Typography variant="h6" sx={{fontSize:16,color:"text.primary"}} className="text-[16px] font-semibold tracking-[0.0075em] capitalize ">
                        profile information
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:16}}  className="text-[#7b809a]">
                          <MdEdit />
                        </Typography>
                      </div>
                      
                      <div className="p-4 ">
                        <div className="mb-4">
                          <Typography variant="button" sx={{color:"text.secondary",textTransform:"initial", fontSize:14,lineHeight:"1.5",letterSpacing:"0.02857em"}} className=" tracking-[0.02857em] ">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</Typography>
                        </div>
                      <div className="">
                      <Divider orientation="vertical" flexItem  sx={{my:2,color:"#fff"}}/>
                      </div>

                      <div className="">
                            {
                              PersInfo.map((item,index)=>(
                                <div className="py-2 pr-4 flex " key={index}>
                                  <Typography variant="button" sx={{color:"text.primary"}} className="text-[14px] font-bold">{item.title}: <span>&nbsp;</span> </Typography>
                                  <Typography variant="button" sx={{color:"text.secondary"}} className=" text-[14px]">{item.info}</Typography>
                                </div>
                              ))
                            }
                                <div className="py-2 pr-4 flex ">
                                  <Typography variant="button" sx={{color:"text.primary"}} className="text-[14px] font-bold">Social <span>&nbsp;</span> </Typography>
                                  <span className="text-[#7b809a] text-[14px] flex">
                                    <span className="pl-4 pr-2">
                                      <Link href="www.facebook.com" className="w-4 h-4">
                                        <img src="/Images/Dashboard/facebook.svg" alt="facebook" className="w-4 h-4" />
                                      </Link>
                                      </span>
                                    <span className="pl-4 pr-2">
                                      <Link href="www.twitter.com" className="w-4 h-4">
                                        <img src="/Images/Dashboard/twitter.svg" alt="twitter" className="w-4 h-4" />
                                      </Link>
                                      </span>
                                    <span className="pl-4 pr-2">
                                      <Link href="www.instagram.com" className="w-4 h-4">
                                        <img src="/Images/Dashboard/instagram.svg" alt="instagram" className="w-4 h-4" />
                                      </Link>
                                      </span>
                                  </span>
                                </div>

                      </div>
                      </div>
                      
                    </div>
                  </div>
                  <Divider orientation="vertical"/>

                  </div>
                  
                <div className="pt-2 pl-2 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">

                    <div className="flex flex-col relative  rounded-xl ">
                      <div className="p-4">
                        <Typography variant="h6" sx={{color:"text.primary"}} className="text-[16px] font-semibold tracking-[0.0075em] capitalize ">
                          Conversations
                        </Typography>
                      </div>

                      <ul className="flex flex-col">
                      {
                        Conve.map((item,index)=>(

                        <li className="flex items-center mb-2 py-2 w-full" key={index}>
                            <div className="mr-4 ">
                              <Avatar alt="" src={`/Images/Dashboard/${item.Person}.jpg`} className="rounded-full w-12 h-12"  />
                            </div>
                            <div className="flex flex-col">
                              <Typography variant="button" sx={{color:"text.primary",textTransform:"initial"}} className="font-semibold text-[14px]  tracking-[0.02875em] leading-[1.5] ">{item.Person}</Typography>
                              <Typography variant="caption" sx={{color:"text.secondary",textDecoration:"none",textTransform:"initial"}} className=" text-[12px]  tracking-[0.03333em] leading-[1.25] ">{item.Reply}</Typography>
                            </div>
                            <div className="ml-auto">
                              <Link href="" className="py-2.5 px-6 text-[#1a73e8] font-bold min-w-16  min-h-10 uppercase text-[12px]">
                                reply
                              </Link>
                            </div>
                        </li>
                        ))
                      }  
                       

                      </ul>


                    </div>
                  </div>
                  </div>
                </div>
                      <div className="p-4 pb-0">
                      <Typography variant="h6" sx={{color:"text.primary"}}className="text-[16px] leading-[1.625] tracking-[1.625] font-semibold ">Projects</Typography>
                          <div className="mb-2 text-[#344767]">
                          <Typography variant="button" sx={{color:"text.secondary"}} className="text-[14px] leading-[1.5] tracking-[0.02857em] ">Architects design houses</Typography>
                          </div>
                      </div>

                      <div className="p-4">
                        <div className="-mt-12 -ml-12 flex">
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

  {
    Projects.map((item,index)=>(

                            <div className="pt-12 pl-12 basis-full md:basis-1/2 xl:basis-1/4" key={index}>
                            <Card sx={{ maxWidth: 345,boxShadow:'none' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`/Images/Dashboard/${item.Heading}.jpg`}
          title={item.Heading}
          className="rounded-xl"
        />
        <div className="mt-2 mx-1">
        <Typography variant="button" sx={{color:"text.secondary"}} className="text-[14px] tracking-[0.02857em] leading-[1.5] font-light">Project &nbsp; #{item.Project}</Typography>
                      <div className="mb-2">
                          <Link href={``} sx={{color:"text.primary",textDecoration:"none"}} className="text-[20px] font-semibold leading-[1.375] capitalize text-[#344767] ">{item.Heading}</Link>
                      </div>

                      <div className="mb-6">
                      <Typography variant="button" sx={{color:"text.secondary",textTransform:"initial"}} className="text-[14px] leading-[1.5] font-light">{item.peara}</Typography>
                      </div>
          <CardActions className="flex justify-between">
            <Link href={``} sx={{textDecoration:"none"}} className="py-1.5 px-4 border-[1px] border-solid border-[#1a73e8] text-[#1a73e8] text-[12px] font-bold uppercase rounded-xl">Our Project</Link  >
            
            <AvatarGroup max={4} className="flex-row-reverse">
              {
                item.imgGroup.map((items)=>(

                  <Avatar alt="" src={`/Images/Dashboard/${items}.jpg`}  className="w-5 h-5" key={items} style={{border:"2px solid #fff"}}/>
                ))
              }
            </AvatarGroup>
          </CardActions>
        </div>
      </Card>
                            </div>
    ))
  }
                          </div>


                        </div>
                      </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default page;
