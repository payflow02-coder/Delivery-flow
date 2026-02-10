function toast(message) {
  const toastEl = document.createElement('div');
  toastEl.textContent = message;
  toastEl.style.position = 'fixed';
  toastEl.style.bottom = '30px';
  toastEl.style.right = '30px';
  toastEl.style.padding = '15px 25px';
  toastEl.style.background = '#2563eb';
  toastEl.style.color = 'white';
  toastEl.style.borderRadius = '10px';
  toastEl.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  toastEl.style.opacity = '0';
  toastEl.style.transition = 'opacity 0.5s';
  document.body.appendChild(toastEl);
  
  setTimeout(() => { toastEl.style.opacity = '1'; }, 50);
  setTimeout(() => { toastEl.style.opacity = '0'; setTimeout(()=>toastEl.remove(),500); }, 3000);
}
