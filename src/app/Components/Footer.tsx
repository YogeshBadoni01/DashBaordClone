"use client";
import { Box } from "@mui/material";
import React from "react";
import { MdCopyright } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import Link from "next/link";

const SignIn = (props: { color: any; }) => {
  return (
    <>
      <Box component="footer" className="flex justify-between items-center px-3 w-full flex-col md:flex-row">
        {/* <div className="px-3 leading-[1.625] flex items-center text-[#7b809a] text-[14px]"> */}
        <div className={`px-3 leading-[1.625] flex items-center text-[${props.color}] text-[14px]`}>
          <span>
            <MdCopyright />
          </span>
          <span className="text-[14px]">2024, made with</span>
          <span className="flex items-center">
            <IoMdHeart />
            by
          </span>{" "}
          <Link href="" className=" font-semibold no-underline">
          <span className="text-[14px]">&nbsp; Creative Tim &nbsp;</span>
            
          </Link>{" "}
          
          <span className="text-[14px]">&for better web.</span>
        </div>
        <div className="px-3">
          <ul className="flex ">
            <li className="px-4">
              <Link className="no-underline" href={""}>
                <span className="text-[14px]  no-underline">
                  Create Tim
                </span>
              </Link>
            </li>
            <li className="px-4">
              <Link className="no-underline" href={""}>
                <span className="text-[14px]  no-underline">
                  About as
                </span>
              </Link>
            </li>
            <li className="px-4">
              <Link className="no-underline" href={""}>
                <span className="text-[14px]  no-underline">
                  Blog
                </span>
              </Link>
            </li>
            <li className="px-4">
              <Link className="no-underline" href={""}>
                <span className="text-[14px]  no-underline">
                  Licence
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default SignIn;
