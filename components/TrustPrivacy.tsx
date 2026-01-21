import { Lock, ShieldAlert, UserCheck } from "lucide-react";

const points = [
  {
    title: "Nesiųsk jautrių duomenų",
    description: "Nesiųsk asmens kodo, kortelių duomenų ar sveikatos informacijos.",
    icon: ShieldAlert
  },
  {
    title: "AI padeda formuluoti",
    description: "Tai nėra advokato atstovavimas – tai tekstų struktūravimas.",
    icon: UserCheck
  },
  {
    title: "Konfidencialumas",
    description: "Žinutės keliauja tik į mūsų Slack kanalą per Chatlio.",
    icon: Lock
  }
];

export default function TrustPrivacy() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Pasitikėjimas</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skaidru ir atsakinga</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <div key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <point.icon className="h-6 w-6 text-teal-200" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}