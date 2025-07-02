import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404 Illustration"
          className="w-40 mx-auto mb-4 animate-bounce"
        />
        <h1 className="text-5xl font-bold text-blue-600 mb-3">404</h1>
        <p className="text-gray-600 text-lg mb-2">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Redirecting to <a href="/" className="text-blue-500 underline">homepage</a> in <span className="font-semibold text-blue-600">{seconds}</span> second{seconds !== 1 ? 's' : ''}...
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          Go Home Now
        </a>
      </div>
    </div>
  );
};

export default NotFound;
