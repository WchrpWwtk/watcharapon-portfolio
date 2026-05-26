import { skillGroups } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Tech Stack
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I use to build practical full-stack systems
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          A focused stack for frontend interfaces, backend APIs, database-driven
          systems, deployment workflows, and AI-assisted development.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card
            key={group.title}
            className="rounded-3xl border-white/10 bg-white/4 text-white shadow-none"
          >
            <CardContent className="p-7">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
