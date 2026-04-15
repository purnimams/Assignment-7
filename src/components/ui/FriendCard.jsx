import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {

  const { id, name, picture, days_since_contact, tags, status } = friend;

  const statusColor = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <Link to={`/friend/${id}`}>
      <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer">

        <div className="flex flex-col items-center text-center">

          <img
            src={picture}
            className="w-16 h-16 rounded-full mb-3"
          />

          <h3 className="font-semibold">{name}</h3>

          <p className="text-sm text-gray-500">
            {days_since_contact} days ago
          </p>

          <div className="flex gap-2 mt-2 flex-wrap justify-center">
            {
              tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))
            }
          </div>

          <span className={`mt-2 text-xs px-2 py-1 rounded-full ${statusColor[status]}`}>
            {status}
          </span>

        </div>

      </div>
    </Link>
  );
};

export default FriendCard;