"use client";

import { forwardRef, useState } from "react";

type PasswordInputProps = Readonly<{
  placeholder: string;
  name: string;
  required?: boolean;
}>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const { placeholder, required } = props;
    const [showPassword, setShowPassword] = useState(false);
    const handleCheckbox = () => setShowPassword(!showPassword);
    return (
      <div className="password-container">
        <i onClick={handleCheckbox} className="show-password-cta">
          {showPassword ? "Hide" : "Show"}
        </i>
        <input
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
          className=""
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }
);

PasswordInput.displayName = "TextInput";

export default PasswordInput;
