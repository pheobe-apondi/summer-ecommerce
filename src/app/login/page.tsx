"use client";

import Link from "next/link";
import Image from "next/image";
import NavBar from "../Shared-components/Navigation";
import Footer from "../Shared-components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Errors {
  emailOrPhone?: string;
  password?: string;
}

export default function Login() {
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const tempErrors: Errors = {};

    if (!emailOrPhone.trim()) {
      tempErrors.emailOrPhone = "Email or Phone Number is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{8,15}$/; 
      if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        tempErrors.emailOrPhone = "Enter a valid email or phone number";
      }
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
            alt="Login illustration"
            width={600}
            height={500}
          />
        </div>

        <div className="mt-20 w-full max-w-md">
          <h3 className="text-5xl font-semibold">Log in to Exclusive</h3>
          <p className="text-lg mt-3 text-gray-600">Enter your details below</p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div>
              <input
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className={`border-b outline-none py-2 w-full ${
                  errors.emailOrPhone ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>
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

            <div className="mt-10 flex gap-10 justify-between items-center">
              <button
                type="submit"
                className="bg-red-600 text-white py-3 w-45 rounded-md hover:bg-red-700 transition"
              >
                Login
              </button>
              <Link href="/" className="underline text-red-600 mt-3">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
