/* Muziek bij de geschiedenis van het heelal.
   Standaard: een zelf gegenereerde score in de stijl van Hans Zimmer (Interstellar-orgel, tikkende klok,
   strijkers-ostinato en 'BRAAAM'-klappen op de grote momenten), live gemaakt met de Web Audio API.
   Eigen muziek: zet een bestand in muziek/soundtrack.mp3, of kies er een met de muzieknoot-knop. */
(() => {
const H = window.heelal;
if (!H) return;
const DUR = H.DUR;
const $ = id => document.getElementById(id);
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const hash = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const freq = m => 440 * Math.pow(2, (m - 69) / 12);

/* ---------- de score ---------- */
// akkoord: [bas, ...orgelnoten] in MIDI
const CH = {
  Am: [33, 45, 52, 57, 60, 64], Asus2: [33, 45, 52, 57, 59, 64],
  F: [29, 41, 48, 53, 57, 60], Fmaj7: [29, 41, 48, 52, 57, 60],
  C: [36, 48, 55, 60, 64, 67], G: [31, 43, 50, 55, 59, 62],
  Em: [28, 40, 47, 52, 55, 59], E: [28, 40, 47, 52, 56, 59], Esus: [28, 40, 47, 52, 57, 59],
  Dm: [26, 38, 45, 50, 53, 57],
};
// per scène: akkoorden, intensiteit (begin → eind), klok, ostinato (sterkte, van, tot), belletjes, klappen (p)
const SCORE = [
  { ch: ['Am'], from: .07, i: [.55, .65], hits: [.07] },                                  // oerknal
  { ch: ['Fmaj7', 'Am'], i: [.22, .3], bells: .7 },                                       // doorzichtig
  { ch: ['Am', 'F', 'C', 'G'], i: [.3, .6], tick: 1, arp: [.5, .45, 1], hits: [.79] },    // eerste sterren
  { ch: ['F', 'C', 'G', 'Am'], i: [.6, .75], tick: 1, arp: [.6, 0, 1], bells: .3 },       // sterrenstelsels
  { ch: ['Am', 'F', 'C', 'Esus'], i: [.5, .7], tick: 1, arp: [.7, .15, 1] },              // zon en planeten
  { ch: ['Dm', 'Am', 'F', 'C'], i: [.65, .45], tick: 1, arp: [.9, 0, .34], hits: [.335] }, // Theia
  { ch: ['Asus2', 'Fmaj7'], i: [.22, .3], bells: .8 },                                    // eerste leven
  { ch: ['Am', 'F', 'C', 'G'], i: [.4, .75], tick: 1, arp: [.65, .3, .74], hits: [.74] }, // leven verovert
  { ch: ['Em', 'C'], i: [.32, .4], tick: .6, bells: .35 },                                // rechtop lopen
  { ch: ['Am', 'G', 'F', 'E'], i: [.45, .55], tick: 1, arp: [.5, .4, 1], hits: [.06] },   // vuur
  { ch: ['F', 'C', 'G', 'Am'], i: [.5, .65], tick: 1, arp: [.7, 0, 1] },                  // de wereld over
  { ch: ['Am', 'Fmaj7'], i: [.22, .3], bells: .6 },                                       // kunst in de ijstijd
  { ch: ['C', 'G', 'Am', 'F'], i: [.4, .5], tick: .8, arp: [.4, .3, 1] },                 // eerste boeren
  { ch: ['Am', 'F', 'C', 'G'], i: [.55, .72], tick: 1, arp: [.8, 0, 1] },                 // steden
  { ch: ['F', 'C', 'G', 'Am'], i: [.72, 1], tick: 1, arp: [1, 0, .9] },                   // één wereld
];
const BEAT = .75, PATTERN = [0, 2, 1, 2, 3, 2, 1, 2];

const EV = [];
SCORE.forEach((s, i) => {
  const base = i * DUR, from = s.from || 0, n = s.ch.length, slot = (1 - from) * DUR / n;
  const chordAt = t => CH[s.ch[clamp(Math.floor((t - base - from * DUR) / slot), 0, n - 1)]];
  s.ch.forEach((c, k) => EV.push({
    t: base + from * DUR + k * slot, type: 'pad', ch: CH[c], dur: slot,
    inten: lerp(s.i[0], s.i[1], n > 1 ? k / (n - 1) : 0), atk: i === 0 ? .25 : 1.6,
  }));
  if (s.tick) for (let b = 0, t = base; t < base + DUR - .01; b++, t += BEAT) EV.push({ t, type: 'tick', acc: b % 4 === 0, vol: s.tick });
  if (s.arp) {
    const [lvl, a, z] = s.arp, step = lvl > .6 ? BEAT / 4 : BEAT / 2;
    for (let k = 0, t = base + a * DUR; t < base + z * DUR - .01; k++, t += step) {
      const c = chordAt(t), ramp = clamp((t - base - a * DUR) / 3, .25, 1);
      EV.push({ t, type: 'arp', m: c[3 + PATTERN[k % 8] % 3] + 12, vol: lvl * ramp });
    }
  }
  if (s.bells) for (let k = 0, t = base + .4; t < base + DUR - 1; k++, t += BEAT / 2) {
    if (hash(i * 97 + k) > s.bells * .55) continue;
    const c = chordAt(t);
    EV.push({ t, type: 'bell', m: c[2 + Math.floor(hash(i * 13 + k) * 4)] + (hash(k * 5 + i) > .5 ? 24 : 12), vol: .6 + .4 * hash(k + i) });
  }
  for (const p of s.hits || []) {
    const t = base + p * DUR, r = Math.min(1.8, t - base);
    if (r > .3) EV.push({ t: t - r, type: 'riser', dur: r });
    EV.push({ t, type: 'hit' });
  }
});
EV.sort((a, b) => a.t - b.t);

/* ---------- synthese ---------- */
let ac = null, master, comp, revIn, bus = null, noise;
let muted = false, mode = 'synth', ownUrl = null, fileOk = false;

function initAudio() {
  ac = new (window.AudioContext || window.webkitAudioContext)();
  comp = ac.createDynamicsCompressor();
  comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = .01; comp.release.value = .3;
  master = ac.createGain(); master.gain.value = muted ? 0 : .9;
  master.connect(comp); comp.connect(ac.destination);
  // galm: zelf gemaakte impulsrespons van 5 seconden
  const len = ac.sampleRate * 5, ir = ac.createBuffer(2, len, ac.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
  const conv = ac.createConvolver(); conv.buffer = ir;
  revIn = ac.createGain(); revIn.gain.value = .55;
  revIn.connect(conv); conv.connect(master);
  noise = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate);
  const nd = noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
}
function newBus() {
  if (bus) { const old = bus; old.gain.setTargetAtTime(0, ac.currentTime, .06); setTimeout(() => old.disconnect(), 800); }
  bus = ac.createGain(); bus.connect(master); bus.connect(revIn);
}
function osc(type, f, t, end, dest, gain = 1, detune = 0) {
  const o = ac.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = detune;
  let node = o;
  if (gain !== 1) { const g = ac.createGain(); g.gain.value = gain; o.connect(g); node = g; }
  node.connect(dest); o.start(t); o.stop(end);
  return o;
}
function env(t, peak, atk, decay) { // gain met korte aanzet en exponentieel uitsterven
  const g = ac.createGain(); g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + atk); g.gain.setTargetAtTime(0, t + atk, decay);
  return g;
}

function pad(e, t, dur, atk) { // het orgel
  const end = t + dur + 5, inten = e.inten;
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = .5;
  lp.frequency.setValueAtTime(400 + 1400 * inten, t); lp.frequency.linearRampToValueAtTime(600 + 2600 * inten, t + dur);
  const g = ac.createGain(); g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(1, t + atk); g.gain.setValueAtTime(1, t + dur); g.gain.setTargetAtTime(0, t + dur, .9);
  lp.connect(g); g.connect(bus);
  const v = .028 * (.45 + inten);
  e.ch.slice(1).forEach((m, k) => {
    const f = freq(m), d = (hash(m + k) - .5) * 8;
    osc('sine', f, t, end, lp, v, d);
    osc('triangle', f, t, end, lp, v * .55, d + 5);
    osc('sine', f * 2, t, end, lp, v * .3);
    if (inten > .5) osc('sine', f * 3, t, end, lp, v * .14 * (inten - .3));
  });
  const fb = freq(e.ch[0]); // pedaal
  osc('sine', fb, t, end, g, v * 3.2);
  osc('sine', fb * 2, t, end, g, v * 1.2);
}
function tick(e, t) { // de klok
  const s = ac.createBufferSource(); s.buffer = noise;
  const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = e.acc ? 2300 : 3400; bp.Q.value = 5;
  const g = env(t, (e.acc ? .55 : .38) * e.vol, .002, .018);
  s.connect(bp); bp.connect(g); g.connect(bus); s.start(t, Math.random() * 2, .12);
}
function arp(e, t) { // strijkers-ostinato
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 3;
  lp.frequency.setValueAtTime(2600, t); lp.frequency.exponentialRampToValueAtTime(420, t + .22);
  const g = env(t, .055 * e.vol, .006, .09);
  lp.connect(g); g.connect(bus);
  osc('sawtooth', freq(e.m), t, t + .6, lp, 1, -6);
  osc('sawtooth', freq(e.m), t, t + .6, lp, 1, 6);
}
function bell(e, t) { // sterrenlicht
  const g = env(t, .045 * e.vol, .01, .9); g.connect(bus);
  const f = freq(e.m);
  osc('sine', f, t, t + 5, g);
  osc('sine', f * 2.76, t, t + 5, g, .18);
}
let curve = null;
function hit(t) { // BRAAAM
  if (!curve) { curve = new Float32Array(1024); for (let i = 0; i < 1024; i++) curve[i] = Math.tanh((i / 511.5 - 1) * 3.5); }
  const ws = ac.createWaveShaper(); ws.curve = curve;
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 2;
  lp.frequency.setValueAtTime(140, t); lp.frequency.exponentialRampToValueAtTime(1500, t + .22); lp.frequency.exponentialRampToValueAtTime(200, t + 3.5);
  const g = ac.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.42, t + .04); g.gain.setTargetAtTime(0, t + .5, 1.1);
  const pre = ac.createGain(); pre.gain.value = .35;
  pre.connect(ws); ws.connect(lp); lp.connect(g); g.connect(bus);
  for (const m of [33, 40, 45, 52]) for (const d of [-9, 0, 9]) osc('sawtooth', freq(m), t, t + 6, pre, 1, d);
  // pauk
  const b = ac.createOscillator(); b.type = 'sine';
  b.frequency.setValueAtTime(95, t); b.frequency.exponentialRampToValueAtTime(34, t + .8);
  const bg = env(t, .9, .005, .45); b.connect(bg); bg.connect(bus); b.start(t); b.stop(t + 3);
  // slag
  const s = ac.createBufferSource(); s.buffer = noise;
  const nl = ac.createBiquadFilter(); nl.type = 'lowpass'; nl.frequency.value = 2500;
  const ng = env(t, .3, .005, .5); s.connect(nl); nl.connect(ng); ng.connect(bus); s.start(t, 0, 2.9);
}
function riser(e, t) { // aanzwellen voor de klap
  const s = ac.createBufferSource(); s.buffer = noise;
  const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(250, t); bp.frequency.exponentialRampToValueAtTime(5000, t + e.dur);
  const g = ac.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.22, t + e.dur); g.gain.linearRampToValueAtTime(0, t + e.dur + .06);
  s.connect(bp); bp.connect(g); g.connect(bus); s.start(t, 0, e.dur + .1);
}
function play(e, t) {
  if (e.type === 'pad') pad(e, t, e.dur, e.atk);
  else if (e.type === 'tick') tick(e, t);
  else if (e.type === 'arp') arp(e, t);
  else if (e.type === 'bell') bell(e, t);
  else if (e.type === 'hit') hit(t);
  else if (e.type === 'riser') riser(e, t);
}

/* ---------- synchroon met de animatie ---------- */
const LOOK = .3;
let anchor = 0, idx = 0;
function reset(T) {
  newBus();
  anchor = ac.currentTime - T;
  idx = EV.findIndex(e => e.t >= T); if (idx < 0) idx = EV.length;
  for (let k = idx - 1; k >= 0; k--) { // het akkoord dat al klinkt, meteen laten klinken
    const e = EV[k];
    if (e.type !== 'pad') continue;
    if (e.t + e.dur > T + .3) pad(e, ac.currentTime + .02, e.t + e.dur - T, .5);
    break;
  }
}
function schedule(T) {
  const drift = ac.currentTime - anchor - T;
  if (Math.abs(drift) > .04) anchor = ac.currentTime - T;
  while (idx < EV.length && EV[idx].t < T + LOOK) {
    const e = EV[idx++], at = anchor + e.t;
    if (at < ac.currentTime - .05 && e.type !== 'pad' && e.type !== 'hit') continue;
    play(e, Math.max(at, ac.currentTime + .005));
  }
}

const track = $('track'), tag = $('music-tag'), muteBtn = $('mute'), ownBtn = $('own'), ownFile = $('own-file'), startBtn = $('sound-start');
track.addEventListener('loadedmetadata', () => { fileOk = true; if (!ownUrl && started) setMode('file'); });
track.addEventListener('error', () => { fileOk = false; if (mode === 'file') setMode('synth'); });

let started = false, lastT = H.T, lastWall = performance.now() / 1000, wasPlaying = H.playing;
function setMode(m) {
  mode = m;
  ownBtn.classList.toggle('active', m === 'file');
  ownBtn.setAttribute('aria-label', m === 'file' ? 'Terug naar de ingebouwde score' : 'Eigen muziekbestand kiezen');
  ownBtn.title = ownBtn.getAttribute('aria-label');
  if (!ac) return;
  if (m === 'file') {
    if (bus) { newBus(); }
    master.gain.setTargetAtTime(0, ac.currentTime, .05);
    track.currentTime = track.duration ? H.T % track.duration : 0;
    track.muted = muted;
    if (H.playing) track.play().catch(() => {});
    const name = ownUrl ? ownFile.files[0].name.replace(/\.[^.]+$/, '') : 'soundtrack';
    tag.textContent = '♪ ' + name;
  } else {
    track.pause();
    master.gain.setTargetAtTime(muted ? 0 : .9, ac.currentTime, .05);
    reset(H.T);
    tag.textContent = '♪ score in de stijl van Hans Zimmer';
  }
}
function start() {
  if (started) return;
  started = true;
  startBtn.classList.add('gone');
  initAudio();
  if (!H.playing) ac.suspend();
  if (track.readyState >= 1 && !track.error) fileOk = true;
  setMode(fileOk ? 'file' : 'synth');
}
startBtn.addEventListener('click', start);
window.addEventListener('pointerdown', e => { if (e.target.closest('#controls')) start(); }, true);
window.addEventListener('keydown', e => {
  if (e.key === 'm' || e.key === 'M') { start(); toggleMute(); }
  else if (['Space', 'ArrowLeft', 'ArrowRight'].includes(e.code)) start();
});

function toggleMute() {
  muted = !muted;
  muteBtn.classList.toggle('off', muted);
  muteBtn.setAttribute('aria-label', muted ? 'Muziek aanzetten' : 'Muziek dempen');
  muteBtn.title = muted ? 'Muziek aanzetten (M)' : 'Muziek dempen (M)';
  track.muted = muted;
  if (ac && mode === 'synth') master.gain.setTargetAtTime(muted ? 0 : .9, ac.currentTime, .08);
}
muteBtn.addEventListener('click', () => { if (!started) start(); else toggleMute(); });
ownBtn.addEventListener('click', () => {
  start();
  if (mode === 'file') { setMode('synth'); return; }
  ownFile.click();
});
ownFile.addEventListener('change', () => {
  const f = ownFile.files[0]; if (!f) return;
  if (ownUrl) URL.revokeObjectURL(ownUrl);
  ownUrl = URL.createObjectURL(f);
  track.src = ownUrl;
  track.addEventListener('loadedmetadata', () => setMode('file'), { once: true });
});

document.addEventListener('visibilitychange', () => {
  if (!ac) return;
  if (document.hidden) { ac.suspend(); track.pause(); }
  else if (H.playing) { ac.resume(); if (mode === 'file') track.play().catch(() => {}); }
});

setInterval(() => {
  const T = H.T, playing = H.playing, wall = performance.now() / 1000;
  const expected = lastT + (wasPlaying ? wall - lastWall : 0);
  const jumped = Math.abs(T - expected) > .45;
  if (ac && !document.hidden) {
    if (playing !== wasPlaying) {
      if (playing) { ac.resume(); if (mode === 'file') track.play().catch(() => {}); }
      else { ac.suspend(); track.pause(); }
    }
    if (mode === 'file') {
      if (jumped && track.duration) track.currentTime = T % track.duration;
    } else if (playing || jumped) {
      if (jumped) reset(T);
      if (playing && ac.state === 'running') schedule(T);
    }
  }
  lastT = T; lastWall = wall; wasPlaying = playing;
}, 50);
})();
