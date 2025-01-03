import React, { forwardRef } from "react";

type TextInputProps = Readonly<{
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}>;

// Forward the ref to the input element
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...props }, ref) => {
    const { type, placeholder, name, required } = props;
    return (
      <input
        {...props}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
