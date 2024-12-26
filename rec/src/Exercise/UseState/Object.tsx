import React, { useState } from "react";

interface Objects {
  sub: string;
}

function Object() {
  const [obj, setObj] = useState<Objects>({
    sub: "This is a object state",
  });

  return (
    <div className="flex flex-col items-center justify-center mt-5 p-4 bg-gray-100">
      <p className="text-lg font-serif text-gray-800 mb-6 bg-white shadow-md rounded-lg p-4">
        {obj.sub}
      </p>
      <button
        onClick={() =>
          setObj({ sub: "This has been Changed Subject state" })
        }
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Change State
      </button>
    </div>
  );
}

export default Object;
