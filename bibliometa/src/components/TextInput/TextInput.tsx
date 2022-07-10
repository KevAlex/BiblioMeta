import React, { ChangeEvent } from "react";

export type TextInputProps = {
  label?: string;
  type?: "number" | "password" | "text";
  classN?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ label, onChange, type, classN }: TextInputProps) {
  return (
    <label>
      {}
      <input
        className={classN}
        onChange={onChange}
        placeholder={label}
        type={type}
      />
    </label>
  );
}

export default TextInput;
