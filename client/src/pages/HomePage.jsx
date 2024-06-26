import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <nav>
          <a href="/login" className="ml-4">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-blue-50 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-4xl text-blue-500 font-bold mb-4">Welcome to Task Manager</h2>
        <p className="text-lg text-blue-500 mb-6">Organize your tasks efficiently and boost your productivity.</p>
        <a href="/register" className="bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-7 bg-blue-50 text-blue-500 text-center">
        <h3 className="text-3xl font-bold mb-8">Features of Task Manager</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-blue-600 font-bold mb-2">Create Tasks</h4>
            <p>Easily create and manage your tasks with a few clicks.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-blue-600 font-bold mb-2">Organize</h4>
            <p>Organize tasks by categories, due dates, and priorities.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl text-blue-600 font-bold mb-2">Track Progress</h4>
            <p>Track your progress and stay on top of your deadlines.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
