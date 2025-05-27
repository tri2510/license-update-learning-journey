'use client'

import { useEffect, useState } from "react"
import { FaCheckCircle } from "react-icons/fa";

const QuizQuestion = ({ question, index, onGotAnswer }) => {

    const [tmpAnswer, setTmpAnswer] = useState(-1)

    useEffect(()=> {
        if(Number.isNaN(question.answerIndex)) {
            setTmpAnswer(-1)
        } else {
            onGotAnswer(question.answerIndex)
            setTmpAnswer(question.answerIndex)
        }
    }, [question])

    return <div className="w-full">
        <div className="flex flex-col">
            <div className="font-bold text-black">Question {index}:</div>
            <div className="mt-1 text-base leading-tight">{question.question}</div>
        </div>
        <div className={`py-4 w-full px-0 grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-4
                        `}>
            {question.answers && question.answers.map((ans, aIndex) => <div key={aIndex} 
                className={`p-3 border-2 border-slate-300 rounded-lg flex items-start
                            cursor-pointer hover:border-slate-800 hover:bg-slate-100
                            ${tmpAnswer==aIndex && "border-slate-800 bg-slate-100"}`}
                            onClick={() => {
                                setTmpAnswer(aIndex)
                                onGotAnswer(aIndex)
                            }}>
                <div className="w-6 min-w-6 font-bold">{aIndex+1}.</div>
                
                <div className="grow">{ans.label}</div>

                <div className="w-6 min-w-6 font-bold">
                    { aIndex == tmpAnswer && <FaCheckCircle size={20}/>}
                </div>

            </div>)}
        </div>
    </div>
}

const QuizLesson = ({ lesson }) => {

    const [numQuestions, setNumQuestions] = useState(0)
    const [curQuestionIndex, setCurQuestionIndex] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState(null)
    const [gotAnswer, setGotAnswer] = useState(-1)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if (!lesson || !lesson.questions) {
            setNumQuestions(0)
            setCurQuestionIndex(0)
            setActiveQuestion(null)
            setQuestions([])
        }
        setActiveQuestion(null)
        setCurQuestionIndex(0)
        setNumQuestions(lesson.questions.length)
        setQuestions(lesson.questions)
    }, [lesson])

    useEffect(() => {
        try {
            let question = questions[curQuestionIndex]
            setActiveQuestion(question)
        } catch (e) {
            console.log(e)
         }
    }, [curQuestionIndex, questions])

    const gotoNextQuestion = () => {
        let tmpQuestion = {
            ...activeQuestion,
            answerIndex: gotAnswer
        }
        let tmpQuestions = JSON.parse(JSON.stringify(questions))
        tmpQuestions[curQuestionIndex] = tmpQuestion
        setQuestions(tmpQuestions)

        setGotAnswer(-1)
        setCurQuestionIndex((v) => v+1)
    }

    const gotoPrevQuestion = () => {
        let tmpQuestion = {
            ...activeQuestion,
            answerIndex: gotAnswer
        }
        let tmpQuestions = JSON.parse(JSON.stringify(questions))
        tmpQuestions[curQuestionIndex] = tmpQuestion
        setQuestions(tmpQuestions)

        setGotAnswer(-1)
        setCurQuestionIndex((v) => v-1)
    }

    if (!lesson) return <></>

    return <div className="w-full px-2">
        <div className="my-2 pb-2 border-b border-slate-600">
            <div className="text-xl font-bold text-black">{lesson.name}</div>
            <div className="mt-2 text-gray-500 text-sm leading-tight">{lesson.description}</div>
        </div>

        <div className="mt-6 px-4 lg:px-8 min-h-[480px]">
            {/* Question Area */}
            {activeQuestion && <QuizQuestion question={activeQuestion} index={curQuestionIndex + 1} 
                onGotAnswer={setGotAnswer} 
                />}
        </div>

        <div className="mt-2 px-2 pt-4 border-t border-gray-500 flex items-center space-x-2">
            <div className="grow"></div>
            <div className={`ml-4 w-24  rounded-full px-4 py-2 text-lg font-bold 
                            flex items-center text-white justify-center
                            ${curQuestionIndex>0 ?'cursor-pointer hover:scale-110 bg-black': 'bg-gray-400'}`}
                            onClick={() => {
                                gotoPrevQuestion()
                            }}>
                Prev
            </div>

            <div className="w-10"></div>
            <div>{curQuestionIndex + 1}</div>
            <div>/</div>
            <div>{numQuestions}</div>
            <div className="w-10"></div>

            <div className={`ml-4 w-24 bg-black rounded-full px-4 py-2 text-lg font-bold 
                            flex items-center text-white justify-center
                            ${(gotAnswer>=0&&curQuestionIndex<numQuestions) ?'cursor-pointer hover:scale-110 bg-black': 'bg-gray-400'}`}
                            onClick={() => {
                                gotoNextQuestion()
                            }}>
                Next
            </div>
            <div className="grow"></div>

        </div>
    </div>
}

export default QuizLesson