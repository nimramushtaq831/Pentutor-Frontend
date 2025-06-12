"use client"
import { useState } from "react"
import { X, Calendar, Plus, ChevronRight } from "lucide-react"

export default function MeetingModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "Emily Johnson's Meeting",
    startDate: "6/10/2025",
    startTime: "5:00 PM",
    endTime: "5:30 PM",
    location: "Islamabad,Karachi,T...",
    repeat: "Never",
    meetingId: "auto",
    attendees: "",
    passcode: "9eeTumL",
    waitingRoom: true,
    continuousChat: true,
    hostVideo: false,
    participantVideo: false,
    audio: "computer",
    calendar: "outlook",
  })

  const handleSave = () => {
    const newMeeting = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    }
    onSave(newMeeting)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full overflow-y-auto">
        {/* Blue notification bar */}
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs">i</span>
            </div>
            <span>
              Connect your calendar to manage all your events in one place and experience all advanced features! Connect
            </span>
          </div>
          <button onClick={onClose}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Title */}
          <div className="flex items-center justify-between mb-6">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="text-lg font-medium border-none outline-none bg-transparent flex-1"
            />
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
              />
            </div>
            <input
              type="text"
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <input
              type="text"
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <input
              type="text"
              value={formData.startDate}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
              readOnly
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Location"
            />
          </div>

          {/* Repeat */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-medium">Repeat</span>
            <select
              value={formData.repeat}
              onChange={(e) => setFormData({ ...formData, repeat: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option value="Never">Never</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Attendees */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Attendees</h3>
            <input
              type="text"
              placeholder="Add invites"
              value={formData.attendees}
              onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Meeting ID */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Meeting ID</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="meetingId"
                  value="auto"
                  checked={formData.meetingId === "auto"}
                  onChange={(e) => setFormData({ ...formData, meetingId: e.target.value })}
                  className="text-blue-600"
                />
                <span className="text-sm">Generates Automatically</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="meetingId"
                  value="personal"
                  checked={formData.meetingId === "personal"}
                  onChange={(e) => setFormData({ ...formData, meetingId: e.target.value })}
                  className="text-blue-600"
                />
                <span className="text-sm">Personal Meeting ID 654 675 982</span>
              </label>
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Attachments</h3>
            <button className="flex items-center space-x-2 text-blue-600 text-sm">
              <Plus className="w-4 h-4" />
              <span>Add attachments</span>
            </button>
          </div>

          {/* Meeting Security */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Meeting Security</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Passcode</div>
                  <div className="text-xs text-gray-500">
                    Only users who have invite link or passcode can join the meeting.
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.passcode}
                  onChange={(e) => setFormData({ ...formData, passcode: e.target.value })}
                  className="border border-gray-300 rounded px-2 py-1 text-sm w-20"
                />
              </div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.waitingRoom}
                  onChange={(e) => setFormData({ ...formData, waitingRoom: e.target.checked })}
                  className="rounded text-blue-600"
                />
                <div>
                  <div className="text-sm font-medium">Waiting Room</div>
                  <div className="text-xs text-gray-500">Only users admitted by the host can join the meeting</div>
                </div>
              </label>
            </div>
          </div>

          {/* Meeting Chat */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Meeting Chat</h3>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.continuousChat}
                onChange={(e) => setFormData({ ...formData, continuousChat: e.target.checked })}
                className="rounded text-blue-600"
              />
              <div>
                <div className="text-sm font-medium">Enable Continuous Meeting Chat</div>
                <div className="text-xs text-gray-500">
                  Added attendees will have access to the meeting group chat before and after the meeting.
                </div>
              </div>
            </label>
          </div>

          {/* Video */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Video</h3>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <span className="text-sm">Host: Off</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hostVideo}
                    onChange={(e) => setFormData({ ...formData, hostVideo: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">Participant: Off</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.participantVideo}
                    onChange={(e) => setFormData({ ...formData, participantVideo: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Audio */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Audio</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="audio"
                value="computer"
                checked={formData.audio === "computer"}
                onChange={(e) => setFormData({ ...formData, audio: e.target.value })}
                className="text-blue-600"
              />
              <span className="text-sm">Computer Audio</span>
            </label>
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <h3 className="font-medium mb-3">Calendar</h3>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="calendar"
                  value="outlook"
                  checked={formData.calendar === "outlook"}
                  onChange={(e) => setFormData({ ...formData, calendar: e.target.value })}
                  className="text-blue-600"
                />
                <span className="text-sm">Outlook</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="calendar"
                  value="google"
                  checked={formData.calendar === "google"}
                  onChange={(e) => setFormData({ ...formData, calendar: e.target.value })}
                  className="text-blue-600"
                />
                <span className="text-sm">Google Calendar</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="calendar"
                  value="other"
                  checked={formData.calendar === "other"}
                  onChange={(e) => setFormData({ ...formData, calendar: e.target.value })}
                  className="text-blue-600"
                />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-slate-700 text-white rounded-md text-sm font-medium hover:bg-slate-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
