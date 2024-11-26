"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleLogin = () => {

  };

  const handleSwitchUser = () => {

  };

  if (isLoading) return <p className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</p>;

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 p-6">
        <div className="mt-6">
          {/* Dynamic content based on selected sidebar link */}budget
        </div>
      </div>
    </div>
  );
}
