import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 text-slate-500 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          {profile.role.en} · {profile.location.en}
        </p>
      </div>
    </footer>
  );
}
