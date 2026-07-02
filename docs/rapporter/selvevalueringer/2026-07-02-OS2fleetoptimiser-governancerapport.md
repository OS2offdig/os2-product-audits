---
title: OS2fleetoptimiser governancerapport
layout: default
parent: Selvevalueringer
nav_exclude: true
---

# [KLADDE] Governancerapport for OS2FleetOptimiser

> **📄 Dokumentinformation**<br/>
> **Version for anvendt governancerapport:** 1.1.0<br/>
> **Dato for udfyldelse:** 02-07-2026<br/>
> **Udfyldt af:** Sofie Buhl<br/>
> **Link til Git organisation:** https://github.com/os2fleetoptimiser<br/>

## RELEVANS

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| R1 | Løsningen skaber lokal værdi | sandkasse | Beskriv den konkrete værdi løsningen skaber i organisationen. F.eks. økonomisk, organisatorisk eller brugerrelateret. | Ja | Løsningen skaber værdi både økonomisk og klimamæssigt i flere organisationer, fordi den bidrager til reduktion af Co2-udledning fra køretøjer samt besparelser på flåden. |
| R2 | Løsningen er accepteret af lokal linjeledelse | 2 | Beskriv eller henvis til en formel accept fra ledelse hos initiativtagerne til løsningen. | Ja | Løsningen er i drift og bruges aktivt i  samtlige brugerorganisationer. |
| R3 | Løsningen har fælles offentligt potentiale | 2 | Redegør for hvordan løsningen kan bruges på tværs af kommuner og/eller offentlige myndigheder. | Ja | Løsningen har ikke blot fællesoffentligt potentiale, men er allerede i drift i både kommuner og region. |
| R4 | Ophæng til nationale strategier er til stede | 3 | Henvis til relevante strategier og forklar hvordan løsningen understøtter disse. | Ja | Den fællesoffentlige digitaliseringsstrategi (https://digst.dk/media/u5de5ery/9742-digmin-digitaliseringsstrategi-2026-2029_tilg.pdf): Indsatsområde 4 om digital suverænitet<br/>Klimaplan 2030: https://fm.dk/media/s0qg5zn2/dk2030-et-groennere-sikrere-og-staerkere-danmark-2030-a.pdf - mål om reduktion af co2 udledning |

## FORMKRAV

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| F1 | Alt kildekode til projektet udvikles synligt og aktivt i et repositorie og versionskontrolsystem, anvist af OS2 | sandkasse | Upload al kildekode i et offentligt OS2 repository med aktiv versionshistorik. | Ja | https://github.com/OS2fleetoptimiser/OS2fleetoptimiser/ |
| F2 | Open Source licenskriterier overholdes | sandkasse | Angiv hvilken OSI-godkendt licens projektet bruger. OS2 standard er MPL 2.0 | Ja | MPL 2.0 |
| F3 | Udbudsregler og alm. lovformlighed er overholdt | sandkasse | Bekræft at udbudspligt er overholdt eller redegør for undtagelse. Vedlæg evt. beslutningsnotat. | Ja | Der er i produktet udbudspligt på udvikling og vedligehold af løsningen. Denne er udbudt via SKI 02.17. Drift og support er under udbudsgrænsen. |
| F4 | Der er tænkt på sikkerheden i løsningen | sandkasse | Beskriv hvordan sikkerhed er indtænkt i design, kode og drift – f.eks. kryptering, adgangsstyring. | Ja | Adgangsstyring håndteres gennem Keycloak, enten gennem OIDC, OAuth eller SAML. FleetOptimiser autentificerer brugeren gennem Kombit Context Handler 2 (SAML), der muliggør multifaktor SSO direkte til Kommunens organisation. Serviceplatformen tillader rollebaseret styring, der giver Kommunen direkte adgang til at styre adgang til FleetOptimiser. Applikation driftes på en lukket server, hvor kun relevante brugergrænseflade porte med autencificering er eksponeret. Før brugergrænsefladelaget, ligger NGINX som reverse-proxy der styrer alle requests til serveren og mappede DNSer. Databaser kan kun tilgås med en SQL bruger fra en af to whitelistede IP-adresser (server + leverandørens IP). Alle requests bliver foretaget eller omdirigeret til HTTPS. Access og error logs gemmes på serveren, så alle forsøg på at ramme serveren gemmes. Backend API'et eksponeres ikke direkte men tilgås bag proxy. |
| F5 | Løsningens formål og værdi er beskrevet | sandkasse | Henvis til dokumentation (f.eks. README) hvor formål og målgruppe fremgår. | Ja | https://github.com/OS2fleetoptimiser/OS2fleetoptimiser/blob/main/README_da.md<br/><br/>eller her<br/><br/>https://www.os2.eu/os2fleetoptimiser |
| F6 | Kildekoden er overdraget og er placeret under OS2's kontrol | 1 | Bekræft og link til det officielle repository i OS2s versionskontrol. | Ja | https://github.com/OS2fleetoptimiser/OS2fleetoptimiser/ |
| F7 | Alt dokumentation til projektet udarbejdes med og overholder OS2s standardskabelon for dokumentation. | 1 | Brug OS2’s standard template til dokumentation. [Documentation template for OS2 projects](http://github.com/OS2offdig/os2-docs-template) | Ja | Denne bruges også. |
| F10 | OS2's kommunikationskanaler anvendes (OS2.eu) | 1 | Bekræft og link til omtale på f.eks. os2.eu, nyhedsbrev eller andet. | Ja | Produktet benytter hjemmesiden som beskrevet i F5. |
| F11 | Der anvendes offentlig issue-tracking anvist af OS2, hvor der tydeligt henvises til specifikke kodeændringer | 1 | Henvis til f.eks. Issues, hvor opgaver er koblet til pull-requests/commits. | Ja | https://github.com/OS2fleetoptimiser/OS2fleetoptimiser/issues/216 |
| F12 | Der er kun en version af core koden | 2 | Bekræft at der kun findes én ‘main’ version og at den er aktivt vedligeholdt. | Ja | Det bekræftes hermed. |
| F13 | Der er udarbejdet præsentationsmateriale af løsningen | 2 | Link til f.eks. slides, brochurer eller andet introduktionsmateriale. | Ja | https://boks.os2.eu/s/Mr3qLaJJ2b9CdJ8?dir=/&editing=false&openfile=true |
| F14 | Der er udarbejdet kommunikationsmateriale til strategisk niveau | 2 | F.eks. businesscase, one-pager til direktionsniveau og præsentation til udvalg. | Ja | Business case indeholder semi fortroligt materiale og deles derfor ikke offentligt. Kan dog sendes efter anmodning til offentlige organisationer. |
| F15 | Best practice for implementering i organisationen dokumenteres | 2 | Angiv implementeringsvejledning, erfaringsopsamling eller cases. | Ja | https://boks.os2.eu/s/Mr3qLaJJ2b9CdJ8? |
| F16 | Teknisk dokumentation indeholder best practice for kodestandarder i forhold til de anvendte teknologier | 2 | Beskriv Hvilke kodestandarder projektet følger. Evt. med links til eksterne guides og supplerende retningslinjer. | Ja | Adgangsstyring håndteres gennem Keycloak, enten gennem OIDC, OAuth eller SAML. FleetOptimiser autentificerer brugeren gennem Kombit Context Handler 2 (SAML), der muliggør multifaktor SSO direkte til Kommunens organisation. Serviceplatformen tillader rollebaseret styring, der giver Kommunen direkte adgang til at styre adgang til FleetOptimiser. Applikation driftes på en lukket server, hvor kun relevante brugergrænseflade porte med autencificering er eksponeret. Før brugergrænsefladelaget, ligger NGINX som reverse-proxy der styrer alle requests til serveren og mappede DNSer. Databaser kan kun tilgås med en SQL bruger fra en af to whitelistede IP-adresser (server + leverandørens IP). Alle requests bliver foretaget eller omdirigeret til HTTPS. Access og error logs gemmes på serveren, så alle forsøg på at ramme serveren gemmes. Backend API'et eksponeres ikke direkte men tilgås bag proxy. |
| F17 | Drifts og vedligeholdelses setup er beskrevet | 2 | Redegør for driftspartner(e), ansvar og finansiering. Hvem drifter, hvem vedligeholder og hvem koordinere. Beskriv også Hvordan kører løsningen? (on-prem, cloud, container, SaaS). Hvilke komponenter indgår? (fx databaser, API’er, microservices). Hvilke værktøjer bruges til monitorering, deployment og backup. | Ja | Der er indgået aftale med leverandør omkring hhv. drift og vedligehold via to forskellige kontrakter. Produktsekretariat koordinerer. Finansiering sker gennem produktvederlag fra brugere af produktet. |
| F18 | Rammearkitekturen og standarder er fulgt og afvigelser er forklaret | 2 | Beskriv om/hvordan løsningen følger fællesoffentlig rammearkitektur – eller forklar hvorfor ikke. | Ved ikke | Vi har ikke taget noget aktivt valg eller været bevidste om Fællesoffentlig rammearkitektur. |
| F19 | Løsningen er leveret i et containerformat f.eks. docker (anbefaling) | 2 | Angiv om løsningen tilbydes i en containeriseret version som definerer hvordan applikationen bygges og køres. | Ja | Løsningen leveres fuldt containeriseret med Docker og Docker compose. Der er separate Dockerfiler til frontend og backend. Færdigbyggede images publiceres via actions direkte fra triggerede tests og release på GitHub. <br/>Til drift medfølger en docker-compose.yaml der definerer frotend, backend, worker foruden en separat kø- og orkestreringsmotor. |
| F20 | Uddannelsesmateriale er udarbejdet (anbefaling) | 2 | Henvis til manual, brugervejledning eller andet brugerrelateret materiale. | Ja | https://os2fleetoptimiser.github.io/os2fleetoptimiser-user-guide/ |
| F21 | Politisk kommunikation er udarbejdet (Lokal + Omverden) | 3 | Angiv indhold der kan bruges i politiske fora – f.eks. beslutningsoplæg eller pressemeddelelse. | Ja | Er udarbejdet i projektfasen<br/>- kom med et par eksempler |
| F22 | Procesplan + procesansvar for driftsimplementering er udarbejdet | 3 | Tilføj en implementeringsplan med ‘hvem gør hvad hvornår’. | Ja | https://boks.os2.eu/s/Di5cTQdSABd6ak4?dir=/Produkter/OS2fleetoptimiser%20-%20Offentlig/Dokumentation<br/><br/>Sekretariatet yder implementeringsassistance - ikke én køreplan til alle. |

## STRATEGISK SAMMENHÆNG

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| S1 | Produktet har en kobling til OS2's strategi | 1 | Beskriv hvordan produktet understøtter tværoffentlige behov, deling og fællesskab. | Ja | Understøtter det på flere måder. Bl.a. har FleetOptimiser udviklet en GPS-connector ud fra principper og arkitektur der på sigt kan rumme andre produkter inden for smartcity-feltet. Det muliggør fælles vedligehold af komponenter på sigt. |
| S2 | Løsningen understøtter innovation og open source | 1 | Angiv hvordan open source-værdier og nyskabelse er tænkt ind. | Ja | Fællesskabet prioriterer et relativt højt udviklingsbudget, hvilket giver grundlag for at tænke nyt. Samtidig indtænker vi open source løbende ifm. revidering og videreudvikling af kildekoden. Produktet er open source, men det kan altid blive endnu bedre. |
| S3 | Produktets (forventlige) kobling til OS2's mission, vision og strategi er beskrevet | 2 | Angiv hvor produktet matcher med OS2's formål og indsatser. | Ja | Læs i S1. |
| S4 | Der er udarbejdet en vision og strategi for produktet | 2 | Beskriv produktvision og strategiske mål. | Ja | "FleetOptimiser skal være det foretrukne digitale værktøj og samarbejde til understøttelse af grøn omstilling og optimering af den offentlige køretøjsflåde" |
| S5 | Produktets kobling til og overensstemmelse med OS2's vision og strategi er tilstede og beskrevet | 3 | Forklar hvordan løsningen passer ind i OS2’s overordnede værdisæt og visioner. | Ikke relevant | [Ikke udfyldt] |

## GOVERNANCE

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
 | G1 | Produktet er oprettet i OS2's porteføljestyring | 1 | Produktet er oprettet på OS2s hjemmeside og indgår i årshjul. Dette koordineres med sekretariatet i OS2. | Ja | https://www.os2.eu/os2fleetoptimiser |
| G2 | Der koordineres løbende med OS2-sekretariatet | 1 | Bekræft, evt. med årshjul/datoer/mails for koordinering. | Ja | Sidder med OS2-sekretariatet min. 1 gang om måneden. |
| G3 | Der er udpeget en projektleder/tovholder | 1 | Navngiv og beskriv rolle og opgaver. | Ja | Der er frikøbt 1/2 årsværk til produktkoordinator/sekretariat. Opgaver er projektledelse, økonomi, produktejerskab og community manager |
| G4 | Bestyrelsen er orienteret | 1 | Vedlæg dokumentation for orientering. | Ja | Forventer at bestyrelsen er orienteret gennem sekretariatschef ifm. optag af FO. |
| G5 | Bestyrelsen har godkendt produktet | 2 | Vedlæg dokumentation for godkendelse. | Ja | Forventer at bestyrelsen er orienteret gennem sekretariatschef ifm. optag af FO. |
| G6 | Der er nedsat en styregruppe | 2 | Beskrivelse af styregruppen og roller/ansvar/opgaver. | Ja | Styregruppen består af en styregruppeforperson og et udvalg fra de andre brugerorganisationer. Det er styregruppens opgave at varetage interesser på tværs af brugerorganisationerne. Udover at træffe beslutninger og prioritere retning er det også styregruppens ansvar at bidrage til det strategiske og politiske aspekt. |
| G7 | Der er nedsat en koordinationsgruppe (anbefaling) | 2 | Beskrivelse af koordinationsgruppen og roller/ansvar/opgaver. | Ja | I FleetOptimiser er alle med i koordinationsgruppen, og det er valgfrit hvornår man deltager. Dvs. at alle er med til at prioritere udvikling osv. |
| G8 | En projektmodel anvendes og er dokumenteret (anbefaling) | 2 | Beskiv den anvendte projektmodel eller metode. | Ikke relevant | Vi er ikke et projekt mere, men da vi var, brugte vi elementer fra Scrum. |
| G9 | Review af kode foretages af tredjepart (anbefaling) | 2 | Angiv hvilken ekstern part som udfører eller har udført review. Link til processbeskrivelse samt revisionsrapporter. | Nej | Det har vi fravalgt. |
| G10 | Der er udarbejdet en tilslutningserklæring til sikring af økonomi (anbefaling) | 2 | Vedlæg eller henvis til dokument for tilslutning og økonomi. | Ja | https://boks.os2.eu/s/9yBXeQFjpXHodzF?dir=/&editing=false&openfile=true |
| G11 | Bestyrelsen har godkendt styregruppen | 3 | Vedlæg dokumentation for beslutning. | Nej | [Ikke udfyldt] |
| G12 | Bestyrelsen er repræsenteret i styregruppen | 3 | Angiv hvilket medlem som deltager på vegne af bestyrelsen. | Nej | [Ikke udfyldt] |
| G13 | Der foreligger en aftale der sikrer økonomi til koordinering og videreudvikling | 3 | Vedlæg eller beskriv finansieringsaftalen. | Ved ikke | [Ikke udfyldt] |
| G14 | Der er etableret et fagligt fællesskab bag løsningen hvor erfaringer kan udveksles | 3 | Henvis til brugerforum og/eller årshjul for aktiviteter. | Ja | Faste aktiviteter:<br/>- 2 x heldagsmøder i brugergruppen<br/>- 1 gang om måneden har vi tjek-ind<br/>- 2-3 gange om året har vi udviklings-prioriteringsmøder |