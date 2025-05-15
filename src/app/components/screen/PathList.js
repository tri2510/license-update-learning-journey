"use client";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";

const PathList = ({}) => {
    const [paths, setPaths] = useState([])
    useEffect(()=> {
        const fetchPaths = async () => {
            try {
                const response = await fetch("/api/paths")
                const data = await response.json();
                if (data && data.success) {
                    setPaths(data.data)
                } else {
                    setPaths([])
                }
            } catch (error) {
                console.log(error)
                setPaths([])
            }
        }
        fetchPaths()
    }, [])

    return <div className="bg-white w-full pt-4 pb-8 flex justify-center items-center">
        <div className="container rounded-xl bg-[#F8F296] text-slate-600 p-0 pb-8 flex flex-col pt-10 items-center">
            <div className="text-2x lg:text-4xl text-gray-800">Follow our <b>Paths</b></div>
            <div className="px-4 text-center text-base lg:text-xl text-gray-700 font-base mt-1">
                Paths are a series of fun coding and prototyping that will help you gain new skills in SDV.</div>

                {(!paths || paths.length === 0) && <div 
                    className="w-full text-slate-500 italic text-lg font-light grid place-items-center h-[120px]">
                    No paths available</div> }

                <div id="pathList" className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 w-full px-10 xl:px-20">

                    {paths.map((path, index) => (
                        <Link title={path.description} href={path.extends?.external_link || `/path/${path.slug}`} key={index} 
                            target={path.extends?.external_link&&"_blank"}>
                            <div className="w-full bg-white text-slate-600 text-lg rounded-xl 
                                cursor-pointer flex flex-row justify-center px-6 py-4">
                                <img src={path.thumb} 
                                    className="aspect-square w-26 object-contain rounded-lg"/>
                                <div className="grow pl-6 pr-2">
                                    <div className="flex items-center justify-center mb-2">
                                        <div className="text-base h-[46px] xl:text-2xl xl:h-[60px] 
                                                        line-clamp-2 font-semibold leading-tight text-gray-700 grow">
                                            {path.name}</div>
                                        <MdOutlineArrowForwardIos size={24} className="min-w-8 text-black hover:scale-130 ml-2"/>
                                    </div>
                                    
                                    <div className="text-sm xl:text-base text-slate-500 leading-tight 
                                                    h-[48px] xl:h-[64px] line-clamp-3">
                                        {path.description}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    </div>
}


export default PathList
