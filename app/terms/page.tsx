import Link from "next/link";

export const metadata = {
  title: "Naudojimo sąlygos"
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-teal-200/80 hover:text-teal-200">
        ← Atgal į pagrindinį
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">Naudojimo sąlygos</h1>
      <p className="mt-4 text-base text-slate-300">
        Teisės draugas yra AI pagalbininkas, skirtas tekstų formuluotei ir situacijų
        struktūravimui. Tai nėra advokato paslauga ar teisinis atstovavimas.
      </p>
      <p className="mt-4 text-base text-slate-300">
        Naudodamiesi paslauga sutinkate, kad pateikta informacija gali būti naudojama atsakymui
        parengti. Jei reikia oficialios konsultacijos, rekomenduojame kreiptis į licencijuotą
        teisininką.
      </p>
    </main>
  );
}