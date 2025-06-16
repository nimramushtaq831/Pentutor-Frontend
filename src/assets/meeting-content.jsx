"use client"

import { Video, Plus, Upload, CalendarDays, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export default function MeetingsContent({ onJoinClick, onScheduleClick }) {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-2xl">
          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {/* New Meeting */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-orange-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-5 hover:bg-orange-600 cursor-pointer transition-colors shadow-lg hover:shadow-xl">
                <Video className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              <span className="text-gray-800 font-medium text-base sm:text-lg lg:text-xl text-center">New Meeting</span>
            </div>

            {/* Join */}
            <div className="flex flex-col items-center">
              <div
                onClick={onJoinClick}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-slate-700 rounded-3xl flex items-center justify-center mb-4 sm:mb-5 hover:bg-slate-800 cursor-pointer transition-colors shadow-lg hover:shadow-xl"
              >
                <Plus className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              <span className="text-gray-800 font-medium text-base sm:text-lg lg:text-xl text-center">Join</span>
            </div>

            {/* Share Screen */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-slate-700 rounded-3xl flex items-center justify-center mb-4 sm:mb-5 hover:bg-slate-800 cursor-pointer transition-colors shadow-lg hover:shadow-xl">
                <Upload className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              <span className="text-gray-800 font-medium text-base sm:text-lg lg:text-xl text-center">
                Share Screen
              </span>
            </div>

            {/* Schedule */}
            <div className="flex flex-col items-center">
              <div
                onClick={onScheduleClick}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-slate-700 rounded-3xl flex items-center justify-center mb-4 sm:mb-5 hover:bg-slate-800 cursor-pointer transition-colors shadow-lg hover:shadow-xl"
              >
                <CalendarDays className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              <span className="text-gray-800 font-medium text-base sm:text-lg lg:text-xl text-center">Schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-96 bg-white border-l border-gray-200 flex-shrink-0 hidden lg:flex lg:flex-col">
        {/* Time Widget */}
        <div className="bg-slate-700 text-white p-6 relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-3xl font-light">3:29 PM</div>
                <div className="text-base text-gray-300">Tuesday, June 10</div>
              </div>
            </div>
            <MoreHorizontal className="w-6 h-6 text-gray-300" />
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-6">
            <p className="text-base text-gray-600 mb-3 leading-relaxed">
              Respond to events, see other's availability and more by{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">connecting your calendar</span>.
            </p>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-base font-medium text-gray-800 mr-2">Today, Jun 10</span>
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                Today
              </button>
              <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <Plus className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>
          </div>

          {/* Empty State */}
          <div className="text-center py-12 flex-1 flex flex-col justify-center">
            <div className="w-20 h-20 mx-auto mb-6 opacity-40">
              <svg viewBox="0 0 64 64" className="w-full h-full text-gray-400">
                <path
                  fill="currentColor"
                  d="M48 16h-8V8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8H16c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM36 8v8H28V8h8zm12 48H16V24h8v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h8v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h4v32z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-base mb-4">No meetings scheduled.</p>
            <button className="flex items-center text-blue-600 text-base font-medium mx-auto hover:text-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Schedule a meeting
            </button>
          </div>

          {/* Open Recordings */}
          <div className="border-t border-gray-200 pt-6 mt-auto">
            <button className="flex items-center text-gray-700 text-base font-medium w-full hover:text-gray-900">
              <span>Open Recordings</span>
              <ChevronRight className="w-5 h-5 ml-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
