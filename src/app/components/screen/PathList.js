"use client";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { BiSignal1, BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";

const PathLevel = ({path}) => {
    return <div className="flex flex-row items-center justify-center mt-4 bg-black text-white font-semibold rounded-lg px-2 py-0.5">
            <div className="relative w-8 h-4 mr-1">
                {path?.level=="1" && <BiSignal1 size={26}  className="absolute top-[-7px] left-0 z-10 text-white"/>}
                {path?.level=="2" && <BiSignal2 size={26}  className="absolute top-[-7px] left-0 z-10 text-white"/>}
                {path?.level=="3" && <BiSignal3 size={26}  className="absolute top-[-7px] left-0 z-10 text-white"/>}
                {path?.level=="4" && <BiSignal4 size={26}  className="absolute top-[-7px] left-0 z-10 text-white"/>}
                <BiSignal4 size={26}  className="absolute top-[-7px] left-0 z-0 text-slate-400"/>
            </div>
            <div className="w-18 text-base ">Level-{path.level || "1"} </div>
        </div>
    }

const PathList = ({paths, title, description}) => {

    return <div className="bg-white w-full pt-4 pb-8 flex justify-center items-center">
        <div className="container rounded-xl bg-[#F8F296] text-slate-600 p-0 pb-8 flex flex-col pt-4 items-center">
            <div className="text-2xl lg:text-3xl font-bold text-gray-800">{title}</div>
            <div className="px-4 text-center text-base lg:text-lg text-gray-700 font-base mt-1">
                {description}</div>

                {(!paths || paths.length === 0) && <div 
                    className="w-full text-slate-500 italic text-lg font-light grid place-items-center h-[120px]">
                    No paths available</div> }

                <div className="mt-4 max-w-[1120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full px-10 xl:px-20">

                    { paths && paths.map((path, index) => (
                        <Link title={path.description} href={path.extends?.external_link || `/path/${path.slug}`} key={index} 
                            target={path.extends?.external_link&&"_blank"}>
                            <div className="w-full bg-white text-slate-600 text-lg rounded-xl 
                                cursor-pointer flex flex-col justify-center px-0 overflow-hidden">
                                <img src={path.thumb} 
                                    className="w-full h-[200px] object-cover rounded-t-xl hover:scale-110"/>
                                <div className="grow px-4 pt-4 pb-2">
                                    <div className="mb-2 text-left flex items-start justify-begin">
                                        <PathLevel path={path}/>
                                    </div>

                                    <div className="flex items-center justify-center mb-2">
                                        <div className="text-base h-[40px] xl:text-xl xl:h-[50px] 
                                                        line-clamp-2 font-semibold leading-tight text-black grow">
                                            {path.name}</div>
                                        {/* <MdOutlineArrowForwardIos size={24} className="min-w-8 text-black hover:scale-130 ml-2"/> */}
                                    </div>
                                    
                                    <div className="text-sm xl:text-base text-slate-500 leading-tight 
                                                    h-[68px] xl:h-[100px] line-clamp-5">
                                        {path.description}</div>

                                    <div className="flex items-center justify-center mt-4">
                                        <div className="w-18 text-base">Progress:</div>
                                        <div className="grow flex items-center">
                                            {path.courses && path.courses.length > 0 && path.courses.filter(c => c.type==='lesson').map((c, cIndex) => <>
                                                { cIndex>0 && <div className="grow h-[2px] bg-black"></div> }
                                                    { c.context?.state==='finished' && <div className="rounded-full w-4 h-4 border-black border-2 bg-black"></div> }
                                                    { c.context?.state==='progress' && <div 
                                                        className="rounded-full w-4 h-4 border-black border-2 flex">
                                                            <div className="flex-1 bg-black"></div>
                                                            <div className="flex-1"></div>
                                                        </div> }
                                                    { !['finished', 'progress'].includes(c.context?.state) && <div className="rounded-full w-4 h-4 border-black border-2 bg-white"></div> }
                                                </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    </div>
}


export default PathList
