---
title: OS2borgerPC governancerapport
layout: default
parent: Selvevalueringer
nav_exclude: true
---

# Governancerapport for OS2BorgerPC

> **📄 Dokumentinformation**<br/>
> **Version for anvendt governancerapport:** 1.1.0<br/>
> **Dato for udfyldelse:** 2026-06-24<br/>
> **Udfyldt af:** Styregruppe<br/>
> **Link til Git organisation:** https://github.com/OS2borgerPC<br/>

## RELEVANS

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| R1 | Løsningen skaber lokal værdi | sandkasse | Beskriv den konkrete værdi løsningen skaber i organisationen. F.eks. økonomisk, organisatorisk eller brugerrelateret. | Ja | Idriftsat i ca. 7 kommuner |
| R2 | Løsningen er accepteret af lokal linjeledelse | 2 | Beskriv eller henvis til en formel accept fra ledelse hos initiativtagerne til løsningen. | Ja | Vi har tilslutningsaftale fra 19 kommuner. Dermed er der godkendelse fra ledelse. |
| R3 | Løsningen har fælles offentligt potentiale | 2 | Redegør for hvordan løsningen kan bruges på tværs af kommuner og/eller offentlige myndigheder. | Ja | Use casen er af almen gyldighed og er relevant i alle kommuner. |
| R4 | Ophæng til nationale strategier er til stede | 3 | Henvis til relevante strategier og forklar hvordan løsningen understøtter disse. | Nej | [Ikke udfyldt] |

## FORMKRAV

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| F1 | Alt kildekode til projektet udvikles synligt og aktivt i et repositorie og versionskontrolsystem, anvist af OS2 | sandkasse | Upload al kildekode i et offentligt OS2 repository med aktiv versionshistorik. | Ja | Ligger på Github i github.com/os2borgerpc |
| F2 | Open Source licenskriterier overholdes | sandkasse | Angiv hvilken OSI-godkendt licens projektet bruger. OS2 standard er MPL 2.0 | Ja | GPL3 licens |
| F3 | Udbudsregler og alm. lovformlighed er overholdt | sandkasse | Bekræft at udbudspligt er overholdt eller redegør for undtagelse. Vedlæg evt. beslutningsnotat. | Ja | Der har været en større udviklingsopgave hvor vi gennemførte en tilbudsindhentning. |
| F4 | Der er tænkt på sikkerheden i løsningen | sandkasse | Beskriv hvordan sikkerhed er indtænkt i design, kode og drift – f.eks. kryptering, adgangsstyring. | Ja | Der er to faktor login på Borgerpcerne. Der er anvenderkommune der har gennemført penetrationstest på borgerpcerne. Der er tænkt på den fysiske sikkerhed med et specialdesignet kabinet som en borgerpc kan placeres i. Der er indbygget sikkerhedsadvicering i systemet så USB-events og andre sikkerhedshændelser automatisk indrapporteres i admin portalen. |
| F5 | Løsningens formål og værdi er beskrevet | sandkasse | Henvis til dokumentation (f.eks. README) hvor formål og målgruppe fremgår. | Ja | https://os2borgerpc.os2.eu/docs/bruger/om-os2borgerpc.html |
| F6 | Kildekoden er overdraget og er placeret under OS2's kontrol | 1 | Bekræft og link til det officielle repository i OS2s versionskontrol. | Ja | Ligger på Github i github.com/os2borgerpc |
| F7 | Alt dokumentation til projektet udarbejdes med og overholder OS2s standardskabelon for dokumentation. | 1 | Brug OS2’s standard template til dokumentation. [Documentation template for OS2 projects](http://github.com/OS2offdig/os2-docs-template) | Ja | https://os2borgerpc.os2.eu/ |
| F10 | OS2's kommunikationskanaler anvendes (OS2.eu) | 1 | Bekræft og link til omtale på f.eks. os2.eu, nyhedsbrev eller andet. | Ja | Vi bruger OS2s nyhedsbrev. Vi offentliggør dokumentation på Github. |
| F11 | Der anvendes offentlig issue-tracking anvist af OS2, hvor der tydeligt henvises til specifikke kodeændringer | 1 | Henvis til f.eks. Issues, hvor opgaver er koblet til pull-requests/commits. | Ja | https://github.com/OS2borgerPC/os2borgerpc-admin-site/issues?q=is%3Aissue%20state%3Aclosed |
| F12 | Der er kun en version af core koden | 2 | Bekræft at der kun findes én ‘main’ version og at den er aktivt vedligeholdt. | Ja | [Ikke udfyldt] |
| F13 | Der er udarbejdet præsentationsmateriale af løsningen | 2 | Link til f.eks. slides, brochurer eller andet introduktionsmateriale. | Ja | OS2s hjemmeside og https://os2borgerpc.os2.eu/ |
| F14 | Der er udarbejdet kommunikationsmateriale til strategisk niveau | 2 | F.eks. businesscase, one-pager til direktionsniveau og præsentation til udvalg. | Nej | [Ikke udfyldt] |
| F15 | Best practice for implementering i organisationen dokumenteres | 2 | Angiv implementeringsvejledning, erfaringsopsamling eller cases. | Ja | https://os2borgerpc.os2.eu/docs/bruger/ |
| F16 | Teknisk dokumentation indeholder best practice for kodestandarder i forhold til de anvendte teknologier | 2 | Beskriv Hvilke kodestandarder projektet følger. Evt. med links til eksterne guides og supplerende retningslinjer. | Nej | [Ikke udfyldt] |
| F17 | Drifts og vedligeholdelses setup er beskrevet | 2 | Redegør for driftspartner(e), ansvar og finansiering. Hvem drifter, hvem vedligeholder og hvem koordinere. Beskriv også Hvordan kører løsningen? (on-prem, cloud, container, SaaS). Hvilke komponenter indgår? (fx databaser, API’er, microservices). Hvilke værktøjer bruges til monitorering, deployment og backup. | Ja | https://os2borgerpc.os2.eu/docs/drift/installation.html |
| F18 | Rammearkitekturen og standarder er fulgt og afvigelser er forklaret | 2 | Beskriv om/hvordan løsningen følger fællesoffentlig rammearkitektur – eller forklar hvorfor ikke. | Nej | [Ikke udfyldt] |
| F19 | Løsningen er leveret i et containerformat f.eks. docker (anbefaling) | 2 | Angiv om løsningen tilbydes i en containeriseret version som definerer hvordan applikationen bygges og køres. | Ja | https://os2borgerpc.os2.eu/docs/drift/installation.html |
| F20 | Uddannelsesmateriale er udarbejdet (anbefaling) | 2 | Henvis til manual, brugervejledning eller andet brugerrelateret materiale. | Ja | https://os2borgerpc.os2.eu/docs/bruger/ |
| F21 | Politisk kommunikation er udarbejdet (Lokal + Omverden) | 3 | Angiv indhold der kan bruges i politiske fora – f.eks. beslutningsoplæg eller pressemeddelelse. | Nej | [Ikke udfyldt] |
| F22 | Procesplan + procesansvar for driftsimplementering er udarbejdet | 3 | Tilføj en implementeringsplan med ‘hvem gør hvad hvornår’. | Nej | [Ikke udfyldt] |

## STRATEGISK SAMMENHÆNG

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| S1 | Produktet har en kobling til OS2's strategi | 1 | Beskriv hvordan produktet understøtter tværoffentlige behov, deling og fællesskab. | Ja | Vi understøtter OS2 fællesskabets strategi om et fælles operativsystem til borgerpcer som understøtter tværoffentlig behov for en sikker offentlig computer. |
| S2 | Løsningen understøtter innovation og open source | 1 | Angiv hvordan open source-værdier og nyskabelse er tænkt ind. | Ja | Det er et system der har en fleksibel rammer hvori kommuner selv kan udvikle og dele tilpasninger og scripts til borgerpcer. |
| S3 | Produktets (forventlige) kobling til OS2's mission, vision og strategi er beskrevet | 2 | Angiv hvor produktet matcher med OS2's formål og indsatser. | Ja | Ja, se S1. |
| S4 | Der er udarbejdet en vision og strategi for produktet | 2 | Beskriv produktvision og strategiske mål. | Nej | [Ikke udfyldt] |
| S5 | Produktets kobling til og overensstemmelse med OS2's vision og strategi er tilstede og beskrevet | 3 | Forklar hvordan løsningen passer ind i OS2’s overordnede værdisæt og visioner. | Nej | [Ikke udfyldt] |

## GOVERNANCE

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
 | G1 | Produktet er oprettet i OS2's porteføljestyring | 1 | Produktet er oprettet på OS2s hjemmeside og indgår i årshjul. Dette koordineres med sekretariatet i OS2. | Ja | [Ikke udfyldt] |
| G2 | Der koordineres løbende med OS2-sekretariatet | 1 | Bekræft, evt. med årshjul/datoer/mails for koordinering. | Ja | [Ikke udfyldt] |
| G3 | Der er udpeget en projektleder/tovholder | 1 | Navngiv og beskriv rolle og opgaver. | Ja | Sønderborg har produktforvaltningen med rollerne produktkoordinator og product owner. |
| G4 | Bestyrelsen er orienteret | 1 | Vedlæg dokumentation for orientering. | Ja | [Ikke udfyldt] |
| G5 | Bestyrelsen har godkendt produktet | 2 | Vedlæg dokumentation for godkendelse. | Ja | [Ikke udfyldt] |
| G6 | Der er nedsat en styregruppe | 2 | Beskrivelse af styregruppen og roller/ansvar/opgaver. | Ja | [Ikke udfyldt] |
| G7 | Der er nedsat en koordinationsgruppe (anbefaling) | 2 | Beskrivelse af koordinationsgruppen og roller/ansvar/opgaver. | Ja | [Ikke udfyldt] |
| G8 | En projektmodel anvendes og er dokumenteret (anbefaling) | 2 | Beskiv den anvendte projektmodel eller metode. | Nej | [Ikke udfyldt] |
| G9 | Review af kode foretages af tredjepart (anbefaling) | 2 | Angiv hvilken ekstern part som udfører eller har udført review. Link til processbeskrivelse samt revisionsrapporter. | Ja | Der har været gennemført et omfattende code review i forbindelse med åbning af produktet for flere leverandører. |
| G10 | Der er udarbejdet en tilslutningserklæring til sikring af økonomi (anbefaling) | 2 | Vedlæg eller henvis til dokument for tilslutning og økonomi. | Ja | [Ikke udfyldt] |
| G11 | Bestyrelsen har godkendt styregruppen | 3 | Vedlæg dokumentation for beslutning. | Ja | [Ikke udfyldt] |
| G12 | Bestyrelsen er repræsenteret i styregruppen | 3 | Angiv hvilket medlem som deltager på vegne af bestyrelsen. | Ja | [Ikke udfyldt] |
| G13 | Der foreligger en aftale der sikrer økonomi til koordinering og videreudvikling | 3 | Vedlæg eller beskriv finansieringsaftalen. | Ja | Der er et budget vedtaget af styregruppen |
| G14 | Der er etableret et fagligt fællesskab bag løsningen hvor erfaringer kan udveksles | 3 | Henvis til brugerforum og/eller årshjul for aktiviteter. | Nej | Der har været brugergruppe men den er sat i bero. |