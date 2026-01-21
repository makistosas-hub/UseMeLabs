const faqs = [
  {
    question: "Ar tai advokatas?",
    answer:
      "Ne. Tai AI pagalbininkas, kuris padeda suformuluoti tekstą, bet neatstovauja teisme ir nepakeičia advokato."
  },
  {
    question: "Kiek kainuoja?",
    answer:
      "MVP etape kainos derinamos individualiai. Parašyk chate ir suteiksime pasiūlymą."
  },
  {
    question: "Ar tinka Vinted/nuomai?",
    answer:
      "Taip. Įrankis skirtas kasdienėms teisinėms situacijoms ir mažoms sumoms iki ~5000 €."
  },
  {
    question: "Ar galiu įkelti dokumentą?",
    answer: "MVP etape – per chatą. Ateityje planuojame patogų dokumentų įkėlimą."
  },
  {
    question: "Kaip greitai gausiu tekstą?",
    answer: "Dažniausiai per kelias minutes. Jei reikia patikslinimų, paklausime chate."
  },
  {
    question: "Ką daryti, jei kita pusė neatsako?",
    answer:
      "Gali paprašyti antro priminimo ar griežtesnės pretenzijos. Padėsime parinkti toną."
  }
];

export default function FAQ() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">DUK</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Dažniausi klausimai</h2>
      </div>
      <div className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-white outline-none transition group-open:text-teal-200">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}