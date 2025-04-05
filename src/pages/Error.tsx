import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#18181b] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200 tracking-widest">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          But don’t worry, it’s on its way! Please stay tuned for the upcoming
          updates.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-teal-600 dark:bg-teal-500 text-gray-100 rounded-full hover:bg-teal-700 "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
