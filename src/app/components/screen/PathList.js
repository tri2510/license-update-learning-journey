"use client";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";

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
                                            {path.course_ids && path.course_ids.length > 0 && path.course_ids.map((c, cIndex) => <>
                                                { cIndex>0 && <div className="grow h-[2px] bg-black"></div> }
                                                <div className="rounded-full w-4 h-4 border-black border-2 bg-white"></div>
                                                
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
