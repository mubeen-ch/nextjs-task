"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ModeToggle } from './ThemeButton';
  


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
        <div className=" container flex items-center justify-between mx-auto ">
            <Link href={"/"}> 
            <div className="text-lg font-bold">Mubeen's Blogs</div>
            </Link>
            <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:text-gray-400">Menu</Link>
                <Link href="/" className="hover:text-gray-400">Blogs</Link>
                <Link href="/" className="hover:text-gray-400">About</Link>
                <Link href="/" className="hover:text-gray-400">Contact</Link>
            <div className='flex items-center gap-2'>
            <Button  variant="outline">Login</Button>
            <Button  variant="outline">Sign up</Button>
            <ModeToggle/>
            </div>
            </div>
            <div className="md:hidden">
            <Sheet>
            <SheetTrigger>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </SheetTrigger>
                <span className="mx-2">
            <ModeToggle/>
                </span>
                <SheetContent>
    <SheetHeader>
      <SheetTitle>Mubeen's Blog</SheetTitle>
      <SheetDescription className='flex flex-col items-center justify-around'>
      <Link href="/" className="hover:text-gray-400">Menu</Link>
                <Link href="/" className="hover:text-gray-400">Blogs</Link>
                <Link href="/" className="hover:text-gray-400">About</Link>
                <Link href="/" className="hover:text-gray-400">Contact</Link>
                <Button  variant="outline">Login</Button>
            <Button variant="outline">Sign up</Button>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
</div>
</nav>
    );
};

export default Navbar;
