# Geschiedenis van het heelal

Een geanimeerde tijdreis van de oerknal tot nu, in 15 scènes van 12 seconden (3 minuten in totaal). Alles wordt live getekend op een `<canvas>` en de muziek wordt live gemaakt met de Web Audio API. Er zijn geen afbeeldingen, frameworks of build-stap nodig.

## Starten

Open `index.html` in een browser. Een lokale webserver is niet nodig.

De animatie start automatisch. De muziek begint pas na een klik op **Muziek aan** (of op een van de knoppen), omdat browsers geluid pas toestaan na een actie van de gebruiker.

## Bediening

| Toets / knop | Actie |
|---|---|
| Klik op het beeld, spatie | Pauzeren / afspelen |
| ← → | Vorige / volgende scène |
| H | Tekst verbergen of tonen |
| M | Muziek dempen |
| Muzieknoot-knop | Eigen muziekbestand kiezen (nog een keer klikken: terug naar de ingebouwde score) |

De tijdlijn onderin is klikbaar. De bediening verdwijnt na 3 seconden zonder muisbeweging.

### URL-parameters

- `?t=40`: begin op seconde 40
- `?paused`: begin gepauzeerd

Als het systeem *verminderde beweging* (`prefers-reduced-motion`) aangeeft, start de animatie gepauzeerd.

## De scènes

1. De oerknal
2. Het heelal wordt doorzichtig
3. De eerste sterren
4. Sterrenstelsels
5. De zon en de planeten
6. De jonge aarde en de maan
7. Het eerste leven
8. Het leven verovert de aarde
9. Rechtop lopen
10. Vuur en vuistbijlen
11. Homo sapiens trekt de wereld over
12. Kunst in de ijstijd
13. De eerste boeren
14. Steden, wiel en schrift
15. Eén wereld

## Muziek

Standaard speelt een zelf gegenereerde score in de stijl van Hans Zimmer: orgel, tikkende klok, strijkers-ostinato en zware klappen op de grote momenten. Die loopt synchroon met de animatie, ook als je doorspoelt of pauzeert.

Wil je eigen muziek, dan kan dat op twee manieren:

- Zet een bestand in `muziek/soundtrack.mp3`. Als dat bestand bestaat, wordt het automatisch gebruikt.
- Kies een bestand met de muzieknoot-knop. Dat geldt alleen voor de huidige sessie.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `index.html` | Pagina, overlays en bediening |
| `style.css` | Opmaak |
| `script.js` | Scènes (tekst en weetjes in `SCENES`), tekenwerk en tijdlijn |
| `music.js` | De score (`SCORE`) en de synthese met Web Audio |

### Aanpassen

- **Tekst van een scène**: pas het betreffende item in `SCENES` bovenaan `script.js` aan (`title`, `txt`, `fact` en de tijdmarkeringen in `marks`).
- **Duur per scène**: `DUR` in `script.js` (in seconden). De muziek past zich vanzelf aan.
- **Muziek per scène**: akkoorden, intensiteit en klappen staan in `SCORE` in `music.js`, één regel per scène.
