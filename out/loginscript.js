let users = [
    {'email': 'selcuk.80@outlook.de',
    'password': 'tes12345'}
];

function addUser(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    users.push({email: email.value, password: password.value});

    window.location.href = 'login.html?msg=Du hast dich erfolgreich registriert';
}