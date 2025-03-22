"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  return (
    <nav className="shadow-lg dark:shadow-md bg-background/50 sticky top-0 backdrop-blur-2xl dark:shadow-white">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold transition duration-300">
            <Link href="/">
              <p className="flex items-center">VivekBlog</p>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <p className="transition duration-300 hover:text-gray-600">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="transition duration-300 hover:text-gray-600">
                About
              </p>
            </Link>
            <Link href="/blog">
              <p className="transition duration-300 hover:text-gray-600">
                Blog
              </p>
            </Link>
            <div>
              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden flex gap-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger aria-label="Open menu">
                <Menu className="h-6 w-6 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white dark:bg-slate-800">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">
                    VivekBlog
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex mt-5 flex-col justify-center items-center space-y-4">
                    <Link href="/" className="text-lg hover:text-gray-600">
                      Home
                    </Link>
                    <Link href="/about" className="text-lg hover:text-gray-600">
                      About
                    </Link>
                    <Link href="/blog" className="text-lg hover:text-gray-600">
                      Blog
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
