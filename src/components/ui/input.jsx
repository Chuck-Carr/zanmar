export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-red-600 focus:ring-1 focus:ring-red-600 ${className}`}
      {...props}
    />
  );
}
