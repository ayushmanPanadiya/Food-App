import { useRouteError, Link } from "react-router-dom";
import React from "react";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      
      {/* Error Emoji */}
      <div className="text-8xl mb-6">🍽️</div>

      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-orange-400 mb-2">
        {err?.status || "Oops"}
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {err?.statusText || "Something went wrong"}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-center max-w-md mb-8">
        Looks like this page got eaten! Don't worry, let's get you back on track.
      </p>

      {/* Divider */}
      <div className="w-16 h-1 bg-orange-400 rounded-full mb-8" />

      {/* Error detail */}
      {err?.data && (
        <p className="text-sm text-red-400 bg-red-50 px-4 py-2 rounded-lg mb-8">
          {err.data}
        </p>
      )}

      {/* Back home button */}
      <Link to="/">
        <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl cursor-pointer transition-colors duration-200 shadow-md">
          Back to Home
        </button>
      </Link>

    </div>
  );
};

export default Error;