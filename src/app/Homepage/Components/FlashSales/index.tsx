"use client";

import { useEffect, useState, useRef } from "react";
import ProductCard from "../ProductCard/productCard";
import Button from "@/app/Shared-components/Button";

export default function CountdownTimer() {
  // keep target date constant using useRef (doesn’t re-render)
  const targetDate = useRef(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.current - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex gap-4">
        <div>
          <div className="flex font-bold p-2 text-2xl gap-3 mb-3">
            <div className="border border-red-700 rounded-md w-4 bg-red-700"></div>
            <p className="text-red-700">Today's</p>
          </div>
          <h3 className="text-black font-black text-3xl mb-5">Flash Sales</h3>
        </div>

        <div className="flex gap-4 text-center font-bold text-lg text-black">
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md w-16">
            <span>{timeLeft.days}</span>
            <span className="text-xs text-black">Days</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md w-16">
            <span>{timeLeft.hours}</span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md w-16">
            <span>{timeLeft.minutes}</span>
            <span className="text-xs">Mins</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md w-16">
            <span>{timeLeft.seconds}</span>
            <span className="text-xs">Secs</span>
          </div>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-scroll scrollbar-hide">
        <ProductCard
          productImage="/gamePad2.png"
          productTitle="HAVIT HV-G92 Gamepad"
          rating={5}
          price="120"
          reviews={"88"}
        />
        <ProductCard
          productImage="/keyboard.png"
          productTitle="Wired Keyboard"
          rating={5}
          price="960"
          reviews={"75"}
        />
        <ProductCard
          productImage="/monitor.png"
          productTitle="Gaming Monitor"
          rating={5}
          price="370"
          reviews={"99"}
        />
        <ProductCard
          productImage="/chair.png"
          productTitle="S-Series Comfort Chair"
          rating={4}
          price="375"
          reviews={"99"}
        />
        <ProductCard
          productImage="/gamePad2.png"
          productTitle="HAVIT HV-G92 Gamepad"
          rating={5}
          price="120"
          reviews={"88"}
        />
        <ProductCard
          productImage="/keyboard.png"
          productTitle="Wired Keyboard"
          rating={5}
          price="960"
          reviews={"75"}
        />
        <ProductCard
          productImage="/monitor.png"
          productTitle="Gaming Monitor"
          rating={5}
          price="370"
          reviews={"99"}
        />
        <ProductCard
          productImage="/chair.png"
          productTitle="S-Series Comfort Chair"
          rating={4}
          price="375"
          reviews={"99"}
        />
      </div>

      <div className="ml-150 p-10">
        <Button buttonText="View All Products" variant="" />
      </div>
    </div>
  );
}
