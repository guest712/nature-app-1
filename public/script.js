const actions = [ 
  "Посади цветок на балконе или в саду",
  "Подкорми птиц — поставь воду и зерно",
  "Собери 10 мусоринок по дороге домой",
  "Выключи лишний свет — дай звёздам сиять",
  "Сдай батарейки в эко-точку",
  "Перестань на день пользоваться пластиком",
  "Поделись этим приложением с другом",
  "Собери дождевую воду и полей растения",
  "Сделай компост из остатков еды",
  "Обними дерево и поблагодари его 🌳"
];

function showAction() {
  const randomIndex = Math.floor(Math.random() * actions.length);
  const action = actions[randomIndex];
  window.onload = function() {
    document.getElementById("leafButton").addEventListener("click", spawnLeaf);
};
<!-- добавь -->
<!-- Версия обновлена вручную -->
<script src="./script.js"></script>

