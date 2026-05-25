import { Bot, Cloud, Code2, LayoutDashboard, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Code2,
    title: "Full-stack web applications",
    description:
      "Frontend, backend, database, and deployment-ready structure for practical web applications.",
    skills: "React · Next.js · Django · FastAPI · Node.js · PostgreSQL",
  },
  {
    icon: LayoutDashboard,
    title: "Business dashboards & internal tools",
    description:
      "Admin panels, support tools, reporting pages, and workflow systems for business operations.",
    skills: "Forms · Tables · Filters · API Integration · Role-based flows",
  },
  {
    icon: Server,
    title: "Backend APIs",
    description:
      "REST APIs and backend services that connect business logic, database models, and frontend clients.",
    skills: "Django REST · FastAPI · Node.js · NestJS · API Design",
  },
  {
    icon: Cloud,
    title: "Deployment & monitoring setup",
    description:
      "Project setup for deployment environments with logs, environment variables, monitoring, and alerting workflows.",
    skills: "Docker · GitHub · Render · Gunicorn · Sentry",
  },
  {
    icon: Bot,
    title: "AI-assisted development workflow",
    description:
      "Using AI tools carefully to plan features, debug issues, review code, and improve development speed.",
    skills: "ChatGPT · Codex · Claude · Code review",
  },
];

export function Capabilities() {
  return (
    <section className="bg-slate-50 px-4 py-24 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Practical full-stack development for business systems, internal
            tools, backend APIs, and deployment-ready web applications.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {item.skills}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
