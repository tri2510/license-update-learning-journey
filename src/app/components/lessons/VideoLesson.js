'use client'

import { useEffect, useState } from "react"


const VideoLesson = ({ lesson }) => {

    if (!lesson) return <></>

    return <div className="w-full px-2">
        <div className="my-2 pb-2 border-b border-slate-600">
            <div className="text-xl font-bold text-black">{lesson.name}</div>
            <div className="mt-2 text-gray-500 text-sm leading-tight">{lesson.description}</div>
        </div>

        <div className="mt-6 px-4 lg:px-8 min-h-[480px] grid place-items-center">
        <iframe
            width="100%"
            height="600"
            src={lesson.video_url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>


    </div>
}

export default VideoLesson