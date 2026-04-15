// import React from "react";

// const Status = () => {
//   return (
//     <div className="mt-12 mb-14 font-sans max-w-5xl mx-auto px-6 text-cente">
//       <h2 className="text-2xl font-bold mb-6">Friendship Analytics</h2>




//       <div className="bg-white p-6 rounded-2xl shadow-md">
//         <h4 className="text-gray-500 mb-4">By Interaction Type</h4>

//         {/* Donut Chart */}
//         <div className="flex justify-center items-center">
//           <div className="relative w-40 h-40">


//             {/* Outer Ring */}
//           <div className="w-full h-full rounded-full bg-[conic-gradient(#7c3aed_0%_39%,white_39%_40%,#064e4e_40%_74%,white_74%_75%,#22c55e_75%_99%,white_99%_100%)]"></div>



//             {/* Inner Hole */}
//             <div className="absolute inset-6 bg-white rounded-full"></div>
//           </div>
//         </div>





//         {/* Legend */}
//         <div className="flex justify-center gap-4 mt-4 text-sm">
//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
//             Text
//           </div>

//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-green-900 rounded-full"></span>
//             Call
//           </div>

//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//             Video
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Status;






import React, { useEffect, useState } from "react";

const Status = () => {
  const [timeline, setTimeline] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  // count function
  const getCount = (type) => {
    return timeline.filter((item) => item.type === type).length;
  };

  return (
    <div className="mt-12 mb-14 font-sans max-w-5xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6">Friendship Analytics</h2>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className="text-gray-500 mb-4">By Interaction Type</h4>

        {/* DONUT */}
        <div className="flex justify-center relative w-40 h-40 mx-auto">

          <div
            className="w-full h-full rounded-full"
            style={{
              background:
              "conic-gradient(#7c3aed 0% 39%, white 39% 40%, #064e4e 40% 74%, white 74% 75%, #22c55e 75% 100%)"
                  
                

            }}
          />

          {/* TEXT */}
          <div
            onMouseEnter={() => setHovered("Text")}
            onMouseLeave={() => setHovered(null)}
            className="absolute w-full h-full"
            style={{
              clipPath: "polygon(50% 50%, 100% 0, 100% 100%)"
            }}
          />

          {/* CALL */}
          <div
            onMouseEnter={() => setHovered("Call")}
            onMouseLeave={() => setHovered(null)}
            className="absolute w-full h-full"
            style={{
              clipPath: "polygon(50% 50%, 0 0, 100% 0)"
            }}
          />

          {/* VIDEO */}
          <div
            onMouseEnter={() => setHovered("Video")}
            onMouseLeave={() => setHovered(null)}
            className="absolute w-full h-full"
            style={{
              clipPath: "polygon(50% 50%, 0 100%, 100% 100%)"
            }}
          />

          {/* CENTER */}
          <div className="absolute inset-6 bg-white rounded-full"></div>

          {/* TOOLTIP (SHOW COUNT) */}
          {hovered && (
            <div className="absolute -top-8 bg-black text-white text-xs px-3 py-1 rounded shadow">
              {hovered}: {getCount(hovered)}
            </div>
          )}
        </div>

        {/* LEGEND */}
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