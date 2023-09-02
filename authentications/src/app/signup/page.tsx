"use client";

// internal imports
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      // post request using "axios" service
      const response = await axios.post("/api/signup", user);
      console.log("Success !", response.data);

      // nevagating user to login page
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.log("Sign up Failed !", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-between py-10">
      <h1 className="text-3xl text-white rounded-lg text-center">
        {loading ? "Processing..." : "Sign-Up Page"}
      </h1>
      <span className="text-white text-lg mt-6">User Name</span>
      <input
        type="text"
        value={user.username}
        placeholder="User Name"
        required
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="border-x-red-100 rounded-md p-3"
      />
      <span className="text-white text-lg mt-6">Email</span>
      <input
        type="text"
        value={user.email}
        placeholder="Email"
        required
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border-x-red-100 rounded-md p-3"
      />
      <span className="text-white text-lg mt-6">Password</span>
      <input
        type="password"
        value={user.password}
        placeholder="Password"
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="border-x-red-100 rounded-md p-3"
      />
      {/* <span className="text-white text-lg mt-6">Re-enter Password</span>
      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="border-x-red-100 rounded-md p-3"
      /> */}
      <button
        onClick={onSignup}
        className="text-xl bg-slate-500 rounded-lg p-2 mt-6"
      >
        {buttonDisabled ? "Fill Form Fisrt" : "Signup"}
      </button>
      <Link
        href={"/"}
        className="text-xl text-blue-600 underline italic p-2 rounded-lg mt-6"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default Signup;
