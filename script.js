(() => {
const SCENES = [
  { t: '13,8 mld', meta: '13,8 miljard jaar geleden', title: 'De oerknal',
    txt: "Alle materie, alle energie en de ruimte zelf zaten samen in een onvoorstelbaar hete, dichte toestand. Dan dijt de ruimte razendsnel uit. Binnen drie minuten ontstaan protonen, neutronen en de eerste atoomkernen: waterstof en helium.",
    fact: '<b>Geen explosie:</b> de oerknal was geen ontploffing ergens ín de ruimte, maar het uitdijen ván de ruimte zelf, overal tegelijk.',
    marks: [[0, 't = 0'], [.08, '10⁻³² seconde na de oerknal'], [.35, '1 seconde na de oerknal'], [.6, '3 minuten na de oerknal']] },
  { t: '13,8 mld', meta: '380.000 jaar na de oerknal', title: 'Het heelal wordt doorzichtig',
    txt: "Eerst is het heelal een gloeiende mist van losse deeltjes waar licht niet doorheen komt. Als het is afgekoeld tot zo'n 3000 graden, vangen atoomkernen elektronen en ontstaan de eerste atomen. Ineens kan licht vrij reizen. Daarna volgen de donkere eeuwen: er zijn nog geen sterren.",
    fact: '<b>Nagloed:</b> dat eerste vrije licht zien we nu nog, als zwakke microgolfstraling uit alle richtingen: de kosmische achtergrondstraling.',
    marks: [[0, '380.000 jaar na de oerknal'], [.72, 'de donkere eeuwen']] },
  { t: '13,6 mld', meta: '± 100 tot 200 miljoen jaar na de oerknal', title: 'De eerste sterren',
    txt: "Zwaartekracht trekt het gas samen tot dichte wolken. In hun kern wordt het zo heet dat kernfusie begint: de eerste sterren gaan branden. Ze zijn reusachtig, leven kort en eindigen in een supernova die nieuwe elementen de ruimte in blaast.",
    fact: '<b>Sterrenstof:</b> zwaardere elementen zoals koolstof, zuurstof en ijzer worden in sterren gemaakt. Het ijzer in je bloed kwam ooit uit een ster.',
    marks: [[0, '100 miljoen jaar na de oerknal'], [.45, 'de eerste sterren ontbranden'], [.78, 'supernova']] },
  { t: '12,8 mld', meta: 'vanaf ± 1 miljard jaar na de oerknal', title: 'Sterrenstelsels',
    txt: "Sterren klonteren samen in sterrenstelsels, die botsen en samensmelten. Ons sterrenstelsel, de Melkweg, is een platte spiraal die langzaam draait. Generatie na generatie sterren verrijkt het gas met nieuwe elementen.",
    fact: '<b>Melkweg:</b> 100 tot 400 miljard sterren. De zon doet er zo’n 230 miljoen jaar over om één rondje te draaien.',
    marks: [[0, '1 miljard jaar na de oerknal'], [.5, '5 miljard jaar na de oerknal'], [.85, '9 miljard jaar na de oerknal']] },
  { t: '4,6 mld', meta: '4,6 miljard jaar geleden', title: 'De zon en de planeten',
    txt: "In een arm van de Melkweg stort een wolk gas en stof ineen. In het midden ontbrandt de zon. In de draaiende schijf eromheen plakken stofkorrels samen tot rotsblokken, en rotsblokken tot planeten. De derde planeet vanaf de zon wordt de aarde.",
    fact: '<b>Snel gebouwd:</b> de aarde was in zo’n 10 tot 100 miljoen jaar grotendeels gevormd. Meteorieten zijn overgebleven bouwstenen uit die tijd.',
    marks: [[0, '4,6 miljard jaar geleden'], [.3, 'de zon ontbrandt'], [.6, 'planeten groeien']] },
  { t: '4,5 mld', meta: '4,5 miljard jaar geleden', title: 'De jonge aarde en de maan',
    txt: "De jonge aarde is een gloeiende bol magma. Een planeet zo groot als Mars, Theia, ramt haar. Uit het puin dat rond de aarde blijft draaien, klontert de maan samen. Langzaam koelt de aarde af: er ontstaat een korst, en uit waterdamp regent de eerste oceaan.",
    fact: '<b>Maan:</b> de maan stond toen veel dichterbij, misschien zo’n 25.000 km in plaats van 384.000 km nu. Hij beweegt nog steeds 3,8 cm per jaar van ons af.',
    marks: [[0, '4,5 miljard jaar geleden'], [.33, 'inslag van Theia'], [.6, 'de maan vormt zich'], [.8, '4,4 mld jaar geleden · eerste oceanen']] },
  { t: '3,8 mld', meta: '± 4 tot 3,5 miljard jaar geleden', title: 'Het eerste leven',
    txt: "Diep in de oceaan borrelt heet water vol mineralen uit de zeebodem. Daar kunnen moleculen zoals RNA ontstaan die zichzelf kopiëren. Ingepakt in een vettig vliesje worden het de eerste cellen. Ze delen zich, en elke kopie is net iets anders. Zo begint de evolutie.",
    fact: '<b>Oudste sporen:</b> de oudste fossiele aanwijzingen voor leven zijn zo’n 3,5 miljard jaar oud. Hoe leven precies begon, is nog een open vraag.',
    marks: [[0, '± 4 miljard jaar geleden'], [.3, '± 3,8 miljard jaar geleden'], [.5, 'cellen delen zich']] },
  { t: '2,4 mld', meta: '2,4 miljard tot 7 miljoen jaar geleden', title: 'Het leven verovert de aarde',
    txt: "Cyanobacteriën maken met zonlicht zuurstof en de lucht kleurt blauw. Na ijstijden waarin de aarde bijna helemaal bevriest, barst in het Cambrium het dierenleven los. Planten en dieren veroveren het land, de continenten schuiven, dinosaurussen komen en gaan, en na hun uitsterven krijgen de zoogdieren de ruimte.",
    fact: '<b>Inslag:</b> 66 miljoen jaar geleden sloeg een planetoïde van zo’n 10 km breed in bij Mexico. Driekwart van alle soorten stierf uit, waaronder de dinosaurussen, op de vogels na.',
    marks: [[0, '2,4 mld jaar geleden · zuurstof'], [.22, '700 mln jaar geleden · sneeuwbal-aarde'], [.4, '540 mln jaar geleden · Cambrium'], [.55, '470 mln jaar geleden · planten aan land'], [.72, '66 mln jaar geleden · inslag'], [.88, '7 mln jaar geleden · de eerste mensachtigen']] },
  { t: '7 mln', meta: '7 tot 3 miljoen jaar geleden', title: 'Rechtop lopen',
    txt: "In Afrika splitst de lijn van de mens zich af van die van de chimpansee. Onze verre voorouders gaan steeds vaker op twee benen lopen, door een landschap van bosjes en open grasvlakten. Hun hersenen zijn nog klein, zo groot als die van een chimpansee. Ruim drie miljoen jaar geleden slaan ze de eerste eenvoudige stenen werktuigen.",
    fact: '<b>Voetsporen:</b> in Laetoli (Tanzania) liepen 3,7 miljoen jaar geleden een paar mensachtigen door verse vulkanische as. Hun voetafdrukken zijn nog steeds te zien.',
    marks: [[0, '7 miljoen jaar geleden'], [.3, '3,7 miljoen jaar geleden · Laetoli'], [.78, '3,3 miljoen jaar geleden · eerste stenen werktuigen']] },
  { t: '1,8 mln', meta: '± 1,8 miljoen tot 400.000 jaar geleden', title: 'Vuur en vuistbijlen',
    txt: "Homo erectus is lang, loopt soepel op twee benen en heeft grotere hersenen. Hij maakt symmetrische vuistbijlen en trekt als eerste mensensoort Afrika uit, tot ver in Azië. Ergens in deze periode leren mensen vuur te gebruiken: eerst van natuurlijke branden, later houden ze het zelf brandend.",
    fact: '<b>Koken:</b> gekookt voedsel is makkelijker te kauwen en te verteren. Volgens sommige onderzoekers hielp vuur zo mee aan de groei van onze hersenen.',
    marks: [[0, '1,8 miljoen jaar geleden'], [.06, 'blikseminslag'], [.46, 'een eigen vuur'], [.75, '± 400.000 jaar geleden · vaste haardplaatsen']] },
  { t: '300.000', meta: '300.000 tot 15.000 jaar geleden', title: 'Homo sapiens trekt de wereld over',
    txt: "Onze eigen soort, Homo sapiens, ontstaat in Afrika. Zo’n 70.000 jaar geleden trekken groepen het continent uit, langs de kusten naar Azië en met vlotten naar Australië, later ook naar Europa. In de ijstijd ligt de zeespiegel lager: over een landbrug bij de Beringstraat bereiken mensen Amerika.",
    fact: '<b>Familie:</b> onderweg ontmoeten ze andere mensensoorten, zoals Neanderthalers en Denisovamensen. Bijna iedereen buiten Afrika heeft nog zo’n 1 à 2 procent Neanderthaler-DNA.',
    marks: [[0, '300.000 jaar geleden · Afrika'], [.22, '± 70.000 jaar geleden · uit Afrika'], [.4, '± 50.000 jaar geleden · Australië'], [.5, '± 45.000 jaar geleden · Europa'], [.66, '± 16.000 jaar geleden · Amerika']] },
  { t: '40.000', meta: '± 45.000 tot 15.000 jaar geleden', title: 'Kunst in de ijstijd',
    txt: "Diep in grotten, bij het licht van fakkels en vetlampjes, schilderen mensen paarden, oerossen en herten op de rotswand. Ze blazen rode oker rond hun hand en laten zo een afdruk achter. Er klinkt muziek: de oudste fluiten zijn gemaakt van vogelbotten.",
    fact: '<b>Oudste kunst:</b> op het Indonesische eiland Sulawesi zijn grotschilderingen gevonden van ruim 45.000 jaar oud. Meer over het dagelijks leven in deze tijd: <i>Dag van een oermens</i>.',
    marks: [[0, '± 40.000 jaar geleden'], [.45, 'een handafdruk'], [.78, '± 17.000 jaar geleden · Lascaux']] },
  { t: '12.000', meta: '± 12.000 jaar geleden', title: 'De eerste boeren',
    txt: "Na de laatste ijstijd wordt het warmer. In het Midden-Oosten gaan mensen wilde granen zaaien en geiten en schapen houden. Ze blijven op één plek wonen, in huizen van leem. Er is meer voedsel en dorpen groeien. Het leven als jager-verzamelaar maakt langzaam plaats voor de landbouw.",
    fact: '<b>Op veel plekken tegelijk:</b> landbouw ontstond op meerdere plaatsen los van elkaar: tarwe in het Midden-Oosten, rijst in China, maïs in Midden-Amerika. In Nederland (Limburg) woonden ruim 7.000 jaar geleden de eerste boeren.',
    marks: [[0, '± 12.000 jaar geleden'], [.05, 'zaaien'], [.4, 'het graan groeit'], [.76, 'oogsten']] },
  { t: '5.500', meta: '± 5.500 tot 4.500 jaar geleden', title: 'Steden, wiel en schrift',
    txt: "Tussen de rivieren Eufraat en Tigris groeien dorpen uit tot de eerste steden, zoals Uruk, met een tempel op een hoge trappenpiramide. Ossen trekken karren op wielen. Om bij te houden wie wat moet leveren, drukken schrijvers tekens in natte klei: het eerste schrift. Iets later bouwen de Egyptenaren hun piramides.",
    fact: '<b>Spijkerschrift:</b> de oudste kleitabletten uit Uruk zijn zo’n 5.200 jaar oud. Het zijn vooral boekhoudlijstjes: hoeveel gerst, bier en schapen.',
    marks: [[0, '± 5.500 jaar geleden · Uruk'], [.08, 'het wiel'], [.42, '± 5.200 jaar geleden · het eerste schrift'], [.74, '± 4.500 jaar geleden · piramides van Gizeh']] },
  { t: 'nu', meta: '500 jaar geleden tot nu', title: 'Eén wereld',
    txt: "Schepen varen de wereld rond, de industriële revolutie brengt stoommachines, fabrieken en elektriciteit, en steden lichten op in de nacht. In 1969 lopen de eerste mensen op de maan. Nu wonen er ruim 8 miljard mensen op aarde, verbonden door duizenden satellieten.",
    fact: '<b>Kosmische kalender:</b> prop je de hele geschiedenis van het heelal in één jaar, dan verschijnt de mens op 31 december om zo’n 11 minuten voor middernacht, en beslaat alles sinds de uitvinding van het schrift de laatste 12 seconden.',
    marks: [[0, '± 500 jaar geleden · ontdekkingsreizen'], [.25, '± 250 jaar geleden · industriële revolutie'], [.55, '1969 · mensen op de maan'], [.8, 'nu · ruim 8 miljard mensen']] },
];
const DUR = 12, TOTAL = DUR * SCENES.length;
const W = 960, H = 540, FOV = 600, TAU = Math.PI * 2;

const cv = document.getElementById('scene');
const ctx = cv.getContext('2d');
let T = 0, playing = true, speed = 1, last = performance.now();

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const span = (p, a, b) => clamp((p - a) / (b - a));
const hash = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const mixRGB = (a, b, t) => { const A = hex(a), B = hex(b); return A.map((v, i) => Math.round(lerp(v, B[i], clamp(t)))).join(','); };
const mix = (a, b, t) => `rgb(${mixRGB(a, b, t)})`;
const rampAt = (stops, t) => { t = clamp(t) * (stops.length - 1); const k = Math.min(stops.length - 2, Math.floor(t)); return mix(stops[k], stops[k + 1], t - k); };
const HOT = Array.from({ length: 24 }, (_, k) => rampAt(['#ffffff', '#fff1c4', '#ffc06a', '#ff7a3a', '#d8452a', '#8a2a3a'], k / 23));

/* ---------- 3D camera ---------- */
const cam = { cy: 1, sy: 0, cp: 1, sp: 0, dist: 900 };
function setCam(yaw, pitch, dist) { cam.cy = Math.cos(yaw); cam.sy = Math.sin(yaw); cam.cp = Math.cos(pitch); cam.sp = Math.sin(pitch); cam.dist = dist; }
function rot(x, y, z) {
  const x1 = x * cam.cy - z * cam.sy, z1 = x * cam.sy + z * cam.cy;
  return [x1, y * cam.cp - z1 * cam.sp, y * cam.sp + z1 * cam.cp];
}
function P(x, y, z) {
  const r = rot(x, y, z), zz = r[2] + cam.dist; if (zz < 20) return null;
  const s = FOV / zz; return [W / 2 + r[0] * s, H / 2 + r[1] * s, s, zz];
}
function dot(x, y, z, sz, col, a) {
  const q = P(x, y, z); if (!q || q[0] < -6 || q[0] > W + 6 || q[1] < -6 || q[1] > H + 6) return;
  const s = sz * q[2]; ctx.globalAlpha = a; ctx.fillStyle = col;
  if (s < 2.5) ctx.fillRect(q[0] - s / 2, q[1] - s / 2, s, s);
  else { ctx.beginPath(); ctx.arc(q[0], q[1], s / 2, 0, TAU); ctx.fill(); }
}
function glow(x, y, r, a, col) {
  if (r <= 0 || a <= 0) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`);
  const op = ctx.globalCompositeOperation; ctx.globalCompositeOperation = 'lighter';
  ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  ctx.globalCompositeOperation = op;
}

/* ---------- shared data ---------- */
const N = 1600;
const PT = Array.from({ length: N }, (_, i) => {
  const th = hash(i * 3 + 1) * TAU, ph = Math.acos(2 * hash(i * 7 + 2) - 1);
  return { d: [Math.sin(ph) * Math.cos(th), Math.cos(ph), Math.sin(ph) * Math.sin(th)], r: Math.cbrt(hash(i * 11 + 3)), a: hash(i * 13 + 4), b: hash(i * 17 + 5), c: hash(i * 19 + 6) };
});
const BG = Array.from({ length: 700 }, (_, i) => ({ d: PT[i * 2].d, m: .4 + hash(i * 23) * 1.2, tw: hash(i * 29) * 6 }));
function bgStars(a) {
  if (a <= 0) return;
  ctx.fillStyle = '#fff';
  for (const s of BG) {
    const r = rot(s.d[0], s.d[1], s.d[2]); if (r[2] < .2) continue;
    const x = W / 2 + r[0] / r[2] * FOV, y = H / 2 + r[1] / r[2] * FOV;
    if (x < 0 || x > W || y < 0 || y > H) continue;
    ctx.globalAlpha = a * (.5 + .5 * Math.sin(T * 1.3 + s.tw)); ctx.fillRect(x, y, s.m, s.m);
  }
  ctx.globalAlpha = 1;
}
function bg(col = '#02030a') { ctx.globalAlpha = 1; ctx.fillStyle = col; ctx.fillRect(0, 0, W, H); }

// continents and clouds for globes
const LAND = [], CLOUDS = [];
for (let c = 0; c < 12; c++) {
  const clat = (hash(c * 7.3) - .5) * 2.0, clon = hash(c * 3.7) * TAU, dr = (hash(c * 5.1) - .5) * 2;
  for (let j = 0; j < 7; j++) LAND.push({ lat: clat + (hash(c * 10 + j) - .5) * .5, lon: clon + (hash(c * 20 + j) - .5) * .7, s: .12 + hash(c * 30 + j) * .14, dr });
}
for (let k = 0; k < 22; k++) CLOUDS.push({ lat: (hash(k * 41) - .5) * 2.4, lon: hash(k * 43) * TAU, s: .06 + hash(k * 47) * .12, dr: 0 });

function globe(cx, cy, R, rotY, o) {
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.clip();
  ctx.globalAlpha = 1; ctx.fillStyle = o.base; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
  const surf = (list, col, a, extra) => {
    ctx.fillStyle = col; ctx.globalAlpha = a;
    for (const pt of list) {
      const lon = pt.lon + rotY + extra + (o.drift || 0) * pt.dr, cl = Math.cos(pt.lat), z = cl * Math.cos(lon);
      if (z < -.05) continue;
      ctx.beginPath();
      ctx.ellipse(cx + R * cl * Math.sin(lon), cy - R * Math.sin(pt.lat), Math.max(.5, pt.s * R * Math.max(.08, Math.cos(lon))), pt.s * R * Math.max(.25, cl) * .8, 0, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  surf(LAND, o.land, 1, 0);
  const ice = Math.max(o.ice || 0, o.caps || 0);
  if (ice > 0) {
    ctx.fillStyle = 'rgba(240,246,255,.95)';
    ctx.beginPath(); ctx.ellipse(cx, cy - R, R * (.5 + ice * .9), R * (.12 + ice * 1.0), 0, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx, cy + R, R * (.5 + ice * .9), R * (.12 + ice * 1.0), 0, 0, TAU); ctx.fill();
    if (o.ice > 0) { ctx.fillStyle = `rgba(235,243,255,${o.ice * .6})`; ctx.fillRect(cx - R, cy - R, R * 2, R * 2); }
  }
  if (o.clouds > 0) surf(CLOUDS, '#ffffff', o.clouds * .7, T * .05);
  if (o.lava > 0) glow(cx, cy, R * 1.1, .3 * o.lava, '255,120,40');
  if (o.dark > 0) { ctx.fillStyle = `rgba(40,28,20,${o.dark})`; ctx.fillRect(cx - R, cy - R, R * 2, R * 2); }
  const g = ctx.createRadialGradient(cx - R * .55, cy - R * .3, R * .05, cx - R * .3, cy - R * .15, R * 1.45);
  g.addColorStop(0, 'rgba(255,250,235,.18)'); g.addColorStop(.45, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,6,.88)');
  ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
  ctx.restore();
  if (o.atmoA > 0) {
    const a = ctx.createRadialGradient(cx, cy, R * .9, cx, cy, R * 1.16);
    a.addColorStop(0, `rgba(${o.atmo},0)`); a.addColorStop(.38, `rgba(${o.atmo},${o.atmoA})`); a.addColorStop(1, `rgba(${o.atmo},0)`);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = a; ctx.fillRect(cx - R * 1.2, cy - R * 1.2, R * 2.4, R * 2.4); ctx.restore();
  }
}
function sphere(x, y, r, col, sun) {
  if (r < .5) return;
  const dx = sun[0] - x, dy = sun[1] - y, L = Math.hypot(dx, dy) || 1, gx = x + dx / L * r * .5, gy = y + dy / L * r * .5;
  ctx.globalAlpha = 1; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r * 2);
  g.addColorStop(0, 'rgba(255,255,255,.25)'); g.addColorStop(.35, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,8,.92)');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
}

/* ---------- scenes ---------- */
function scene0(p, lt) { // big bang
  bg('#000'); setCam(lt * .06, .35, 900);
  if (p < .07) { const g = span(p, 0, .07); glow(W / 2, H / 2, 6 + 60 * g, .6 + .4 * g, '255,255,255'); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(W / 2, H / 2, 1 + 3 * g, 0, TAU); ctx.fill(); return; }
  const e = span(p, .07, 1), R = 8 + 680 * Math.pow(e, .5), temp = span(p, .1, 1);
  glow(W / 2, H / 2, R * .9, .55 * (1 - temp * .7), mixRGB('#fff6dc', '#c0402a', temp));
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < N; i++) {
    const pt = PT[i], w = Math.sin(lt * 3 + pt.a * 20) * 3, rr = pt.r * R + w;
    const k = Math.round(clamp(temp + (pt.a - .5) * .35) * 23);
    dot(pt.d[0] * rr, pt.d[1] * rr, pt.d[2] * rr, 2.6, HOT[k], .85);
  }
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  if (p < .26) { ctx.fillStyle = `rgba(255,255,255,${Math.pow(1 - span(p, .07, .26), 2)})`; ctx.fillRect(0, 0, W, H); }
}
function scene1(p, lt) { // recombination
  bg('#04050b'); setCam(.6 + lt * .04, .25, 900);
  ctx.globalCompositeOperation = 'lighter';
  const aa = .25 + .45 * span(p, .3, .8);
  for (let i = 0; i < N; i++) {
    const pt = PT[i], rr = pt.r * 700;
    dot(pt.d[0] * rr + Math.sin(lt * .4 + pt.a * 9) * 6, pt.d[1] * rr, pt.d[2] * rr, 1.8, pt.c > .9 ? '#ffe0b0' : '#bcd0ff', aa);
  }
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  const a = .95 * (1 - ease(span(p, .12, .72)));
  if (a > 0) {
    ctx.fillStyle = `rgba(232,120,52,${a * .88})`; ctx.fillRect(0, 0, W, H);
    for (let k = 0; k < 46; k++) {
      const bx = hash(k * 5) * W + Math.sin(lt * .25 + k) * 14, by = hash(k * 9) * H + Math.cos(lt * .2 + k) * 10, rr = 60 + hash(k * 13) * 130;
      const g = ctx.createRadialGradient(bx, by, 0, bx, by, rr), c = hash(k * 17) > .5 ? '255,200,120' : '170,60,30';
      g.addColorStop(0, `rgba(${c},${a * .45})`); g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(bx - rr, by - rr, rr * 2, rr * 2);
    }
  }
}
const C = Array.from({ length: 7 }, (_, k) => [(hash(k * 31 + 1) - .5) * 720, (hash(k * 37 + 2) - .5) * 320, (hash(k * 41 + 3) - .5) * 620]);
function scene2(p, lt) { // first stars
  bg(); setCam(.2 + lt * .05, .28, lerp(1050, 820, ease(p))); bgStars(span(p, .55, .95) * .6);
  const col = ease(span(p, 0, .55)), nova = span(p, .8, 1);
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < N; i++) {
    const pt = PT[i], k = i % 7, c = C[k], o = pt.r * 620;
    if (k === 2 && p > .8) {
      const rr = pt.r * 40 + nova * 330;
      dot(c[0] + pt.d[0] * rr, c[1] + pt.d[1] * rr, c[2] + pt.d[2] * rr, 2.6, pt.a > .5 ? '#ffb070' : '#7fd6ff', (1 - nova) * .9);
      continue;
    }
    const tr = pt.r * pt.r * 60 + 4;
    const x = lerp(pt.d[0] * o, c[0] + pt.d[0] * tr, col), y = lerp(pt.d[1] * o, c[1] + pt.d[1] * tr, col), z = lerp(pt.d[2] * o, c[2] + pt.d[2] * tr, col);
    const ig = span(p, .42 + k * .025, .5 + k * .025);
    dot(x, y, z, 2.2, ig > 0 && pt.r < .5 ? mix('#7f95d6', '#ffd8a8', ig) : '#7f95d6', .3 + .3 * col);
  }
  for (let k = 0; k < 7; k++) {
    const q = P(...C[k]); if (!q) continue;
    let ig = span(p, .42 + k * .025, .5 + k * .025);
    let flash = 0;
    if (k === 2) { flash = span(p, .78, .8) * (1 - span(p, .8, .95)); ig *= 1 - span(p, .8, .82); }
    const sz = (18 + 14 * hash(k * 3)) * q[2];
    glow(q[0], q[1], sz * 3 * ig + flash * 360, .7 * ig + flash, '190,215,255');
    if (ig > 0) { ctx.globalAlpha = ig; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(q[0], q[1], 2.5 * q[2] * 2, 0, TAU); ctx.fill(); }
  }
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
}
const FG = [[120, 90, 26, .4], [820, 110, 18, -.6], [770, 440, 22, .9], [170, 430, 14, .2], [600, 66, 11, 0]];
function scene3(p, lt) { // galaxy
  bg(); setCam(lt * .05, lerp(.12, 1.0, ease(span(p, 0, .55))), lerp(1250, 950, ease(p))); bgStars(.75);
  for (const [x, y, r, a] of FG) {
    glow(x, y, r * 2.4, .35, '200,210,255');
    ctx.globalAlpha = .5; ctx.fillStyle = '#e8e4ff'; ctx.beginPath(); ctx.ellipse(x, y, r * .7, r * .22, a, 0, TAU); ctx.fill();
  }
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < N; i++) {
    const pt = PT[i];
    if (pt.a < .24) { const s = 110 * pt.r; dot(pt.d[0] * s, pt.d[1] * s * .55, pt.d[2] * s, 2.4, '#ffdcaa', .7); continue; }
    const u = (pt.a - .24) / .76;
    for (let j = 0; j < 2; j++) {
      const rr = (45 + 560 * Math.pow(u, .85)) * (1 + j * .035), arm = i % 2;
      const th = arm * Math.PI + Math.log(rr / 45) / .3 + (pt.b - .5) * .9 + j * .08 - lt * .8 * (70 / (rr + 30));
      const pink = pt.c > .95 && j === 0;
      dot(Math.cos(th) * rr, (pt.c - .5) * 26 * (1 - rr / 650), Math.sin(th) * rr, pink ? 3.6 : 2.2, pink ? '#ff8cc0' : rr < 180 ? '#ffe8c8' : '#a9c2ff', .7);
    }
  }
  const q = P(0, 0, 0);
  if (q) glow(q[0], q[1], 130 * q[2], .55, '255,220,170');
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
}
const PL = [[90, '#a39a8f', 3], [125, '#e0c08a', 5], [165, '#4f8fd8', 5.5], [215, '#c8643c', 4], [290, '#d9b48a', 13], [360, '#e3cf9a', 11], [420, '#9fd6e0', 8], [470, '#4f6fd8', 8]];
function scene4(p, lt) { // sun and planets
  bg(); setCam(.3 + lt * .035, lerp(.22, .6, ease(span(p, 0, .4))), lerp(1000, 780, ease(p))); bgStars(.75);
  const col = ease(span(p, 0, .32)), fade = 1 - .88 * span(p, .45, .92), sunOn = span(p, .18, .36);
  const q0 = P(0, 0, 0);
  const ol = span(p, .65, .9);
  if (ol > 0) {
    ctx.strokeStyle = `rgba(244,239,228,${.13 * ol})`; ctx.lineWidth = 1;
    for (const pl of PL) { ctx.beginPath(); for (let k = 0; k <= 72; k++) { const a = k / 72 * TAU, q = P(Math.cos(a) * pl[0], 0, Math.sin(a) * pl[0]); if (q) k ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); } ctx.stroke(); }
  }
  ctx.globalCompositeOperation = 'lighter';
  const cs = Math.cos(lt * .15), sn = Math.sin(lt * .15);
  for (let i = 0; i < N; i++) {
    const pt = PT[i], rd = 55 + 470 * pt.a, w = lt * 2.2 * Math.pow(100 / rd, 1.5) + pt.b * TAU;
    const cx = pt.d[0] * pt.r * 520, cy = pt.d[1] * pt.r * 520, cz = pt.d[2] * pt.r * 520;
    const x = lerp(cx * cs + cz * sn, Math.cos(w) * rd, col), y = lerp(cy, (pt.c - .5) * 14 * (rd / 300), col), z = lerp(-cx * sn + cz * cs, Math.sin(w) * rd, col);
    dot(x, y, z, 2.6, rd < 160 ? '#ffcf8a' : '#c9ab8c', .5 * fade);
  }
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  const items = PL.map((pl, k) => {
    const g = ease(span(p, .4 + k * .02, .85)), a = k * 1.7 + lt * 2.2 * Math.pow(100 / pl[0], 1.5);
    return { q: P(Math.cos(a) * pl[0], 0, Math.sin(a) * pl[0]), g, pl, k };
  }).filter(o => o.q && o.g > 0).sort((a, b) => b.q[3] - a.q[3]);
  const planet = o => {
    const r = o.pl[2] * o.g * o.q[2] * 1.3;
    if (o.k === 5) { ctx.globalAlpha = .7; ctx.strokeStyle = '#d8c8a0'; ctx.lineWidth = Math.max(1, r * .25); ctx.beginPath(); ctx.ellipse(o.q[0], o.q[1], r * 2.1, r * 2.1 * Math.abs(cam.sp) * .9 + .5, 0, 0, TAU); ctx.stroke(); }
    sphere(o.q[0], o.q[1], r, o.pl[1], q0);
    if (o.k === 2 && p > .8) {
      ctx.globalAlpha = span(p, .8, .88); ctx.fillStyle = 'rgba(244,239,228,.9)'; ctx.font = '500 13px "Instrument Sans", system-ui, sans-serif';
      ctx.fillText('aarde', o.q[0] + r + 6, o.q[1] - r - 4); ctx.globalAlpha = 1;
    }
  };
  items.filter(o => o.q[3] > q0[3]).forEach(planet);
  glow(q0[0], q0[1], (60 + 170 * sunOn) * q0[2], .25 + .55 * sunOn, mixRGB('#ff5a2a', '#ffd27a', sunOn));
  ctx.globalAlpha = 1; ctx.fillStyle = mix('#c8452a', '#fff4d0', sunOn); ctx.beginPath(); ctx.arc(q0[0], q0[1], (8 + 14 * sunOn) * q0[2] * 1.3, 0, TAU); ctx.fill();
  items.filter(o => o.q[3] <= q0[3]).forEach(planet);
}
function scene5(p, lt) { // young earth, Theia, moon
  bg(); setCam(.4 + lt * .01, .05, 900); bgStars(.6);
  const sh = span(p, .32, .34) * (1 - span(p, .34, .46));
  ctx.save();
  if (sh > 0) ctx.translate((hash(lt * 100) - .5) * 16 * sh, (hash(lt * 100 + 3) - .5) * 16 * sh);
  const cx = W / 2 - 30, cy = H / 2 + 10, R = 135, rotY = lt * .35;
  const cool = span(p, .45, .82), ocean = span(p, .8, 1), lava = 1 - cool;
  const base = ocean > 0 ? mix('#3d2f2a', '#1f4f7c', ocean) : mix('#ff5a14', '#3d2f2a', cool);
  const land = mix('#2a1c16', '#5a4a3d', cool);
  const ma = lt * .45 + .6, ring = (a, rad) => [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad * .28];
  const debris = [];
  if (p > .33) {
    const e1 = ease(span(p, .33, .52)), e2 = ease(span(p, .55, .9));
    for (let i = 0; i < 420; i++) {
      const pt = PT[i]; let a = pt.b * TAU + lt * (1.1 - pt.a * .6), rad = lerp(R * .9, R * (1.25 + pt.a * 1.1), e1);
      a += ((((ma - a) % TAU) + TAU + Math.PI) % TAU - Math.PI) * e2; rad = lerp(rad, R * 2.05, e2);
      debris.push([a, rad, pt]);
    }
  }
  const dAlpha = 1 - span(p, .8, .92);
  const drawDebris = front => {
    ctx.globalCompositeOperation = 'lighter';
    for (const [a, rad, pt] of debris) {
      if ((Math.sin(a) >= 0) !== front) continue;
      const [x, y] = ring(a, rad); ctx.globalAlpha = .8 * dAlpha; ctx.fillStyle = pt.c > .6 ? '#ffb070' : '#c98a60';
      ctx.fillRect(x - 1.2, y - 1.2, 2.4, 2.4);
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  };
  const mg = ease(span(p, .6, .92));
  const moon = front => {
    if (mg <= 0 || (Math.sin(ma) >= 0) !== front) return;
    const [x, y] = ring(ma, R * 2.05);
    globe(x, y, 30 * mg, lt * .1, { base: '#9a968e', land: '#6f6b64' });
  };
  drawDebris(false); moon(false);
  glow(cx, cy, R * 1.45, .35 * lava, '255,110,40');
  globe(cx, cy, R, rotY, { base, land, lava, atmo: ocean > 0 ? '120,170,255' : '230,200,170', atmoA: ocean > 0 ? .5 * ocean : .25 * cool });
  if (p < .34) {
    const tp = ease(span(p, 0, .34));
    globe(lerp(W + 120, cx + R * .85, tp), lerp(-60, cy - R * .6, tp), 58, lt * .5, { base: '#e2541a', land: '#3a2520', lava: 1 });
  }
  drawDebris(true); moon(true);
  if (p > .32) { const f = 1 - span(p, .33, .55); glow(cx + R * .8, cy - R * .5, 260 * f, .9 * f, '255,200,140'); }
  ctx.restore();
  if (p > .335) { const f = 1 - span(p, .335, .45); if (f > 0) { ctx.fillStyle = `rgba(255,248,235,${.8 * f})`; ctx.fillRect(0, 0, W, H); } }
}
function drawCell(x, y, r, alpha, seed, lt) {
  if (r < 1) return;
  ctx.save(); ctx.globalAlpha = alpha;
  const g = ctx.createRadialGradient(x - r * .3, y - r * .3, r * .1, x, y, r);
  g.addColorStop(0, 'rgba(170,245,210,.55)'); g.addColorStop(1, 'rgba(80,190,160,.18)');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#a8f2d2'; ctx.lineWidth = Math.max(1, r * .1); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,205,140,.85)'; ctx.lineWidth = Math.max(.8, r * .06); ctx.beginPath();
  for (let j = 0; j < 8; j++) { const a = seed + j * .9 + lt * .3, rr = r * .45 * Math.sin(j * 1.7 + seed); const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr; j ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
  ctx.stroke();
  ctx.fillStyle = 'rgba(220,255,235,.7)';
  for (let j = 0; j < 5; j++) { const a = seed * 3 + j * 1.3, rr = r * .7 * hash(seed + j); ctx.fillRect(x + Math.cos(a) * rr, y + Math.sin(a) * rr, Math.max(1, r * .06), Math.max(1, r * .06)); }
  ctx.restore();
}
function scene6(p, lt) { // first life at a hydrothermal vent
  const drift = lt * 7;
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#0f4a6e'); g.addColorStop(.5, '#072a44'); g.addColorStop(1, '#020a14');
  ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'lighter';
  for (let k = 0; k < 5; k++) {
    const x = 120 + k * 190 + Math.sin(lt * .3 + k) * 30;
    ctx.fillStyle = `rgba(150,210,255,${.035 + .02 * Math.sin(lt + k)})`;
    ctx.beginPath(); ctx.moveTo(x - 20, 0); ctx.lineTo(x + 30, 0); ctx.lineTo(x + 130, H); ctx.lineTo(x + 40, H); ctx.closePath(); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#0a2131'; ctx.beginPath(); ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 10) ctx.lineTo(x, 405 - 30 * Math.sin((x + drift * .3) * .008) - 14 * Math.sin((x + drift * .3) * .023 + 1));
  ctx.lineTo(W, H); ctx.fill();
  // marine snow
  ctx.fillStyle = 'rgba(220,240,255,.35)';
  for (let k = 0; k < 70; k++) { const x = ((hash(k) * W - drift * .5) % W + W) % W, y = (hash(k + 9) * H + lt * 8 * (.5 + hash(k + 4))) % H; ctx.fillRect(x, y, 1.5, 1.5); }
  // RNA chains
  const chainA = 1 - span(p, .45, .62);
  if (chainA > 0) {
    const n = 3 + Math.floor(span(p, 0, .45) * 7), cols = ['#ff9a6a', '#ffd36a', '#7fe0b0', '#8fb8ff'];
    for (let k = 0; k < 7; k++) {
      const bx = 160 + k * 105 - drift * .6, by = 140 + hash(k * 3) * 190 + Math.sin(lt * .5 + k) * 10;
      ctx.globalAlpha = chainA * .9;
      ctx.strokeStyle = 'rgba(220,240,255,.5)'; ctx.lineWidth = 1.2; ctx.beginPath();
      for (let j = 0; j < n; j++) { const x = bx + j * 7, y = by + Math.sin(j * .9 + lt + k) * 5; j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
      for (let j = 0; j < n; j++) { ctx.fillStyle = cols[(j + k) % 4]; ctx.beginPath(); ctx.arc(bx + j * 7, by + Math.sin(j * .9 + lt + k) * 5, 2.6, 0, TAU); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
  }
  const nCells = Math.floor(span(p, .25, 1) * 26);
  const floaters = front => {
    for (let k = 0; k < nCells; k++) {
      const z = .4 + hash(k * 7 + 1) * 1.1; if ((z > 1) !== front) continue;
      const x = ((hash(k * 3) * 1150 + lt * 10 * z - drift * z) % 1150 + 1150) % 1150 - 90;
      const y = 110 + hash(k * 5) * 280 + Math.sin(lt * .6 + k) * 12;
      drawCell(x, y, 5 + 9 * z, .3 + .45 * Math.min(1, z), k * 2.3, lt);
    }
  };
  floaters(false);
  const vx = 610 - drift;
  // plume
  for (let k = 0; k < 46; k++) {
    const a = (lt * .22 + k / 46) % 1, px = vx + Math.sin(k * 2.3 + a * 4) * a * 50 + a * a * 90, py = 288 - a * 290, r = 6 + a * 36;
    ctx.fillStyle = `rgba(16,18,22,${(1 - a) * .7})`; ctx.beginPath(); ctx.arc(px, py, r, 0, TAU); ctx.fill();
  }
  const chimney = (x, top, w) => {
    const cg = ctx.createLinearGradient(x - w, 0, x + w, 0); cg.addColorStop(0, '#2a2320'); cg.addColorStop(1, '#4a3a2e');
    ctx.fillStyle = cg; ctx.beginPath(); ctx.moveTo(x - w, 478);
    ctx.lineTo(x - w * .75, 430); ctx.lineTo(x - w * .85, 395); ctx.lineTo(x - w * .55, top + 50); ctx.lineTo(x - w * .4, top);
    ctx.lineTo(x + w * .4, top); ctx.lineTo(x + w * .52, top + 55); ctx.lineTo(x + w * .8, top + 90); ctx.lineTo(x + w * .7, 440); ctx.lineTo(x + w, 478); ctx.closePath(); ctx.fill();
  };
  chimney(vx + 75, 365, 24); chimney(vx, 290, 36);
  glow(vx, 294, 70, .55 + .1 * Math.sin(lt * 4), '255,140,60'); glow(vx + 75, 368, 40, .4, '255,140,60');
  ctx.fillStyle = '#17120f'; ctx.beginPath(); ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 10) ctx.lineTo(x, 470 - 12 * Math.sin((x + drift) * .012) - 6 * Math.sin((x + drift) * .031));
  ctx.lineTo(W, H); ctx.fill();
  // bubbles
  ctx.lineWidth = 1;
  for (let k = 0; k < 14; k++) {
    const a = (lt * .3 + k / 14) % 1;
    ctx.strokeStyle = `rgba(200,240,255,${.5 * (1 - a)})`; ctx.beginPath();
    ctx.arc(vx + (hash(k) - .5) * 30 + Math.sin(a * 9 + k) * 6, 300 - a * 300, 2 + hash(k + 5) * 3, 0, TAU); ctx.stroke();
  }
  // the dividing cell
  const app = ease(span(p, .28, .42));
  if (app > 0) {
    const r = 24 * app, x = vx - 150, y = 330 + Math.sin(lt * .7) * 6;
    const s1 = ease(span(p, .5, .66)) * r * 1.15, s2 = ease(span(p, .76, .9)) * r * 1.1;
    const cells = [];
    for (const dx of s1 > 0 ? [-s1, s1] : [0]) for (const dy of s2 > 0 ? [-s2, s2] : [0]) cells.push([x + dx * (s2 > 0 ? 1.4 : 1), y + dy]);
    cells.forEach((c, j) => drawCell(c[0], c[1], r * (s1 > 0 ? .85 : 1), 1, j * 1.9 + 1, lt));
  }
  floaters(true);
}
function scene7(p, lt) { // from cell to human
  bg(); setCam(1.2 + lt * .01, .05, 900); bgStars(.7);
  const cx = W / 2, cy = H / 2 - 16, R = lerp(150, 166, p), rotY = lt * .4;
  const ox = span(p, 0, .18), ice = span(p, .2, .26) * (1 - span(p, .34, .4)), green = span(p, .5, .62);
  const imp = span(p, .735, .75) * (1 - span(p, .75, .86));
  globe(cx, cy, R, rotY, {
    base: mix('#2a5d7a', '#1b5b94', ox), land: green > 0 ? mix('#8c6a50', '#4d8a3a', green) : '#8c6a50',
    ice, caps: .12, clouds: ox * .8, drift: p * .7, dark: imp * .45,
    atmo: mixRGB('#e0a06a', '#7fbfff', ox), atmoA: .55,
  });
  if (p > .7 && p < .735) {
    const t = span(p, .7, .735), sx0 = W - 30, sy0 = 30, ex = cx + R * .35, ey = cy - R * .3;
    const hx = lerp(sx0, ex, t), hy = lerp(sy0, ey, t), tx = lerp(sx0, ex, Math.max(0, t - .25)), ty = lerp(sy0, ey, Math.max(0, t - .25));
    const lg = ctx.createLinearGradient(tx, ty, hx, hy); lg.addColorStop(0, 'rgba(255,170,90,0)'); lg.addColorStop(1, 'rgba(255,220,160,.95)');
    ctx.strokeStyle = lg; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(hx, hy); ctx.stroke();
    glow(hx, hy, 18, .9, '255,220,160');
  }
  glow(cx + R * .35, cy - R * .3, 30 + 120 * imp, .85 * imp, '255,170,90');
}
/* ---------- human history: shared drawing ---------- */
const GY = 452;
const PEOPLE = {
  ape1: { skin: '#6e4c34', dark: '#4e3423', body: '#4a3324', hair: '#3a281b', ape: true },
  ape2: { skin: '#7a573c', dark: '#573b27', body: '#56402c', hair: '#45301f', ape: true },
  erec1: { skin: '#7a5034', dark: '#5a3a24', hair: '#1d1714', beard: true },
  erec2: { skin: '#8a5c3a', dark: '#66432a', hair: '#2a1d14' },
  erec3: { skin: '#6c4630', dark: '#4f3222', hair: '#1d1714', beard: true },
  erecK: { skin: '#84583a', dark: '#62412a', hair: '#1d1714' },
  sap1: { skin: '#c58c5c', dark: '#9c6a42', body: '#8f6b45', hair: '#2a1d14' },
  sap2: { skin: '#8d5a37', dark: '#6c4227', body: '#7b5a3a', hair: '#1d1714', beard: true },
  boer1: { skin: '#b07a4e', dark: '#895c37', body: '#d8cbb0', hair: '#2a1d14' },
  boer2: { skin: '#9a6440', dark: '#774b2e', body: '#8f7a5a', hair: '#1d1714', beard: true },
  kind: { skin: '#cf9a6c', dark: '#a8774e', body: '#c9b48e', hair: '#3b2a1c' },
  uruk1: { skin: '#a8754c', dark: '#82593a', body: '#ece4d0', hair: '#1d1714', beard: true },
  uruk2: { skin: '#9a6a44', dark: '#774f32', body: '#d9cfb6', hair: '#2a1d14' },
};
const legH = L => 14 * Math.cos(L[0]) + 13 * Math.cos(L[1]);
function poseOf(o) {
  const ph = o.ph || 0;
  let P;
  switch (o.pose) {
    case 'walk': { const t = Math.sin(ph) * .45; P = { L1: [t, t - .6 * Math.max(0, Math.cos(ph))], L2: [-t, -t - .6 * Math.max(0, -Math.cos(ph))], A1: [-t * .8, -t * .8 + .35], A2: [t * .8, t * .8 + .35], tilt: .06 }; break; }
    case 'crouch': P = { L1: [1.35, -.45], L2: [1.0, -.75], A1: [.9, 1.3], A2: [.7, 1.1], tilt: .55 }; break;
    case 'kneel': P = { L1: [1.4, 0], L2: [.3, 1.5], A1: [1.2, 1.6], A2: [1.1, 1.5], tilt: .35 }; break;
    case 'sit': P = { L1: [1.85, .25], L2: [1.75, .15], A1: [.6, 1.2], A2: [.5, 1.1], tilt: .1, hip: 8 }; break;
    default: P = { L1: [.04, 0], L2: [-.06, 0], A1: [.12, .3], A2: [-.1, .15], tilt: 0 };
  }
  for (const k of ['L1', 'L2', 'A1', 'A2', 'tilt', 'hip']) if (o[k] !== undefined) P[k] = o[k];
  if (P.hip === undefined) P.hip = Math.max(legH(P.L1), legH(P.L2));
  return P;
}
function limb(x, y, a, lens, w, col) {
  const k = [x + Math.sin(a[0]) * lens[0], y + Math.cos(a[0]) * lens[0]];
  const e = [k[0] + Math.sin(a[1]) * lens[1], k[1] + Math.cos(a[1]) * lens[1]];
  ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(k[0], k[1]); ctx.lineTo(e[0], e[1]); ctx.stroke();
  return e;
}
function torchStick(h) { ctx.strokeStyle = '#5a4026'; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(h[0] - 2, h[1] + 8); ctx.lineTo(h[0] + 3, h[1] - 18); ctx.stroke(); }
function person(x, o) {
  const c = PEOPLE[o.who], s = o.s || 1, d = o.dir || 1, P = poseOf(o), gy = (o.gy ?? GY) + (o.dy || 0);
  if (c.ape && o.tilt === undefined) P.tilt += .18;
  ctx.save(); ctx.globalAlpha = 1; ctx.translate(x, gy); ctx.scale(s * d, s);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const al = c.ape ? [14, 14] : [12, 11];
  const hx = 0, hy = -P.hip - (o.bob || 0);
  const shx = hx + Math.sin(P.tilt) * 24, shy = hy - Math.cos(P.tilt) * 24;
  const hdx = shx + Math.sin(P.tilt) * 10, hdy = shy - Math.cos(P.tilt) * 10;
  limb(hx - 1, hy, P.L2, [14, 13], 5.5, c.dark);
  const h2 = limb(shx - 1, shy + 2, P.A2, al, 4.5, c.dark);
  if (o.torch2) torchStick(h2);
  if (o.bag) { ctx.fillStyle = '#b8a27a'; ctx.beginPath(); ctx.ellipse(hx + 6, hy - 2, 6, 8, 0, 0, TAU); ctx.fill(); }
  ctx.strokeStyle = c.body || c.skin; ctx.lineWidth = c.ape ? 14 : 12; ctx.beginPath(); ctx.moveTo(hx, hy + 4); ctx.lineTo(shx, shy + 3); ctx.stroke();
  if (c.body && !c.ape) { ctx.fillStyle = c.body; ctx.beginPath(); ctx.moveTo(hx - 8, hy - 3); ctx.lineTo(hx + 8, hy - 3); ctx.lineTo(hx + 10, hy + 10); ctx.lineTo(hx - 10, hy + 10); ctx.closePath(); ctx.fill(); }
  else if (!c.ape) { ctx.fillStyle = '#6a4a2e'; ctx.fillRect(hx - 6, hy - 2, 12, 7); }
  ctx.fillStyle = c.hair; ctx.beginPath(); ctx.arc(hdx - 2, hdy - 1.5, 8, 0, TAU); ctx.fill();
  ctx.fillStyle = c.skin; ctx.beginPath();
  if (c.ape) { ctx.arc(hdx + 1, hdy + 1, 6, 0, TAU); ctx.ellipse(hdx + 5, hdy + 3, 4.5, 3.4, 0, 0, TAU); } else ctx.arc(hdx + 1, hdy + .5, 6.8, 0, TAU);
  ctx.fill();
  if (c.beard) { ctx.fillStyle = c.hair; ctx.beginPath(); ctx.arc(hdx + 2, hdy + 4, 4.6, 0, Math.PI); ctx.fill(); }
  ctx.fillStyle = '#1a1410'; ctx.beginPath(); ctx.arc(hdx + 4.2, hdy - 1, 1.1, 0, TAU); ctx.fill();
  limb(hx + 1, hy, P.L1, [14, 13], 5.5, c.ape ? c.body : c.skin);
  const h1 = limb(shx + 1, shy + 2, P.A1, al, 4.5, c.skin);
  if (o.tool === 'torch') torchStick(h1);
  if (o.tool === 'stone') { ctx.fillStyle = '#7d7f86'; ctx.beginPath(); ctx.arc(h1[0] + 1, h1[1] + 1, 3.4, 0, TAU); ctx.fill(); }
  if (o.tool === 'axe') { ctx.fillStyle = '#8a8378'; ctx.beginPath(); ctx.moveTo(h1[0] - 2, h1[1] - 3); ctx.quadraticCurveTo(h1[0] + 10, h1[1] - 2, h1[0] + 12, h1[1] + 2); ctx.quadraticCurveTo(h1[0] + 6, h1[1] + 6, h1[0] - 2, h1[1] + 3); ctx.fill(); }
  if (o.tool === 'stick') { const a = P.A1[1]; ctx.strokeStyle = '#6b4c2a'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(h1[0], h1[1]); ctx.lineTo(h1[0] + Math.sin(a) * 22, h1[1] + Math.cos(a) * 22); ctx.stroke(); }
  if (o.tool === 'sickle') { ctx.strokeStyle = '#8a8f96'; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(h1[0] + 7, h1[1] + 2, 7, -2.6, .9); ctx.stroke(); }
  if (o.tool === 'stylus') { ctx.strokeStyle = '#d9c39a'; ctx.lineWidth = 1.8; ctx.beginPath(); ctx.moveTo(h1[0], h1[1]); ctx.lineTo(h1[0] + 6, h1[1] + 6); ctx.stroke(); }
  if (o.tool === 'flute') { ctx.strokeStyle = '#ebe0cc'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(h1[0] + 4, h1[1] + 3); ctx.lineTo(hdx + 6, hdy + 3); ctx.stroke(); }
  ctx.restore();
  const w = ([lx, ly]) => [x + lx * s * d, gy + ly * s];
  return { h1: w(h1), h2: w(h2), tip1: w([h1[0] + 3, h1[1] - 18]), tip2: w([h2[0] + 3, h2[1] - 18]), head: w([hdx, hdy]) };
}
function quad(x, o) { // goat or ox, side view
  const ox = o.kind === 'ox', s = ox ? 1 : .55, ph = o.ph || 0, body = ox ? '#6b4a30' : '#e6dfd2', dk = ox ? '#4a3220' : '#b8b0a0';
  ctx.save(); ctx.globalAlpha = 1; ctx.translate(x, o.gy ?? GY); ctx.scale((o.dir || 1) * s, s); ctx.lineCap = 'round';
  ctx.strokeStyle = dk; ctx.lineWidth = ox ? 6 : 5;
  [[22, 0], [16, 1.4], [-18, 2.6], [-24, 4]].forEach(([lx, off]) => {
    const a = o.walk ? Math.sin(ph + off) * .4 : 0;
    ctx.beginPath(); ctx.moveTo(lx, -30); ctx.lineTo(lx + Math.sin(a) * 30, -30 + Math.cos(a) * 30); ctx.stroke();
  });
  ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(0, -40, 32, 14, 0, 0, TAU); ctx.fill();
  const down = o.head === 'down', hx = down ? 40 : 38, hy = down ? -14 : -54;
  ctx.strokeStyle = body; ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(24, -44); ctx.lineTo(hx - 4, hy + 2); ctx.stroke();
  ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(hx + 4, hy + 2, 10, 6, down ? .9 : .25, 0, TAU); ctx.fill();
  ctx.fillStyle = '#1a1410'; ctx.beginPath(); ctx.arc(hx + 3, hy - 1, 1.6, 0, TAU); ctx.fill();
  ctx.strokeStyle = ox ? '#e8dcc0' : '#8f8676'; ctx.lineWidth = ox ? 3 : 3.5; ctx.beginPath();
  if (ox) { ctx.moveTo(hx, hy - 4); ctx.quadraticCurveTo(hx + 4, hy - 16, hx + 14, hy - 14); }
  else { ctx.moveTo(hx, hy - 4); ctx.quadraticCurveTo(hx - 6, hy - 18, hx - 14, hy - 12); }
  ctx.stroke();
  ctx.strokeStyle = dk; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-31, -44); ctx.lineTo(-36, -30); ctx.stroke();
  ctx.restore();
}
function vsky(stops) { const g = ctx.createLinearGradient(0, 0, 0, H * .85); stops.forEach(([o, c]) => g.addColorStop(o, c)); ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
function ridge(base, amp, freq, off, col) {
  ctx.globalAlpha = 1; ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 8) ctx.lineTo(x, base - amp * Math.sin((x + off) * freq) - amp * .5 * Math.sin((x + off) * freq * 2.7 + 1));
  ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
}
function groundG(top, bot, y = GY - 4) { const g = ctx.createLinearGradient(0, y, 0, H); g.addColorStop(0, top); g.addColorStop(1, bot); ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, y, W, H - y); }
function poly(pts) { ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fill(); }
function sunDisk(x, y, r, col = '#fff3cf') { glow(x, y, r * 4, .45, '255,235,180'); ctx.globalAlpha = 1; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); }
function stars2d(a) {
  if (a <= 0) return; ctx.fillStyle = '#fff';
  for (let k = 0; k < 130; k++) { ctx.globalAlpha = a * (.5 + .5 * Math.sin(T * 1.5 + k)); ctx.fillRect(hash(k * 3.3) * W, hash(k * 5.7) * 300, 1.4, 1.4); }
  ctx.globalAlpha = 1;
}
function tufts(off, col) {
  ctx.globalAlpha = 1; ctx.strokeStyle = col; ctx.lineWidth = 1.4;
  const k0 = Math.floor(off / 23) - 1;
  for (let k = k0; k < k0 + W / 23 + 3; k++) {
    const x = k * 23 + hash(k + 40) * 14 - off, y = GY - 18 + hash(k + 80) * 100, hh = 4 + hash(k + 3) * 6;
    ctx.beginPath(); ctx.moveTo(x - 3, y - hh); ctx.lineTo(x, y); ctx.lineTo(x + 3, y - hh * .9); ctx.moveTo(x, y); ctx.lineTo(x + .5, y - hh * 1.2); ctx.stroke();
  }
}
function flakes(x, y, rate) {
  const k = Math.floor(T * rate), a = (T * rate) % 1; if (a > .6) return;
  const t = a / .6;
  for (let j = 0; j < 2; j++) {
    const vx = (hash(k * 3 + j) - .2) * 40, vy = -30 - hash(k * 5 + j) * 25;
    ctx.fillStyle = '#d9d4c8'; ctx.globalAlpha = 1 - t; ctx.fillRect(x + vx * t, y + vy * t + 90 * t * t, 3, 2);
  }
  ctx.globalAlpha = 1;
}
function flameShape(bx, tx, base, h, w, col) {
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(bx - w, base);
  ctx.quadraticCurveTo(bx - w, base - h * .5, tx, base - h); ctx.quadraticCurveTo(bx + w, base - h * .5, bx + w, base); ctx.closePath(); ctx.fill();
}
function flameAt(x, y, sc) {
  glow(x, y - 8 * sc, 50 * sc, .55, '255,150,60');
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1;
  for (let k = 0; k < 3; k++) {
    const h = (16 + 7 * Math.sin(T * 9 + k * 2.1)) * sc, bx = x + (k - 1) * 3.5 * sc, tx = bx + Math.sin(T * 7 + k) * 3 * sc;
    flameShape(bx, tx, y, h, 4.5 * sc, '#ff7a1c'); flameShape(bx, tx, y, h * .6, 2.6 * sc, '#ffd36b');
  }
  ctx.restore();
}
function hearth(x) {
  ctx.globalAlpha = 1; ctx.fillStyle = '#6e6a63';
  for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.ellipse(x - 27 + i * 9, GY + 8 - Math.sin(i / 6 * Math.PI) * 2, 6, 4, 0, 0, TAU); ctx.fill(); }
  ctx.strokeStyle = '#3e2a19'; ctx.lineWidth = 5; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - 20, GY + 4); ctx.lineTo(x + 16, GY - 4); ctx.moveTo(x + 20, GY + 4); ctx.lineTo(x - 14, GY - 4); ctx.stroke();
}
function fire(x, level, dk) {
  if (level <= 0) return;
  glow(x, GY - 20, 70 + 230 * level * (.45 + dk), (.18 + .5 * dk) * level, '255,150,60');
  ctx.save(); ctx.globalAlpha = 1;
  for (let i = 0; i < 6; i++) { ctx.fillStyle = `rgba(255,${120 + i * 15},40,${.5 + .5 * Math.sin(T * 3 + i)})`; ctx.beginPath(); ctx.arc(x - 14 + i * 6, GY + 1, 2.2, 0, TAU); ctx.fill(); }
  if (level > .12) for (let k = 0; k < 6; k++) {
    const h = (14 + 52 * level) * (.72 + .22 * Math.sin(T * 9 + k * 2.1) + .12 * Math.sin(T * 23 + k)), bx = x + (k - 2.5) * 5, tx = bx * .4 + x * .6 + Math.sin(T * 7 + k) * 5;
    flameShape(bx, tx, GY, h, 7, '#ff7a1c'); flameShape(bx, tx, GY, h * .6, 4, '#ffd36b');
  }
  for (let i = 0; i < 10 * level; i++) {
    const a = (T * .9 + hash(i * 7)) % 1;
    ctx.fillStyle = `rgba(255,200,90,${(1 - a) * .9})`; ctx.fillRect(x + Math.sin(i * 5 + a * 6) * 14 * a + (hash(i) - .5) * 10, GY - 20 - a * 120 * level, 2, 2);
  }
  ctx.restore();
}

/* ---------- 8: walking upright ---------- */
function acacia(x, y, s) {
  ctx.globalAlpha = 1; ctx.strokeStyle = '#5a4630'; ctx.lineWidth = 5 * s; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 4 * s, y - 50 * s); ctx.lineTo(x - 26 * s, y - 86 * s);
  ctx.moveTo(x + 4 * s, y - 50 * s); ctx.lineTo(x + 30 * s, y - 90 * s); ctx.stroke();
  ctx.fillStyle = '#5e6b34'; ctx.beginPath(); ctx.ellipse(x, y - 94 * s, 72 * s, 13 * s, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#717d3f'; ctx.beginPath(); ctx.ellipse(x - 8 * s, y - 100 * s, 50 * s, 8 * s, 0, 0, TAU); ctx.fill();
}
function scene8(p, lt) {
  const pan = lerp(0, 520, ease(span(p, .04, .8)));
  vsky([[0, '#7fb3dc'], [1, '#f1d7a2']]); sunDisk(230, 110, 22);
  const vx = 780 - pan * .15;
  for (let k = 0; k < 10; k++) { const a = (lt * .08 + k / 10) % 1; ctx.fillStyle = `rgba(120,112,118,${(1 - a) * .45})`; ctx.beginPath(); ctx.arc(vx + a * 130 + Math.sin(k * 3 + a * 4) * 12, 246 - a * 180, 14 + a * 42, 0, TAU); ctx.fill(); }
  ctx.fillStyle = '#948fa0'; poly([[vx - 240, 420], [vx - 36, 252], [vx + 30, 252], [vx + 240, 420]]);
  ctx.fillStyle = '#7d7889'; poly([[vx - 36, 252], [vx + 30, 252], [vx + 12, 262], [vx - 20, 260]]);
  ridge(402, 12, .006, pan * .35, '#c8a66c');
  for (const wx of [60, 420, 780, 1180, 1520]) acacia(wx - pan * .7, 424, .85 + hash(wx) * .3);
  groundG('#d9b872', '#a9864a');
  ctx.fillStyle = 'rgba(128,118,104,.5)'; ctx.fillRect(0, GY - 2, W, 26);
  tufts(pan, '#9c7c3e');
  const t = ease(span(p, .06, .74)), ax = lerp(230, 860, t), kx = ax - 48, moving = p > .06 && p < .74;
  ctx.fillStyle = 'rgba(70,60,50,.55)';
  for (let w = 240, k = 0; w < ax - 14; w += 17, k++) { ctx.beginPath(); ctx.ellipse(w - pan, GY + 6 + (k % 2) * 4, 4, 1.7, 0, 0, TAU); ctx.fill(); }
  for (let w = 192, k = 0; w < kx - 10; w += 12, k++) { ctx.beginPath(); ctx.ellipse(w - pan, GY + 15 + (k % 2) * 3, 3, 1.3, 0, 0, TAU); ctx.fill(); }
  if (p < .78) person(ax - pan, { who: 'ape1', dir: 1, pose: moving ? 'walk' : 'stand', ph: ax / 8 });
  else {
    const b = Math.abs(Math.sin(lt * 7));
    person(ax - pan, { who: 'ape1', dir: 1, pose: 'crouch', tool: 'stone', A1: [1.0 + b * .9, 1.6 + b * .6], A2: [.9, 1.5] });
    ctx.fillStyle = '#7d7f86'; ctx.beginPath(); ctx.ellipse(ax - pan + 24, GY + 2, 6, 3.5, 0, 0, TAU); ctx.fill();
    flakes(ax - pan + 24, GY - 4, 2.2);
  }
  person(kx - pan, { who: 'ape2', s: .68, gy: GY + 12, dir: 1, pose: moving ? 'walk' : 'stand', ph: kx / 6 });
}

/* ---------- 9: fire and hand axes ---------- */
function bigTree(x, burn) {
  ctx.globalAlpha = 1; ctx.fillStyle = mix('#4c3a28', '#1e1915', burn); ctx.fillRect(x - 7, GY - 120, 14, 122);
  [[0, -150, 52], [-38, -126, 38], [40, -128, 40], [0, -188, 36]].forEach(([bx, by, br], i) => {
    ctx.globalAlpha = 1 - burn * .75; ctx.fillStyle = mix(i % 2 ? '#3b5530' : '#476536', '#2a2420', burn);
    ctx.beginPath(); ctx.arc(x + bx, GY + by, br * (1 - burn * .35), 0, TAU); ctx.fill();
  });
  ctx.globalAlpha = 1;
}
function scene9(p, lt) {
  const n = ease(span(p, .2, .92)), dk = lerp(.04, .62, n);
  vsky([[0, mix('#5470a6', '#0b1028', n)], [1, mix('#f3a35e', '#1b1f3d', n)]]);
  stars2d(span(p, .6, .9));
  if (p < .45) sunDisk(840, lerp(340, 440, span(p, 0, .45)), 20, '#ffb46a');
  ridge(398, 18, .005, 0, '#7a775e'); ridge(418, 8, .012, 200, '#6f6c4e');
  groundG('#8f8650', '#5a5432'); tufts(0, '#6f6a37');
  bigTree(770, span(p, .1, .7));
  hearth(330);
  const b = Math.abs(Math.sin(lt * 7));
  person(220, { who: 'erec2', dir: 1, pose: 'sit', tool: 'axe', A1: [1.0 + b * .9, 1.6 + b * .6], A2: [.9, 1.5] });
  flakes(246, GY - 22, 2.4);
  person(268, { who: 'erecK', s: .68, dir: 1, pose: 'sit' });
  person(452, { who: 'erec3', dir: -1, pose: 'sit', A1: [.6, 1.2] });
  let r = null;
  const torch = p > .15 && p < .46;
  if (p < .18) r = person(735, { who: 'erec1', dir: 1, pose: 'stand', A1: p > .13 ? [1.9, 2.4] : [.2, .3], tool: torch ? 'torch' : null });
  else if (p < .46) { const x = lerp(735, 392, ease(span(p, .18, .46))); r = person(x, { who: 'erec1', dir: -1, pose: 'walk', ph: x / 9, tool: 'torch', A1: [1.6, 2.3] }); }
  else person(392, { who: 'erec1', dir: -1, pose: 'sit', A1: [.5, 1.0] });
  ctx.fillStyle = `rgba(8,12,35,${dk})`; ctx.fillRect(0, 0, W, H);
  const tf = span(p, .085, .12) * (1 - span(p, .5, .72));
  if (tf > 0) for (let k = 0; k < 5; k++) flameAt(770 + (k - 2) * 24, GY - 140 + Math.abs(k - 2) * 14, 1.6 * tf);
  fire(330, p < .46 ? 0 : lerp(.15, 1, ease(span(p, .46, .58))), dk);
  if (torch && r) flameAt(r.tip1[0], r.tip1[1], .8);
  if (p > .06 && p < .1) {
    const f = 1 - span(p, .06, .1);
    ctx.strokeStyle = `rgba(235,240,255,${f})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(720, 0);
    for (let k = 1; k <= 8; k++) ctx.lineTo(lerp(720, 770, k / 8) + (hash(k * 9) - .5) * 40 * (k < 8), lerp(0, GY - 150, k / 8));
    ctx.stroke(); ctx.fillStyle = `rgba(230,235,255,${.6 * f})`; ctx.fillRect(0, 0, W, H);
  }
}

/* ---------- 10: out of Africa (map) ---------- */
const MAP = {
  af: [-17, 21, -10, 30, -5, 36, 10, 37, 20, 32, 32, 31, 35, 28, 43, 12, 51, 12, 42, -1, 40, -15, 35, -25, 27, -34, 18, -34, 13, -20, 12, -6, 9, 4, -8, 4, -17, 14],
  eu: [-9, 37, -9, 43, -1, 46, -4, 48, 5, 52, 8, 57, 5, 62, 15, 69, 28, 71, 40, 67, 60, 69, 80, 73, 100, 77, 130, 72, 160, 70, 180, 67, 175, 62, 160, 60, 142, 53, 135, 43, 122, 40, 122, 30, 110, 20, 106, 10, 100, 13, 98, 8, 93, 21, 80, 15, 77, 8, 72, 20, 66, 25, 57, 25, 59, 22, 52, 16, 43, 13, 39, 22, 35, 28, 34, 32, 27, 37, 23, 36, 20, 40, 13, 45, 16, 38, 12, 38, 7, 44, 3, 43, 0, 39, -6, 36],
  au: [114, -22, 122, -17, 131, -12, 137, -12, 142, -11, 146, -19, 153, -26, 150, -37, 141, -38, 131, -31, 115, -34],
  na: [-168, 66, -160, 70, -140, 70, -120, 73, -95, 72, -80, 70, -62, 60, -55, 52, -66, 45, -70, 42, -76, 35, -81, 30, -80, 25, -90, 29, -97, 26, -97, 20, -87, 21, -83, 10, -78, 8, -80, 9, -86, 14, -95, 16, -105, 20, -110, 24, -117, 32, -124, 40, -124, 48, -135, 58, -150, 60, -165, 60],
  sa: [-78, 8, -72, 12, -62, 10, -50, 0, -35, -6, -40, -22, -48, -27, -58, -38, -65, -42, -68, -54, -74, -50, -72, -30, -70, -18, -81, -5, -80, 2],
  gr: [-55, 60, -44, 60, -35, 66, -32, 72, -35, 80, -60, 82, -72, 77, -55, 70],
  uk: [-5, 50, 1, 51, -2, 56, -5, 58, -6, 55],
  jp: [130, 31, 135, 34, 141, 38, 142, 43, 140, 41, 134, 35],
  sund: [95, 5, 104, -6, 112, -8, 118, -3, 117, 7, 109, 2, 103, 1],
  ng: [131, -1, 141, -3, 150, -10, 141, -9],
  mg: [44, -25, 50, -15, 49, -12, 44, -20],
  ber: [172, 64, -165, 68, -165, 62, 172, 60],
};
const mp = (lon, lat) => [480 + ((((lon - 150) % 360) + 540) % 360 - 180) * 2.5, 290 - lat * 2.6];
const ROUTES = [
  { a: .03, b: .18, pts: [38, 8, 25, 0, 22, -20, 26, -30] },
  { a: .03, b: .2, pts: [38, 8, 20, 14, 2, 24, -8, 31], lbl: '300.000 jaar' },
  { a: .2, b: .28, pts: [38, 8, 34, 22, 35, 31], lbl: '± 70.000' },
  { a: .26, b: .44, pts: [38, 8, 43, 12, 52, 17, 58, 24, 66, 25, 75, 18, 80, 14, 92, 20, 98, 12, 104, 2, 112, -6, 122, -9, 131, -13, 136, -22], lbl: '± 50.000' },
  { a: .4, b: .54, pts: [35, 31, 33, 38, 26, 41, 18, 45, 8, 47, 2, 47], lbl: '± 45.000' },
  { a: .48, b: .6, pts: [98, 12, 106, 22, 112, 30, 118, 36], lbl: '± 40.000' },
  { a: .62, b: .92, pts: [118, 36, 128, 44, 140, 52, 160, 62, 175, 65, -165, 65, -150, 62, -128, 54, -122, 40, -108, 28, -96, 18, -82, 9, -76, -5, -72, -25, -71, -42], lbl: '± 15.000' },
];
function tag(x, y, text, a) {
  if (a <= 0) return;
  ctx.font = '500 12px "IBM Plex Mono", ui-monospace, monospace';
  const w = ctx.measureText(text).width + 12;
  ctx.globalAlpha = a; ctx.fillStyle = 'rgba(8,9,16,.7)'; ctx.fillRect(x, y - 15, w, 20);
  ctx.fillStyle = '#f4efe4'; ctx.fillText(text, x + 6, y); ctx.globalAlpha = 1;
}
function scene10(p, lt) {
  const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#143e62'); g.addColorStop(1, '#0a2238');
  ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,.06)'; ctx.lineWidth = 1;
  for (let lon = -180; lon < 180; lon += 30) { const x = mp(lon, 0)[0]; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let lat = -60; lat <= 80; lat += 20) { const y = mp(0, lat)[1]; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.fillStyle = '#c9b48a'; ctx.strokeStyle = '#a8925f'; ctx.lineWidth = 1.2;
  for (const k in MAP) { const a = MAP[k]; ctx.beginPath(); for (let i = 0; i < a.length; i += 2) { const [x, y] = mp(a[i], a[i + 1]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.closePath(); ctx.fill(); ctx.stroke(); }
  ctx.fillStyle = 'rgba(240,246,255,.85)';
  for (const [lon, lat, rx, ry] of [[-95, 62, 95, 34], [18, 64, 42, 20], [-45, 72, 40, 30]]) { const [x, y] = mp(lon, lat); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, TAU); ctx.fill(); }
  const nea = span(p, .05, .15) * (1 - span(p, .7, .82));
  if (nea > 0) {
    ctx.setLineDash([4, 4]); ctx.strokeStyle = `rgba(255,230,190,${.7 * nea})`; ctx.lineWidth = 1.5;
    let [x, y] = mp(28, 46); ctx.beginPath(); ctx.ellipse(x, y, 72, 22, 0, 0, TAU); ctx.stroke();
    const d = mp(90, 50); ctx.beginPath(); ctx.ellipse(d[0], d[1], 40, 16, 0, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
    tag(x - 60, y - 26, 'Neanderthalers', nea); tag(d[0] - 40, d[1] - 22, 'Denisovamensen', nea);
  }
  const [ex, ey] = mp(38, 8);
  glow(ex, ey, 26 + 6 * Math.sin(lt * 4), .7, '224,168,69');
  tag(ex + 12, ey + 26, 'Oost-Afrika', 1 - span(p, .25, .32));
  for (const r of ROUTES) {
    const prog = span(p, r.a, r.b); if (prog <= 0) continue;
    const pts = []; for (let i = 0; i < r.pts.length; i += 2) pts.push(mp(r.pts[i], r.pts[i + 1]));
    let total = 0; const segs = pts.slice(1).map((q, i) => { const l = Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1]); total += l; return l; });
    let left = total * prog, head = pts[0];
    ctx.strokeStyle = '#e0a845'; ctx.lineWidth = 2.6; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 0; i < segs.length && left > 0; i++) {
      const f = Math.min(1, left / segs[i]); head = [lerp(pts[i][0], pts[i + 1][0], f), lerp(pts[i][1], pts[i + 1][1], f)];
      ctx.lineTo(head[0], head[1]); left -= segs[i];
    }
    ctx.stroke();
    if (prog < 1) glow(head[0], head[1], 16, .9, '255,210,130');
    else { ctx.fillStyle = '#e0a845'; ctx.beginPath(); ctx.arc(head[0], head[1], 4, 0, TAU); ctx.fill(); }
    if (r.lbl) tag(Math.min(W - 110, head[0] + 8), head[1] + 20, r.lbl, span(p, r.b, r.b + .04));
  }
  const bp = mp(-178, 66); tag(bp[0] - 20, bp[1] - 14, 'Beringia', span(p, .68, .74) * (1 - span(p, .86, .92)));
}

/* ---------- 11: cave art ---------- */
const off = document.createElement('canvas'); off.width = W; off.height = H;
const octx = off.getContext('2d');
function caveHorse(x, y, s) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = '#1e1712'; ctx.lineWidth = 3.4; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.ellipse(50, 30, 38, 15, 0, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(84, 22); ctx.quadraticCurveTo(100, 4, 108, 10); ctx.lineTo(102, 22); ctx.stroke();
  ctx.beginPath(); [[22, 42, 20, 66], [36, 44, 36, 68], [70, 44, 72, 68], [80, 40, 84, 64]].forEach(l => { ctx.moveTo(l[0], l[1]); ctx.lineTo(l[2], l[3]); }); ctx.stroke();
  ctx.restore();
}
function caveBull(x, y, s) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(160,48,28,.85)'; ctx.strokeStyle = '#1e1712'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(0, 40); ctx.quadraticCurveTo(10, 8, 50, 10); ctx.quadraticCurveTo(80, 0, 100, 20); ctx.quadraticCurveTo(112, 40, 96, 52); ctx.lineTo(10, 54); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(100, 18); ctx.quadraticCurveTo(108, 0, 122, 2); ctx.moveTo(96, 16); ctx.quadraticCurveTo(96, -4, 86, -8);
  [[16, 54, 14, 80], [30, 54, 32, 82], [82, 52, 80, 80], [92, 50, 96, 78]].forEach(l => { ctx.moveTo(l[0], l[1]); ctx.lineTo(l[2], l[3]); }); ctx.stroke();
  ctx.restore();
}
function caveStag(x, y, s) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(170,52,30,.85)'; ctx.strokeStyle = 'rgba(170,52,30,.85)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.ellipse(60, 40, 40, 14, -.05, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(95, 34); ctx.lineTo(112, 10); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(118, 8, 10, 5, .3, 0, TAU); ctx.fill();
  ctx.beginPath(); [[30, 50, 26, 78], [42, 52, 44, 80], [80, 50, 76, 80], [90, 48, 94, 78]].forEach(l => { ctx.moveTo(l[0], l[1]); ctx.lineTo(l[2], l[3]); }); ctx.stroke();
  ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(114, 4); ctx.lineTo(104, -20); ctx.lineTo(92, -30); ctx.moveTo(108, -10); ctx.lineTo(118, -22); ctx.moveTo(104, -20); ctx.lineTo(108, -36); ctx.stroke();
  ctx.restore();
}
function caveHand(x, y, a) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  const g = ctx.createRadialGradient(x, y, 2, x, y, 24); g.addColorStop(0, 'rgba(176,52,28,.85)'); g.addColorStop(1, 'rgba(176,52,28,0)');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 24, 0, TAU); ctx.fill();
  ctx.fillStyle = '#7a6250'; ctx.beginPath(); ctx.ellipse(x, y + 4, 6, 7, 0, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#7a6250'; ctx.lineWidth = 2.6; ctx.lineCap = 'round';
  [[-6, -1, -11, -4], [-4, -4, -6, -13], [-1, -5, -1, -15], [2, -5, 3, -14], [5, -3, 7, -10]].forEach(l => { ctx.beginPath(); ctx.moveTo(x + l[0], y + l[1]); ctx.lineTo(x + l[2], y + l[3]); ctx.stroke(); });
  ctx.restore();
}
function scene11(p, lt) {
  vsky([[0, '#3d2e23'], [1, '#76604c']]);
  ctx.strokeStyle = 'rgba(30,22,16,.35)'; ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(0, 60 + i * 50); ctx.bezierCurveTo(300, 40 + i * 54, 600, 90 + i * 44, W, 70 + i * 50); ctx.stroke(); }
  caveHorse(110, 150, .9); caveBull(300, 110, 1.1); caveStag(610, 130, .85); caveHorse(780, 210, .7);
  ctx.fillStyle = 'rgba(170,52,30,.8)'; for (let k = 0; k < 9; k++) { ctx.beginPath(); ctx.arc(250 + k * 14, 260 + Math.sin(k) * 4, 3.2, 0, TAU); ctx.fill(); }
  caveHand(470, 362, 1); caveHand(500, 345, 1); caveHand(536, 360, span(p, .5, .72));
  ridge(GY + 12, 6, .02, 0, '#2b2018');
  person(705, { who: 'sap2', dir: -1, pose: 'sit', tool: 'flute', A1: [1.7, 3.3], A2: [1.5, 3.1] });
  ctx.fillStyle = '#6e6a63'; ctx.beginPath(); ctx.ellipse(672, GY + 2, 8, 4, 0, 0, TAU); ctx.fill();
  if (p > .2) { ctx.font = '600 18px Georgia, serif'; for (let k = 0; k < 3; k++) { const a = (lt * .4 + k / 3) % 1; ctx.globalAlpha = (1 - a) * .85; ctx.fillStyle = '#f4efe4'; ctx.fillText('♪', 680 - a * 40, GY - 70 - a * 60); } ctx.globalAlpha = 1; }
  let r, tip;
  if (p < .42) { const x = lerp(940, 572, ease(span(p, .03, .42))), mv = p > .03; r = person(x, { who: 'sap1', dir: -1, pose: mv ? 'walk' : 'stand', ph: x / 9, tool: 'torch', A1: [1.7, 2.5] }); tip = r.tip1; }
  else if (p < .76) {
    r = person(572, { who: 'sap1', dir: -1, pose: 'stand', A1: [2.3, 2.75], A2: [1.5, 2.6], torch2: true }); tip = r.tip2;
    if (p > .48 && p < .74) for (let k = 0; k < 14; k++) {
      const a = (lt * 1.6 + k / 14) % 1, f = hash(k * 3) - .5;
      ctx.fillStyle = `rgba(190,60,30,${(1 - a) * .8})`; ctx.fillRect(lerp(r.head[0] - 6, 536, a) + f * 14 * a, lerp(r.head[1] + 2, 360, a) + f * 18 * a, 2, 2);
    }
  } else { const x = lerp(572, 640, ease(span(p, .76, .9))); r = person(x, { who: 'sap1', dir: x < 639 ? 1 : -1, pose: p < .9 ? 'walk' : 'stand', ph: x / 9, tool: 'torch', A1: [2.4, 2.9] }); tip = r.tip1; }
  const fl = Math.sin(T * 11) * 6 + Math.sin(T * 17) * 4;
  octx.setTransform(1, 0, 0, 1, 0, 0); octx.globalCompositeOperation = 'source-over'; octx.clearRect(0, 0, W, H);
  octx.fillStyle = 'rgba(5,3,2,.97)'; octx.fillRect(0, 0, W, H);
  octx.globalCompositeOperation = 'destination-out';
  for (const [x, y, rr] of [[tip[0], tip[1] - 10, 280 + fl], [672, GY - 4, 105 + fl * .5]]) {
    const g = octx.createRadialGradient(x, y, 0, x, y, rr);
    g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(.5, 'rgba(0,0,0,.75)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    octx.fillStyle = g; octx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
  }
  ctx.globalAlpha = 1; ctx.drawImage(off, 0, 0, W, H);
  glow(tip[0], tip[1] - 10, 220, .22, '255,150,60');
  flameAt(tip[0], tip[1], .8);
  flameAt(672, GY - 1, .35);
}

/* ---------- 12: first farmers ---------- */
function hut(x) {
  ctx.globalAlpha = 1; ctx.fillStyle = '#b48a5c'; ctx.fillRect(x - 34, GY - 42, 68, 44);
  ctx.fillStyle = '#9b7b45'; poly([[x - 46, GY - 36], [x, GY - 88], [x + 46, GY - 36]]);
  ctx.strokeStyle = 'rgba(70,50,25,.45)'; ctx.lineWidth = 1.2; ctx.beginPath();
  for (let k = 1; k < 4; k++) { ctx.moveTo(x - 46 + k * 4, GY - 36 - k * 13); ctx.lineTo(x + 46 - k * 4, GY - 36 - k * 13); }
  ctx.stroke();
  ctx.fillStyle = '#3a2a1c'; ctx.beginPath(); ctx.moveTo(x - 9, GY + 2); ctx.lineTo(x - 9, GY - 18); ctx.arc(x, GY - 18, 9, Math.PI, 0); ctx.lineTo(x + 9, GY + 2); ctx.fill();
}
function scene12(p, lt) {
  vsky([[0, '#7fb2de'], [1, '#ece4c6']]);
  sunDisk(lerp(120, 840, p), 150 - Math.sin(p * Math.PI) * 70, 20);
  ridge(392, 16, .006, 0, '#9aa86a'); ridge(412, 9, .011, 90, '#87965b');
  groundG('#a9a060', '#6f6a3a');
  for (let k = 0; k < 8; k++) { const a = (lt * .15 + k / 8) % 1; ctx.fillStyle = `rgba(210,205,195,${(1 - a) * .45})`; ctx.beginPath(); ctx.arc(175 + a * 40 + Math.sin(k * 2 + a * 5) * 8, GY - 90 - a * 150, 6 + a * 20, 0, TAU); ctx.fill(); }
  hut(70); hut(175);
  const g = span(p, .32, .7), ripe = span(p, .6, .76), hx = p > .78 ? lerp(930, 395, span(p, .78, 1)) : 9999;
  const rowsY = [GY - 12, GY - 3, GY + 10, GY + 25, GY + 42];
  const row = ri => {
    const y = rowsY[ri];
    ctx.strokeStyle = 'rgba(95,80,40,.6)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(400, y + 1); ctx.lineTo(920, y + 1); ctx.stroke();
    if (g <= 0) return;
    const col = mix('#6e9a3a', '#d9b24a', ripe), ear = mix('#7fa848', '#c9962e', ripe);
    ctx.lineWidth = 1.5;
    for (let x = 402 + ri * 3; x < 920; x += 9) {
      const cut = x > hx, h = cut ? 3 : (3 + 28 * g) * (.8 + .4 * hash(x * .3 + ri)), sw = cut ? 0 : Math.sin(lt * 1.5 + x * .05) * 2 * g;
      ctx.strokeStyle = cut ? '#c9a24a' : col; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + sw, y - h); ctx.stroke();
      if (!cut && g > .6) { ctx.fillStyle = ear; ctx.beginPath(); ctx.ellipse(x + sw + .5, y - h - 2, 1.8, 4.5, 0, 0, TAU); ctx.fill(); }
    }
  };
  row(0); row(1);
  const head = Math.sin(lt * .7);
  quad(250, { kind: 'goat', dir: 1, head: head > 0 ? 'down' : 'up' });
  quad(305, { kind: 'goat', dir: -1, head: head > .3 ? 'up' : 'down', gy: GY + 8 });
  quad(345, { kind: 'goat', dir: 1, head: 'down', gy: GY - 4 });
  person(222, { who: 'kind', s: .66, dir: 1, pose: 'stand', tool: 'stick', A1: [.5, .3] });
  if (p < .3) {
    const x = lerp(400, 900, ease(span(p, .05, .3))), sw = Math.sin(lt * 4);
    const r = person(x, { who: 'boer1', dir: 1, pose: p > .05 ? 'walk' : 'stand', ph: x / 9, bag: true, A1: [.7 + sw * .6, 1.0 + sw * .6] });
    if (p > .05) for (let k = 0; k < 6; k++) { const a = (lt * 2 + k / 6) % 1; ctx.fillStyle = '#e3cf8a'; ctx.globalAlpha = 1 - a; ctx.fillRect(r.h1[0] + k * 3 * a, r.h1[1] + a * a * 40, 2, 2); }
    ctx.globalAlpha = 1;
  } else if (p < .46) { const x = lerp(900, 300, ease(span(p, .3, .46))); person(x, { who: 'boer1', dir: -1, pose: 'walk', ph: x / 9, bag: true }); }
  else {
    const m = Math.sin(lt * 4) * .25;
    ctx.fillStyle = '#8b867c'; ctx.beginPath(); ctx.ellipse(276, GY + 1, 20, 5, 0, 0, TAU); ctx.fill();
    const r = person(300, { who: 'boer1', dir: -1, pose: 'kneel', A1: [1.25 + m, 1.6 + m], A2: [1.15 + m, 1.5 + m] });
    ctx.fillStyle = '#a19c92'; ctx.beginPath(); ctx.ellipse(r.h1[0], r.h1[1] + 2, 7, 3.5, 0, 0, TAU); ctx.fill();
  }
  if (p > .76) {
    const x = lerp(945, 405, span(p, .78, 1)), sw = Math.sin(lt * 6);
    person(x, { who: 'boer2', dir: -1, pose: 'walk', ph: x / 6, tilt: .4, tool: 'sickle', A1: [1.2 + sw * .5, 1.6 + sw * .5] });
  }
  row(2); row(3); row(4);
}

/* ---------- 13: cities, wheel and writing ---------- */
function palm(x, y, s) {
  ctx.globalAlpha = 1; ctx.strokeStyle = '#7a5a36'; ctx.lineWidth = 6 * s; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 4 * s, y - 60 * s, x + 10 * s, y - 112 * s); ctx.stroke();
  ctx.strokeStyle = '#4f6b2e'; ctx.lineWidth = 3.5 * s; const tx = x + 10 * s, ty = y - 112 * s;
  for (let k = 0; k < 7; k++) { const a = -Math.PI + k * Math.PI / 6 + Math.sin(T + k) * .04; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.quadraticCurveTo(tx + Math.cos(a) * 30 * s, ty + Math.sin(a) * 22 * s - 6 * s, tx + Math.cos(a) * 46 * s, ty + Math.sin(a) * 10 * s + 16 * s); ctx.stroke(); }
}
function scene13(p, lt) {
  const pan = lerp(0, 1150, ease(span(p, .72, .88)));
  vsky([[0, '#8fbde0'], [1, '#f3e0b0']]); sunDisk(760, 100, 22);
  ridge(398, 8, .004, pan * .3, '#e5cc94');
  ctx.fillStyle = '#4f86a8'; ctx.fillRect(0, 404, W, 16);
  ctx.strokeStyle = 'rgba(220,240,255,.45)'; ctx.lineWidth = 1;
  for (let k = 0; k < 14; k++) { const x = ((k * 83 - lt * 12 - pan * .6) % W + W) % W; ctx.beginPath(); ctx.moveTo(x, 410 + (k % 3) * 3); ctx.lineTo(x + 18, 410 + (k % 3) * 3); ctx.stroke(); }
  const bx = 120 + lt * 14 - pan * .6;
  ctx.fillStyle = '#c9a65a'; ctx.beginPath(); ctx.moveTo(bx - 30, 404); ctx.quadraticCurveTo(bx, 418, bx + 30, 404); ctx.quadraticCurveTo(bx, 410, bx - 30, 404); ctx.fill();
  ctx.strokeStyle = '#6b4c2a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx, 408); ctx.lineTo(bx, 362); ctx.stroke();
  ctx.fillStyle = '#efe6cf'; poly([[bx + 1, 364], [bx + 1, 402], [bx + 24, 400]]);
  const cx = -pan * .85, CY = 432;
  ctx.fillStyle = '#d2ad74';
  for (let k = 0; k < 11; k++) { const x = cx + 280 + k * 50, h = 30 + hash(k * 7) * 34; ctx.fillRect(x, CY - 40 - h, 42, h + 4); }
  const z = cx + 560;
  [[150, 40, '#c49a62'], [105, 35, '#cfa66c'], [65, 30, '#c49a62']].reduce((y, [w, h, col]) => { ctx.fillStyle = col; ctx.fillRect(z - w, y - h, w * 2, h); return y - h; }, CY - 30);
  ctx.fillStyle = '#e2c08a'; ctx.fillRect(z - 28, CY - 163, 56, 28); ctx.fillStyle = '#5a4026'; ctx.fillRect(z - 6, CY - 152, 12, 17);
  ctx.fillStyle = '#dcb880'; ctx.fillRect(z - 10, CY - 135, 20, 105);
  ctx.fillStyle = '#b98d58'; ctx.fillRect(cx + 260, CY - 44, 560, 46);
  for (let x = cx + 260; x < cx + 820; x += 20) ctx.fillRect(x, CY - 52, 11, 9);
  ctx.fillStyle = '#4a3420'; ctx.beginPath(); ctx.moveTo(z - 14, CY + 2); ctx.lineTo(z - 14, CY - 22); ctx.arc(z, CY - 22, 14, Math.PI, 0); ctx.lineTo(z + 14, CY + 2); ctx.fill();
  for (const wx of [150, 880, 965]) palm(wx - pan * .9, CY + 4, .8 + hash(wx) * .2);
  for (const [wx, s] of [[1460, 200], [1680, 150], [1840, 100]]) {
    const x = wx - pan; if (x < -s * 2 || x > W + s * 2) continue;
    ctx.fillStyle = '#ddbb7e'; poly([[x - s, CY], [x, CY - s * .95], [x + s, CY]]);
    ctx.fillStyle = '#b8955a'; poly([[x, CY - s * .95], [x + s, CY], [x + s * .25, CY]]);
  }
  groundG('#dcc28c', '#b8975e', 424);
  const wx = lerp(1060, -220, span(p, .05, .66)), x = wx - pan, moving = p > .05 && p < .66;
  if (x > -260 && x < W + 220) {
    quad(x, { kind: 'ox', dir: -1, walk: moving, ph: wx / 10 });
    ctx.strokeStyle = '#5a4026'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 36, GY - 48); ctx.lineTo(x + 66, GY - 34); ctx.stroke();
    ctx.fillStyle = '#9b7444'; ctx.fillRect(x + 60, GY - 54, 76, 26);
    ctx.fillStyle = '#d9c08a'; ctx.beginPath(); ctx.ellipse(x + 98, GY - 56, 30, 9, 0, Math.PI, 0); ctx.fill();
    const wa = wx / 18, wxc = x + 98, wyc = GY - 18;
    ctx.fillStyle = '#7a5a36'; ctx.beginPath(); ctx.arc(wxc, wyc, 18, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#4f3a22'; ctx.lineWidth = 3; ctx.stroke();
    ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(wxc - Math.cos(wa) * 16, wyc - Math.sin(wa) * 16); ctx.lineTo(wxc + Math.cos(wa) * 16, wyc + Math.sin(wa) * 16); ctx.stroke();
    ctx.fillStyle = '#3a2a1c'; ctx.beginPath(); ctx.arc(wxc, wyc, 3, 0, TAU); ctx.fill();
    person(x + 160, { who: 'uruk2', dir: -1, pose: moving ? 'walk' : 'stand', ph: wx / 9, tool: 'stick', A1: [1.2, 1.5], gy: GY + 10 });
  }
  person(150 - pan, { who: 'uruk1', dir: 1, pose: 'sit', tool: 'stylus', A1: [1.25 + Math.sin(lt * 5) * .08, 1.75], A2: [1.0, 1.7] });
  ctx.fillStyle = '#b98c5a'; ctx.fillRect(150 - pan + 12, GY - 20, 14, 10);
  const ta = span(p, .42, .47) * (1 - span(p, .7, .74));
  if (ta > 0) {
    const px = W - 270, py = 110;
    ctx.globalAlpha = ta; ctx.fillStyle = 'rgba(8,9,16,.55)'; ctx.fillRect(px - 10, py - 10, 220, 170);
    ctx.fillStyle = '#b98c5a'; ctx.fillRect(px, py, 200, 132);
    ctx.fillStyle = '#7a5530'; const n = Math.floor(span(p, .45, .7) * 40);
    for (let k = 0; k < n; k++) {
      const wxk = px + 16 + (k % 8) * 22, wyk = py + 18 + Math.floor(k / 8) * 24, rot = hash(k * 7) > .6 ? Math.PI / 2 : 0;
      ctx.save(); ctx.translate(wxk, wyk); ctx.rotate(rot); poly([[-5, -5], [5, -5], [0, 1]]); ctx.fillRect(-1, 0, 2, 9); ctx.restore();
    }
    ctx.fillStyle = '#f4efe4'; ctx.font = '500 12px "IBM Plex Mono", ui-monospace, monospace'; ctx.fillText('spijkerschrift', px, py + 152);
    ctx.globalAlpha = 1;
  }
}

/* ---------- 14: one world ---------- */
const LIGHTS = [];
LAND.forEach((pt, i) => { for (let j = 0; j < 6; j++) LIGHTS.push({ lat: pt.lat + (hash(i * 50 + j) - .5) * pt.s * 1.4, lon: pt.lon + (hash(i * 60 + j) - .5) * pt.s * 2, dr: pt.dr, t: hash(i * 70 + j) }); });
function scene14(p, lt) {
  bg(); setCam(2 + lt * .01, .05, 900); bgStars(.7);
  const cx = W / 2 - 40, cy = H / 2 - 6, R = 170, rotY = lt * .25 - 1.2;
  globe(cx, cy, R, rotY, { base: '#1b5b94', land: '#4d8a3a', caps: .12, clouds: .55, drift: .7, atmo: '127,191,255', atmoA: .55 });
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = '#ffd27a';
  for (const L of LIGHTS) {
    const ap = span(p, L.t * .75, L.t * .75 + .12); if (ap <= 0) continue;
    const lon = L.lon + rotY + .7 * L.dr, cl = Math.cos(L.lat), z = cl * Math.cos(lon); if (z < .05) continue;
    const xs = cl * Math.sin(lon), night = clamp(xs * 1.8 + .15); if (night <= 0) continue;
    ctx.globalAlpha = ap * night * .9; ctx.fillRect(cx + R * xs - .8, cy - R * Math.sin(L.lat) - .8, 1.8, 1.8);
  }
  ctx.restore(); ctx.globalAlpha = 1;
  const mx = 846, my = 104;
  globe(mx, my, 24, 0, { base: '#9a968e', land: '#6f6b64' });
  if (p > .55 && p < .68) {
    const t = span(p, .55, .68), bz = (a, b, c, u) => (1 - u) * (1 - u) * a + 2 * (1 - u) * u * b + u * u * c;
    const sx0 = cx + R * .72, sy0 = cy - R * .72, ccx = 700, ccy = 30;
    ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let u = Math.max(0, t - .15); u <= t; u += .01) { const X = bz(sx0, ccx, mx - 14, u), Y = bz(sy0, ccy, my + 8, u); u === Math.max(0, t - .15) ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y); }
    ctx.stroke(); glow(bz(sx0, ccx, mx - 14, t), bz(sy0, ccy, my + 8, t), 10, .9, '255,240,210');
  }
  const ns = Math.floor(span(p, .5, 1) * 50);
  ctx.fillStyle = '#ffffff';
  for (let k = 0; k < ns; k++) {
    const inc = hash(k * 7) * 1.4 - .7, rr = R * (1.12 + hash(k * 3) * .5), a = hash(k * 5) * TAU + lt * (.9 - hash(k) * .4) * (R * 1.2 / rr);
    const x = Math.cos(a) * rr, y = Math.sin(a) * rr * Math.sin(inc) * .9, z = Math.sin(a) * rr * Math.cos(inc);
    if (z < 0 && Math.hypot(x, y) < R) continue;
    ctx.globalAlpha = .9; ctx.fillRect(cx + x - .9, cy + y - .9, 1.8, 1.8);
  }
  ctx.globalAlpha = 1;
  const ya = span(p, .86, .92);
  if (ya > 0) {
    const lat = .9, lon = -.2 + (lt - 11.2) * .25, cl = Math.cos(lat);
    if (cl * Math.cos(lon) > 0) {
      const x = cx + R * cl * Math.sin(lon), y = cy - R * Math.sin(lat);
      glow(x, y, 14 + 4 * Math.sin(lt * 5), .9 * ya, '224,168,69');
      ctx.globalAlpha = ya; ctx.fillStyle = '#e0a845'; ctx.beginPath(); ctx.arc(x, y, 3, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(244,239,228,.8)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 60, y - 50); ctx.lineTo(x - 130, y - 50); ctx.stroke();
      ctx.globalAlpha = 1; tag(x - 132, y - 56, 'jij bent hier', ya);
    }
  }
}
const SCENE_FN = [scene0, scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11, scene12, scene13, scene14];


/* ---------- frame ---------- */
// The scenes are drawn on a 960×540 stage that is scaled to cover the whole window.
const view = { s: 1, ox: 0, oy: 0 };
const $ = id => document.getElementById(id);
const ui = {
  clock: $('clock'), sceneNo: $('scene-no'), lower: $('lower'), idx: $('lower-idx'),
  title: $('lower-title'), txt: $('lower-txt'), fact: $('lower-fact'), timeline: $('timeline'), time: $('time'),
};
const pad = n => String(n).padStart(2, '0');
const fmt = x => Math.floor(x / 60) + ':' + pad(Math.floor(x % 60));
const segs = SCENES.map((s, i) => {
  const el = document.createElement('button');
  el.className = 'seg'; el.type = 'button';
  el.setAttribute('aria-label', s.t + ': ' + s.title);
  el.innerHTML = '<i></i><span>' + s.t + ' · ' + s.title + '</span>';
  el.addEventListener('click', e => {
    const r = el.getBoundingClientRect();
    const f = e.detail === 0 ? 0 : clamp((e.clientX - r.left) / r.width);   // keyboard: start of scene
    T = Math.min(TOTAL - .01, i * DUR + f * DUR + .001);
  });
  ui.timeline.appendChild(el);
  return el;
});
let current = -1;
function enter(i) {
  current = i;
  const s = SCENES[i];
  ui.lower.classList.remove('show');
  void ui.lower.offsetWidth;
  ui.idx.textContent = pad(i + 1) + ' / ' + pad(SCENES.length) + ' · ' + s.meta.toUpperCase();
  ui.title.textContent = s.title;
  ui.txt.textContent = s.txt;
  ui.fact.innerHTML = s.fact;
  ui.sceneNo.textContent = 'scène ' + (i + 1) + ' van ' + SCENES.length;
  segs.forEach((el, j) => el.classList.toggle('cur', j === i));
}
function draw() {
  const i = Math.min(SCENES.length - 1, Math.floor(T / DUR)), lt = T - i * DUR, p = lt / DUR;
  if (i !== current) enter(i);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.setTransform(view.s, 0, 0, view.s, view.ox, view.oy);
  SCENE_FN[i](p, lt);
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  const v = ctx.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, H * .95);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.45)');
  ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  const fade = Math.max(i > 0 ? 1 - span(p, 0, .04) : 0, span(p, .97, 1));
  if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, W, H); }
  const marks = SCENES[i].marks;
  let lbl = marks[0][1]; for (const [m, l] of marks) if (p >= m) lbl = l;
  if (ui.clock.textContent !== lbl) ui.clock.textContent = lbl;
  ui.lower.classList.toggle('show', lt > .8 && lt < DUR - .6);
  segs.forEach((el, j) => { el.firstChild.style.width = ((j < i ? 1 : j > i ? 0 : p) * 100).toFixed(2) + '%'; });
  ui.time.textContent = fmt(T) + ' / ' + fmt(TOTAL);
}

/* ---------- controls ---------- */
const playBtn = $('play');
function setPlaying(v) {
  playing = v; last = performance.now();
  playBtn.classList.toggle('paused', !v);
  playBtn.setAttribute('aria-label', v ? 'Pauzeren' : 'Afspelen');
}
function jump(d) {
  const i = Math.min(SCENES.length - 1, Math.floor(T / DUR)), t = T - i * DUR;
  let j = i + d;
  if (d < 0 && t > 1.5) j = i;
  T = ((j + SCENES.length) % SCENES.length) * DUR + .001;
}
playBtn.addEventListener('click', () => setPlaying(!playing));
$('prev').addEventListener('click', () => jump(-1));
$('next').addEventListener('click', () => jump(1));
cv.addEventListener('click', () => setPlaying(!playing));
window.addEventListener('keydown', e => {
  if (e.code === 'Space') { e.preventDefault(); setPlaying(!playing); }
  else if (e.code === 'ArrowRight') jump(1);
  else if (e.code === 'ArrowLeft') jump(-1);
  else if (e.key === 'h' || e.key === 'H') document.body.classList.toggle('clean');
  wake();
});
let idleTimer = 0;
function wake() {
  document.body.classList.remove('idle');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { if (playing) document.body.classList.add('idle'); }, 3000);
}
window.addEventListener('pointermove', wake);
window.addEventListener('pointerdown', wake);
wake();
// read-only view of the timeline for music.js
window.heelal = { get T() { return T; }, get playing() { return playing; }, DUR, TOTAL, scenes: SCENES.length };
// ?t=40 starts at second 40, ?paused pauses right away
const q = new URLSearchParams(location.search);
if (q.has('t')) T = clamp(parseFloat(q.get('t')) || 0, 0, TOTAL - .01);
if (q.has('paused')) setPlaying(false);
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);

function resize() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = Math.round(window.innerWidth * dpr); cv.height = Math.round(window.innerHeight * dpr);
  // cover the window, but on tall (portrait) screens keep at least ~620 px of the stage width in view
  view.s = Math.min(Math.max(cv.width / W, cv.height / H), cv.width / 620);
  view.ox = (cv.width - W * view.s) / 2; view.oy = (cv.height - H * view.s) / 2;
  draw();
}
window.addEventListener('resize', resize);

function loop(now) {
  const dt = Math.min(.1, (now - last) / 1000); last = now;
  if (playing) T = (T + dt) % TOTAL;
  draw();
  requestAnimationFrame(loop);
}
resize();
requestAnimationFrame(loop);
})();
