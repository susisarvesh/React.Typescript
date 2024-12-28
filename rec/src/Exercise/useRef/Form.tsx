import React, { useRef, useState } from "react";

interface FormShape {
  name: string;
  email: string;
  password: string;
}

function Form() {
  const [formdata, setFormdata] = useState<FormShape>({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleBtn = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (nameRef.current && emailRef.current && passwordRef.current) {
      setFormdata({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      // Clear the inputs after submission
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 bg-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        onSubmit={handleBtn}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Form Data:</h3>
        <p>
          <span className="font-bold">Name:</span> {formdata.name || "N/A"}
        </p>
        <p>
          <span className="font-bold">Email:</span> {formdata.email || "N/A"}
        </p>
        <p>
          <span className="font-bold">Password:</span> {formdata.password || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default Form;
