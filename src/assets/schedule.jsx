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
  Clock,
  MapPin,
  Users,
} from "lucide-react"
import { useState } from "react"
import MeetingModal from "./meeting-modal"

export default function Scheduler({ onNavigate }) {
  const [showModal, setShowModal] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: "Team Standup",
      time: "9:00 AM - 9:30 AM",
      location: "Conference Room A",
      attendees: 5,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Client Presentation",
      time: "2:00 PM - 3:00 PM",
      location: "Virtual Meeting",
      attendees: 8,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Project Review",
      time: "4:30 PM - 5:30 PM",
      location: "Conference Room B",
      attendees: 6,
      color: "bg-purple-500",
    },
  ])

  const handleSaveMeeting = (meeting) => {
    setMeetings([...meetings, { ...meeting, id: Date.now(), color: "bg-orange-500" }])
    alert("Meeting scheduled successfully!")
  }

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

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
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("home")}>
              <Home className="w-5 h-5 mb-1" />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("teamchat")}>
              <MessageSquare className="w-5 h-5 mb-1" />
              <span>Team Chat</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("meetings")}>
              <Video className="w-5 h-5 mb-1" />
              <span>Meetings</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer bg-slate-600 px-3 py-2 rounded-md">
              <Calendar className="w-5 h-5 mb-1 text-blue-400" />
              <span className="text-blue-400 font-medium">Scheduler</span>
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
        {/* Main Calendar Area */}
        <div className="flex-1 bg-gray-50 p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  className="p-2 hover:bg-gray-200 rounded-md"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  className="p-2 hover:bg-gray-200 rounded-md"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              <span>New Event</span>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-4 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: firstDayOfMonth }, (_, i) => (
                <div key={`empty-${i}`} className="h-24 border-r border-b border-gray-100"></div>
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1
                const isToday =
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear()

                return (
                  <div key={day} className="h-24 border-r border-b border-gray-100 p-2 relative">
                    <div
                      className={`text-sm font-medium ${isToday ? "bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center" : "text-gray-900"}`}
                    >
                      {day}
                    </div>
                    {day === 10 && (
                      <div className="mt-1 space-y-1">
                        <div className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded truncate">
                          Team Meeting
                        </div>
                      </div>
                    )}
                    {day === 15 && (
                      <div className="mt-1 space-y-1">
                        <div className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded truncate">
                          Client Call
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Today's Schedule */}
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <div key={meeting.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-3 h-3 ${meeting.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{meeting.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{meeting.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{meeting.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Meeting</span>
            </button>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSaveMeeting} />
    </div>
  )
}
