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

Vedligehold: redigér `index.html`. Hvert `<section>` er et slide. `<aside class="notes">` rummer talernoterne, og `data-timing` angiver sekunder. Opdatér også manuskriptet ved indholdsændringer.

Talernoterne er en del af den offentlige kildekode. De indeholder ingen produktvurderinger eller nye produktniveauer.
