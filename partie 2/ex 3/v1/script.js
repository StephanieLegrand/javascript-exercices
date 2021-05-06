// document.getElementById('name').addEventListener("input", identity);
// function identity() {
// let name = document.getElementById('name').value;

// let username = 'lol';

// if (name == username) {
//     name.className = 'is-valid';
// //    document.getElementById('success');
// //    success.style.color = 'green';

// }
// }
let user = document.getElementById('name');
user.addEventListener("input", identity);
    function identity() {
        let username='lol';
        if (user.value == username) {
            user.className='is-valid';
            user.style.backgroundColor='green';
        }
        else {
            user.className='is-invalid';
            user.style.backgroundColor='red';
        }
    }