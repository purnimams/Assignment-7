import { useParams } from "react-router";
import { useEffect, useState } from "react";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friendsData.json")
      .then(res => res.json())
      .then(data => {
        const single = data.find(f => f.id == id);
        setFriend(single);
      });
  }, [id]);

  if (!friend) return <p className="text-center mt-20">Loading...</p>;

  const statusColor = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">

      {/* LEFT */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex flex-col items-center text-center">

          <img src={friend.picture} className="w-24 h-24 rounded-full mb-4" />

          <h2 className="text-xl font-semibold">{friend.name}</h2>

          <span className={`mt-2 px-3 py-1 text-sm rounded-full ${statusColor[friend.status]}`}>
            {friend.status}
          </span>

          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            {friend.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">{friend.bio}</p>

          <p className="text-sm mt-2">{friend.email}</p>

          {/* buttons */}
          <div className="flex gap-3 mt-6">
            <button className="px-3 py-2 bg-gray-100 rounded">⏰ Snooze</button>
            <button className="px-3 py-2 bg-gray-100 rounded">📦 Archive</button>
            <button className="px-3 py-2 bg-red-100 text-red-600 rounded">🗑 Delete</button>
          </div>

        </div>
      </div>

      {/* RIGHT */}
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
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Relationship Goal</h3>
          <p className="text-sm text-gray-500">
            Contact every {friend.goal} days
          </p>
          <button className="mt-3 px-3 py-1 bg-gray-100 rounded text-sm">Edit</button>
        </div>

        {/* quick actions */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="flex gap-3">
            <button className="px-3 py-2 bg-green-100 rounded">📞 Call</button>
            <button className="px-3 py-2 bg-blue-100 rounded">💬 Text</button>
            <button className="px-3 py-2 bg-purple-100 rounded">🎥 Video</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FriendDetails;