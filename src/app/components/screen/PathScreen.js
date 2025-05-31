"use client";

import PathCanvasLayout from "../paths/PathCanvasLayout";
import PathListLayout from "../paths/PathListLayout";
import { useRouter } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react"
import { CiTimer } from "react-icons/ci";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import dayjs from 'dayjs';
import { useEffect } from "react";

const InfoGroup = ({ title, content }) => {
  const [collapsed, setCollapsed] = useState(true)

  return <div className="border-b border-slate-200">
    <div className="mt-1 flex items-center">
      <div className="grow text-lg font-semibold text-gray-800 cursor-pointer"
        onClick={() => {
          setCollapsed((v) => !v)
        }}>{title}</div>
      {collapsed && <IoIosArrowDown size={20}
        onClick={() => { setCollapsed(false) }}
        className="text-gray-800 cursor-pointer hover:opacity-70" />}
      {!collapsed && <IoIosArrowUp size={20}
        onClick={() => { setCollapsed(true) }}
        className="text-gray-800 cursor-pointer hover:opacity-70" />}
    </div>
    {!collapsed && <div className="mt-0 text-sm text-slate-700 min-h-[30px]">{content}</div>}

  </div>
}

const PathScreen = ({ path }) => {
  const router = useRouter();

  if (!path) return;

  return (
    <div className="m-0 p-0 w-full h-full bg-white select-none">
      {/* Title block */}
      <div className="py-4 sm:py-4 px-2 lg:px-4">
        <div className="flex items-center my-2">
          {/* <IoArrowBack size={28} className="cursor-pointer hover:scale-120 mr-4 text-black" 
              onClick={() => { router.back() }} /> */}
          <div className="text-gray-950 text-xl md:text-3xl font-semibold grow">{path.name}</div>
          <div className="min-w-8 h-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 ">
          <div className="mt-2 pl-0 pr-4 md:pr-6 py-2 ">
            <div className="leading-tight text-base md:text-[16px] text-gray-800">
              {path.description}
            </div>

            { path.time_to_complete && <div className="my-1 flex items-center text-sm text-slate-500">
              <GiDuration size={20} className='mr-1'/>
              <span className="mr-2">Time to completed:</span>
              Approx. <span className="mx-1"><b>{path.time_to_complete} </b></span> hours
            </div> }

            {/* Created by and created date */}
            <div className='text-slate-500 text-sm  my-2 flex items-center'>
                <CiTimer size={20} className='mr-1'/>
                <div> Latest updated  <b>{dayjs(path.created_at).format('MMM DD, YYYY')}</b></div>

                <FaUserTie size={18} className='ml-8 mr-1 text-slate-400'/>
                <div>Instructor</div>
                <div className='ml-1'><b>{path.created_by}</b></div>
            </div>

            {/* Statictics */}
            <div className='text-slate-500 text-sm italic my-2 flex flex-row items-center space-x-4'>
                <div className='flex flex-row items-center w-[120px]'> 
                    <FaUsersBetweenLines size={24} className="mr-2 text-slate-400"/>
                    <span className="mr-1 text-black"><b>{path.num_learners}</b></span> learners  </div>

                <div className='flex flex-row items-center'> 
                    <PiCertificateBold size={24} className="mr-2 text-slate-400"/>
                    <span className="mr-1 text-black"><b>{path.num_certified_learners}</b></span> learners got certification  </div>
            </div>

          </div>

          <div className="mt-2 w-full px-2 md:px-6 ">
            { path.key_points?.map((item, index) => <InfoGroup 
                key={index} title={item.title} content={item.content} />) }
          </div>
        </div>

      </div>

      <div className="min-h-[400px]">
        {
          path.configs?.display_type === "canvas" && <PathCanvasLayout path={path} />
        }

        {
          path.configs?.display_type !== "canvas" && <PathListLayout path={path} />
        }
      </div>
    </div>
  );
};

export default PathScreen;
