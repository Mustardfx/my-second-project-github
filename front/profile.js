const profileContainer = document.querySelector('.profileContainer')

const getMe = async () => {
    try {
        const jwt = localStorage.getItem('jwt')
        console.log(jwt);
        const response = await fetch('http://localhost:8080/api/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            
        }).then(function(response) {
            return response.json();
          }).then(function(data) {
        console.log(data);
        
            const p = document.createElement('p');
            p.textContent = data.data.username + "   " + data.data.email

            profileContainer.appendChild(p)
          })
    } catch (error) {
        console.log(error);
    }
}

getMe()