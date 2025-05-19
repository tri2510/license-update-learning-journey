'use client'

import { TfiHome } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react"

const InfoGroup = ({title, content}) => {
    const [collapsed, setCollapsed] = useState(true)

    return <div className="border-b border-slate-200">
        <div className="mt-1 flex items-center">
            <div className="grow text-lg font-semibold text-gray-800 cursor-pointer"
                onClick={() => {
                    setCollapsed((v) => !v)
                }}>{title}</div>
            { collapsed && <IoIosArrowDown size={20} 
                onClick={() => {setCollapsed(false)}} 
                className="text-gray-800 cursor-pointer hover:opacity-70"/> }
            { !collapsed && <IoIosArrowUp size={20} 
                onClick={() => {setCollapsed(true)}} 
                className="text-gray-800 cursor-pointer hover:opacity-70"/> }
        </div>
        { !collapsed && <div className="mt-0 text-sm text-slate-700 min-h-[30px]">{content}</div> }

    </div>
}

const PathListScreen = ({path}) => {
    const router = useRouter();

    return <div className="w-full">
        {/* Title block */}
        <div className="px-4 py-4 sm:px-8 sm-py-8">
            <div className="flex items-center my-2">
                <div className="text-gray-950 text-xl md:text-3xl font-semibold grow">{path.name}</div>
                <div className="min-w-8 h-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-4 pl-0 pr-4 py-2">
                    <div className="leading-tight text-md md:text-[16px] text-gray-800">{path.description}</div>
                </div>
                
                <div className="mt-4 max-w-[600px]">
                    <InfoGroup title="What will I learn?" content="SDV theory and concept"/>
                    <InfoGroup title="What do I need to know?" content="Nothing"/>
                    <InfoGroup title="What do I need?" content="Chrome and internet"/>
                </div>
            </div>

        </div>

        <div className="mt-4 bg-slate-100 min-h-[800px] flex flex-col justify-begin items-center px-4 py-8">
            <div className="max-w-[780px] w-full flex flex-col items-center">
            <div className="rounded-full  flex items-center justify-center px-8 py-1 border-4 border-green-500 bg-white">
                <span><b>Explore</b></span> - get new skills
            </div>

            { path?.courses && path.courses.map((course, cIndex) => <>
                    <div key={cIndex*2} className="h-8 w-1 border-l-4 border-dashed border-green-500"/>
                    <div key={cIndex*2+1} className="w-full min-h-32 bg-white rounded-sm shadow-md flex flex-col">
                        <div className="border-b border-slate-200 min-h-[40px] text-xl md:text-2xl
                                        px-4 md:px-4 py-2 font-semibold text-gray-900">
                            { course.name }
                        </div>
                        <div className="grow grid grid-cols-2 min-h-[120px] ">
                            <div className="px-4 pt-2 pb-4 flex flex-col">
                                <div className="grow text-base text-gray-800">
                                    {course.description}
                                </div>
                                <div>
                                    <div className="bg-black rounded-full px-4 py-2 text-lg font-bold text-white w-fit
                                        cursor-pointer hover:scale-110">
                                        Start Lesson</div>
                                </div>
                            </div>
                            <div className="px-4 py-4 h-full">
                                <img className="w-full min-h-[120px] max-h-[160px] object-cover rounded-lg" 
                                    src={course.image || course.top_icon}/>
                            </div>
                        </div>
                    </div>
                </>)}
                </div>
        </div>
    </div>
}

export default PathListScreen;