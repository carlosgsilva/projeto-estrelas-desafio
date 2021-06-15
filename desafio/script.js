const cards = document.getElementById('cards');

randomID = () => {
  return Math.floor(Math.random() * 671) + 1;
};

caracter = () => {
  return fetch(
    `https://rickandmortyapi.com/api/character/${randomID()},${randomID()},${randomID()},${randomID()}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((caracter) => {
      caracter.forEach(caracter => {
        cards.innerHTML += `
        <div class="card">
          <img src="${caracter.image}" alt="${caracter.name}">
          <div class="name">
            <h3>${caracter.name}</h3>,
          </div>
        </div>
      `
      });
    });
};

window.addEventListener('load', () => {
  caracter();
})