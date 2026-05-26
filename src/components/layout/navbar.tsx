import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-white">
          {profile.shortName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={profile.links.github}
            target="_blank"
            aria-label="Visit GitHub profile"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub Profile">
              <SiGithub className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href={profile.links.linkedin}
            target="_blank"
            aria-label="Visit LinkedIn profile"
          >
            <Button variant="ghost" size="icon">
              <AiOutlineLinkedin
                className="h-4 w-4"
                aria-label="LinkedIn Profile"
              />
            </Button>
          </Link>
          <Link href={profile.links.resume} target="_blank">
            <Button className="hidden rounded-xl sm:inline-flex">Resume</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
