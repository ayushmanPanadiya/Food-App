import React from "react";

const ShimmerBox = ({ className = "" }) => (
  <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
);

const ShimmerRestaurantCard = () => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
    
    <ShimmerBox className="w-full h-48 rounded-none" />
 
    <div className="p-3 flex flex-col gap-2">
     
      <ShimmerBox className="w-3/4 h-5 rounded-md" />

      
      <ShimmerBox className="w-full h-3 rounded-md" />
      <ShimmerBox className="w-2/3 h-3 rounded-md" />

     
      <div className="flex items-center gap-2 mt-1">
        <ShimmerBox className="w-5 h-5 rounded-full" />
        <ShimmerBox className="w-8 h-3 rounded-md" />
      </div>

   
      <ShimmerBox className="w-20 h-3 rounded-md" />

      
      <ShimmerBox className="w-24 h-3 rounded-md" />
    </div>
  </div>
);

const ShimmerHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        {/* Logo + greeting */}
        <div className="flex items-center gap-3">
          <ShimmerBox className="w-12 h-12 rounded-lg" />
          <ShimmerBox className="w-36 h-5 rounded-md" />
        </div>

        <div className="flex items-center gap-6">
          <ShimmerBox className="w-28 h-4 rounded-md" />
          <ShimmerBox className="w-14 h-4 rounded-md" />
          <ShimmerBox className="w-14 h-4 rounded-md" />
          <ShimmerBox className="w-14 h-4 rounded-md" />
          <ShimmerBox className="w-16 h-4 rounded-md" />
          <ShimmerBox className="w-24 h-4 rounded-md" />
          <ShimmerBox className="w-10 h-4 rounded-md" />
        </div>
      </div>

  
      <div className="px-6 py-5 flex items-center gap-3">
        <ShimmerBox className="w-72 h-9 rounded-md" />
        <ShimmerBox className="w-20 h-9 rounded-md" />
        <ShimmerBox className="w-28 h-9 rounded-md" />
      </div>

      <div className="px-6 pb-10">
        <div className="grid grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <ShimmerRestaurantCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerHome;