"use client"
import {
  Search,
  Home,
  Video,
  MessageSquare,
  Calendar,
  MoreHorizontal,
  Bell,
  Minimize2,
  Square,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  ChevronDown,
  Umbrella,
  Share,
  Leaf,
} from "lucide-react"
import { useState } from "react"
import MeetingModal from "./meeting-modal"
import JoinMeetingModal from "./join-meeting-modal"

export default function TeamsHome({ onNavigate }) {
  const [showMeetingModal, setShowMeetingModal] = useState(false)
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [meetings, setMeetings] = useState([])

  const handleSaveMeeting = (meeting) => {
    setMeetings([...meetings, meeting])
    alert("Meeting scheduled successfully!")
  }

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-600 text-white placeholder-gray-300 pl-10 pr-16 py-2 rounded-md text-sm w-64 border-0"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 text-xs">Ctrl+F</span>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            <div
              className="flex flex-col items-center text-xs cursor-pointer bg-slate-600 px-3 py-2 rounded-md"
              onClick={() => onNavigate("home")}
            >
              <Home className="w-5 h-5 mb-1 text-blue-400" />
              <span className="text-blue-400 font-medium">Home</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("teamchat")}>
              <MessageSquare className="w-5 h-5 mb-1" />
              <span>Team Chat</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("meetings")}>
              <Video className="w-5 h-5 mb-1" />
              <span>Meetings</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("scheduler")}>
              <Calendar className="w-5 h-5 mb-1" />
              <span>Scheduler</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer">
              <MoreHorizontal className="w-5 h-5 mb-1" />
              <span>More</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 cursor-pointer" />
            <Calendar className="w-5 h-5 cursor-pointer" />
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-sm font-semibold">J</span>
            </div>
            <div className="flex space-x-2">
              <Minimize2 className="w-4 h-4 cursor-pointer" />
              <Square className="w-4 h-4 cursor-pointer" />
              <X className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Main Content Area */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            {/* New Meeting Button */}
            <div className="flex flex-col items-center cursor-pointer group">
              <div className="w-32 h-32 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <Video className="w-12 h-12 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-800">New Meeting</span>
            </div>

            {/* Join Button */}
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => setShowJoinModal(true)}>
              <div className="w-32 h-32 bg-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors">
                <Plus className="w-12 h-12 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-800">Join</span>
            </div>

            {/* Share Screen Button */}
            <div className="flex flex-col items-center cursor-pointer group">
              <div className="w-32 h-32 bg-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors">
                <Share className="w-12 h-12 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-800">Share Screen</span>
            </div>

            {/* Schedule Button */}
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => setShowMeetingModal(true)}>
              <div className="w-32 h-32 bg-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors relative">
                <Calendar className="w-12 h-12 text-white" />
                <div className="absolute bottom-3 right-3 bg-white text-slate-700 rounded px-2 py-1 text-sm font-bold">
                  12
                </div>
              </div>
              <span className="text-lg font-medium text-gray-800">Schedule</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* Time Display Header */}
          <div className="bg-slate-700 text-white p-6 relative">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Leaf className="w-8 h-8 text-green-400 mr-3" />
                <div className="text-4xl font-light">3:29 PM</div>
              </div>
              <div className="text-sm opacity-90">Tuesday, June 10</div>
            </div>
            <button className="absolute top-4 right-4">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar Connection Message */}
          <div className="p-6 border-b border-gray-200">
            <p className="text-gray-600 text-sm leading-relaxed">
              Respond to events, see other's availability and more by{" "}
              <button className="text-blue-600 hover:underline">connecting your calendar</button>.
            </p>
          </div>

          {/* Today Section */}
          <div className="p-6 flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Today, Jun 10</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">Today</button>
              <div className="flex items-center space-x-3">
                <ChevronLeft className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <ChevronRight className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <Plus className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </div>

            {/* No Meetings Section */}
            <div className="text-center py-8">
              {meetings.length === 0 ? (
                <>
                  <div className="mb-6">
                    <Umbrella className="w-20 h-20 text-gray-300 mx-auto" />
                  </div>
                  <p className="text-gray-600 text-sm mb-6">No meetings scheduled.</p>
                </>
              ) : (
                <div className="space-y-3 mb-6">
                  {meetings.map((meeting) => (
                    <div key={meeting.id} className="bg-blue-50 p-3 rounded-lg text-left">
                      <div className="font-medium text-sm">{meeting.title}</div>
                      <div className="text-xs text-gray-600">
                        {meeting.startTime} - {meeting.endTime}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={() => setShowMeetingModal(true)}
                className="text-blue-600 text-sm font-medium flex items-center justify-center space-x-2 hover:text-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span>Schedule a meeting</span>
              </button>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="p-6 border-t border-gray-200">
            <button className="text-blue-600 text-sm font-medium flex items-center space-x-1 hover:text-blue-700">
              <span>Open Recordings</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={showMeetingModal} onClose={() => setShowMeetingModal(false)} onSave={handleSaveMeeting} />
      <JoinMeetingModal isOpen={showJoinModal} onClose={() => setShowJoinModal(false)} />
    </div>
  )
}
