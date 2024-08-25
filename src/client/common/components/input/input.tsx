import React from "react";

import "./input.css";

type HTMLInputProps = React.ComponentProps<"input">;

function Input({
  label,
  id,
  placeholder,
  type = "text",
  minLength,
  autoComplete,
  onChange,
  value,
}: {
  label: string;
  id?: HTMLInputProps["id"];
  placeholder?: HTMLInputProps["placeholder"];
  type?: HTMLInputProps["type"];
  minLength?: HTMLInputProps["minLength"];
  autoComplete?: HTMLInputProps["autoComplete"];
  onChange?: HTMLInputProps["onChange"];
  value?: HTMLInputProps["value"];
}) {
  return (
    <div className="input">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        value={value}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
