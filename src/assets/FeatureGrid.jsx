import React from "react";
import { Video, Plus, Calendar, Upload } from "lucide-react";

const features = [
  {
    title: "New Meeting",
    color: "bg-yellow-400",
    icon: <Video className="w-8 h-8" />,
  },
  {
    title: "Join Now",
    color: "bg-indigo-900",
    icon: <Plus className="w-8 h-8" />,
  },
  {
    title: "Schedule",
    color: "bg-indigo-900",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    title: "Screen Sharing",
    color: "bg-indigo-900",
    icon: <Upload className="w-8 h-8" />,
  },
];

export default function FeatureGrid() {
  return (
    <div className="flex justify-center items-center flex-1 py-10">
      <div className="grid grid-cols-2 gap-10">
        {features.map((item) => (
          <div
            key={item.title}
            className={`${item.color} w-[200px] h-[240px] rounded-lg text-white flex flex-col items-center justify-center relative shadow-md`}
          >
            <div>{item.icon}</div>
            <p className="mt-4 font-semibold text-center">{item.title}</p>
            <button className="absolute bottom-4 bg-white text-black w-8 h-8 rounded-full shadow flex items-center justify-center">
              →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
