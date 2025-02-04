// src/ErrorPage/ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-600">
          Oops! Something went wrong.
        </h1>
        <p className="mt-4 text-lg text-red-500">
          We couldn't find the page you're looking for.
        </p>
        <p className="mt-6">
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Go back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
