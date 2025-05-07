'use client'

import React from 'react'
import Header from '../Header'
import CourseProgress from '../CourseProgress'
import MainContent from '../MainContent'

const PageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="w-1/3">
          <CourseProgress />
        </div>
        <MainContent />
      </div>
    </div>
  )
}

export default PageLayout
