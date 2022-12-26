let frminput = document.forms['frm'];
let data = {};


getData = () => {

    for (const key of frminput) {
        console.log(key);
        data[key.name] = key.value;
    }
}
// getData();


signup = () => {
    getData();

    fetch("http://localhost:4000/accounts/register", {

        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => y.json()).then(y => {
        document.getElementById("demo").innerHTML = y;
    })
}


login = () => {
    let loginValue = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    fetch("http://localhost:4000/accounts/authenticate", {
        method: "post",
        body: JSON.stringify(loginValue),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json()).then(token => {
        // document.getElementById("demo").innerHTML = data;

        localStorage.setItem("token", token.jwtToken)
        console.log(token);
    })
}