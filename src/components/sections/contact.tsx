import Link from "next/link";
import { profile } from "@/data/profile";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FadeUp } from "@/components/motion/fade.up";

export function Contact() {
  return (
    <section
      id="contact"
      className="mg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
    >
      <FadeUp>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something practical.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Looking for a developer who can build web applications, APIs,
            dashboards, or internal tools for real business use?
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
            Currently open to full-time opportunities, freelance work, and
            project-based collaboration.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={profile.links.email}>
              <Button size="lg" className="rounded-xl">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </Link>
            <Link href={profile.links.github} target="_blank">
              <Button size="lg" variant="outline" className="rounded-xl">
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link href={profile.links.linkedin} target="_blank">
              <Button size="lg" variant="outline" className="rounded-xl">
                <AiOutlineLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
            <Link href={profile.links.resume} target="_blank">
              <Button size="lg" variant="outline" className="rounded-xl">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
