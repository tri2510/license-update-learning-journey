'use client'

import { TfiHome } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdCheckBoxOutlineBlank, MdLock, MdOutlineCheckBox } from "react-icons/md"
import { IoCheckbox } from "react-icons/io5";
import { useState } from "react"
import { IoArrowBack } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineExplore, MdOutlineChecklist } from "react-icons/md";

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
                <IoArrowBack size={28} className="cursor-pointer hover:scale-120 mr-4 text-black" onClick={() => { router.back() }}/>
                <div className="text-gray-950 text-xl md:text-3xl font-semibold grow">{path.name}</div>
                <div className="min-w-8 h-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-4 pl-0 pr-4 py-2">
                    <div className="leading-tight text-md md:text-[16px] text-gray-800">{path.description}</div>
                </div>
                
                <div className="mt-4 max-w-[600px]">
                    <InfoGroup title="What will I learn?" content="TBD"/>
                    <InfoGroup title="What do I need to know?" content="TBD"/>
                    <InfoGroup title="What do I need?" content="TBD"/>
                </div>
            </div>

        </div>

        <div className="mt-4 bg-slate-200 min-h-[800px] flex flex-col justify-begin items-center px-4 py-8">
            <div className="max-w-[780px] w-full flex flex-col items-center">
            

            { path?.courses && path.courses.map((course, cIndex) => <div key={cIndex} className="flex flex-col items-center w-full">
                    { cIndex == 0 &&
                        <div className="rounded-full text-[20px] font-light flex items-center justify-center px-8 py-1 border-4 border-[#41B452] bg-white">
                            <MdOutlineExplore size={32}/>
                            <span className="ml-2 mr-1 text-[30px] font-bold">Explore</span> - get new skills
                        </div>
                    }

                    {/* { course?.config?.pre_block && 
                        <div className="rounded-full  flex items-center justify-center px-8 py-1 border-4 border-[#41B452] bg-white">
                            <span className="text-xl font-bold">{course?.config?.pre_block.type} - </span> {course?.config?.pre_block.content}
                        </div>
                    } */}

                    { course?.type == 'final-test' && <>
                        <div className="h-8 w-1 border-l-4 border-dashed border-[#41B452]"/>
                        <div className="rounded-full text-black text-[20px] font-light flex items-center justify-center px-8 py-1 border-4 border-[#41B452] bg-white">
                            <MdOutlineChecklist size={32}/>
                            <span className="ml-2 mr-1 text-[30px] font-bold">Final test </span> - Prove your skill mastery
                        </div>
                        </>
                    }

                    { course?.type == 'award' && <>
                            <div className="h-8 w-1 border-l-4 border-dashed border-[#41B452]"/>
                            <div className="rounded-full text-black text-[20px] font-light flex items-center justify-center px-8 py-1 border-4 border-[#41B452] bg-white">
                                <PiCertificateBold size={32}/>
                                <span className="ml-2 mr-1 text-[30px] font-bold">Certificate </span> - Earn your recognition
                            </div>
                        </>
                    }


                    <div className="h-8 w-1 border-l-4 border-dashed border-[#41B452]"/>

                    <div className="w-full min-h-32 bg-white rounded-sm shadow-md flex flex-col">
                        <div className="border-b border-slate-200 min-h-[40px] 
                                        px-4 md:px-4 py-2 
                                        flex items-center">

                            <div className="text-slate-300">
                                { course?.context?.state==='finished' && <IoCheckbox size={32} className="text-[#41B452]"/>}
                                { course?.context?.state!=='finished' && <MdCheckBoxOutlineBlank size={34} />}
                            </div>
                            <div className="ml-2 text-xl md:text-2xl font-semibold text-gray-900">{ course.name }</div>
                        </div>
                        <div className="grow grid grid-cols-2 min-h-[120px] ">
                            <div className="px-4 pt-2 pb-4 flex flex-col">
                                <div className="grow text-base text-gray-800">
                                    {course.description}
                                </div>
                                <div className="flex space-x-4">
                                    { course.type=="award" && <>
                                        <div className={`bg-black rounded-full px-4 py-2 text-lg font-bold text-white w-fit
                                            flex items-center
                                            ${!course.state.startsWith('locked') && 'cursor-pointer hover:scale-110'}`}>
                                                {course.state.startsWith('locked') && <MdLock className="mr-2"/>}
                                                View
                                        </div>
                                        <div className={`bg-black rounded-full px-4 py-2 text-lg font-bold text-white w-fit
                                            flex items-center
                                            ${!course.state.startsWith('locked') && 'cursor-pointer hover:scale-110'}`}>
                                                {course.state.startsWith('locked') && <MdLock className="mr-2"/>}
                                                Share
                                        </div>
                                    </> }
                                    { ["lesson", "final-test"].includes(course.type) && <div className="bg-black rounded-full px-6 py-2 text-lg font-bold text-white w-fit
                                        cursor-pointer hover:scale-110">
                                        {course?.context?.state!=='finished'?'Start':'Revisit'}
                                    </div> }
                                </div>
                            </div>
                            <div className="p-2 h-full">
                                <img className="w-full min-h-[120px] max-h-[160px] object-cover rounded-lg" 
                                    src={course.image || course.top_icon}/>
                            </div>
                        </div>
                    </div>
                </div>)}
                </div>
        </div>
    </div>
}

export default PathListScreen;