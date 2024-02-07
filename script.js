
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector('.button button');
  contactButton.addEventListener('click', function () {
      alert('Vous avez cliqué sur le bouton de contact!');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll('.buy-button');
  const rentButtons = document.querySelectorAll('.my-button');
  buyButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          alert('Vous avez cliqué sur le bouton "Acheter"!');
      });
  });
  rentButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          alert('Vous avez cliqué sur le bouton "Louer"!');
          
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector('.button button');
  contactButton.addEventListener('click', function () {
      alert('Vous avez cliqué sur le bouton de contact!');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll('.buy-button');
  const rentButtons = document.querySelectorAll('.my-button');
  buyButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          alert('Vous avez cliqué sur le bouton "Acheter"!');
          
      });
  });
  rentButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          alert('Vous avez cliqué sur le bouton "Louer"!');     
      });
  });
});
const menuButton = document.getElementById('menu-button');
const headerTitle = document.querySelector('header h1');
menuButton.addEventListener('click', () => {
    headerTitle.style.color = getRandomColor();
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function afficherInformations(type, titre, details) {
  const message = `Type: ${type}\nTitre: ${titre}\n\n${details}`;
  alert(message);
}

function sauvegarderInformations(type, titre, details) {
  const bienInformations = {
    type: type,
    titre: titre,
    details: details
  };
  localStorage.setItem('bienInformations', JSON.stringify(bienInformations));
  window.location.href = 'nouvelle_page.html';
}
