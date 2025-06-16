"use client"

import { X, ChevronDown } from "lucide-react"

export default function JoinModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="bg-slate-700 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
          <h2 className="text-sm font-medium">Pen Tutor</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Join meeting</h1>

          {/* Meeting ID Dropdown */}
          <div className="mb-4">
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Meeting ID or personal link name</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-6">
            <input
              type="text"
              defaultValue="Talmeena"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700">Remember my name for future meetings</span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="ml-3 text-sm text-gray-700">Don't connect to audio</span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="ml-3 text-sm text-gray-700">Turn off my video</span>
            </label>
          </div>

          {/* Legal Text */}
          <div className="mb-6">
            <p className="text-xs text-gray-600 leading-relaxed">
              By clicking "Join", you agree to our{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span> and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Privacy Statement</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
