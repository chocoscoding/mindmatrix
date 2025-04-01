"use client";
import React, { useState, useEffect } from "react";
import CountUp from "./animations/CountUp";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  useEffect(() => {
    // Calculate base value from today's date and hour and minute
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const hour = today.getHours();
    const minute = today.getMinutes();

    // Create a base number using YYYYMMHHmm format and add some numbers to make it look more randam and real
    const baseValue =
      parseInt(
        `${year.toString().padStart(1, "0")}${month.toString().padStart(1, "0")}${hour.toString().padStart(1, "0")}${minute
          .toString()
          .padStart(1, "0")}`
      ) + 254680;
    setInitialCount(baseValue);
    setCount(baseValue);

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1);
    }, 3400);

    return () => clearInterval(intervalId);
  }, []);

  return <>{initialCount > 0 && <CountUp className="font-sans" from={initialCount} to={count} separator="," duration={2} />}</>;
};

export default Counter;
//damn
