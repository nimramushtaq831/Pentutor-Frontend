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
  Send,
  Paperclip,
  Smile,
  Phone,
  VideoIcon,
  Users,
  Settings,
} from "lucide-react"
import { useState } from "react"

export default function TeamChat({ onNavigate }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hey everyone! Ready for today's meeting?",
      time: "10:30 AM",
      avatar: "J",
    },
    {
      id: 2,
      sender: "Sarah Wilson",
      message: "Yes, I'll be there. Just finishing up the presentation.",
      time: "10:32 AM",
      avatar: "S",
    },
    {
      id: 3,
      sender: "Mike Johnson",
      message: "Can we reschedule to 3 PM? I have a conflict.",
      time: "10:35 AM",
      avatar: "M",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        message: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        avatar: "Y",
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
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
            <div className="flex flex-col items-center text-xs cursor-pointer" onClick={() => onNavigate("home")}>
              <Home className="w-5 h-5 mb-1" />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center text-xs cursor-pointer bg-slate-600 px-3 py-2 rounded-md">
              <MessageSquare className="w-5 h-5 mb-1 text-blue-400" />
              <span className="text-blue-400 font-medium">Team Chat</span>
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
        {/* Left Sidebar - Teams List */}
        <div className="w-64 bg-gray-50 border-r border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Teams</h2>
            <div className="space-y-2">
              <div className="bg-blue-100 p-3 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">DT</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Development Team</div>
                    <div className="text-xs text-gray-500">5 members</div>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">MT</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Marketing Team</div>
                    <div className="text-xs text-gray-500">3 members</div>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">DS</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Design Team</div>
                    <div className="text-xs text-gray-500">4 members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">DT</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Development Team</h3>
                  <p className="text-sm text-gray-500">5 members online</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <VideoIcon className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <Users className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">{msg.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm text-gray-900">{msg.sender}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Smile className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
