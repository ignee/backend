import React from "react";

// App Component
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <header className="p-4 bg-blue-600 text-white w-full text-center">
        <h1 className="text-2xl font-bold">Welcome to My React App</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <p className="text-lg">This is a basic React app setup!</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
          onClick={() => alert("Hello, React!")}
        >
          Click Me
        </button>
      </main>
      <footer className="p-4 bg-gray-800 text-white w-full text-center">
        <p className="text-sm">&copy; 2025 My React App</p>
      </footer>
    </div>
  );
};

export default App;
