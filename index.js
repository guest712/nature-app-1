// ---------- images you have in /images ----------
const LEAF_IMAGES = [
  "./images/leaf_heart.png",
  "./images/leaf_tomato.png",
  // add more later…
];

// (optional) preload so they appear instantly
LEAF_IMAGES.forEach(src => { const i = new Image(); i.src = src; });

// ---------- leaf animation ----------
function spawnLeaf() {
  const layer = document.getElementById("leaf-layer");
  if (!layer) return;

  const img = document.createElement("img");
  img.className = "leaf";
  img.src = LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)];
  img.alt = "leaf";

  // randomize
  const startXvw = Math.random() * 100;
  const size     = 18 + Math.random() * 36;  // 18–54px
  const dur      = 2600 + Math.random() * 2200;
  const swayDur  = 1400 + Math.random() * 1200;
  const dx       = (Math.random() * 200 - 100) + "px";
  const rot      = (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random()*360) + "deg";
  const rA       = (Math.random() * 8 - 4) + "deg";
  const rB       = (Math.random() * 8 - 4) + "deg";
  const delay    = Math.random() * 250;

  img.style.left = `calc(${startXvw}vw - ${size/2}px)`;
  img.style.height = size + "px";
  img.style.setProperty("--dur",     dur + "ms");
  img.style.setProperty("--swayDur", swayDur + "ms");
  img.style.setProperty("--dx",      dx);
  img.style.setProperty("--rot",     rot);
  img.style.setProperty("--rA",      rA);
  img.style.setProperty("--rB",      rB);
  img.style.animationDelay = delay + "ms";

  layer.appendChild(img);
  setTimeout(() => img.remove(), dur + 1200 + delay);
}

function startAmbientLeaves() {
  setInterval(() => { for (let i = 0; i < 3; i++) spawnLeaf(); }, 2200);
  setInterval(spawnLeaf, 900);
}

function burstLeaves(count = 24) {
  for (let i = 0; i < count; i++) setTimeout(spawnLeaf, i * 60);
}

// ---------- counter + quote ----------
let count = 0;
const quotes = [
  "Каждый лист шепчет тебе спасибо 🌿",
  "Ты — часть великого леса 🍃",
  "Природа чувствует твою заботу 💚",
  "Мир стал чуть светлее 🌞",
  "Твои руки творят добро 🌍"
];

function helpNature() {
  count++;
  const counterEl = document.getElementById("counter");
  const quoteEl   = document.getElementById("quote");
  if (counterEl) counterEl.textContent = `Ты уже сделал ${count} добрых дел 💚`;
  if (quoteEl)   quoteEl.textContent   = quotes[Math.floor(Math.random()*quotes.length)];
  burstLeaves();
}

// make helpNature available for the button onclick
window.helpNature = helpNature;

// start everything when the page is ready
window.addEventListener("DOMContentLoaded", () => {
  startAmbientLeaves();
});
