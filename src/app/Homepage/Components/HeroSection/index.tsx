"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/Shared-components/Button";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      img: "/iphoneSale.png",
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
    },
    {
      id: 2,
      img: "/womenscollection.png",
      title: "Women's clothes",
      subtitle: "Exclusive Discounts",
    },
    {
      id: 3,
      img: "/categories.png",
      title: "Speakers",
      subtitle: "Save Big Today",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex justify-between mt-20 mb-10 relative">

      <div className="w-1/4 text-black border border-gray-400">
        <ul className="space-y-3 text-sm">
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Women&apos;s Fashion</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Men&apos;s Fashion</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Electronics</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Home & Lifestyle</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Medicine</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Sports & Outdoor</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Baby&apos;s & Toys</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Groceries & Pets</Link></li>
          <li><Link href="/" className="block hover:bg-red-600 hover:text-white px-3 py-2 rounded">Health & Beauty</Link></li>
        </ul>
      </div>


      <div className="relative w-250 h-[400px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              width={1000}
              height={500}
              className="w-full h-full object-cover"
              priority={index === current}
            />

            <div className="absolute top-1/3 left-12 text-white">
              <div className="">
                <p className="text-lg font-medium">{slide.title}</p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{slide.subtitle}</h3>

              <div className="mt-4">
                <Link href="/signup">
                  <Button buttonText="Shop Now" variant="" />
                </Link>
              </div>
            </div>
          </div>
        ))}


        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
