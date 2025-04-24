const form = document.querySelector('.formContainer');
const usernameInput = document.querySelector('.username');
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password');


const login = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value,
                email: emailInput.value
            })
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});

// // Хранилище пользователей
// let users = JSON.parse(localStorage.getItem('users')) || [];

// // Элементы регистрации
// const registerForm = document.querySelector('#registerForm');

// // Функция для регистрации пользователя
// const registerUser = (username, email, password) => {
//     if (users.some((user) => user.username === username)) {
//         alert('Имя пользователя уже существует.');
//         return false;
//     }

//     const newUser = { username, email, password };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Регистрация прошла успешно! Теперь вы можете войти.');
//     return true;
// };

// // Обработчик формы регистрации
// registerForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const username = document.querySelector('#regUsername').value.trim();
//     const email = document.querySelector('#regEmail').value.trim();
//     const password = document.querySelector('#regPassword').value.trim();

//     if (registerUser(username, email, password)) {
//         registerForm.reset();
//         window.location.href = 'index.html'; // Перенаправление на страницу входа
//     }
// });


