import React from "react";

const Status = () => {
  return (
    <div className="mt-12 mb-14 font-sans max-w-5xl mx-auto px-6 text-cente">
      <h2 className="text-2xl font-bold mb-6">Friendship Analytics</h2>




      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className="text-gray-500 mb-4">By Interaction Type</h4>

        {/* Donut Chart */}
        <div className="flex justify-center items-center">
          <div className="relative w-40 h-40">


            {/* Outer Ring */}
          <div className="w-full h-full rounded-full bg-[conic-gradient(#7c3aed_0%_39%,white_39%_40%,#064e4e_40%_74%,white_74%_75%,#22c55e_75%_99%,white_99%_100%)]"></div>



            {/* Inner Hole */}
            <div className="absolute inset-6 bg-white rounded-full"></div>
          </div>
        </div>





        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
            Text
          </div>

          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-green-900 rounded-full"></span>
            Call
          </div>

          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;