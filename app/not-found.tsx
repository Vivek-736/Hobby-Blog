import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[89vh] items-center justify-center bg-gradient-to-tr from-blue-100 to-emerald-100">
      <h1 className="text-6xl font-bold text-gray-800 animate-bounce">404</h1>
      <p className="text-2xl text-rose-400 mt-4">Oops! Page not found 😢</p>
      <p className="text-lg text-gray-500 mt-2">
        It looks like the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-6 hover:bg-gray-900">
        <Link href="/" >
          <Button className="cursor-pointer text-black" variant={"outline"}>Go back home 🏠</Button>
        </Link>
      </div>
    </div>
  );
}