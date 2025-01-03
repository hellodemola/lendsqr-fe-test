"use client";

import { useState } from "react";

export default function PasswordInput({
  placeholder,
}: Readonly<{
  placeholder: string;
}>) {
  const [showPassword, setShowPassword] = useState(false);
  const handleCheckbox = () => setShowPassword(!showPassword);
  return (
    <div className="password-container">
      <i onClick={handleCheckbox} className="show-password-cta">
        {showPassword ? "Hide" : "Show"}
      </i>
      <input
        type={showPassword ? "text" : "password"}
        className=""
        placeholder={placeholder}
      />
    </div>
  );
}
