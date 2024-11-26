"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon, ListBulletIcon, CurrencyDollarIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/16/solid';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate an authentication check (replace with real logic)
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
    setIsLoading(false);

    // Redirect if already authenticated (optional)
    if (authStatus) router.push("/dashboard");
  }, [router]);

  const handleLogin = () => {
    // Simulate login
    localStorage.setItem("isAuthenticated", "true");
    router.push("/dashboard"); // Redirect to dashboard
  };

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow rounded">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // Render dashboard content
  return (
    <div className="flex h-screen">
  {/* <!-- Sidebar --> */}
  <div className="w-64 p-4 bg-gray-800 text-white">
    <div className="p-4">Dashboard</div>
    <ul className="space-y-4 p-6qa1">
      <li><a href="#" className="flex items-center space-x-2"><HomeIcon className="w-8 h-8" /> <span className="">Home</span></a></li>
      <li><a href="#" className="flex items-center space-x-2"><ListBulletIcon className="w-8 h-8" /> <span>Chores</span></a></li>
      <li><a href="#" className="flex items-center space-x-2"><CurrencyDollarIcon className="w-8 h-8" /> <span>Budget</span></a></li>
      <li><a href="#" className="flex items-center space-x-2"><ShoppingCartIcon className="w-8 h-8" /> <span>Shopping</span></a></li>
    </ul>
  </div>

  {/* <!-- Main Content --> */}
  <div className="flex-1 bg-gray-100 p-6">
    {/* <!-- TopNav --> */}
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <div className="flex space-x-6">
        <a href="login.tsx" className="text-blue-500">Log In</a>
        <a href="#" className="text-blue-500">Switch User</a>
      </div>
    </div>

    {/* <!-- Dynamic Content Here --> */}
    <div className="mt-6">
      {/* <!-- Content based on selected sidebar link will go here --> */}
    </div>
  </div>
</div>
  );
}
