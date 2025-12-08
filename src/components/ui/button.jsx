export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold text-white hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
