let pokecoins = 0;
let inventory = [];
let team = [];
let pokedex = [];

function showSection(section) {
  const main = document.getElementById('main');
  main.innerHTML = '';

  if (section === 'shop') {
    main.innerHTML = `
      <h2>🏪 Магазин</h2>
      <button onclick="buy('pokeball')">Купить Покебол (10 покиконов)</button>
      <button onclick="sellPokemon()">Продать покемона</button>
    `;
  }

  if (section === 'stats') {
    main.innerHTML = `
      <h2>📊 Статистика</h2>
      <p>Поймано: ${pokedex.length}</p>
      <p>Покиконы: ${pokecoins}</p>
    `;
  }

  if (section === 'inventory') {
    main.innerHTML = `
      <h2>🎒 Рюкзак</h2>
      <p>Инвентарь: ${JSON.stringify(inventory)}</p>
    `;
  }
}

function buy(item) {
  if (item === 'pokeball' && pokecoins >= 10) {
    pokecoins -= 10;
    inventory.push('pokeball');
    alert('Куплен Покебол!');
    showSection('shop');
  } else {
    alert('Недостаточно покиконов!');
  }
}

function sellPokemon() {
  alert('Пока не реализовано');
}
