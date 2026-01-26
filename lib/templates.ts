export type TemplateKey =
  | "pretenzija"
  | "atsakymas"
  | "sutartis"
  | "ivertinimas"
  | "skola"
  | "priminsimas"
  | "nutraukimas"
  | "sutikimas"
  | "reikalavimas";

export const templateLabels: Record<TemplateKey, string> = {
  pretenzija: "Pretenzija",
  atsakymas: "Atsakymas į pretenziją",
  sutartis: "Sutarties juodraštis",
  ivertinimas: "Situacijos įvertinimas",
  skola: "Skolos priminimas",
  priminsimas: "Antras priminimas",
  nutraukimas: "Sutarties nutraukimas",
  sutikimas: "Sutikimas / patvirtinimas",
  reikalavimas: "Reikalavimas atlyginti žalą"
};

const templates: Record<TemplateKey, string> = {
  pretenzija: `[TD:PRETENZIJA]
Kas jūs esate? (fizinis/juridinis, vardas/pavadinimas)
Kam skirta? (atsakovas: vardas/pavadinimas, jei žinoma)
Situacijos santrauka (3–7 sakiniai)
Data/terminai (kada įvyko, kada susitarta)
Suma (€) ir ko reikalaujate
Įrodymai (kokius turite: chat, sutartis, pavedimas, nuotraukos)
Ko norite kaip rezultato (grąžinti pinigus, pakeisti prekę, atlyginti žalą ir pan.)
Terminas atsakymui (pvz., 7/14 dienų)`,
  atsakymas: `[TD:ATSAKYMAS]
Kam atsakote? (pretenzijos data / numeris)
Kas jūs esate? (fizinis/juridinis, vardas/pavadinimas)
Situacijos santrauka (3–7 sakiniai)
Jūsų pozicija (sutinkate / dalinai / nesutinkate)
Argumentai ir faktai
Siūlomas sprendimas
Terminas atsakymui / susitarimui`,
  sutartis: `[TD:SUTARTIS]
Sutarties tipas (nuoma / paslaugos / pirkimas-pardavimas / kita)
Šalys (vardai/pavadinimai)
Objektas / paslaugos apimtis
Kaina / atsiskaitymo tvarka
Terminai (pradžia/pabaiga)
Atsakomybė / garantijos
Nutraukimas
Kita (konfidencialumas, ginčai, kt.)`,
  ivertinimas: `[TD:IVERTINIMAS]
Kas nutiko? (5–10 sakinių)
Kokia problema šiandien?
Ko bijote / kas svarbiausia?
Kokie dokumentai/įrodymai?
Koks norimas sprendimas?`,
  skola: `[TD:SKOLA]
Skolininkas
Skolos suma
Skolos pagrindas (sąskaita, sutartis, žodinis susitarimas)
Terminas iki kada turėjo sumokėti
Ar jau priminta? (taip/ne)
Koks tonas? (neutralus / griežtesnis)`,
  priminsimas: `[TD:PRIMINIMAS]
Kam primenama? (vardas/pavadinimas)
Skolos suma / įsipareigojimas
Pagrindas (sąskaita, sutartis, susitarimas)
Terminas iki kada turėjo būti įvykdyta
Koks tonas? (neutralus / griežtesnis)
Ką siūlote kaip sprendimą`,
  nutraukimas: `[TD:NUTRAUKIMAS]
Sutarties tipas
Šalys
Nutraukimo pagrindas
Svarbios datos / terminai
Ką siūlote (nutraukimo data, atsiskaitymas)
Papildomos sąlygos`,
  sutikimas: `[TD:SUTIKIMAS]
Kokiam veiksmui reikia sutikimo?
Šalys
Svarbios sąlygos
Terminas / galiojimas
Papildoma informacija`,
  reikalavimas: `[TD:REIKALAVIMAS]
Kas nutiko? (situacijos santrauka)
Žalos suma / pobūdis
Pagrindas (sutartis, teisės aktas)
Įrodymai
Ką reikalaujate
Terminas atsakymui`
};

const sessionKey = "td_session_id";

export function buildTemplate(key: TemplateKey, path: string) {
  const base = templates[key];
  const ts = new Date().toISOString();
  const sid = getOrCreateSessionId();
  const footer = `— meta: path=${path}, ts=${ts}, sid=${sid}`;
  return `${base}\n${footer}`;
}

function getOrCreateSessionId() {
  if (typeof window === "undefined") {
    return "server";
  }

  const existing = window.localStorage.getItem(sessionKey);
  if (existing) {
    return existing;
  }

  const sid =
    typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `sid-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;

  window.localStorage.setItem(sessionKey, sid);
  return sid;
}