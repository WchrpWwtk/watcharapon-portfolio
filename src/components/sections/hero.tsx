import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <MapPin className="h-4 w-4 text-sky-400" />
            {profile.role.en} · {profile.location.en}
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            {profile.name}
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.headline.en}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.summary.en}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.featuredSkills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"></div>
        </div>
      </div>
    </section>
  );
}
