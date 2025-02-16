

"use client";
import { Container, FormControlLabel, Switch, TextField } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { RiFacebookBoxFill, RiGithubFill, RiGoogleFill } from "react-icons/ri";
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
        <div className="bg-[/Images/bg-signup.jpeg] bgSignUp">
          <div  className="relative h-[calc(100vh - 100px)] min-h-screen lg:max-w-[992px] xl:max-w-[1320px]  flex justify-center m-auto">
            <div className="absolute w-full z-[999]">
                <div className="m-6  ">
                  <Header />
                </div>
            </div>


            <div className="flex justify-center items-center  h-screen w-[311px] min-w-[280px]">
              <div className="flex  bg-white rounded-xl w-full">
                <div className="flex flex-col w-full justify-center ">
                  <div className="w-full ">
                    <div className="-mt-6 mx-4 mb-2 p-4 rounded-xl" style={{background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));'}}>
                      <div className="flex justify-center flex-col text-center">
                        <h4 className="mt-2 text-[24px] font-semibold tracking-[0.00735em] leading-[1.375] text-white ">
                          Sign In
                        </h4>
                        <div className="flex items-center justify-center text-white text-[20px] font-normal tracking-[0.00938em] leading-[1.625] mb-4 mt-2 ">
                          {
                            data.map((item,index)=>(
                              <div className="pt-6 pl-6 ">
                                <Link href="" className="flex justify-center items-center w-[50px] h-[50px]">{item.Icon}</Link>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-7">
                    <div className="">
                          <div className="mb-4">
                            <TextField id="outlined-basic" label="Email" variant="outlined" className="w-full text-[14px]" sx={{
                              // padding:"12px"
                              fontSize:"14px "

                            }}
                            />
                          </div>
                          <div className="mb-4">
                            <TextField id="outlined-basic" label="Password" variant="outlined" className="w-full " sx={{
                              // padding:"12px"
                            }} />
                          </div>
                          <div className="mb-4">
                            <FormControlLabel  control={<Switch />} label="Remember me" className="text-[#7b809a] text-[14px] " />
                          </div>
                          <div className="">
                            <button className="w-full rounded-xl text-white text-[12px] py-2.5 px-6 uppercase font-bold" style={{background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));'}}> Sign Up</button>
                          </div>
                          <div className="mt-6 mb-2 text-center">
                            <span className="text-[14px] font-light text-[#7b809a]"> 
                              Dont have an account ?
                              <Link href={`./SignUp`} className="text-[#1a73e8] font-bold"> SignUp </Link>
                            </span>
                          </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-full py-8 text-white bottom-0">
              <Footer color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
