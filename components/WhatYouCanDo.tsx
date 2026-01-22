import { FileText, Scale, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    title: "Pretenzijos ir reikalavimai",
    description: "Greitai paruošk struktūruotą pretenziją su aiškiais terminais.",
    icon: FileText
  },
  {
    title: "Sutarčių juodraščiai",
    description: "Nuoma, paslaugos, pirkimas-pardavimas – su aiškiomis sąlygomis.",
    icon: Scale
  },
  {
    title: "Rizikos įvertinimas",
    description: "Gauk aiškų veiksmų planą be perteklinio teisinio žargono.",
    icon: Sparkles
  },
  {
    title: "Konfidencialu",
    description: "Rašyk drąsiai – be viešinimo, tik tau ir tavo situacijai.",
    icon: ShieldCheck
  }
];

export default function WhatYouCanDo() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Ką gali padaryti</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Realūs praktiniai darbai</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-200/10">
              <item.icon className="h-5 w-5 text-teal-200" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}