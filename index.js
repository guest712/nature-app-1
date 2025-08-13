const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Сказать Express'у, где лежат статические файлы
app.use(express.static('public'));
// Отправлять HTML-файл при переходе на главную страницу
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Приложение запущено: http://localhost:${port}`);
});
app.get('/eco-tip', (req, res) => {
  res.send(`'Вот экологический совет дня: выключай свет, когда выходишь 🌍');
});
    <h1>Совет дня 🌱</h1>
    <p>Не выбрасывай окурки на землю — Земля помнит всё 🌍🚭</p>
    <a href="/">Назад</a>
  `);
});
// --- Настройка изображений (пути относительно КОРНЯ репозитория) ---
const LEAF_IMAGES = [
  "./images/leaf_heart.png",
  "./images/leaf_tomato.png",
  // можно добавлять больше...
];

// Подгрузим их, чтобы анимация не «пустая»
LEAF_IMAGES.forEach(src => { const i = new Image(); i.src = src; });

// Счетчик и фразочки
let count = 0;
const quotes = [
  "Каждый лист шепчет тебе спасибо 🌿",
  "Ты — часть великого леса 🍃",
  "Природа чувствует твою заботу 💚",
  "Мир стал чуть светлее 🌞",
  "Твои руки творят добро 🌍",
];

function setCounterAndQuote() {
  count++;
  document.getElementById("counter").textContent =
    `Ты уже сделал ${count} добрых дел 💚`;
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = q;
}

// Листок
function spawnLeaf() {
  const layer = document.getElementById("leaf-layer");
  const img = document.createElement("img");
  img.className = "leaf";
  img.src = LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)];
  img.alt = "leaf";

  const startX = Math.random() * 100;            // vw
  const size   = 18 + Math.random() * 36;        // px
  const dur    = 2600 + Math.random() * 2200;    // ms
  const sway   = 1400 + Math.random() * 1200;    // ms
  const dx     = (Math.random() * 200 - 100) + "px";
  const rot    = (Math.random() * 360 * (Math.random()<.5?-1:1)) + "deg";
  const rA     = (Math.random() * 8 - 4) + "deg";
  const rB     = (Math.random() * 8 - 4) + "deg";
  const delay  = Math.random() * 250;

  img.style.left = `calc(${startX}vw - ${size/2}px)`;
  img.style.height = size + "px";
  img.style.setProperty("--dur",  dur + "ms");
  img.style.setProperty("--sway", sway + "ms");
  img.style.setProperty("--dx",   dx);
  img.style.setProperty("--rot",  rot);
  img.style.setProperty("--rA",   rA);
  img.style.setProperty("--rB",   rB);
  img.style.animationDelay = delay + "ms";

  layer.appendChild(img);
  setTimeout(() => img.remove(), dur + 1400 + delay);
}

// Мягкий постоянный поток
function startAmbient() {
  setInterval(() => { for (let i=0;i<3;i++) spawnLeaf(); }, 2200);
  setInterval(spawnLeaf, 900);
}

// «Залп» при клике
function burst(n=24){ for(let i=0;i<n;i++) setTimeout(spawnLeaf, i*60); }

// Навешиваем обработчики
window.addEventListener("DOMContentLoaded", () => {
  startAmbient();
  document.getElementById("helpBtn").addEventListener("click", () => {
    setCounterAndQuote();
    burst(30);
  });
});
