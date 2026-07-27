---
title: OS2-SkadesØkonomi governancerapport
layout: default
parent: Selvevalueringer
nav_exclude: true
---

# Governancerapport for OS2-SkadesØkonomi

> **📄 Dokumentinformation**<br/>
> **Version for anvendt governancerapport:** 1.1.0<br/>
> **Dato for udfyldelse:** 2026-06-30<br/>
> **Udfyldt af:** Jesper Gaardboe Jensen / Geo Fyn<br/>
> **Link til Git organisation:** https://github.com/Skadesokonomi<br/>

## RELEVANS

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| R1 | Løsningen skaber lokal værdi | sandkasse | Beskriv den konkrete værdi løsningen skaber i organisationen. F.eks. økonomisk, organisatorisk eller brugerrelateret. | Ja | Løsningen giver mulighed for at beregne skadesomkostninger for oversvømmelsesscenarier, som er et vigtigt input i arbejdet med klimatilpasning og prioritering af indsatser.<br/>Løsningens modeller og metoder er videnskabeligt underbyggede og dokumenterede og anbefales af CONCITO ifm. kommunernes re-certificering af klimaplanerne.<br/>Denne type analyser er erfaringsmæssigt meget omkostningstunge og ikke-transparente. Med denne løsning er beregninger og analyser transparente og Open Source gør løsningen frit tilgængelig for bl.a. stat, kommuner, forsyninger, mv. |
| R2 | Løsningen er accepteret af lokal linjeledelse | 2 | Beskriv eller henvis til en formel accept fra ledelse hos initiativtagerne til løsningen. | Ja | Projektet blev startet i 2022 i Geo Fyn og de 10 fynske ejerkommuner.<br/>Beslutningen blev taget i Teknisk direktørformum Fyn, der består af de tekniske direktører fra de fynske kommuner.<br/>Siden er projekt og løsning blevet varetaget af KL, hvor klimatilpasning er et prioriteret emne: https://www.kl.dk/klima-og-erhverv/klima |
| R3 | Løsningen har fælles offentligt potentiale | 2 | Redegør for hvordan løsningen kan bruges på tværs af kommuner og/eller offentlige myndigheder. | Ja | Løsningen er ikke kun relevant for den danske kommune, men også stat, forsyninger, rådgivere, mv.<br/>Løsningen vil kunne udbredes til anvendelse, fx i EU. |
| R4 | Ophæng til nationale strategier er til stede | 3 | Henvis til relevante strategier og forklar hvordan løsningen understøtter disse. | Ja | Klimatilpasning er en topprioritet på nationalt niveau, se: https://klimatilpasning.dk/kommuner-og-forsyning/national-klimatilpasning/nationale-planer-og-strategier |

## FORMKRAV

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| F1 | Alt kildekode til projektet udvikles synligt og aktivt i et repositorie og versionskontrolsystem, anvist af OS2 | sandkasse | Upload al kildekode i et offentligt OS2 repository med aktiv versionshistorik. | Ja | Løsningen er Open Source og dokumentation, data og kildekode kan hentes på projektets GitHub side, https://github.com/Skadesokonomi |
| F2 | Open Source licenskriterier overholdes | sandkasse | Angiv hvilken OSI-godkendt licens projektet bruger. OS2 standard er MPL 2.0 | Ja | Løsningen er udviklet under Open Source-licensen GNU General Public License. |
| F3 | Udbudsregler og alm. lovformlighed er overholdt | sandkasse | Bekræft at udbudspligt er overholdt eller redegør for undtagelse. Vedlæg evt. beslutningsnotat. | Ja | Projektet har ikke været i udbud. Løsningen er ikke tilknyttet udgifter for brugeren, udover prisen for at være en tilsluttet OS2-produktet, som er væsentligt under tærskelværdierne. |
| F4 | Der er tænkt på sikkerheden i løsningen | sandkasse | Beskriv hvordan sikkerhed er indtænkt i design, kode og drift – f.eks. kryptering, adgangsstyring. | Ja | Løsningen er udviklet som Open Source og vil let kunne overtages af andre leverandører.<br/>Løsningens data, herunder systemvariable, er gemt i en PostgreSQL database, der også er Open Source. <br/>Det er her let at lave backup rutiner, mv. |
| F5 | Løsningens formål og værdi er beskrevet | sandkasse | Henvis til dokumentation (f.eks. README) hvor formål og målgruppe fremgår. | Ja | Formålet med løsningen er at give organisationer mulighed for at beregne skadesomkostninger for oversvømmelsesscenarier vha. modeller og metoder er videnskabeligt underbyggede.<br/>Læs mere her:<br/>https://klimatilpasning.dk/kommuner-og-forsyning/vaerktoejer/os2-skadesoekonomi<br/>https://issuu.com/geoforum5/docs/geoforum_232 |
| F6 | Kildekoden er overdraget og er placeret under OS2's kontrol | 1 | Bekræft og link til det officielle repository i OS2s versionskontrol. | Ja | Kildekoden er tilgængelig her: https://github.com/Skadesokonomi/Installation |
| F7 | Alt dokumentation til projektet udarbejdes med og overholder OS2s standardskabelon for dokumentation. | 1 | Brug OS2’s standard template til dokumentation. [Documentation template for OS2 projects](http://github.com/OS2offdig/os2-docs-template) | Planlagt | Alt er dokumenteret på projektets GitHub side, https://github.com/Skadesokonomi |
| F10 | OS2's kommunikationskanaler anvendes (OS2.eu) | 1 | Bekræft og link til omtale på f.eks. os2.eu, nyhedsbrev eller andet. | Ja | Vi anvender løbende OS2-sekreratiatets bistand, samt laver egne indsatser på events, arrangementer, mv., samt i fagblade, nyhedsmedier, osv. |
| F11 | Der anvendes offentlig issue-tracking anvist af OS2, hvor der tydeligt henvises til specifikke kodeændringer | 1 | Henvis til f.eks. Issues, hvor opgaver er koblet til pull-requests/commits. | Planlagt | Videreudvikling, mv. dokumenteres løbende på på projektet GitHub-side:<br/>https://github.com/Skadesokonomi/Udvikling |
| F12 | Der er kun en version af core koden | 2 | Bekræft at der kun findes én ‘main’ version og at den er aktivt vedligeholdt. | Ja | Kildekoden er tilgængelig her: https://github.com/Skadesokonomi/Installation |
| F13 | Der er udarbejdet præsentationsmateriale af løsningen | 2 | Link til f.eks. slides, brochurer eller andet introduktionsmateriale. | Ja | Der er lavet diverse Power Points, som beskriver projektet og løsningen. |
| F14 | Der er udarbejdet kommunikationsmateriale til strategisk niveau | 2 | F.eks. businesscase, one-pager til direktionsniveau og præsentation til udvalg. | Ja | Der er lavet diverse Power Points, som beskriver projektet og løsningen. |
| F15 | Best practice for implementering i organisationen dokumenteres | 2 | Angiv implementeringsvejledning, erfaringsopsamling eller cases. | Ja | Dokumentation kan findes på projektets Github-side: https://github.com/Skadesokonomi/Dokumentation-og-vejledninger<br/><br/>Et best practise eksempel fra Svendborg Kommune:<br/>https://github.com/Skadesokonomi/Dokumentation-og-vejledninger/blob/main/andre%20dokumenter/Dokumentationsrapport%20Svendborg%20Kommune%20-%20Data%20til%20DK2020%20og%20Skades%C3%98konomi-v%C3%A6rkt%C3%B8jet.pdf |
| F16 | Teknisk dokumentation indeholder best practice for kodestandarder i forhold til de anvendte teknologier | 2 | Beskriv Hvilke kodestandarder projektet følger. Evt. med links til eksterne guides og supplerende retningslinjer. | Ja | Dokumentation kan findes på projektets Github-side: https://github.com/Skadesokonomi/Dokumentation-og-vejledninger |
| F17 | Drifts og vedligeholdelses setup er beskrevet | 2 | Redegør for driftspartner(e), ansvar og finansiering. Hvem drifter, hvem vedligeholder og hvem koordinere. Beskriv også Hvordan kører løsningen? (on-prem, cloud, container, SaaS). Hvilke komponenter indgår? (fx databaser, API’er, microservices). Hvilke værktøjer bruges til monitorering, deployment og backup. | Ja | Løsningen driftes ikke centralt, men er baseret på at brugeren henter kildekode på Github, installerer og anvender denne lokalt.<br/>Vedligeholdelse er indtil nu fællesfinansieret af tilsluttede organisationer. |
| F18 | Rammearkitekturen og standarder er fulgt og afvigelser er forklaret | 2 | Beskriv om/hvordan løsningen følger fællesoffentlig rammearkitektur – eller forklar hvorfor ikke. | Ved ikke | Viden ikke tilstrækkelig til besvarelse. |
| F19 | Løsningen er leveret i et containerformat f.eks. docker (anbefaling) | 2 | Angiv om løsningen tilbydes i en containeriseret version som definerer hvordan applikationen bygges og køres. | Ja | Installationsfiler kan hentes på Github, hvor der også er installationsvejledning: https://github.com/Skadesokonomi/Installation |
| F20 | Uddannelsesmateriale er udarbejdet (anbefaling) | 2 | Henvis til manual, brugervejledning eller andet brugerrelateret materiale. | Ja | Installations- og brugervejledningerne er på projektets Github-side:<br/>https://github.com/Skadesokonomi/Installation<br/>https://github.com/Skadesokonomi/Dokumentation-og-vejledninger |
| F21 | Politisk kommunikation er udarbejdet (Lokal + Omverden) | 3 | Angiv indhold der kan bruges i politiske fora – f.eks. beslutningsoplæg eller pressemeddelelse. | Ja | Der er skrevet diverse artikler i fagbladet bl.a. Geoforum, KTC Teknik & Miljø, mv., samt til artikler i nyhedsmedier. |
| F22 | Procesplan + procesansvar for driftsimplementering er udarbejdet | 3 | Tilføj en implementeringsplan med ‘hvem gør hvad hvornår’. | Ja | Løsningen driftes ikke centralt, men er baseret på at brugeren henter kildekode på Github, installerer og anvender denne lokalt.<br/>Installationsfiler kan hentes på Github, hvor der også er installationsvejledning: https://github.com/Skadesokonomi/Installation |

## STRATEGISK SAMMENHÆNG

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| S1 | Produktet har en kobling til OS2's strategi | 1 | Beskriv hvordan produktet understøtter tværoffentlige behov, deling og fællesskab. | Ja | Formålet med løsningen er at give organisationer fri adgang til at beregne skadesomkostninger for oversvømmelsesscenarier vha. modeller og metoder er videnskabeligt underbyggede.<br/>Løsningens modeller og metoder er videnskabeligt underbyggede og dokumenterede.<br/>Med løsningen er beregninger og analyser transparente og Open Source gør løsningen frit tilgængelig for bl.a. stat, kommuner, forsyninger, mv. |
| S2 | Løsningen understøtter innovation og open source | 1 | Angiv hvordan open source-værdier og nyskabelse er tænkt ind. | Ja | Der er anvendt Open Source-komponenter i løsning bl.a. QGIS og PostgreSQL. Al kildekode er let tilgængelig, transparent og veldokumenteret. |
| S3 | Produktets (forventlige) kobling til OS2's mission, vision og strategi er beskrevet | 2 | Angiv hvor produktet matcher med OS2's formål og indsatser. | Ja | Formålet med løsningen er at give organisationer fri adgang til at beregne skadesomkostninger for oversvømmelsesscenarier vha. modeller og metoder er videnskabeligt underbyggede.<br/>Løsningens modeller og metoder er videnskabeligt underbyggede og dokumenterede.<br/>Med løsningen er beregninger og analyser transparente og Open Source gør løsningen frit tilgængelig for bl.a. stat, kommuner, forsyninger, mv. |
| S4 | Der er udarbejdet en vision og strategi for produktet | 2 | Beskriv produktvision og strategiske mål. | Planlagt | Det er gang i en ny strategiproces. Vision og Mission forventes klar 3. kvartal 2026. |
| S5 | Produktets kobling til og overensstemmelse med OS2's vision og strategi er tilstede og beskrevet | 3 | Forklar hvordan løsningen passer ind i OS2’s overordnede værdisæt og visioner. | Ja | Formålet med løsningen er at give organisationer fri adgang til at beregne skadesomkostninger for oversvømmelsesscenarier vha. modeller og metoder er videnskabeligt underbyggede.<br/>Løsningens modeller og metoder er videnskabeligt underbyggede og dokumenterede.<br/>Med løsningen er beregninger og analyser transparente og Open Source gør løsningen frit tilgængelig for bl.a. stat, kommuner, forsyninger, mv. |

## GOVERNANCE

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
 | G1 | Produktet er oprettet i OS2's porteføljestyring | 1 | Produktet er oprettet på OS2s hjemmeside og indgår i årshjul. Dette koordineres med sekretariatet i OS2. | Ja | Der er løbende dialog med OS2-sekretariatet. |
| G2 | Der koordineres løbende med OS2-sekretariatet | 1 | Bekræft, evt. med årshjul/datoer/mails for koordinering. | Ja | Der er løbende dialog med OS2-sekretariatet. |
| G3 | Der er udpeget en projektleder/tovholder | 1 | Navngiv og beskriv rolle og opgaver. | Ja | Projektlederrolle varetages af medarbejder i KL. |
| G4 | Bestyrelsen er orienteret | 1 | Vedlæg dokumentation for orientering. | Ved ikke | Er usikker på status her. Hvem skal orientere bestyrelsen? Gør OS2-sekretariatet dette? |
| G5 | Bestyrelsen har godkendt produktet | 2 | Vedlæg dokumentation for godkendelse. | Ved ikke | Er usikker på status her. Hvem skal orientere bestyrelsen? Gør OS2-sekretariatet dette? |
| G6 | Der er nedsat en styregruppe | 2 | Beskrivelse af styregruppen og roller/ansvar/opgaver. | Ja | Der er nedsat en styregruppe med repræsentanter fra bl.a. KL, DTU, CONCITO, Staten, Kommunerne, Private rådgivere og Forsyningerne. |
| G7 | Der er nedsat en koordinationsgruppe (anbefaling) | 2 | Beskrivelse af koordinationsgruppen og roller/ansvar/opgaver. | Ja | Grundet et ønske om agilitet, så varetage styregruppen også koordinationsgruppens opgaver. På sigt er det forventningen af der skal nedsættes en koordinationsgruppe. |
| G8 | En projektmodel anvendes og er dokumenteret (anbefaling) | 2 | Beskiv den anvendte projektmodel eller metode. | Ja | Projektet er gennemført agilt. |
| G9 | Review af kode foretages af tredjepart (anbefaling) | 2 | Angiv hvilken ekstern part som udfører eller har udført review. Link til processbeskrivelse samt revisionsrapporter. | Ja | Review af kode udføres af kommuner, forsyninger, DTU og CONCITO. |
| G10 | Der er udarbejdet en tilslutningserklæring til sikring af økonomi (anbefaling) | 2 | Vedlæg eller henvis til dokument for tilslutning og økonomi. | Ja | Der er en oversigt over tilsluttede organisationer samt økonomien tilknyttet hertil på projektets OS2-filarkiv. |
| G11 | Bestyrelsen har godkendt styregruppen | 3 | Vedlæg dokumentation for beslutning. | Ved ikke | Er usikker på status her. Hvem skal orientere bestyrelsen? Gør OS2-sekretariatet dette? |
| G12 | Bestyrelsen er repræsenteret i styregruppen | 3 | Angiv hvilket medlem som deltager på vegne af bestyrelsen. | Nej | Ikke endnu. |
| G13 | Der foreligger en aftale der sikrer økonomi til koordinering og videreudvikling | 3 | Vedlæg eller beskriv finansieringsaftalen. | Ja | Der er en oversigt over tilsluttede organisationer samt økonomien tilknyttet hertil på projektets OS2-filarkiv.<br/>Der arbejdes aktivt for flere tilsluttede organisationer. |
| G14 | Der er etableret et fagligt fællesskab bag løsningen hvor erfaringer kan udveksles | 3 | Henvis til brugerforum og/eller årshjul for aktiviteter. | Ja | Der er overblik over organisationer, som anvender løsningen. Disse er løbende inddraget i finansiering og videreudvikling. |