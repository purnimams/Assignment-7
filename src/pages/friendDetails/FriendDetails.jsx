import { useParams } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  // load friend
  useEffect(() => {
    fetch("/friendsData.json")
      .then(res => res.json())
      .then(data => {
        const single = data.find(f => f.id == id);
        setFriend(single);
      });
  }, [id]);

  // interaction handler
  const handleInteraction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      name: friend.name,
      date: new Date().toLocaleDateString()
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    const updated = [newEntry, ...existing];

    localStorage.setItem("timeline", JSON.stringify(updated));

    toast.success(`${type} with ${friend.name} added!`);
  };

  if (!friend) {
    return (
      <p className="text-center mt-20 animate-pulse">
        Loading...
      </p>
    );
  }

  const statusColor = {
    "overdue": "bg-red-600 text-white",
    "almost due": "bg-yellow-500 text-white",
    "on-track": "bg-green-600 text-white"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">

      {/* LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex flex-col items-center text-center">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mb-4"
          />

          <h2 className="text-xl font-semibold">{friend.name}</h2>

          <span className={`mt-2 px-3 py-1 text-sm rounded-full ${statusColor[friend.status]}`}>
            {friend.status}
          </span>

          {/* tags */}
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            {friend.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            {friend.bio}
          </p>

          <p className="text-sm mt-2">
            {friend.email}
          </p>

          {/* action buttons */}
          <div className="w-full mt-6 space-y-3">
            <button className="w-full px-3 py-2 rounded-lg shadow">
              ⏰ Snooze
            </button>

            <button className="w-full px-3 py-2 rounded-lg shadow">
              📦 Archive
            </button>

            <button className="w-full px-3 py-2 text-red-600 rounded-lg shadow">
              🗑 Delete
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">

        {/* stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Days</p>
            <h3 className="font-semibold">{friend.days_since_contact}</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Goal</p>
            <h3 className="font-semibold">{friend.goal}</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Next</p>
            <h3 className="font-semibold">{friend.next_due_date}</h3>
          </div>
        </div>

        {/* goal */}
        <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold mb-2">Relationship Goal</h3>
            <p className="text-sm text-gray-500">
              Contact every {friend.goal} days
            </p>
          </div>
          <button className="px-3 py-1 bg-gray-100 rounded text-sm">
            Edit
          </button>
        </div>

        {/* quick check-in */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="flex gap-3 flex-wrap">

            <button
              onClick={() => handleInteraction("Call")}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              📞 Call
            </button>

            <button
              onClick={() => handleInteraction("Text")}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              💬 Text
            </button>

            <button
              onClick={() => handleInteraction("Video")}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              🎥 Video
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default FriendDetails;