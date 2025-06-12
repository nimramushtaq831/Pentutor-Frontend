"use client"

import { X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function JoinMeetingModal({ isOpen, onClose }) {
  const [selectedValue, setSelectedValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [name, setName] = useState("")
  const [rememberName, setRememberName] = useState(false)
  const [noAudio, setNoAudio] = useState(false)
  const [noVideo, setNoVideo] = useState(false)
  const dropdownRef = useRef()

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleOptionClick = (value) => {
    setSelectedValue(value)
    setIsDropdownOpen(false)
  }

  const handleJoin = () => {
    alert(`Joining meeting: ${selectedValue || "No meeting ID selected"} as ${name || "Anonymous"}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md space-y-6 mb-10">
        {/* Header */}
        <div className="flex items-center justify-between text-white p-3 bg-[#313D6A] rounded-t-xl">
          <h1>Pen Tutor</h1>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Join meeting</h1>

          {/* Dropdown styled like input */}
          <div className="relative w-full mb-4" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left rounded-xl bg-white px-4 py-3 text-sm text-gray-700 border border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <span className="block truncate">{selectedValue || "Meeting ID or personal link name"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5 ">
                <div className="py-1">
                  {["123-456-789", "room-meeting-link", "private-link-2"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleOptionClick(item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-left mb-4 rounded-xl bg-white px-4 py-3 text-sm text-gray-700 border border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            />
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id="remember-name"
              checked={rememberName}
              onChange={() => setRememberName(!rememberName)}
              className="w-4 h-4"
            />
            <label htmlFor="remember-name" className="">
              Remember my name for future meetings
            </label>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id="no-audio"
              checked={noAudio}
              onChange={() => setNoAudio(!noAudio)}
              className="w-4 h-4"
            />
            <label htmlFor="no-audio" className="">
              Don't connect to audio
            </label>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="no-video"
              checked={noVideo}
              onChange={() => setNoVideo(!noVideo)}
              className="w-4 h-4"
            />
            <label htmlFor="no-video" className="">
              Turn off my video
            </label>
          </div>
          <h1 className="text-sm font-light text-gray-700 mb-3">
            By clicking "Join", you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Statement
              </a>
            </span>
            .
          </h1>
          <div className="flex justify-end gap-4 mt-4">
            <button onClick={handleJoin} className="px-4 py-2 bg-[#313D6A] text-white rounded-lg hover:bg-[#313d6ae5]">
              Join
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
