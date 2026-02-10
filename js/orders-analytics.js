function showStats() {
  const content = document.getElementById('content');
  content.innerHTML += `
    <h3>📊 Статистика заказов</h3>
    <ul>
      <li>Всего заказов: 12</li>
      <li>В обработке: 2</li>
      <li>В пути: 3</li>
      <li>Доставлено: 7</li>
    </ul>
  `;
}
