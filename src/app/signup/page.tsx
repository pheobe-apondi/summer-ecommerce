"use client";

import Link from "next/link";
import Image from "next/image";
import NavBar from "../Shared-components/Navigation";
import Footer from "../Shared-components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const tempErrors: Errors = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "Enter a valid email";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push("/");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex gap-20 text-black mt-10 px-10">
        <div className="bg-blue-100 h-170 w-200 flex items-center justify-center">
          <Image
            src="/signupSIdeImage.png"
            alt="Signup illustration"
            width={600}
            height={500}
          />
        </div>

        <div className="mt-20 w-full max-w-md">
          <h3 className="text-5xl font-semibold">Create an account</h3>
          <p className="text-lg mt-3 text-gray-600">Enter your details below</p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border-b outline-none py-2 w-full ${
                  errors.name ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border-b outline-none py-2 w-full ${
                  errors.email ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border-b outline-none py-2 w-full ${
                  errors.password ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
              >
                Create Account
              </button>
              <button
                type="button"
                className="border border-black text-black py-3 rounded-md hover:bg-gray-100 transition"
              >
                Sign Up with Google
              </button>
            </div>
          </form>

          <p className="mt-5">
            Already have an account?
            <Link href="/login" className="underline ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
