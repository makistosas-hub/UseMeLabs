import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Teisės draugas</p>
          <p className="mt-2 text-sm text-slate-400">
            AI legal-tech pagalbininkas kasdienėms situacijoms.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          <Link href="/privacy" className="transition hover:text-white">
            Privatumo politika
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Naudojimo sąlygos
          </Link>
          <Link href="#chat-panel" className="transition hover:text-white">
            Pradėti pokalbį
          </Link>
        </div>
      </div>
    </footer>
  );
}