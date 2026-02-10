function showMap() {
  const content = document.getElementById('content');
  content.innerHTML += `
    <h3>📍 Местоположение курьера</h3>
    <div style="width:100%;height:300px;background:#d1d5db;border-radius:15px;display:flex;justify-content:center;align-items:center;">
      <span>Карта (здесь будет карта)</span>
    </div>
  `;
}
