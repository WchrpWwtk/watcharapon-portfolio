import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-slate-300">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button className="mt-8 rounded-xl">Back to home</Button>
        </Link>
      </div>
    </main>
  );
}
