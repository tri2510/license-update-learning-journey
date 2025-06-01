"use client"

import { useEffect, useState } from 'react';
import { MdOutlineQuiz } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { SlNotebook } from "react-icons/sl";
import QuizLesson from '../lessons/QuizLesson';
import VideoLesson from '../lessons/VideoLesson';
import TextMarkdownLesson from '../lessons/TextMarkdownLesson';
import { STATE_COMPLETED } from "@/lib/const";
import { FaCheckCircle } from "react-icons/fa";

const saveStateLessonFinish = async (course, lesson_slug, data) => {
    if(!course || !course._id || !lesson_slug) return null
    try {

        let payload = {
            course_id: course._id,
            state: STATE_COMPLETED,
            record: {
                action: 'Finish lesson',
                data: data,
                refId: '',
                refType: '',
            }
        }

        if(payload.lessons) {
            let lessonProgress = payload.lessons[lesson_id] || { started_at: new Date(), records: []}
            lessonProgress.records.push({
                at: new Date(),
                action: 'complete_lesson',
            })
            lessonProgress.updated_at = new Date()
            lessonProgress.progress = "completed"
        }

        const res = await fetch(`/api/progress/courses/${course._id}/lessons/${lesson_slug}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error || "Failed to update lesson state");
        }
        return await res.json();
    } catch (err) {
        console.error("Error saving lesson finish state:", err);
        return null;
    }
}

const LessonListItem = ({ lesson, isActive, onActive}) => {
    return <div
        className={`border-2  pl-1 pr-1 py-1 flex items-center rounded cursor-pointer hover:border-black 
            ${isActive?' border-black':'border-gray-300'}`}
        onClick={(e) => {
            if(lesson.lock) return
            if(onActive){
                onActive(e)
            }
        }}>
        <div className='w-16 min-w-16 h-16 bg-gray-200 rounded grid place-items-center'>
            {lesson.type === 'quiz' && <MdOutlineQuiz size={34} className='text-slate-800]' />}
            {lesson.type === 'video' && <GoVideo size={36} className='text-slate-800]' />}
            {lesson.type === 'text-markdown' && <SlNotebook size={36} className='text-slate-800]' />}
        </div>
        <div className='grow pl-2 py-0'>
            <div className='font-bold text-black text-base flex items-center justify-between space-x-1'>
                {lesson.name}
                { lesson.context?.state == STATE_COMPLETED && <FaCheckCircle size={20} />}
            </div>
            <div className='text-xs line-clamp-2 leading-tight'>{lesson.description}</div>
        </div>
    </div>
}

const CourseScreen = ({ course }) => {
    if (!course) return <></>

    const [activeLessonIndex, setActiveLessonIndex] = useState(0)
    const [activeLesson, setActiveLesson] = useState()
    // const [activeLessonSlug, setActiveLessonSlug] = useState("")
    
    useEffect(() => {
        try{
            let lesson = course.lessons[activeLessonIndex]
            setActiveLesson(lesson)
        } catch(err) {
            // console.log(err)
            setActiveLesson(null)
        }
    }, [activeLessonIndex])


    // useEffect(() => {
    //     if(!activeLessonSlug){
    //         setActiveLesson(null)
    //         return
    //     }
    //     let lesson = course.lessons?.find(l => l.slug === activeLessonSlug)
    //     setActiveLesson(lesson)
    // }, [activeLessonSlug])

    useEffect(() => {
        if(course.lessons && course.lessons.length>0) {
            // setActiveLessonSlug(course.lessons[0].slug)
            setActiveLessonIndex(0)
        }
    }, [course.lessons])

    const gotoNextLesson = () => {
        if(activeLessonIndex < course.lessons.length-1) {
            setActiveLessonIndex((v) => v+1)
        }
    }


    return <div className='w-full'>
        <div>
            <div className='text-2xl font-bold text-black'>
                {course.name}
            </div>
            <div className='text-base text-slate-600'>
                {course.description}
            </div>
        </div>

        <div className='mt-2 flex w-full text-base space-x-4'>
            <div className='w-1/3 max-w-[300px] min-w-[300px] px-0 rounded flex flex-col space-y-2'>
                {
                    course.lessons.length > 0 && course.lessons.map((lesson, lIndex) => <LessonListItem key={lIndex} 
                        lesson={lesson} 
                        isActive={lIndex == activeLessonIndex}
                        onActive={(e) => { 
                            setActiveLessonIndex(lIndex)
                        }}/>
                    )}
            </div>
            
            <div className='grow border border-slate-200 px-2 rounded bg-white min-h-[80vh]'>
                { activeLesson && <>
                    { activeLesson.type === 'quiz' && <QuizLesson lesson={activeLesson} 
                            onCloseRequest={() => {
                                gotoNextLesson()
                            }} 
                            onSumbitLesson={(data) => {
                                saveStateLessonFinish(course, activeLesson.slug, data || {})
                            }}/>}
                    { activeLesson.type === 'video' && <VideoLesson lesson={activeLesson}/>}
                    { activeLesson.type === 'text-markdown' && <TextMarkdownLesson lesson={activeLesson}/>}
                </> }
            </div>
        </div>
    </div>
}

export default CourseScreen;