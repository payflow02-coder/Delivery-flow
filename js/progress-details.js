function detailedProgress(stepNumber) {
  const content = document.getElementById('content');
  const details = [
    "Оплата успешно прошла",
    "Товар собирается на складе",
    "Отправлено курьером",
    "Курьер уже в пути к вам"
  ];

  content.innerHTML += `
    <div style="margin-top:15px;padding:15px;background:#e5e7eb;color:black;border-radius:10px;">
      <b>Подробности этапа:</b> ${details[stepNumber]}
    </div>
  `;
}
