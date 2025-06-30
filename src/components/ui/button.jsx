export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-block rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
