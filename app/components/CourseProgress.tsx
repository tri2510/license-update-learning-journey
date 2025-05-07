'use client'

import React from 'react'

const CourseProgress = () => {
  return (
    <div className="bg-cream-50 p-6 max-w-3xl">
      <div className="mb-4">
        <div className="flex gap-4 mb-4">
          <button className="px-4 py-2 bg-white rounded border border-gray-200">
            Introduction
          </button>
          <button className="px-4 py-2">Course content</button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Explore existing model</h1>
        <p className="text-gray-600 mb-4">
          This course guides you through seamless account registration, empowering
          you to quickly access our platform. Learn to build your first model with
          intuitive steps, then explore core features through practical, hands-on
          exercises.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>Latest updated Feb 3, 2025</span>
          <span>•</span>
          <span>Created by John B.</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span>100,000 learners</span>
          <span>•</span>
          <span>90,000 learners got a certification</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Start lesson
        </button>
        <div className="mt-4 bg-gray-200 h-2 rounded-full">
          <div className="bg-blue-600 h-full w-[10%] rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress
