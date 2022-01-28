const charactersAPI = new APIHandler('http://localhost:8000');

charactersAPI.getOneRegister(1);

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    const data = await charactersAPI.getFullList();
    const container = document.querySelector('.characters-container');
    data.map((character) => {
      const newCharacter = document.createElement('div');
      newCharacter.className = 'character-info';
      newCharacter.innerHTML = `
      <div class="name">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="name">Occupation: ${character.occupation}</div>
      <div class="name">Is a cartoon? ${character.cartoon}</div>
      <div class="name">Weapon: ${character.weapon}</div>`;
      container.appendChild(newCharacter);
    });
  });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {});

  document
    .getElementById('delete-one')
    .addEventListener('click', function (event) {});

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function (event) {});

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {});
});
