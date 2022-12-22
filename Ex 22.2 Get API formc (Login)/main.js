let formitem = document.forms["frm"];
let frminput = [];



login = () => {

    // console.log(formitem[0]);

    let loginData = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    const validate = true;
    let i = 0;


    // validation start

    for (const iterator of formitem) {
        // console.log(iterator);

        if (iterator.value.length == 0) {
            error(i, "Please enter a Value");
            validate = false;
        } else if (iterator.name == "email") {
            if (iterator.value.indexOf("@") == -1) {
                error(i, "Please valid email id");
                validate = false;
            }
        }
        i += 1;


    }

    // validation ends here

    // if (validate != false) {
    //     // console.log("blank");
    //     frminput.push(val);
    // }

    fetch("http://localhost:4000/accounts/authenticate", {
        method: 'post',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => y.json())
        .then(y => {
            localStorage.setItem("token", y.jwtToken);
            console.log(y);
        })

}

error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}
