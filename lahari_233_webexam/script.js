function displayJoke(joke) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `<p>${joke}</p>`;
}


const form = document
    .querySelector('#reg-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log('hello');

        let username = document.getElementById('user-name');
        let password = document.getElementById('user-password');

        if (username.value == '' || password.value == '') {
            print('empty');
        } else {
            console.log(username.value);
        }
        console.log(e);
    });

// function alphaOnly(event) {
// var key = event.keyCode;
// return (key >= 65 && key <= 90) || key==8; // } var alphaExp=/^[a-zA-Z]+$/; let
username = document.getElementById('user-name'); username.addEventListener('change', (e) => {
    if (!e.target.value.match(alphaExp)) {
        console.log('only char');
    } else if (e.target.value.length <= 3) { console.log('min 3 char'); }
}); let
    password = document.getElementById('user-password'); password.addEventListener('change', (e) => {
        if (e.target.value.length <= 8) { console.log('length lss 8'); console.log(Number.isInteger(e.target.value)); }
        else if (!Number.isInteger(e.target.value)) { console.log('Contain atleast one number'); }
    }); 
