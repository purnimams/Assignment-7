import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';

const AllFriends = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/friendsData.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className='mt-16 max-w-6xl mx-auto px-6 text-center'>

      {/* top cards same thakbe */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold">10</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold">3</h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold">6</h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-sm text-gray-500">Interactions This Month</p>
        </div>
      </div>

      <div className='mb-6 mt-20'>
        <h2 className='text-xl font-semibold text-left'>Your Friends</h2>
      </div>

      {/* 👇 FRIENDS GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16'>
        {
          friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))
        }
      </div>

    </div>
  );
};

export default AllFriends;