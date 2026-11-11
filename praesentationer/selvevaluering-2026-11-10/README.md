# Selvevaluering - status og hjælpeværktøjer

Reveal.js-præsentation til OS2s produktkoordinatorer. Status pr. 10. november 2026.

Åbn: https://audit.os2.eu/praesentationer/selvevaluering-2026-11-10/

13 slides med talernoter og en samlet tidsplan på 15 minutter. Tallene og procesbeslutningerne stammer fra Rasmus Freys oplægsgrundlag. Eksemplet på et svar og AI-prompten er forslag til arbejdsmetode, ikke vedtagne nye krav.

- Piletaster eller mellemrum: næste slide.
- S: præsentationsvisning med noter og ur. Tillad popupvinduet.
- Esc: slideoversigt. F: fuld skærm. B: sort skærm.
- Tilføj `?print-pdf` til præsentationens URL for PDF-udskrift i browseren.
- Talernoterne findes også i [manuskript.md](manuskript.md).

Lokalt: kør `python3 -m http.server 8000` i denne mappe, og åbn http://localhost:8000. Reveal.js 5.2.1 hentes fra jsDelivr og kræver internetadgang. Der er ingen byggetrin. På audit.os2.eu kopierer den eksisterende Jekyll-udgivelse HTML-filen direkte uden temalayout.

## Sådan redigerer du

| Fil | Indhold |
| --- | --- |
| `index.html` | Alle 13 slides og deres talernoter. Her redigerer du teksten. |
| `styles.css` | Farver, skrifttyper og layout. |
| `presentation.js` | Reveal.js-indstillinger og knappen til at kopiere AI-prompten. |
| `assets/` | OS2-logo, ON-element og Open Sans-skrifttyper med licens. |
| `manuskript.md` | Separat manuskript med tidsplan. |

1. Åbn `index.html` i en teksteditor eller brug blyanten på GitHub.
2. Søg efter fx `SLIDE 5`. Hvert slide begynder med en kommentar med nummer og overskrift.
3. Redigér overskrifter i `<h1>` og `<h2>`, tekst i `<p>` og punkter i `<li>`.
4. Talernoterne står under `TALERNOTER` i samme slide. `data-timing` angiver tiden i sekunder.
5. Gem ændringen. På GitHub starter en ændring på `main` automatisk udgivelsen til audit.os2.eu.

Når du kun ændrer tekst, behold HTML-tags, `id`, `class`, links og filhenvisninger. Behold især `id="ai-prompt"`, `id="copy-prompt"` og `id="copy-status"`, så kopiknappen fortsat virker.

Opdatér også `manuskript.md`, hvis du ændrer talernoter. Manuskriptet synkroniseres ikke automatisk. Når du flytter præsentationen, skal `index.html`, `styles.css`, `presentation.js` og hele `assets/`-mappen følges ad.

Talernoterne er en del af den offentlige kildekode. De indeholder ingen produktvurderinger eller nye produktniveauer.
