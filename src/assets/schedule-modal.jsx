"use client"

import { useState } from "react"
import {
  X,
  ChevronDown,
  Info,
  Clock,
  Calendar,
  Users,
  Shield,
  MessageCircle,
  VideoIcon,
  Volume2,
  Sparkles,
} from "lucide-react"

export default function ScheduleModal({ isOpen, onClose }) {
  const [isSaved, setIsSaved] = useState(false)
  const [meetingData, setMeetingData] = useState({
    title: "Emily Johnson's Meeting",
    startDate: "6/10/2025",
    startTime: "5:00 PM",
    endTime: "5:30 PM",
    endDate: "6/10/2025",
    location: "Islamabad,Karachi,T...",
    repeat: "Never",
    attendees: "",
    meetingId: "generates",
    personalId: "654 675 982",
    passcode: "9ceTumL",
    passcodEnabled: true,
    waitingRoom: true,
    continuousChat: true,
    hostVideo: false,
    participantVideo: false,
    audio: "computer",
    calendar: "outlook",
  })

  if (!isOpen) return null

  const handleSave = () => {
    setIsSaved(true)
    console.log("Meeting saved:", meetingData)
  }

  const handleView = () => {
    console.log("Viewing meeting:", meetingData)
  }

  return (
    <div className="fixed inset-0  bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Calendar Connection Banner */}
        

        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <input
                  type="text"
                  value={meetingData.title}
                  onChange={(e) => setMeetingData({ ...meetingData, title: e.target.value })}
                  className="text-2xl font-bold text-gray-900 border-none outline-none bg-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Schedule your meeting</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Date and Time Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Date & Time</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="text"
                  value={meetingData.startDate}
                  onChange={(e) => setMeetingData({ ...meetingData, startDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Start Time</label>
                <input
                  type="text"
                  value={meetingData.startTime}
                  onChange={(e) => setMeetingData({ ...meetingData, startTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="text"
                  value={meetingData.endTime}
                  onChange={(e) => setMeetingData({ ...meetingData, endTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="text"
                  value={meetingData.endDate}
                  onChange={(e) => setMeetingData({ ...meetingData, endDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Location & Repeat */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={meetingData.location}
                onChange={(e) => setMeetingData({ ...meetingData, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter location"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Repeat</label>
              <div className="relative">
                <select
                  value={meetingData.repeat}
                  onChange={(e) => setMeetingData({ ...meetingData, repeat: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="Never">Never</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Attendees */}
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Attendees</h3>
            </div>
            <input
              type="text"
              placeholder="Add invites (separate with commas)"
              value={meetingData.attendees}
              onChange={(e) => setMeetingData({ ...meetingData, attendees: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>

          {/* Meeting ID */}
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Meeting ID</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors cursor-pointer">
                <input
                  type="radio"
                  name="meetingId"
                  value="generates"
                  checked={meetingData.meetingId === "generates"}
                  onChange={(e) => setMeetingData({ ...meetingData, meetingId: e.target.value })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">Generate Automatically</span>
                <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Recommended</span>
              </label>
              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors cursor-pointer">
                <input
                  type="radio"
                  name="meetingId"
                  value="personal"
                  checked={meetingData.meetingId === "personal"}
                  onChange={(e) => setMeetingData({ ...meetingData, meetingId: e.target.value })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">Personal Meeting ID</span>
                <span className="ml-auto text-sm text-gray-600 font-mono">{meetingData.personalId}</span>
              </label>
            </div>
          </div>

          {/* Meeting Security */}
          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={meetingData.passcodEnabled}
                    onChange={(e) => setMeetingData({ ...meetingData, passcodEnabled: e.target.checked })}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-700">Passcode Protection</span>
                    <span className="ml-3 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-mono">
                      {meetingData.passcode}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  checked={meetingData.waitingRoom}
                  onChange={(e) => setMeetingData({ ...meetingData, waitingRoom: e.target.checked })}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">Enable Waiting Room</span>
              </div>
            </div>
          </div>

          {/* Meeting Features */}
          <div className="grid grid-cols-2 gap-6">
            {/* Chat Settings */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Chat</h3>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={meetingData.continuousChat}
                  onChange={(e) => setMeetingData({ ...meetingData, continuousChat: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">Enable Continuous Chat</span>
              </label>
            </div>

            {/* Audio Settings */}
            <div className="bg-indigo-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Volume2 className="w-5 h-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Audio</h3>
              </div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="audio"
                  value="computer"
                  checked={meetingData.audio === "computer"}
                  onChange={(e) => setMeetingData({ ...meetingData, audio: e.target.value })}
                  className="w-4 h-4 text-indigo-600"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">Computer Audio</span>
              </label>
            </div>
          </div>

          {/* Video Settings */}
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <VideoIcon className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Video Settings</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Host Video</span>
                <div className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={meetingData.hostVideo}
                    onChange={(e) => setMeetingData({ ...meetingData, hostVideo: e.target.checked })}
                    className="sr-only"
                  />
                  <div
                    onClick={() => setMeetingData({ ...meetingData, hostVideo: !meetingData.hostVideo })}
                    className={`block w-12 h-6 rounded-full cursor-pointer transition-colors ${meetingData.hostVideo ? "bg-red-600" : "bg-gray-300"}`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${meetingData.hostVideo ? "transform translate-x-6" : ""}`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Participant Video</span>
                <div className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={meetingData.participantVideo}
                    onChange={(e) => setMeetingData({ ...meetingData, participantVideo: e.target.checked })}
                    className="sr-only"
                  />
                  <div
                    onClick={() => setMeetingData({ ...meetingData, participantVideo: !meetingData.participantVideo })}
                    className={`block w-12 h-6 rounded-full cursor-pointer transition-colors ${meetingData.participantVideo ? "bg-red-600" : "bg-gray-300"}`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${meetingData.participantVideo ? "transform translate-x-6" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Integration */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar Integration</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "outlook", label: "Outlook", color: "blue" },
                { value: "google", label: "Google Calendar", color: "green" },
                { value: "other", label: "Other", color: "gray" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors cursor-pointer"
                >
                  <input
                    type="radio"
                    name="calendar"
                    value={option.value}
                    checked={meetingData.calendar === option.value}
                    onChange={(e) => setMeetingData({ ...meetingData, calendar: e.target.value })}
                    className={`w-4 h-4 text-${option.color}-600`}
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50 rounded-b-2xl">
          <div className="text-sm text-gray-500">All settings can be changed later</div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            {!isSaved ? (
              <button
                onClick={handleSave}
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Save Meeting
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Meeting Saved!
                </div>
                <button
                  onClick={handleView}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Meeting
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
