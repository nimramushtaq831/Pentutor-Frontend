"use client";

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
} from "lucide-react";
import { useState } from "react";

// Navigation Item with dropdown support
const NavItem = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center px-3 py-2 rounded hover:bg-gray-800 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight
          className={`w-4 h-4 mr-2 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
        {label === "Starred" && <Star className="w-4 h-4 mr-2" />}
        {label === "Direct Messages" && (
          <MessageSquare className="w-4 h-4 mr-2" />
        )}
        {label === "Channels" && <Hash className="w-4 h-4 mr-2" />}
        {label === "Meeting Chat" && <Video className="w-4 h-4 mr-2" />}
        {label === "Apps" && <Smartphone className="w-4 h-4 mr-2" />}
        <span className="text-sm">{label}</span>
      </div>
      {open && children && <div className="ml-8">{children}</div>}
    </div>
  );
};

export default function TeamChatContent() {
  return (
    <div className="flex flex-1 overflow-hidden h-screen">
      {/* Icon Sidebar */}
      <div className="w-14 bg-gray-900 text-white flex flex-col items-center py-4 space-y-4 border-r border-gray-700">
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer text-sm">@</div>
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
          <Hash className="w-5 h-5" />
        </div>
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
          <Video className="w-5 h-5" />
        </div>
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
          <Smartphone className="w-5 h-5" />
        </div>
        <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
          <MoreHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="w-80 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Team Chat</h2>
              <ChevronDown className="w-4 h-4 ml-2" />
            </div>
            <Plus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Chat Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 space-y-1">
            <NavItem label="Starred">
              <div className="text-sm text-gray-400">No starred messages</div>
            </NavItem>
            <NavItem label="Direct Messages">
              <div className="text-sm text-gray-400">No direct messages</div>
            </NavItem>
            <NavItem label="Channels">
              <div className="text-sm text-gray-400"># general</div>
            </NavItem>
            <NavItem label="Meeting Chat">
              <div className="text-sm text-gray-400">No meetings</div>
            </NavItem>
            <NavItem label="Apps">
              <div className="text-sm text-gray-400">Slack, GitHub</div>
            </NavItem>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-100 px-4">
        <div className="text-center max-w-md">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex items-center justify-center transition-transform hover:scale-105">
            <MessageSquare className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to Team Chat
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Select a conversation from the left panel to start messaging your
            team members. Stay productive and connected.
          </p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-96 bg-white border-l border-gray-200 flex-shrink-0 hidden lg:flex lg:flex-col">
        <div className="bg-slate-700 text-white p-6 relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-5 h-5 bg-white rounded-sm" />
              </div>
              <div>
                <div className="text-3xl font-light">3:29 PM</div>
                <div className="text-base text-gray-300">
                  Tuesday, June 10
                </div>
              </div>
            </div>
            <MoreHorizontal className="w-6 h-6 text-gray-300" />
          </div>
        </div>

        {/* Calendar Area */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-6">
            <p className="text-base text-gray-600 mb-3 leading-relaxed">
              Respond to events, see other's availability and more by{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                connecting your calendar
              </span>
              .
            </p>
          </div>
          <div className="text-center py-12 flex-1 flex flex-col justify-center">
            <div className="w-20 h-20 mx-auto mb-6 opacity-40">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M48 16h-8V8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8H16c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM36 8v8H28V8h8zm12 48H16V24h8v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h8v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h4v32z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-base mb-4">
              No meetings scheduled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
