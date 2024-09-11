import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient text-primary font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px] hover:duration-200 glowing`}
    >
      Get Started
    </button>
  );
};

export default Button;
