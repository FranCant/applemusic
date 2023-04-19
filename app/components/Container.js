"use client";
import Header from "../Header";

export default function Container({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
