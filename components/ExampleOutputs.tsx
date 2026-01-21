const examples = [
  {
    title: "Pretenzijos fragmentas",
    body: "Reikalauju grąžinti 250 € per 7 dienas nuo šio laiško gavimo. Priežastis – paslauga suteikta ne pagal sutartą apimtį..."
  },
  {
    title: "Sutarties punktas",
    body: "Šalys susitaria, kad atsiskaitymas vykdomas per 5 darbo dienas nuo sąskaitos gavimo, o vėlavimo atveju taikomi 0,02 % delspinigiai..."
  },
  {
    title: "Skolos priminimas",
    body: "Primename apie 980 € skolą už 2025-12-15 sąskaitą. Prašome apmokėti iki 2026-01-25, kad išvengtume papildomų veiksmų..."
  }
];

export default function ExampleOutputs() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Pavyzdžiai</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Kaip gali atrodyti rezultatas</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {examples.map((example) => (
          <div
            key={example.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-white">{example.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{example.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}