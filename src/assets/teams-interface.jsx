"use client"

import { useState } from "react"
import { Search, Home, MessageSquare, Calendar, Grid3X3, Bell, Lock, CalendarDays, Minimize2, X } from "lucide-react"
import JoinModal from "./join-modal"
import ScheduleModal from "./schedule-modal"
import TeamChatContent from "./team-chat-content"
import MeetingsContent from "./meeting-content"
import SchedulerContent from "./scheduler-content"

export default function TeamsInterface() {
  const [activeTab, setActiveTab] = useState("home")
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

  const handleJoinClick = () => {
    setIsJoinModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsJoinModalOpen(false)
  }

  const handleScheduleClick = () => {
    setIsScheduleModalOpen(true)
  }

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "teamchat":
        return <TeamChatContent />
      case "meetings":
        return <MeetingsContent onJoinClick={handleJoinClick} onScheduleClick={handleScheduleClick} />
      case "scheduler":
        return <SchedulerContent onScheduleClick={handleScheduleClick} />
      default:
        return <MeetingsContent onJoinClick={handleJoinClick} onScheduleClick={handleScheduleClick} />
    }
  }

  return (
    <div className="min-h-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Top Navigation - Dark Blue Background like screenshot */}
      <div className="bg-slate-800 border-b border-slate-700 flex-shrink-0">
        <div className="flex items-center justify-between px-4 py-3 h-16">
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex items-center bg-slate-700 rounded-md px-4 py-2.5 w-64 lg:w-72">
              <Search className="w-4 h-4 text-gray-300 mr-3" />
              <span className="text-gray-300 text-sm">Search</span>
              <span className="ml-auto text-xs text-gray-400 hidden sm:block">Ctrl+F</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-2">
            <div
              onClick={() => setActiveTab("home")}
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors cursor-pointer ${
                activeTab === "home" ? "bg-white text-slate-800 shadow-sm" : "text-white hover:bg-slate-700"
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium hidden sm:block">Home</span>
            </div>
            <div
              onClick={() => setActiveTab("teamchat")}
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors cursor-pointer ${
                activeTab === "teamchat" ? "bg-white text-slate-800 shadow-sm" : "text-white hover:bg-slate-700"
              }`}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm hidden sm:block">Team Chat</span>
            </div>
            <div
              onClick={() => setActiveTab("scheduler")}
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors cursor-pointer ${
                activeTab === "scheduler" ? "bg-white text-slate-800 shadow-sm" : "text-white hover:bg-slate-700"
              }`}
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              <span className="text-sm hidden sm:block">Scheduler</span>
            </div>
            <div
              onClick={() => setActiveTab("meetings")}
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors cursor-pointer ${
                activeTab === "meetings" ? "bg-white text-slate-800 shadow-sm" : "text-white hover:bg-slate-700"
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm hidden sm:block">Meetings</span>
            </div>
            <div className="flex items-center px-4 py-2.5 text-white hover:bg-slate-700 rounded-md transition-colors">
              <Grid3X3 className="w-4 h-4 mr-2" />
              <span className="text-sm hidden sm:block">More</span>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <Lock className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <div className="flex items-center space-x-2 ml-3">
              <Minimize2 className="w-4 h-4 text-white hover:text-gray-300 cursor-pointer" />
              <X className="w-4 h-4 text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      {renderContent()}

      {/* Modals */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseModal} />
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={handleCloseScheduleModal} />
    </div>
  )
}
