"use client";
import { ChevronLeft, ChevronRight, MoreHorizontal, Umbrella, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

const meetings = [];

export default function CalendarPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 m-0 p-0 space-x-0">
      {/* Calendar Section - Left */}
      <div className="flex-1 bg-gray-50">
        <div className="flex items-center space-x-4 mb-6 px-6 pt-6">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm">
            Today
          </button>
          <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
          <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer" />
          <h2 className="text-2xl font-semibold text-gray-900 ml-4">June 2025</h2>
        </div>

        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
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
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
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

        <div className="p-8 ">
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
              <span>Schedule a meeting</span>
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
  );
}
