type AuthFieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password";
  autoComplete?: string;
  required?: boolean;
};

export default function AuthField({
  id,
  name,
  label,
  type,
  autoComplete,
  required,
}: AuthFieldProps) {
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
        className="w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}
