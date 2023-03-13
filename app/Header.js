"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4 border-b-2">
      <Link href="/">
        <h2 className="text-sky-500">Podcaster</h2>
      </Link>
    </div>
  );
}
