const main = document.querySelector('.main');

const showPassword = () => {
  const password = document.getElementById('form__password');
  const eyeIcon = document.querySelector(".form__icon--secondary");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.name = "eye";
  }
  else {
    password.type = "password";
    eyeIcon.name = "eye-off";
  }
}

const isCorrectData = () => {
  const form = document.getElementById('form');

  const username = document.getElementById('form__username');
  const password = document.getElementById('form__password');

  if (username.value === "Tsarka" && password.value === "123456") {
    main.innerHTML = ``;
    createSearcher();
  }
  else {
    alert("Incorrect username or password");
  }
}

const createSearcher = () => {
  const form = document.createElement('form');
  form.classList.add('searcher');
  form.addEventListener('submit', (event) => {
    event.preventDefault;

    const inputsValue = Object.fromEntries(new FormData(event.target));

    const response = fetch(`https://api.github.com/users/${inputsValue.name}`);
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