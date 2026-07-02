---
title: OS2rollekatalog governancerapport
layout: default
parent: Selvevalueringer
nav_exclude: true
---

# Governancerapport for OS2rollekatalog

> **📄 Dokumentinformation**<br/>
> **Version for anvendt governancerapport:** 1.1.0<br/>
> **Dato for udfyldelse:** 2026-06-11<br/>
> **Udfyldt af:** Produktkoordinator Mette Valbjørn<br/>
> **Link til Git organisation:** https://github.com/os2rollekatalog<br/>

## RELEVANS

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| R1 | Løsningen skaber lokal værdi | sandkasse | Beskriv den konkrete værdi løsningen skaber i organisationen. F.eks. økonomisk, organisatorisk eller brugerrelateret. | Ja | Løsningen sikrer at medarbejdere og ledere får de rigtige roller og rettigheder til organisationens it-systemer. Dette har stor værdi for den enkelte organisation, fx. en kommune, og sikrer overholdelse af krav fra revision i forhold til dokumentation af hvilke medarbejdere, der har adgang til hvilke it-systemer og hvad de har adgang til. |
| R2 | Løsningen er accepteret af lokal linjeledelse | 2 | Beskriv eller henvis til en formel accept fra ledelse hos initiativtagerne til løsningen. | Ja | Den enkelte kommune eller anden organisation, der anvender løsningen, underskriver tilslutningsdokument til OS2 generelt og til OS2rollekatalog når de skal tage OS2rollekatalog i brug. |
| R3 | Løsningen har fælles offentligt potentiale | 2 | Redegør for hvordan løsningen kan bruges på tværs af kommuner og/eller offentlige myndigheder. | Ja | 52 kommuner og Datatilsynet anvender produktet aktivt. |
| R4 | Ophæng til nationale strategier er til stede | 3 | Henvis til relevante strategier og forklar hvordan løsningen understøtter disse. | Ja | Løsninger er meget stabil og sikker og understøtter strategier om at arbejde henimod øget digital suverænitet, fx. KL's digitaliseringsstrategi 2026-2030. https://www.kl.dk/oekonomi-og-administration/digitalisering-og-teknologi/politik-og-strategi/kommunernes-digitaliseringsstrategi-2026-2030#oeg-digital-sikkerhed-og-sammenhaeng-1c |

## FORMKRAV

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| F1 | Alt kildekode til projektet udvikles synligt og aktivt i et repositorie og versionskontrolsystem, anvist af OS2 | sandkasse | Upload al kildekode i et offentligt OS2 repository med aktiv versionshistorik. | Ja | Kodebasen er tilgængelig og nye releases offentliggøres i GitHub for OS2rollekatalog, men udviklingen foregår et andet sted. Link til GitHub: https://github.com/OS2rollekatalog |
| F2 | Open Source licenskriterier overholdes | sandkasse | Angiv hvilken OSI-godkendt licens projektet bruger. OS2 standard er MPL 2.0 | Ja | Synligt i GitHub. Softwaren OS2rollekatalog er frigivet på en godkendt licens. |
| F3 | Udbudsregler og alm. lovformlighed er overholdt | sandkasse | Bekræft at udbudspligt er overholdt eller redegør for undtagelse. Vedlæg evt. beslutningsnotat. | Planlagt | Der skal udarbejdes et forklaringsnotat og retningslinjer vedr. OS2 produkter. Det vil være hensigtsmæssigt at dette udarbejdes af OS2 sekretariatet, da der er brug for det for flere OS2 produkter. |
| F4 | Der er tænkt på sikkerheden i løsningen | sandkasse | Beskriv hvordan sikkerhed er indtænkt i design, kode og drift – f.eks. kryptering, adgangsstyring. | Ja | Der er i høj grad tænkt på sikkerheden i løsningen. Der er brugervendt adgangsstyring, logning mv. Der er udarbejdet ISAE revisionsrapport, der beskriver driftsmiljøet. Der er udarbejdet en beskrivelse af sikkerheden på produktet fra leverandøren. Der kan fremsendes dokumentation, hvis nødvendigt. |
| F5 | Løsningens formål og værdi er beskrevet | sandkasse | Henvis til dokumentation (f.eks. README) hvor formål og målgruppe fremgår. | Ja | Der er en beskrivelse af løsningen på OS2 web på https://www.os2.eu/os2rollekatalog. |
| F6 | Kildekoden er overdraget og er placeret under OS2's kontrol | 1 | Bekræft og link til det officielle repository i OS2s versionskontrol. | Ja | Ligger på GitHub og tilgængelig via OS web på https://github.com/OS2rollekatalog |
| F7 | Alt dokumentation til projektet udarbejdes med og overholder OS2s standardskabelon for dokumentation. | 1 | Brug OS2’s standard template til dokumentation. [Documentation template for OS2 projects](http://github.com/OS2offdig/os2-docs-template) | Planlagt | Delvist. Vi overholder ikke skabelonen, men dokumentationen er tilgængelig. Er placeret sammen med koden i repository på GitHub. OS2 har et arbejdet med at udbygge forklaring til skabelonen. |
| F10 | OS2's kommunikationskanaler anvendes (OS2.eu) | 1 | Bekræft og link til omtale på f.eks. os2.eu, nyhedsbrev eller andet. | Ja | Alle nyhedsbreve oprettes i Heyloyality som er anvist til det brug af OS2 sekretariatet. Nyhedsbreve lægges også ud på OS2 web i det omfang sekretariatet har tid til at hjælpe med det. |
| F11 | Der anvendes offentlig issue-tracking anvist af OS2, hvor der tydeligt henvises til specifikke kodeændringer | 1 | Henvis til f.eks. Issues, hvor opgaver er koblet til pull-requests/commits. | Ja | Vi bruger OS2's Jira. Det kan der ses hvornår Jira issues er lukket og hvilket release de enkelte Jira issues hører til. |
| F12 | Der er kun en version af core koden | 2 | Bekræft at der kun findes én ‘main’ version og at den er aktivt vedligeholdt. | Ja | Der er kun én udgave af OS2rollekatalog. |
| F13 | Der er udarbejdet præsentationsmateriale af løsningen | 2 | Link til f.eks. slides, brochurer eller andet introduktionsmateriale. | Ja | Der ligger materiale på OS2web og i OS2s filarkiv, fx. her: https://boks.os2.eu/s/Di5cTQdSABd6ak4?dir=/Arrangementer/2026.01.19%20F%C3%A6lles%20inspirationsdag_%20organisations-%2Cbruger-%2C%20og%20rettighedsstyring/Workshop%20E%20-%20Rundbordsdr%C3%B8ftelse%20om%20de%20tre%20produkter%20-%20OS2mo%2C%20OS2sofd%20og%20OS2rollekatalog&editing=false&openfile=true |
| F14 | Der er udarbejdet kommunikationsmateriale til strategisk niveau | 2 | F.eks. businesscase, one-pager til direktionsniveau og præsentation til udvalg. | Ikke relevant | Der mangler en skabelon. |
| F15 | Best practice for implementering i organisationen dokumenteres | 2 | Angiv implementeringsvejledning, erfaringsopsamling eller cases. | Ja | Der er udarbejdet drejebog for implementering af OS2rollekatalog. Der kan fremsendes dokumentation, hvis nødvendigt. |
| F16 | Teknisk dokumentation indeholder best practice for kodestandarder i forhold til de anvendte teknologier | 2 | Beskriv Hvilke kodestandarder projektet følger. Evt. med links til eksterne guides og supplerende retningslinjer. | Nej | OS2rollekatalog er et ældre produkt og der er et vist element af teknisk gæld. Det vil være hensigtsmæssigt om OS2 har nogle principper eller retningslinjer for teknisk dokumentation. |
| F17 | Drifts og vedligeholdelses setup er beskrevet | 2 | Redegør for driftspartner(e), ansvar og finansiering. Hvem drifter, hvem vedligeholder og hvem koordinere. Beskriv også Hvordan kører løsningen? (on-prem, cloud, container, SaaS). Hvilke komponenter indgår? (fx databaser, API’er, microservices). Hvilke værktøjer bruges til monitorering, deployment og backup. | Ja | Der er udarbejdet en generel driftshåndbog for driften af OS2rollekatalog. Dokumentation kan fremsendes, hvis nødvendigt. |
| F18 | Rammearkitekturen og standarder er fulgt og afvigelser er forklaret | 2 | Beskriv om/hvordan løsningen følger fællesoffentlig rammearkitektur – eller forklar hvorfor ikke. | Ja | OS2rollekatalog følger intentionerne og principper i rammearkitekturen. |
| F19 | Løsningen er leveret i et containerformat f.eks. docker (anbefaling) | 2 | Angiv om løsningen tilbydes i en containeriseret version som definerer hvordan applikationen bygges og køres. | Ja | Ja. |
| F20 | Uddannelsesmateriale er udarbejdet (anbefaling) | 2 | Henvis til manual, brugervejledning eller andet brugerrelateret materiale. | Ja | Der er brugervejledning i OS2rollekataloget. |
| F21 | Politisk kommunikation er udarbejdet (Lokal + Omverden) | 3 | Angiv indhold der kan bruges i politiske fora – f.eks. beslutningsoplæg eller pressemeddelelse. | Ikke relevant | Ikke vurderet vigtigt. |
| F22 | Procesplan + procesansvar for driftsimplementering er udarbejdet | 3 | Tilføj en implementeringsplan med ‘hvem gør hvad hvornår’. | Ja | Der er udarbejdet drejebog for implementering hos driftsleverandøren. |

## STRATEGISK SAMMENHÆNG

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
| S1 | Produktet har en kobling til OS2's strategi | 1 | Beskriv hvordan produktet understøtter tværoffentlige behov, deling og fællesskab. | Ja | Se OS2 vision og mission. Produktet løser et konkret problem for kommunerne. |
| S2 | Løsningen understøtter innovation og open source | 1 | Angiv hvordan open source-værdier og nyskabelse er tænkt ind. | Ja | OS2rollekatalog fremmer innovation og åbenhed. Koden er tilgængelig på GitHub. Ellers er der ikke foretaget yderligere for at fremme Open Source. |
| S3 | Produktets (forventlige) kobling til OS2's mission, vision og strategi er beskrevet | 2 | Angiv hvor produktet matcher med OS2's formål og indsatser. | Ja | OS2rollekatalog understøtter OS2 formål i forhold til effektiv  digitalisering af den offentlige sektor og er et produkt, der skaber værdi for de 52 kommuner og Datatilsynet, der pr. anvender produktet. OS2rollekatalog styrker åbenhed og fælles løsninger, der udvikles i fællesskabet og af fællesskabet. |
| S4 | Der er udarbejdet en vision og strategi for produktet | 2 | Beskriv produktvision og strategiske mål. | Nej | Der er ikke udarbejdet produktvision og strategiske mål, men der er udarbejdet en produktidentifikation for produktet i 2024 og der arbejdes på en opdatering af denne til en 2026-version. Den nuværende kan ses på OS2 web her: https://www.os2.eu/os2rollekatalog. Produktidentifikationen sætter rammer og udviklingsretning for produktfællesskabet i OS2rollekatalog. |
| S5 | Produktets kobling til og overensstemmelse med OS2's vision og strategi er tilstede og beskrevet | 3 | Forklar hvordan løsningen passer ind i OS2’s overordnede værdisæt og visioner. | Ja | Se under S1 og S3. |

## GOVERNANCE

| # | Krav | Produktniveau | Retningslinjer | Efterlevet? | Dokumentation |
| --- | --------------------------------------------- | ------------- | -------------- | ----------- | ------------- |
 | G1 | Produktet er oprettet i OS2's porteføljestyring | 1 | Produktet er oprettet på OS2s hjemmeside og indgår i årshjul. Dette koordineres med sekretariatet i OS2. | Ja | Produktet er beskrevet på OS2 web. |
| G2 | Der koordineres løbende med OS2-sekretariatet | 1 | Bekræft, evt. med årshjul/datoer/mails for koordinering. | Ja | Der koordineres løbende med  OS2 sekretariatet. |
| G3 | Der er udpeget en projektleder/tovholder | 1 | Navngiv og beskriv rolle og opgaver. | Ja | Produktkoordinator er Mette Valbjørn, Favrskov Kommune. Varetager alle opgaver i relation til produktet og samarbejde med leverandør og anvendere. |
| G4 | Bestyrelsen er orienteret | 1 | Vedlæg dokumentation for orientering. | Ja | Bestyrelsen har igennem mange år kendt til OS2rollekatalog og har drøftet produktet og det anses derfor for godkendt. OS2rollekatalog er nævnt i bestyrelsesreferater tilbage fra 2017 og 2018. |
| G5 | Bestyrelsen har godkendt produktet | 2 | Vedlæg dokumentation for godkendelse. | Ja | OS2rollekatalog har eksisteret i en del år - nok ca. 10 år. Marie Gottlieb Daneskiold-Samsøe fra bestyrelsen er med i styregruppen for OS2rollekatalog. <br/>Bestyrelsen har kendt til OS2rollekatalog i mange år og har godkendt produktet. Se det åbne filarkiv hos OS2, hvor rollekataloget er omtalt i bestyrelsessammenhæng.  Link indsættes. |
| G6 | Der er nedsat en styregruppe | 2 | Beskrivelse af styregruppen og roller/ansvar/opgaver. | Ja | Roller, ansvar og opgaver for styregruppen er beskrevet i kommissorium for styregruppen under produktet på OS2 web |
| G7 | Der er nedsat en koordinationsgruppe (anbefaling) | 2 | Beskrivelse af koordinationsgruppen og roller/ansvar/opgaver. | Ja | Roller, ansvar og opgaver for koordinationsgruppen er beskrevet i kommissorium for koordinationsgruppen under produktet på OS2 web. |
| G8 | En projektmodel anvendes og er dokumenteret (anbefaling) | 2 | Beskiv den anvendte projektmodel eller metode. | Nej | Der anvendes ikke en specifik projektmodel. |
| G9 | Review af kode foretages af tredjepart (anbefaling) | 2 | Angiv hvilken ekstern part som udfører eller har udført review. Link til processbeskrivelse samt revisionsrapporter. | Ja | Er gjort en gang i maj 2018. Udarbejdet af Strong Minds. |
| G10 | Der er udarbejdet en tilslutningserklæring til sikring af økonomi (anbefaling) | 2 | Vedlæg eller henvis til dokument for tilslutning og økonomi. | Ja | Alle anvendere skal tilslutte sig produktet via en erklæring, der fremsendes til OS2 sekretariatet. |
| G11 | Bestyrelsen har godkendt styregruppen | 3 | Vedlæg dokumentation for beslutning. | Planlagt | Uklart spørgsmål. Der er en fuldt funktionsdygtig styregruppe på OS2rollekatalog. Skal bestyrelsen løbende godkende, når der sker ændringer i styregruppen? |
| G12 | Bestyrelsen er repræsenteret i styregruppen | 3 | Angiv hvilket medlem som deltager på vegne af bestyrelsen. | Ja | Marie Gottlieb Daneskiold-Samsøe |
| G13 | Der foreligger en aftale der sikrer økonomi til koordinering og videreudvikling | 3 | Vedlæg eller beskriv finansieringsaftalen. | Ja | Kommuner og andre anvendere betaler et årligt beløb for at anvende produktet. OS2 sekretariatet står for at udsende faktura til kommunerne. OS2rollekatalog har en stærk økonomi. Der udarbejdes årligt regnskab og budget og der er afsat midler til produktkoordination og udvikling. |
| G14 | Der er etableret et fagligt fællesskab bag løsningen hvor erfaringer kan udveksles | 3 | Henvis til brugerforum og/eller årshjul for aktiviteter. | Ja | Der afholdes ERFA-møder for alle anvendere af produktet. Der afholdes online releasemøder for hver release af produktet for alle anvendere. Der udsendes løbende nyhedsbreve til alle anvendere. Der er udarbejdet årshjul med aktiviteter. Alle anvendere kan komme med udviklingsønsker til OS2rollekatalog og ønskerne drøftes på koordinationsgruppens møder. |