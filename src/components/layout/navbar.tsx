"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { AiOutlineLinkedin } from "react-icons/ai";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Tech Stack",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight text-white transition hover:text-sky-300"
        >
          Watcharapon
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={profile.links.github}
            target="_blank"
            aria-label="Visit GitHub profile"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub profile">
              <SiGithub className="h-4 w-4" />
            </Button>
          </Link>

          <Link
            href={profile.links.linkedin}
            target="_blank"
            aria-label="Visit LinkedIn profile"
          >
            <Button variant="ghost" size="icon" aria-label="LinkedIn profile">
              <AiOutlineLinkedin className="h-4 w-4" />
            </Button>
          </Link>

          <Link href={profile.links.resume} target="_blank">
            <Button className="rounded-xl">Resume</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 border-l border-white/10 bg-slate-950 p-0 text-white [&>button]:right-4 [&>button]:top-4 [&>button]:rounded-xl [&>button]:border [&>button]:border-white/10 [&>button]:bg-white/5 [&>button]:p-2 [&>button]:text-slate-300 [&>button]:opacity-100 [&>button]:hover:bg-white/10 [&>button]:hover:text-white"
            >
              <div className="flex h-full flex-col">
                <div className="border-b border-white/10 px-6 py-5">
                  <p className="text-sm font-semibold tracking-tight text-white">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t border-white/10 px-4 py-5">
                  <div className="grid gap-2">
                    <Link
                      href={profile.links.resume}
                      target="_blank"
                      className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                      Download Resume
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={profile.links.github}
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        <SiGithub className="h-4 w-4" />
                        GitHub
                      </Link>
                      <Link
                        href={profile.links.linkedin}
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        <AiOutlineLinkedin className="h-4 w-4" />
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
