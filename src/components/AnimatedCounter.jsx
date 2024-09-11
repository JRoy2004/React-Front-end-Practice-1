import React, { useState, useEffect } from "react";
const AnimatedCounter = ({ stat }) => {
  const { value, pre, suf } = stat;
  const number = Number(value);
  const [count, setCount] = useState(0);

  let inc;
  inc = number / 10;

  useEffect(() => {
    if (count < number) {
      setTimeout(() => {
        setCount((prev) => prev + inc);
      }, 50);
    }
  }, [count]);
  return (
    <div className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
      {pre}
      {count}
      {suf}
    </div>
  );
};

export default AnimatedCounter;
