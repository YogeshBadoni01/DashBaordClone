

"use client";
import { Checkbox, Container, FormControlLabel, Switch, TextField } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { RiFacebookBoxFill, RiGithubFill, RiGoogleFill } from "react-icons/ri";
import HeaderSignUp from "../Components/HeaderSignUp";
const SignUp = () => {
  const data=[
    {
      Icon:<RiFacebookBoxFill className="w-[20px] h-[20px]" />,
    },
    {
      Icon:<RiGithubFill className="w-[20px] h-[20px]"/>,
    },
    {
      Icon:<RiGoogleFill className="w-[20px] h-[20px]" />,
    },
  ]
  return (
    <>
      <div className="">
        <div className=" ">
          <div  className="flex-col items-center relative h-[calc(100vh - 100px)] min-h-screen   flex  m-auto">
            <div className="absolute w-full z-[999] lg:max-w-[992px] xl:max-w-[1320px]">
                <div className="m-6 text-white ">
                  <HeaderSignUp />
                </div>
            </div>

            <div className="bgSignUp"></div>
            <div className="flex justify-center items-center w-full h-full max-w-[350px] min-w-[280px] mt-[-144px] myshadow">
              <div className="flex  bg-white rounded-xl w-full">
                <div className="flex flex-col w-full justify-center ">
                  <div className="w-full ">
                    <div className="-mt-6 mx-4 mb-2 p-4 rounded-xl" style={{background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));'}}>
                      <div className="flex justify-center flex-col text-center">
                        <h4 className="mt-2 text-[24px] font-semibold tracking-[0.00735em] leading-[1.375] text-white ">
                          Join Us Today
                        </h4>
                        <div className="flex items-center justify-center text-white text-[14px] font-light tracking-[0.02857em] leading-[1.5] my-2 ">
                          <span className="">Enter your email and password to register</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-7">
                    <div className="">
                          <div className="mb-4">
                            <TextField id="filled-basic" label="Name" variant="filled" className="w-full text-[#7b809a] border-[#7b809a]" style={{background:"transparent !important"}} sx={{
                              background:"transparent",height:45,fontSize: 14

                            }}/>
                          </div>
                          <div className="mb-4 h-[45px]">
                            <TextField id="outlined-basic" label="Email" variant="filled" className="w-full text-[#7b809a] max-h-[45px]" sx={{
                              // padding:"12px"
                              background:"transparent",height:45,fontSize:14
                            }} />
                          </div>
                          <div className="mb-4">
                            <TextField id="outlined-basic" label="Password" variant="filled" className="w-full text-[#7b809a]" sx={{
                            background:"transparent",height:45,fontSize:14
                            // padding:"12px"
                          }} />
                          </div>
                          <div className="mb-4 text-[14px]">
                            <Link href={"./Dashboard"} >
                              <FormControlLabel control={<Checkbox />} label="I agree the" className="mr-0 text-[14px] text-[#7b809a] " /> <span className="text-[#1a73e8] font-bold">Term and condition</span>
                              {/* <FormControlLabel  control={<Switch />} label="Remember me" className="text-[#7b809a] text-[14px] " /> */}
                            </Link>
                          </div>
                          <div className="">
                            <button className="w-full rounded-xl text-white text-[12px] py-2.5 px-6 uppercase font-bold" style={{background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));'}}> Sign Up</button>
                          </div>
                          <div className="mt-6 mb-2 text-center">
                            <span className="text-[14px] font-light text-[#7b809a]"> 
                              Already have an account ?
                              <Link href={`./SignIn`} className="text-[#1a73e8] font-bold"> SignIn </Link>
                            </span>
                          </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-full py-8  bottom-0 lg:max-w-[992px] xl:max-w-[1320px] text-[#344767]">
              <Footer color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
