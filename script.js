const main = document.querySelector('.main');

const accountData = {
  username: 'Tsarka',
  password: '123'
}

let isAuthorized = 'false';
localStorage.setItem('isAuthorized', isAuthorized);

if (localStorage.getItem('isAuthorized') === 'false') {
  main.innerHTML = `
      <form class="form" action="">
        <p class="form__title">Login</p>
          <div class="form__group">
            <div class="form__element">
              <input class="form__input form__username" type="text" placeholder="Username" required>
              <ion-icon class="form__icon" name="person"></ion-icon>
            </div>
            <div class="form__element">
              <input class="form__input form__password" id="myPassword" type="password" placeholder="Password" required>
              <ion-icon class="form__icon form__icon--secondary" onclick="showPassword()" name="eye-off"></ion-icon>
            </div>
          </div>
        <button type="button" class="button" onclick="authorization()">Login</button>
      </form>
    `
  isAuthorized = 'true';
  localStorage.setItem('isAuthorized', isAuthorized)
}
else {
  createSearcher();
}

const authorization = () => {
  const username = document.querySelector('.form__username');
  const password = document.querySelector('.form__password')

  if (username.value === accountData.username && password.value === accountData.password) {
    main.innerHTML = '';
    createSearcher();
  }
  else {
    alert('Incorrect username or password');
  }
}

const showPassword = () => {
  const password = document.querySelector('.form__password');
  const eyeIcon = document.querySelector('.form__icon--secondary');

  if (password.type === 'password') {
    password.type = 'text';
    eyeIcon.name = 'eye';
  }
  else {
    password.type = 'password';
    eyeIcon.name = 'eye-off';
  }
}

const createSearcher = () => {
  const form = document.createElement('form');
  form.classList.add('searcher');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputsValue = Object.fromEntries(new FormData(event.target));

    const response = await fetch(`https://api.github.com/users/${inputsValue.name}`);
    console.log(response);
  });

  const input = document.createElement('input');
  input.classList.add('searcher__input');
  input.setAttribute('name', 'name');

  const button = document.createElement('button');
  button.classList.add('searcher__button');
  button.setAttribute('type', 'submit');
  button.innerHTML = "Search";

  form.appendChild(input);
  form.appendChild(button);
  main.appendChild(form);
}