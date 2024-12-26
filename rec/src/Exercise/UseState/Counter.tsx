import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-gray-100">
      <div className="text-4xl font-bold text-gray-800 mb-6">{counter}</div>
      <div className="space-x-4">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
