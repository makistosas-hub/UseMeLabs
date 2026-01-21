import { MessageSquare, Wand2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Parašyk situaciją chate",
    description: "Pasidalink kontekstu ir esminiais faktais. Jokios registracijos.",
    icon: MessageSquare
  },
  {
    title: "AI suformuoja tekstą",
    description: "Gauni pretenzijos, sutarties ar aiškaus laiško juodraštį.",
    icon: Wand2
  },
  {
    title: "Patikslini ir panaudoji",
    description: "Papildai detales ir išsiunti, kai tau tinka.",
    icon: CheckCircle2
  }
];

export default function HowItWorks() {
  return (
    <section id="kaip-veikia" className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Kaip tai veikia</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Trijų žingsnių procesas
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <step.icon className="h-6 w-6 text-teal-200" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}