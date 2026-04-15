import { useEffect, useState } from "react";

import call from "../../assets/call.png";
import video from "../../assets/video.png";
import text from "../../assets/text.png";

const iconMap = {
  Call: call,
  Text: text,
  Video: video
};

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  // load data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(storedData);
  }, []);

  // filter logic
  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* HEADING */}
      <h2 className="text-3xl font-bold mb-6">Timeline</h2>

      {/* FILTER */}
      <div className="mb-6">
        <select
          className="border px-4 py-2 rounded-lg shadow-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      {filteredData.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No interactions yet 🚫
        </p>
      )}

      {/* TIMELINE LIST */}
      <div className="space-y-4">

        {filteredData.map(item => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition"
          >

            {/* ICON */}
            <div>
              <img
                src={iconMap[item.type]}
                alt={item.type}
                className="w-5 h-5"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.type} with {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

            
          </div>
        ))}

      </div>

    </div>
  );
};

export default Timeline;