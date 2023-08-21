import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-between py-10">
      <h1 className="text-3xl text-white rounded-lg text-center">
        Log-In Page
      </h1>
      <span className="text-white text-lg mt-6">Email</span>
      <input
        type="text"
        placeholder="Email"
        required
        className="border-x-red-100 rounded-md p-3"
      />
      <span className="text-white text-lg mt-6">Password</span>
      <input
        type="password"
        placeholder="Password"
        required
        className="border-x-red-100 rounded-md p-3"
      />

      <button className="text-xl bg-slate-500 rounded-lg p-2 mt-6">
        Sign in
      </button>
      <Link
        href={"/signup"}
        className="text-xl text-blue-600 underline italic p-2 rounded-lg mt-6"
      >
        Go to Sign Up
      </Link>
    </div>
  );
};

export default Login;
