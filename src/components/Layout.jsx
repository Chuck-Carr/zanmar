"use client";

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="p-6 max-w-6xl mx-auto">{children}</main>
    </>
  );
}
