//define constants
const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;
const submit = document.querySelector('#submit');

//prevent button default
submit.addEventListener('click', (e) => {
    e.preventDefault();
    login(username,password)
        .then(msg => {
            console.log("LOGIN SUCCESSFUL.")
            console.log("msg")
        })
        .catch(err => {
            console.log("ERROR!")
            console.log(err)
        })
})

//async form validation
const login = async(username,password) => {
    if(!username || !password) throw 'Missing Credentials';
    if(username === 'paula' && password === "petra6425") return 'Welcome!'
    throw 'Incorrect Username or Password'
}