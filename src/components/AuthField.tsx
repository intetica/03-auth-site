import type { ChangeEvent, FocusEvent } from "react";

type AuthFieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password";
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function AuthField({
  id,
  name,
  label,
  type,
  autoComplete,
  required,
  value,
  onChange,
  onBlur,
  error,
}: AuthFieldProps) {
  const hasValue = value !== undefined;
  const readOnly = hasValue && !onChange;
  const base =
    "w-full rounded-full border bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2";
  const state = error
    ? "border-red-500 focus:border-red-600 focus:ring-red-600"
    : "border-gray-300 focus:border-blue-600 focus:ring-blue-600";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
        className={`${base} ${state}`}
      />
      {error ? (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      ) : null}
    </div>
  );
}
