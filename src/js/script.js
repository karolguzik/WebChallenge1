console.log('testujemy');
console.log('testujemy2');

const btn = document.querySelector('.btn');

btn.addEventListener('click', showAlert);

function showAlert() {
  alert('testujemy');
}