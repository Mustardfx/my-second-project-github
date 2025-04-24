const form = document.querySelector('.formContainer');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');

const login = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value
            }) 
        }) .then(function(response) {
            
            return response.json();
          }).then(function(data) {
            localStorage.setItem("jwt", data.jwt)
          });
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});

// Определяем учетные данные администратора
// const adminAccount = {
//     username: "admin",
//     password: "admin123"
// };

// // Элементы страницы
// const loginForm = document.querySelector('.formContainer');
// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const rememberMeCheckbox = document.querySelector('.remember-forgot input');
// const profileContainer = document.querySelector('.profileContainer');

// // Проверка состояния входа
// const checkAuth = () => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn) {
//         renderProfile();
//     }
// };

// // Обработчик входа
// const handleLogin = (event) => {
//     event.preventDefault(); // Предотвращаем перезагрузку страницы

//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     // Проверяем учетные данные
//     if (username === adminAccount.username && password === adminAccount.password) {
//         if (rememberMeCheckbox.checked) {
//             localStorage.setItem('isLoggedIn', 'true'); // Сохраняем состояние входа
//         }
//         alert('Login successful! Redirecting to profile...');
//         renderProfile();
//     } else {
//         alert('Invalid username or password.');
//     }
// };

// // Выход из аккаунта
// const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     alert('You have been logged out.');
//     window.location.href = 'index.html'; // Перенаправление на страницу входа
// };

// // Отрисовка профиля
// const renderProfile = () => {
//     document.body.innerHTML = `
//         <div class="profileContainer" style="display: flex; width: 80%; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f3f4f6; font-family: Arial, sans-serif;">
//             <div style="background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
//                 <h1 style="margin-bottom: 20px; font-size: 24px; color: #333;">Welcome, <span style="color: #4caf50;">${adminAccount.username}</span>!</h1>
//                 <p style="font-size: 16px; color: #555;">You are successfully logged in. Enjoy your stay!</p>
//                 <button class="logoutBtn" style="margin-top: 20px; padding: 10px 20px; background: #ff5252; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Logout</button>
//                 <button class="Profilebtn" style="margin-top: 20px; padding: 10px 20px; background: #ff5252; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;" onclick="location.href='Profile.html'">Profile</button>
//             </div>
//         </div>
//     `;
//     document.querySelector('.logoutBtn').addEventListener('click', handleLogout);
// };

// // Слушатель события для формы входа
// loginForm.addEventListener('submit', handleLogin);

// // Проверяем авторизацию при загрузке страницы
// checkAuth();
