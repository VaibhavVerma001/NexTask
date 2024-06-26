import React from 'react';
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero Section */}
      <section className="flex-grow bg-gray-950 flex flex-col items-center justify-center text-center ">
        <h2 className="text-4xl text-gray-100 font-bold mb-4">Welcome to NexTask</h2>
        <p className="text-lg text-gray-500 mb-6">Organize your tasks efficiently and boost your productivity.</p>
        <Link to="/register" className="bg-gray-800 text-white py-2 px-4 rounded-full">Register</Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-7 bg-gray-950 text-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8">Features of NexTask</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-gray-100 font-bold mb-2">Create Tasks</h4>
            <p className='text-gray-500'>Easily create and manage your tasks with a few clicks.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-gray-100 font-bold mb-2">Organize</h4>
            <p className='text-gray-500'>Organize tasks by categories, due dates, and priorities.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-gray-100 font-bold mb-2">Track Progress</h4>
            <p className='text-gray-500'>Track your progress and stay on top of your deadlines.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white p-4 text-center">
        <p>&copy; 2024 NexTask. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;