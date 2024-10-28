"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/components/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/store");
    }, 10000);
  }, []);

  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center ">
      <h1 className="text-4xl">404</h1>
      <p>Unfortunatly, we couldn&apos;t find the page you were looking for.</p>
      <button className="bg-gray-900 text-white p-2 rounded-md">
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
