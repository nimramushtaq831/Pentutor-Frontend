import React from "react";
import { Home, MessageCircle, Bell } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[83px] bg-[#1f2b62] flex flex-col items-center py-4 space-y-6">
      <img src="/logo.png" alt="Logo" className="w-10 h-10" />
      <div className="flex flex-col gap-6 mt-4 text-white">
        <Home className="text-yellow-400 w-6 h-6" />
        <MessageCircle className="w-6 h-6" />
        <Bell className="w-6 h-6" />
      </div>
    </div>
  );
}
