import { useEffect, useState } from "react";

import call from "../../assets/call.png";
import video from "../../assets/video.png";
import text from "../../assets/text.png";

const icons = [call, video, text];

const Timeline = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friendsData.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-bold mb-6">Timeline</h2>

      <div className="relative border-l-2 border-gray-200 pl-6 space-y-6">

        {friends.map((friend, index) => (
          <div
            key={friend.id}
            className="bg-white p-4 rounded-xl shadow flex items-start gap-4"
          >

            {/* ICON LEFT */}
            <img
              src={icons[index % icons.length]}
              className="w-5 h-5 mt-1"
              alt="icon"
            />

            {/* TEXT */}
            <div className="flex-1">
              <h3 className="font-semibold">{friend.name}</h3>
              <p className="text-sm text-gray-500">
                Last contacted {friend.days_since_contact} days ago
              </p>
            </div>

            {/* RIGHT DATE */}
            <span className="text-xs text-gray-400">
              {friend.next_due_date}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Timeline;