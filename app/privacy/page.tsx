import Link from "next/link";

export const metadata = {
  title: "Privatumo politika"
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-teal-200/80 hover:text-teal-200">
        ← Atgal į pagrindinį
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">Privatumo politika</h1>
      <p className="mt-4 text-base text-slate-300">
        Teisės draugas renka tik tiek informacijos, kiek pateikiate patys per Chatlio pokalbį.
        Žinutės keliauja į mūsų Slack kanalą ir naudojamos tik tekstų parengimui.
      </p>
      <p className="mt-4 text-base text-slate-300">
        Nesiųskite asmens kodo, kortelių duomenų ar sveikatos informacijos. Jei norite, galite
        prašyti ištrinti jūsų pokalbio istoriją.
      </p>
    </main>
  );
}