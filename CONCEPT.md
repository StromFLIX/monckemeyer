# Konzept: Mönckemeyer SPA-Relaunch

## Leitidee
Eine **warme, charaktervolle One-Page-SPA**, die sofort sagt: *„Wir sind das Taschen- & Reise-Fachgeschäft in der Hamelner Altstadt – seit 1879."*
Nicht clean-langweilig, sondern erdig, handwerklich, mit einem Augenzwinkern Richtung Rattenfänger-Stadt und Fachwerk.

## Markenwelt
- **Tradition**: 5 Generationen, 1879, Familienbetrieb, mitten in der Altstadt
- **Hameln**: Fachwerk, Osterstraße, Rattenfänger-Mythos – als Atmosphäre, nicht als Klischee-Postkarte
- **Handwerk**: Leder, Genaht, gebauter Koffer
- **Persönlich**: kein Konzern, sondern Dennis & Team

## Farbpalette (Fachwerk + Rattenfänger + Leder)
| Token | Hex | Verwendung |
|---|---|---|
| `--fw-timber` | `#2a1a12` | Fachwerk-Balken, Headlines, Footer |
| `--fw-plaster` | `#f6ecd6` | Putz-Creme – Haupthintergrund warm |
| `--cognac` | `#a0522d` | Lederton, Buttons sekundär |
| `--rat-red` | `#b3252b` | Rattenfänger-Rot, Akzente, primärer CTA |
| `--rat-gold` | `#e8b923` | Rattenfänger-Gold, Highlights |
| `--brand-teal` | `#2aa39a` | Aus dem Original-Logo, Detail-Akzent |
| `--ink` | `#1a1208` | Text |

## Typografie
- Headlines: **Fraunces** (warm-serifig, leicht display) – passt zu Fachwerk-Holzschnitt-Feeling
- Body: **Inter** (klar, gut lesbar)
- Akzent / „Stempel": **Caveat** für handgeschriebene Notizen („seit 1879", „herzlich willkommen")

## Design-Prinzipien
1. **Hook in 1 Sekunde**: Hero zeigt Tasche/Koffer + Wortmarke + 3 klare CTAs (Shop / Besuch / Folgen)
2. **Lokalkolorit, nicht Kitsch**: Fachwerk-Balken als dezentes SVG-Pattern/Border, nicht als Wallpaper
3. **Klare Sektionen** statt endloses Scrollen ohne Struktur
4. **Story über Stock-Foto**: Familiengeschichte sichtbar machen
5. **Action immer in Sicht**: Sticky Header mit Shop-Button
6. **Echte Karte** (Leaflet + OpenStreetMap) statt nur Adresse
7. **Mobile first** – Laufkundschaft googelt vom Handy

## Seitenstruktur (One-Pager)
1. **Sticky Header** – Logo links, Nav-Anker mittig (Sortiment · Geschichte · Besuch · Kontakt), rechts roter „Online-Shop"-Button
2. **Hero** – Großer Schriftzug *„Taschen & Reise. Mitten in Hameln."*, Subline *„Fachgeschäft seit 1879"*, drei CTAs. Hintergrund: warmer Putz-Ton + dezente Fachwerk-Balken-Grafik
3. **Sortiment-Grid** – 6 Kacheln (Reisegepäck, Rucksäcke, Damentaschen, Herrentaschen, Business, Geldbörsen) – jede führt in den Shop
4. **Geschichte / Über uns** – Timeline 1879 → heute, mit Schriftrolle-Optik, persönlicher Ton
5. **Service-Streifen** – 4 Icons: Beratung · Reparatur · Gutscheine · Sonderbestellung
6. **Besuch uns** – Öffnungszeiten links, **OSM-Karte rechts** (Leaflet, Pin auf Osterstr. 7)
7. **Social** – Instagram/Facebook/YouTube-Karten mit klarem Call („Folgt uns")
8. **Footer** – Adresse, Telefon, E-Mail, Impressum/Datenschutz-Links, ©

## Tech
- **Vue 3** + **Vite**
- **Tailwind CSS** (mit Custom-Tokens für die Palette)
- **Leaflet** für OSM-Karte (kein API-Key nötig)
- Vue Router nicht nötig (One-Pager mit Anker), aber separate Impressum/Datenschutz-Routen wären trivial nachzurüsten
- Keine Backend-Dependencies
