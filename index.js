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
