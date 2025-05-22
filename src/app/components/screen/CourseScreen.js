"use client"

import { useEffect, useState } from 'react';
import { MdOutlineQuiz } from "react-icons/md";
import QuizLesson from '../lessons/QuizLesson';

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
            {lesson.type === 'quiz' && <MdOutlineQuiz size={32} className='text-slate-800]' />}
        </div>
        <div className='grow pl-2 py-0'>
            <div className='font-bold text-black text-base'>{lesson.name}</div>
            <div className='text-xs line-clamp-3 leading-tight'>{lesson.description}</div>
        </div>
    </div>
}

const CourseScreen = ({ course }) => {
    if (!course) return <></>

    
    const [activeLessonSlug, setActiveLessonSlug] = useState("")
    const [activeLesson, setActiveLesson] = useState()
    useEffect(() => {
        if(!activeLessonSlug){
            setActiveLesson(null)
            return
        }
        let lesson = course.lessons?.find(l => l.slug === activeLessonSlug)
        setActiveLesson(lesson)
    }, [activeLessonSlug])

    useEffect(() => {
        if(course.lessons && course.lessons.length>0) {
            setActiveLessonSlug(course.lessons[0].slug)
        }
    }, [course.lessons])


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
                        isActive={activeLessonSlug == lesson.slug}
                        onActive={(e) => { setActiveLessonSlug(lesson.slug)}}/>
                    )}
            </div>
            
            <div className='grow border border-slate-200 px-2 rounded bg-white min-h-[80vh]'>
                { activeLesson && <>
                    { activeLesson.type === 'quiz' && <QuizLesson lesson={activeLesson}/>}
                </> }
            </div>
        </div>
    </div>
}

export default CourseScreen;