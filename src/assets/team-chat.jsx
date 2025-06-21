"use client"

import {
  Star,
  MessageSquare,
  Hash,
  Video,
  Smartphone,
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
} from "lucide-react"

export default function TeamChat({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[80vh] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-900 text-white flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">Team Chat</h2>
                <ChevronDown className="w-4 h-4 ml-2" />
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <Plus className="w-5 h-5 transform rotate-45" />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              {/* Starred */}
              <div className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                <ChevronRight className="w-4 h-4 mr-2" />
                <Star className="w-4 h-4 mr-2" />
                <span className="text-sm">Starred</span>
              </div>

              {/* Direct Messages */}
              <div className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                <ChevronRight className="w-4 h-4 mr-2" />
                <MessageSquare className="w-4 h-4 mr-2" />
                <span className="text-sm">Direct Messages</span>
              </div>

              {/* Channels */}
              <div className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                <ChevronRight className="w-4 h-4 mr-2" />
                <Hash className="w-4 h-4 mr-2" />
                <span className="text-sm">Channels</span>
              </div>

              {/* Meeting Chat */}
              <div className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                <ChevronRight className="w-4 h-4 mr-2" />
                <Video className="w-4 h-4 mr-2" />
                <span className="text-sm">Meeting Chat</span>
              </div>

              {/* Apps */}
              <div className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                <ChevronRight className="w-4 h-4 mr-2" />
                <Smartphone className="w-4 h-4 mr-2" />
                <span className="text-sm">Apps</span>
              </div>
            </div>
          </div>

          {/* Left Navigation Icons */}
          <div className="border-t border-gray-700 p-2">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <span className="text-xs">@</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <Hash className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <Video className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800 cursor-pointer">
                <MoreHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <p className="text-gray-600 text-lg">Start chatting by clicking a chat in the left panel.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
