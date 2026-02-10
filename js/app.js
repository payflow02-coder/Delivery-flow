let step = 0;
const steps = document.querySelectorAll('.step');
const bar = document.getElementById('bar');
const content = document.getElementById('content');

content.innerHTML = `<h3>${deliveryData[0].title}</h3><p>${deliveryData[0].text}</p>`;

function nextStep() {
  if (step < 3) {
    steps[step].classList.remove('active');
    step++;
    steps[step].classList.add('active');
    bar.style.width = step * 33 + '%';
    content.innerHTML = `<h3>${deliveryData[step].title}</h3><p>${deliveryData[step].text}</p>`;
  }
}
