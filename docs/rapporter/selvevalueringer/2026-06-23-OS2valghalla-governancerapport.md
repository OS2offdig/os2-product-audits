---
title: OS2valghalla governancerapport
layout: default
parent: Selvevalueringer
nav_exclude: true
---

# Governancerapport for OS2valghalla

> **📄 Dokumentinformation**<br/>
> **Version for anvendt governancerapport:** 1.1.0<br/>
> **Dato for udfyldelse:** 2026-06-23<br/>
> **Udfyldt af:** Lisbeth Wittendorff Lorentzen og Tine Gellert<br/>
> **Link til Git organisation:** https://github.com/os2valghalla<br/>

## RELEVANS

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| R1 | Løsningen skaber lokal værdi | sandkasse | Beskriv den konkrete værdi løsningen skaber i organisationen. F.eks. økonomisk, organisatorisk eller brugerrelateret. | Ja | - Effektiviser vagtplanlægning ved valg<br/>- Forenklet deltagerkommunikation<br/>- Effiktivisering af interne arbejdsgange omkring ovenstpående |
| R2 | Løsningen er accepteret af lokal linjeledelse | 2 | Beskriv eller henvis til en formel accept fra ledelse hos initiativtagerne til løsningen. | Ja | Der er underskrevet kontrakter og afsat årligt budget i kommunerne |
| R3 | Løsningen har fælles offentligt potentiale | 2 | Redegør for hvordan løsningen kan bruges på tværs af kommuner og/eller offentlige myndigheder. | Ja | - Løsningen kører på én instans<br/>- Løsningen kan potentielt anvendes vagtplanlægning ved tværkommunale aktiviteter |
| R4 | Ophæng til nationale strategier er til stede | 3 | Henvis til relevante strategier og forklar hvordan løsningen understøtter disse. | Ja | - Produktet anvender Digital post<br/>- Der trækkes på Den Fælleskommunale Infrastruktur |

## FORMKRAV

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| F1 | Alt kildekode til projektet udvikles synligt og aktivt i et repositorie og versionskontrolsystem, anvist af OS2 | sandkasse | Upload al kildekode i et offentligt OS2 repository med aktiv versionshistorik. | Ja | https://github.com/OS2Valghalla/OS2valghalla-3 |
| F2 | Open Source licenskriterier overholdes | sandkasse | Angiv hvilken OSI-godkendt licens projektet bruger. OS2 standard er MPL 2.0 | Ja | https://github.com/OS2Valghalla/OS2valghalla-3 |
| F3 | Udbudsregler og alm. lovformlighed er overholdt | sandkasse | Bekræft at udbudspligt er overholdt eller redegør for undtagelse. Vedlæg evt. beslutningsnotat. | Ja | Oprindeligt er der lavet et SKI udbud.<br/>Henvis til Nextcloud - Notater |
| F4 | Der er tænkt på sikkerheden i løsningen | sandkasse | Beskriv hvordan sikkerhed er indtænkt i design, kode og drift – f.eks. kryptering, adgangsstyring. | Ja | - Hver kommune har egen database<br/>- Der anvendes FK Adgangsstyring, FK Rollestyring<br/>- Der er logning i løsningen |
| F5 | Løsningens formål og værdi er beskrevet | sandkasse | Henvis til dokumentation (f.eks. README) hvor formål og målgruppe fremgår. | Ja | https://github.com/OS2Valghalla og https://www.os2.eu/os2valghalla<br/>Der kan laves en mere fyldestgørende beskrivelse |
| F6 | Kildekoden er overdraget og er placeret under OS2's kontrol | 1 | Bekræft og link til det officielle repository i OS2s versionskontrol. | Ja | https://github.com/OS2Valghalla/OS2valghalla-3 |
| F7 | Alt dokumentation til projektet udarbejdes med og overholder OS2s standardskabelon for dokumentation. | 1 | Brug OS2’s standard template til dokumentation. [Documentation template for OS2 projects](http://github.com/OS2offdig/os2-docs-template) | Ja | https://viden.os2valghalla.dk/ og https://os2valghalla.readthedocs.io/en/latest/ |
| F10 | OS2's kommunikationskanaler anvendes (OS2.eu) | 1 | Bekræft og link til omtale på f.eks. os2.eu, nyhedsbrev eller andet. | Ja | https://www.os2.eu/os2valghalla<br/>Det er verificeret, at nyhedsbreve kun læses i ringe grad. Det er derfor aftalt at vigtige meddelelser fremsendes pr mail |
| F11 | Der anvendes offentlig issue-tracking anvist af OS2, hvor der tydeligt henvises til specifikke kodeændringer | 1 | Henvis til f.eks. Issues, hvor opgaver er koblet til pull-requests/commits. | Ja | https://os2web.atlassian.net/jira/software/c/projects/VALGHAL/boards/105/backlog?selectedIssue=VALGHAL-1003<br/>Der ligger commithistorik på GitHub med reference til issue id<br/>Der er planlagt en flytning til GitHub |
| F12 | Der er kun en version af core koden | 2 | Bekræft at der kun findes én ‘main’ version og at den er aktivt vedligeholdt. | Ja | https://github.com/OS2Valghalla/OS2valghalla-3 |
| F13 | Der er udarbejdet præsentationsmateriale af løsningen | 2 | Link til f.eks. slides, brochurer eller andet introduktionsmateriale. | Ja | https://viden.os2valghalla.dk/ |
| F14 | Der er udarbejdet kommunikationsmateriale til strategisk niveau | 2 | F.eks. businesscase, one-pager til direktionsniveau og præsentation til udvalg. | Nej | [Ikke udfyldt] |
| F15 | Best practice for implementering i organisationen dokumenteres | 2 | Angiv implementeringsvejledning, erfaringsopsamling eller cases. | Ja | https://viden.os2valghalla.dk/docs/implementering.html |
| F16 | Teknisk dokumentation indeholder best practice for kodestandarder i forhold til de anvendte teknologier | 2 | Beskriv Hvilke kodestandarder projektet følger. Evt. med links til eksterne guides og supplerende retningslinjer. | Nej | Ikke opdateret i 9 mdr. |
| F17 | Drifts og vedligeholdelses setup er beskrevet | 2 | Redegør for driftspartner(e), ansvar og finansiering. Hvem drifter, hvem vedligeholder og hvem koordinere. Beskriv også Hvordan kører løsningen? (on-prem, cloud, container, SaaS). Hvilke komponenter indgår? (fx databaser, API’er, microservices). Hvilke værktøjer bruges til monitorering, deployment og backup. | Ja | - Leverandøraftaler, herunder tredjepartsleverandører:<br/>Der er en hostingsaftale med Precio Fishbone AB. Der er ingen særskilte aftaler for udvikling.<br/><br/>https://boks.os2.eu/apps/files/files/129044?dir=/OS2/Produkter/valghalla/Drift/OS2valghalla%20driftsaftale<br/><br/>- Årligt budget, årligt vederlag fra de tilsluttede kommuner:<br/>https://boks.os2.eu/apps/files/files/349940?dir=/OS2/%C3%98konomi/Budgetter%20produkter&editing=false&openfile=true<br/><br/>- Koordination:<br/>Lisbeth WIttendorff Lorentzen, Produktkoordinator for OS2valghallas Styregruppe og Koordinationsgruppe:<br/>https://airtable.com/appmpTyrxRKQUm7JZ/tbl8ysN0GWMAn3um9/viw4S5pP9JQWnrJMK/rec9QVf0fhax7hHG1?blocks=hide |
| F18 | Rammearkitekturen og standarder er fulgt og afvigelser er forklaret | 2 | Beskriv om/hvordan løsningen følger fællesoffentlig rammearkitektur – eller forklar hvorfor ikke. | Nej | Jeg ved ikke hvad det indebærer, og det tænker jeg heller ikke leverandøren gør det.<br/>Men vi understøtter FKI/FKA |
| F19 | Løsningen er leveret i et containerformat f.eks. docker (anbefaling) | 2 | Angiv om løsningen tilbydes i en containeriseret version som definerer hvordan applikationen bygges og køres. | Ja | https://github.com/OS2Valghalla/OS2valghalla-3<br/>Der findes docker-compose.dcproj og docker-compose.yml, som dog er blevet ændret sidst for 3 år siden. |
| F20 | Uddannelsesmateriale er udarbejdet (anbefaling) | 2 | Henvis til manual, brugervejledning eller andet brugerrelateret materiale. | Ja | https://viden.os2valghalla.dk/ |
| F21 | Politisk kommunikation er udarbejdet (Lokal + Omverden) | 3 | Angiv indhold der kan bruges i politiske fora – f.eks. beslutningsoplæg eller pressemeddelelse. | Nej | [Ikke udfyldt] |
| F22 | Procesplan + procesansvar for driftsimplementering er udarbejdet | 3 | Tilføj en implementeringsplan med ‘hvem gør hvad hvornår’. | Nej | Hvad menes der?<br/>Exitstrategi - plan for evt. leverandørskifte<br/>- Hvad skal gøres<br/>- Hvem er ansvarlig for hvad<br/>- Der skal laves en udrulningsplan |

## STRATEGISK SAMMENHÆNG

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| S1 | Produktet har en kobling til OS2's strategi | 1 | Beskriv hvordan produktet understøtter tværoffentlige behov, deling og fællesskab. | Ja | Produktet dækker et behov på langt de fleste kommuner, som ikke er dækket af andre produkter på markedet. |
| S2 | Løsningen understøtter innovation og open source | 1 | Angiv hvordan open source-værdier og nyskabelse er tænkt ind. | Ja | Brugermøder, indsamling af udviklingsønsker fra fællesskabet. Vi er egen forvaltere af kildekoden. Det er muligt at indgive fejl og ønsker via https://viden.os2valghalla.dk/<br/>Vi erbejder med stor åbenhed og gennemsigtighed mod alle produktets brugere. |
| S3 | Produktets (forventlige) kobling til OS2's mission, vision og strategi er beskrevet | 2 | Angiv hvor produktet matcher med OS2's formål og indsatser. | Ja | OS2 vedtægter §3 |
| S4 | Der er udarbejdet en vision og strategi for produktet | 2 | Beskriv produktvision og strategiske mål. | Ja | https://boks.os2.eu/apps/files/files/198976?dir=/OS2/Produkter/valghalla/Udbredelse&editing=false&openfile=true |
| S5 | Produktets kobling til og overensstemmelse med OS2's vision og strategi er tilstede og beskrevet | 3 | Forklar hvordan løsningen passer ind i OS2’s overordnede værdisæt og visioner. | Ja | OS2valghalla styrker digitaliseringen i det offentlige Danmark<br/>Det gør vi ved at skabe fælles innovative digitale løsninger og metoder, der baserer sig på åbenhed og ejerskab med brugermøder, spørgetimer, formularer, videns site. |

## GOVERNANCE

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
 | G1 | Produktet er oprettet i OS2's porteføljestyring | 1 | Produktet er oprettet på OS2s hjemmeside og indgår i årshjul. Dette koordineres med sekretariatet i OS2. | Ja | https://www.os2.eu/os2valghalla |
| G2 | Der koordineres løbende med OS2-sekretariatet | 1 | Bekræft, evt. med årshjul/datoer/mails for koordinering. | Ja | Koordinator har sparringsmøder med sekretariatet hver 14. dag |
| G3 | Der er udpeget en projektleder/tovholder | 1 | Navngiv og beskriv rolle og opgaver. | Ja | Lisbeth Wittendorff Lorentzen, Produktkoordinator |
| G4 | Bestyrelsen er orienteret | 1 | Vedlæg dokumentation for orientering. | Ja | Produktet har bestået i OS2 i mange år, og bestyrelsen er bekendt med produktet. |
| G5 | Bestyrelsen har godkendt produktet | 2 | Vedlæg dokumentation for godkendelse. | Ja | Der er søgt i mapperne under https://boks.os2.eu/apps/files/files/40523?dir=/Offentlige%20filer%20til%20hjemmeside/Foreningen/Bestyrelsen men ikke fundet en godkendelse af produktet.<br/>Produktet er dog nævnt i disse to filer:<br/>https://boks.os2.eu/apps/files/files/336088?dir=/Offentlige%20filer%20til%20hjemmeside/Foreningen/Bestyrelsen/Bestyrelsesm%C3%B8der/2023/2023-11-16&editing=false&openfile=true og<br/>https://boks.os2.eu/apps/files/files/336083?dir=/Offentlige%20filer%20til%20hjemmeside/Foreningen/Bestyrelsen/Bestyrelsesm%C3%B8der/2023/2023-06-28&editing=false&openfile=true |
| G6 | Der er nedsat en styregruppe | 2 | Beskrivelse af styregruppen og roller/ansvar/opgaver. | Ja | https://boks.os2.eu/apps/files/files/352721?dir=/OS2/Produkter/valghalla/Styregruppe&editing=false&openfile=true |
| G7 | Der er nedsat en koordinationsgruppe (anbefaling) | 2 | Beskrivelse af koordinationsgruppen og roller/ansvar/opgaver. | Ja | https://boks.os2.eu/apps/files/files/34382?dir=/OS2/Produkter/valghalla/Koordinationsgruppe&editing=false&openfile=true |
| G8 | En projektmodel anvendes og er dokumenteret (anbefaling) | 2 | Beskiv den anvendte projektmodel eller metode. | Nej | [Ikke udfyldt] |
| G9 | Review af kode foretages af tredjepart (anbefaling) | 2 | Angiv hvilken ekstern part som udfører eller har udført review. Link til processbeskrivelse samt revisionsrapporter. | Nej | [Ikke udfyldt] |
| G10 | Der er udarbejdet en tilslutningserklæring til sikring af økonomi (anbefaling) | 2 | Vedlæg eller henvis til dokument for tilslutning og økonomi. | Ja | Tilslutningsaftale + Takstblad:<br/><br/>https://boks.os2.eu/s/Di5cTQdSABd6ak4?dir=/Produkter/OS2valghalla/Tilslutning%20og%20takstblad&editing=false&openfile=true |
| G11 | Bestyrelsen har godkendt styregruppen | 3 | Vedlæg dokumentation for beslutning. | Nej | [Ikke udfyldt] |
| G12 | Bestyrelsen er repræsenteret i styregruppen | 3 | Angiv hvilket medlem som deltager på vegne af bestyrelsen. | Nej | [Ikke udfyldt] |
| G13 | Der foreligger en aftale der sikrer økonomi til koordinering og videreudvikling | 3 | Vedlæg eller beskriv finansieringsaftalen. | Ja | Årligt bidrag fra de tilsluttede kommuner. Henvisning til Takstblad:<br/><br/>Tilslutningsaftale + Takstblad:<br/><br/>https://boks.os2.eu/s/Di5cTQdSABd6ak4?dir=/Produkter/OS2valghalla/Tilslutning%20og%20takstblad&editing=false&openfile=true<br/><br/>https://boks.os2.eu/s/Di5cTQdSABd6ak4?dir=/Produkter/OS2valghalla/Tilslutning%20og%20takstblad&editing=false&openfile=true |
| G14 | Der er etableret et fagligt fællesskab bag løsningen hvor erfaringer kan udveksles | 3 | Henvis til brugerforum og/eller årshjul for aktiviteter. | Ja | - Brugermøder<br/>- Spørgetimer<br/>- KG møder/mdr<br/>- SG møder/kvartal<br/>- Brugersupport forankret i KG, som tager ansvaret<br/>- mulighed for at indmelde fejl og ændringsønsker via viden.os2valghalla |