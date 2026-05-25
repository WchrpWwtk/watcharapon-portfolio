export function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            I build practical software that connects frontend, backend, and
            business needs.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I work across the full web application stack - from React and
            Next.js interfaces to Django, FastAPI, Node.js, NestJS, PostgreSQL,
            Docker, and deployment workflows.
          </p>
          <p>
            My focus is not only making screens look good, but making the system
            useful: clear data flow, understandable APIs, maintainable
            structure, and deployment-ready setup.
          </p>
          <p className="text-base leading-7 text-slate-500">
            เน้นสร้าง Software ที่ใช้งานได้จริงในธุรกิจตั้งแต่ Frontend, Backend, Database
            ไปจนถึงการเตรียมระบบให้พร้อมสำหรับ deployment
          </p>
        </div>
      </div>
    </section>
  );
}
