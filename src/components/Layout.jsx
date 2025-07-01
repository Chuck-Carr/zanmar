"use client";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar /> */}
      <main className="flex-grow p-6 max-w-6xl mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
