import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderKanban } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/motion/fade.up";

export function Projects() {
  const project = projects[0];

  return (
    <section
      id="projects"
      className="bg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
    >
      <FadeUp>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Selected work and practical case studies
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              I’m starting with one focused project case study. More full-stack
              and business workflow projects will be added as they are
              completed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
            <Card className="group overflow-hidden rounded-3xl border-slate-200 bg-slate-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.18),transparent_32%),linear-gradient(135deg,#020617,#0f172a)] p-4 sm:p-6">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <div className="ml-3 hidden rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 sm:block">
                        Incident Board Dashboard
                      </div>
                    </div>
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} dashboard screenshot`}
                      width={1400}
                      height={900}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <Badge className="rounded-full bg-sky-400/15 text-sky-200 hover:bg-sky-400/15">
                      {project.label}
                    </Badge>

                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                      <FolderKanban className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-3xl font-bold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/4 p-4"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full bg-white/10 text-slate-200 hover:bg-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                          <Button
                            variant="outline"
                            className="rounded-xl border-white/15 bg-white/5 text-white hover:bg-white/10"
                          >
                            <SiGithub className="mr-2 h-4 w-4" />
                            View Source Code
                          </Button>
                        </Link>
                      )}

                      {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank">
                          <Button className="rounded-xl">
                            Live Demo
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Problem
                      </p>
                      <p className="mt-3 leading-7 text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Solution
                      </p>
                      <p className="mt-3 leading-7 text-slate-300">
                        {project.solution}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        What I Built
                      </p>
                      <ul className="mt-3 space-y-2 text-slate-300">
                        {project.built.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                        Highlights
                      </p>
                      <ul className="mt-3 space-y-2 text-slate-300">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-dashed border-slate-300 bg-slate-50">
              <CardContent className="flex h-full min-h-72 flex-col justify-between p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Coming Soon
                  </p>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight">
                    More case studies are currently in development.
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Future projects will include AI-assisted tools, business
                    workflow systems, backend services, and full-stack
                    applications.
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  Discuss a project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
