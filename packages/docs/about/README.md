---
sidebar: auto
---

# Intro

Ich stelle mir vor, dass es ein Programm gibt, mit dem wir unseren Lebenslauf 
verwalten können. Kostenlos, frei verfügbar und änderbar durch jeden. Einfach 
Open Source.

Das Programm soll es uns ermöglichen, den Lebenslauf aus sozialen Netzen wie 
LinkedIn und Facebook zu importieren. Und natürlich soll es den Lebenslauf in 
diese Netze exportieren können.

Es soll auch den Europass, das Europäische-Rahmenkonzept für Bewerber, 
importieren und exportieren können.

Und es soll den Lebenslauf als Hire-me-Page in Form einer statischen Github Page 
exportieren können.

Wir hätten dann ein Tool, mit dem wir unseren persönlichen Werdegang bequem 
verwalten und lokal speichern können. Die Vorteile sind ganz klar:

* Wir könnten mit einem Klick entscheiden, in welchem Netzwerk ein neuer 
Karriereschritt veröffentlicht werden soll
* Je nach Kontext könnten wir sagen, ob wir den Lebenslauf per PDF als  Bewerbung 
auf eine konkrete Stellenanzeige versenden wollen, oder ob  wir uns öffentlich auf 
dem globalen Markt präsentieren wollen.

Es muss unter Windows, macOS und Linux laufen und auf dem Handy als APP funktionieren.

Und wenn wir so ein Programm haben, muss es auch eine Bildbearbeitung ermöglichen. 
Wie auf einem Handy muss ein Profilbild in der Größe und dem Ausschnitt verändert 
werden können. Denn Profilbilder haben in Sozialen Netzen und dem Europass ein 
unterschiedliches Format.

Klingt kompliziert, ist es aber nicht.


## Aktueller Stand

In einem Proof of Concept haben wir unsere Homepage mit aktuellen Technologien 
erneuert. Hervorheben möchte ich:

* Die Webseite funktioniert als Programm unter Windows, iOS und Linux.
* Die Webseite läuft auch "offline" als [PWA](https://de.wikipedia.org/wiki/Progressive_Web_App)
* [Google Pagespeed](https://developers.google.com/speed/pagespeed/insights/?hl=de&url=cross-solution.de)
bewertet die Seite nicht schlecht. Obwohl noch kein Augenmerk auf gute Ladezeiten gelegt wurde.

Die Website dient in erster Linie als Proof of Concept für den Smart Composer um offene Fragen zu klären.

## Technologie

Die Homepage basiert auf [quasar](https://quasar.dev). Die Dokumentation nutzt [vuepress](https://vuepress.vuejs.org/)

## Installation

Der Quellcode muss aus dem Github Repository geklont werden. Um eine 
Entwicklungsumgebung zu starten, benötigt man [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) und [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable). 
Die folgenden Kommandos holen den Quellcode und installieren die Abhängigkeiten.

```bash
git clone https://github.com/cross-solution/cross-solution.de.git
cd cross-solution.de
yarn
```

Die Anwendung kann im Entwicklungs Modus mit hot-code reloading, error reporting, etc.
als Single Page APP oder als Server Side Redering App gestartet werden.

Start in Single Page Appication (spa) development mode

```bash
yarn dev
```

Start in Server Side Render (ssr) development mode

```bash
yarn dev:ssr
```

optional kann per `.env` z.B. der Ort des Backends (Strapi) konfiguriert
werden. Azu kopiert man `.env.example` in `.env` und passt die Werte an.

Die Applikation läuft auch ohne Backend. 

Ohne dem Backend kann man sich nicht registrieren bzw. anmelden.



