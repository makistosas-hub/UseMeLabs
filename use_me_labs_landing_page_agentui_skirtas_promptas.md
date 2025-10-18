# Tikslas
Sukurk modernią, greitą ir konvertuojančią **UseMe Labs** (AI / Business Process Automation) „landing page“ svetainę, su stipriais gradientais, subtilia judesio grafika ir aiškiais konversijos keliais. Naudok pateiktą logotipą: **`/assets/logo/usemelabs-logo.png`** (jei reikia, sukurk kelias versijas: tamsi/šviesi/SVG).

---
## Technologijos
- **Next.js 15 (App Router)** + **React 19**
- **Tailwind CSS** + CSS Variables (temų sistema)
- **Framer Motion** animacijoms (gerbti `prefers-reduced-motion`)
- **shadcn/ui** komponentai, **lucide-react** ikonoms
- **Lottie** (nebūtina) ar CSS keyframes lengvoms, vektorinėms animacijoms
- Diegimas į **Vercel** (paruoštas `vercel.json`)

> Alternatyva: statinis **HTML + Tailwind** buildas be Next – bet pirmiausia daryk Next.js.

---
## Dizaino kryptis
- **Gradient Mesh** fonai (tamsiai žalios → smaragdo → turkio atspalviai) + subtilūs **circuit-board**/„neuro“ motyvai (SVG linijos su švytinčiais taškais)
- **3D parallax/tilt** efektas hero zonoje (logo + bonsai vizualas)
- **Mikrointerakcijos**: hover/paslinkimo animacijos, „ink“ mygtukų efektas
- **Apvalūs kampai (2xl)**, **soft shadows**, stiklo („glassmorphism“) kortelės
- Tipografija: **Inter** (kūnui) + **Montserrat** (antraštėms)
- **Šviesi/Tamsi** temos, automatinė pagal sistemą + rankinis jungiklis

### Spalvų paletė (kintamieji)
```
--uml-bg: #0E1E17;
--uml-surface: #12251D;
--uml-primary: #10B981;   /* emerald */
--uml-secondary: #34D399; /* mint */
--uml-accent: #7C3AED;    /* violet accent */
--uml-text: #E7F6EF;
```

---
## Struktūra / Sekcijos
1. **Hero**
   - Headline LT/EN (toggle):
     - LT: „Automatizuokite procesus. Didinkite pelningumą.“
     - EN: „Automate your processes. Unlock profitable growth.“
   - Sub-head: „Nuo Power Platform iki n8n ir AI agentų – diegiame pabaiga‑į‑pabaigą automatizaciją.“
   - CTA: **„Gauti nemokamą auditą“** + **„Peržiūrėti sprendimus“**
   - Fonas: gradient mesh + lėti judantys SVG „circuit“ keliai.

2. **Value props (3–4 kortelės)**
   - Pvz.: „Greitas ROI“, „Skaidrumas ir atsekamumas“, „Saugumas (M365)“, „Be vendor lock-in“.

3. **Ką automatizuojame** (grid)
   - Intakto valdymas (forms → SharePoint/Dataverse)
   - Patvirtinimai ir SLA
   - Dokumentų generavimas ir parašai
   - Pranešimai (Teams/Email/SMS)
   - Duomenų sinchronizacija (API/ETL)

4. **Integracijos** (logotipų juosta su tooltipais)
   - Microsoft 365 (SharePoint, Teams, **Power Automate/Apps/BI**, Planner, Dynamics 365)
   - **n8n**, **Make**, **Zapier**, **Pipedrive**, **HubSpot**, **Paysera**, **Resend**

5. **Procesas (4 žingsniai)**
   - 1) Greitas auditas → 2) MVP → 3) Diegimas → 4) Metrikos ir iteracijos

6. **Case study / KPI mock**
   - Viena kortelė su grafiku (fake duomenys) ir pasiektu % laiko sutaupymu.

7. **Atsiliepimai** (carousel)

8. **Kainodara** (3 planai, „Nuo…“ + mygtukas „Paprašyti pasiūlymo“)

9. **FAQ** (accordion)

10. **CTA juosta**

11. **Kontaktų forma**
   - Vardas, el. paštas, įmonė, trumpas aprašymas, checkbox „Noriu nemokamo audito“
   - Integracija per **Resend** arba **Web3Forms**; `POST` endpoint konfigūruojamas `.env`

12. **Footer**
   - Navigacija, socialiniai, **Privacy/Terms**, įmonės rekvizitai, **cookie consent**.

---
## I18N
- LT ir EN lokalės (`/lt`, `/en`) su paprastu JSON žodynu.
- Kalbos jungiklis header’yje.

---
## SEO ir našumas
- Meta tagai + **OpenGraph/Twitter** kortelės (įkelk hero vizualo OG, 1200×630)
- `robots.txt`, `sitemap.xml` (Next.js route handlers)
- Lighthouse ≥ **95** visose kategorijose
- Pritaikymas prieinamumui (aria, kontrastas, focus states)

---
## Animacijos
- `Framer Motion`:
  - Hero foninių SVG kelių **marquee / drift** judesys (CPU‑draugiškas)
  - „on‑scroll“ kortelių fade‑up + parallax
  - „Particles“ sluoksnis (canvas arba švarūs SVG taškai)
- Visi efektai **išjungiami** pagal `prefers-reduced-motion`.

---
## Failų struktūra (santrauka)
```
src/
  app/(lt|en)/page.tsx
  components/
    Header.tsx
    Hero.tsx
    ValueProps.tsx
    Integrations.tsx
    Process.tsx
    CaseStudy.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    CTA.tsx
    ContactForm.tsx
    Footer.tsx
  lib/i18n.ts
  styles/globals.css
  assets/logo/usemelabs-logo.png
```

---
## Sekcijų turinys (LT / EN)

### 1) Hero
**LT**  
**Antraštė:** Automatizuokite procesus. Didinkite pelningumą.  
**Paantraštė:** Diegiame Power Platform, n8n ir AI agentus, kad darbai vyktų be rankų darbo.  
**Trumpas paaiškinimas:** Nuo idėjos iki veikiančio MVP per kelias savaites. Skaidriai, su audit trail ir KPI.  
**CTA pirminis:** Gauti nemokamą auditą  
**CTA antrinis:** Peržiūrėti sprendimus

**EN**  
**Headline:** Automate your processes. Unlock profitable growth.  
**Sub‑headline:** We deploy Power Platform, n8n, and AI agents so work runs without manual effort.  
**Support line:** From idea to working MVP in weeks—transparent, auditable, KPI‑driven.  
**Primary CTA:** Get a free audit  
**Secondary CTA:** Explore solutions

---
### 2) Vertės pasiūlymai (Value Props)
**LT**  
- **Greitas ROI:** Sutaupome iki 30–60% laiko pasikartojantiems veiksmams.  
- **Skaidrumas:** Visos užduotys ir sprendimai turi atsekamą istoriją ir SLA.  
- **Saugumas:** M365 ekosistema, vaidmenų teisės, DLP ir „least privilege“.  
- **Be lock‑in:** Atviri API ir duomenys priklauso jums.

**EN**  
- **Fast ROI:** Save 30–60% of time on repetitive work.  
- **Transparency:** Full audit trail and SLA tracking.  
- **Security:** M365-grade security, role‑based access, DLP, least privilege.  
- **No lock‑in:** Open APIs and your data stays yours.

---
### 3) Ką automatizuojame
**LT**  
- **Intakto valdymas:** Formos → SharePoint/Dataverse; automatiniai ID, ataskaitos.  
- **Patvirtinimai ir SLA:** Daugiapakopiai srautai, terminų priminimai, eskalacijos.  
- **Dokumentai ir parašai:** PDF/Word generavimas, e‑parašai, šablonai.  
- **Pranešimai:** Teams / el. paštas / SMS; išmanios taisyklės ir siuntimo langai.  
- **Duomenų sinchronizacija:** API/ETL tarp CRM, ERP, sandėlio, finansų.  
- **AI agentai:** Informacijos išgavimas, santraukos, automatiniai atsakymai klientams.

**EN**  
- **Intake management:** Forms → SharePoint/Dataverse; IDs & reports.  
- **Approvals & SLAs:** Multi‑step flows, reminders, escalations.  
- **Docs & e‑sign:** PDF/Word generation, electronic signatures, templates.  
- **Notifications:** Teams / email / SMS with smart rules and quiet hours.  
- **Data sync:** API/ETL across CRM, ERP, warehouse, finance.  
- **AI agents:** Retrieval, summaries, automated customer replies.

---
### 4) Integracijos (tooltip tekstai)
**LT**  
- **Microsoft 365:** SharePoint, Teams, Power Automate/Apps/BI, Planner, Dynamics 365.  
- **n8n / Make / Zapier:** Lankstūs jungimai ir greiti MVP.  
- **Pipedrive / HubSpot:** Pardavimų piltuvai, veiksmų automatika.  
- **Paysera:** Mokėjimai ir donacijos su ataskaitomis.  
- **Resend:** Patikimas el. pašto siuntimas su sekimu.

**EN**  
- **Microsoft 365:** SharePoint, Teams, Power Automate/Apps/BI, Planner, Dynamics 365.  
- **n8n / Make / Zapier:** Flexible connectors for rapid MVPs.  
- **Pipedrive / HubSpot:** Sales funnels and action automation.  
- **Paysera:** Payments & donations with reporting.  
- **Resend:** Reliable transactional email with tracking.

---
### 5) Procesas (4 žingsniai)
**LT**  
1. **Greitas auditas:** Įvardijame 3–5 aukščiausio poveikio scenarijus.  
2. **MVP:** Per 1–3 savaites parodome veikiančius srautus ir KPI.  
3. **Diegimas:** Saugos patikra, teisių modelis, dokumentacija, mokymai.  
4. **Metrikos ir iteracijos:** Stebime, optimizuojame, plečiame.

**EN**  
1. **Quick audit:** Identify 3–5 highest‑impact scenarios.  
2. **MVP:** Working flows and KPIs in 1–3 weeks.  
3. **Rollout:** Security review, RBAC, docs, training.  
4. **Metrics & iteration:** Monitor, optimize, scale.

---
### 6) Case study / KPI
**LT**  
„Paraiškų vertinimo srautas“: 48% trumpesnis ciklo laikas, 0 prarastų užduočių, 100% audito atsekamumas. Grafike – savaitinis apdorotų įrašų skaičius ir SLA laikymasis.

**EN**  
"Application review flow": 48% shorter cycle time, 0 lost tasks, 100% auditability. Chart shows weekly processed items and SLA adherence.

---
### 7) Atsiliepimai
**LT**  
„Per mėnesį sutaupėme ~200 val. rankinio darbo. Komanda greitai išgrynino MVP ir paruošė dokumentaciją.“

**EN**  
“Saved ~200 hours of manual work in the first month. The team delivered a clear MVP with solid documentation.”

---
### 8) Kainodara
**LT**  
- **Starter:** Audit + MVP idėja, nuo €0 su nemokamu auditu.  
- **Growth:** 1–3 srautai, integracijos, mokymai. Kaina pagal apimtį.  
- **Scale:** Didesnės apimtys, SLA, palaikymas, roadmap.

**EN**  
- **Starter:** Audit + MVP concept, from €0 with a free audit.  
- **Growth:** 1–3 flows, integrations, training. Priced by scope.  
- **Scale:** Larger programs, SLAs, support, roadmap.

---
### 9) DUK (FAQ)
**LT**  
- **Per kiek laiko matysime vertę?** Dažniausiai – per 2–4 savaites nuo MVP.  
- **Ar galime pradėti be IT komandos?** Taip, su minimaliu įsitraukimu; vėliau perduodame valdymą.  
- **Kas su saugumu ir duomenimis?** Naudojame M365/role‑based modelį ir laikomės GDPR.

**EN**  
- **When will we see value?** Typically within 2–4 weeks after the MVP.  
- **Can we start without an IT team?** Yes; minimal involvement to start, then hand‑off.  
- **Security & data?** M365/role‑based controls, GDPR‑compliant.

---
### 10) CTA juosta
**LT:** Paruošti auditą jūsų procesams? – **Užsisakyti nemokamą auditą**.  
**EN:** Ready for a process audit? – **Get a free audit**.

---
### 11) Kontaktų forma – pagalbiniai tekstai
**LT:** „Trumpai aprašykite esamą procesą ir kur šiuo metu stringa.“  
**EN:** “Briefly describe the current process and where bottlenecks occur.”

---
### 12) Poraštė
**LT:** „UseMe Labs – AI ir verslo procesų automatizavimas. Duomenys priklauso jums.“  
**EN:** “UseMe Labs – AI & Business Process Automation. Your data stays yours.”

---
## Formos/duomenys
- Kontaktui: naudok **React Hook Form** + **zod** validaciją
- Siuntimas: **API Route** `/api/contact`; el. paštas per **Resend**
- **reCAPTCHA** v3 (kintamieji `.env`), „honeypot“ spamas filtrui

---
## Teisiniai/GDPR
- Cookie consent (funkciniai/analitika/marketingas)
- Privacy Policy ir Terms (MD failai su paprastu turiniu)

---
## Diegimas
- `README.md` su setup žingsniais, `.env.example`
- Vercel 1‑click deploy, arba `npm run build && npm run start`

---
## Priėmimo kriterijai
- Pikselių tikslumo UI pagal aukščiau aprašytą stilistiką
- 2 kalbos, veikiančios formos, SEO artefaktai, cookie consent
- Lighthouse ≥95 (Performance, Accessibility, Best Practices, SEO)
- Hero judesys sklandus, be FPS drop’ų mobiliuose

---
## Papildoma (jei spėsi)
- PWA manifestas + icons
- „Blog insights“ skyrius su 3 straipsnių placeholderiais (MDX)

---
### Pastaba dėl logotipo
Logotipo failas yra adresu **`/assets/logo/usemelabs-logo.png`**. Jei reikia, sukurk SVG versiją remdamasis pateikta PNG (autotrace + rankinis pataisymas), išsaugok **`/assets/logo/usemelabs-logo.svg`** ir naudok vektorinę versiją hero zonoje.

