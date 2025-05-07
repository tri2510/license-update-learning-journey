'use client'

import React from 'react'
import { BookOpen, Search, HelpCircle, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <div className="text-xl font-semibold text-emerald-700">
        playground.digital.auto
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <span>Learn</span>
          <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center text-orange-500">
          <HelpCircle className="w-5 h-5" />
          <span>Support</span>
        </div>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-1 border rounded-md w-64"
          />
        </div>
        <User className="w-6 h-6 text-gray-500" />
      </div>
    </header>
  )
}

export default Header
