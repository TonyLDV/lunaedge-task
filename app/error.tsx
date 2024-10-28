"use client";

import Link from "next/link";
import React from "react";
const Error = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>Something went wrong</p>
      <button className="bg-gray-900 text-white p-2 rounded-md">
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
};

export default Error;
