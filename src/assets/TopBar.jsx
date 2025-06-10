import React from "react";

export default function TopBar() {
  return (
    <div className="h-[84px] flex items-center justify-between px-6 border-b-2 border-yellow-400 bg-white shadow-sm">
      {/* Search */}
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none placeholder-gray-500 text-gray-700"
        />
      </div>

      {/* Profile */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
}
