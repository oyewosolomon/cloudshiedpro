import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import React from "react";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
        <svg 
          fill="#000000" 
          width="64px" 
          height="64px" 
          viewBox="0 0 24 24" 
          id="cloud-check" 
          data-name="Flat Color" 
          xmlns="http://www.w3.org/2000/svg" 
          className="icon flat-color"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path 
              id="primary" 
              d="M18.68,10.06a6,6,0,0,0-11.41.15A3.85,3.85,0,0,0,6,10a4,4,0,0,0,0,8H18a4,4,0,0,0,.68-7.94Z" 
              style={{ fill: '#ffffff' }}
            ></path>
            <path 
              id="secondary" 
              d="M15,14a1,1,0,0,1-.71-.29l-2-2a1,1,0,0,1,1.42-1.42L15,11.59l4.29-4.3a1,1,0,1,1,1.42,1.42l-5,5A1,1,0,0,1,15,14Z" 
              style={{ fill: '#2ca9bc' }}
            ></path>
          </g>
        </svg>
            CyberShield
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full mt-4">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
