import React, { ChangeEvent } from "react";

type TextInputProps = {
  label?: string;
  type?: "number" | "password" | "text";
  classN?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ label, onChange, type, classN, name }: TextInputProps) {
  return (
    <label className="h-75">
      {}
      <input
        className={classN}
        onChange={onChange}
        placeholder={label}
        type={type}
        name={name}
      />
    </label>
  );
}

export default TextInput;
