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
} from "lucide-react"
import { useState } from "react"
import MeetingModal from "./meeting-modal"

export default function TeamsCalendar() {
  const [showModal, setShowModal] = useState(false)
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
            <div className="flex flex-col items-center text-xs cursor-pointer">
              <Home className="w-5 h-5 mb-1" />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer bg-slate-600 px-3 py-2 rounded-md">
              <Video className="w-5 h-5 mb-1 text-blue-400" />
              <span className="text-blue-400 font-medium">Meetings</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer">
              <MessageSquare className="w-5 h-5 mb-1" />
              <span>Team Chat</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer">
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
        {/* Left Calendar Section */}
        <div className="flex-1 bg-gray-50 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-6 h-6 bg-black rounded-sm"></div>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm">
              Today
            </button>
            <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer" />
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">June 2025</h2>
          </div>

          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block mb-8">
                <div className="bg-blue-500 text-white px-8 py-3 rounded-t-lg text-lg font-medium">July</div>
                <div className="bg-white border border-t-0 border-gray-200 px-8 py-6 rounded-b-lg shadow-sm">
                  <div className="text-6xl font-light text-gray-800 mb-2">17</div>
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-medium text-gray-900 mb-3">No events available yet</h3>
                <p className="text-gray-600 text-sm mb-6">Add a calendar to Pen Tutor to see more events.</p>
                <button className="bg-slate-700 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors">
                  Connect Calendar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="bg-slate-700 text-white p-6 relative">
            <div className="text-center">
              <div className="text-4xl font-light mb-2">3:29 PM</div>
              <div className="text-sm opacity-90">Tuesday, June 10</div>
            </div>
            <button className="absolute top-4 right-4">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 border-b border-gray-200">
            <p className="text-gray-600 text-sm leading-relaxed">
              Respond to events, see other's availability and more by{" "}
              <button className="text-blue-600 hover:underline">connecting your calendar</button>.
            </p>
          </div>

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
                onClick={() => setShowModal(true)}
                className="text-blue-600 text-sm font-medium flex items-center justify-center space-x-2 hover:text-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span className="cursor-pointer">Schedule a meeting</span>
              </button>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <button className="text-blue-600 text-sm font-medium flex items-center space-x-1 hover:text-blue-700">
              <span>Open Recordings</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSaveMeeting} />
    </div>
  )
}
