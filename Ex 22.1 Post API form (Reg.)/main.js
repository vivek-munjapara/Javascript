let formitem = document.forms["frm"];
let frminput = [];




getvalue = () => {
    // console.log(formitem[0])
    let val = {};

    const validate = true;

    let i = 0;

    for (const iterator of frm) {
        val[iterator.name] = iterator.value;
    }
    console.log(val);
    // validation start

    for (const iterator of formitem) {
        // console.log(iterator);
        // document.getElementsByClassName("error")[i].innerHTML="";
        if (iterator.type != "checkbox") {
            document.getElementsByClassName("error")[i].innerHTML = "";
        }
        if (iterator.value.length == 0) {
            error(i, "Please enter a Value");
            validate = false;
        }
        else if (iterator.name == "mnumber") {
            if (!Number.isInteger(parseInt(iterator.value))) {
                error(i, "Please Number Only");
                validate = false;

            }
        } else if (iterator.name == "email") {
            if (iterator.value.indexOf("@") == -1) {
                error(i, "Please valid email id");
                validate = false;

            }
        }
        i += 1;

    }


// validation ends here

if (validate != false) {
    // console.log("blank");
    frminput.push(val);
}

fetch("http://localhost:4000/accounts/register", {
    method: 'POST',
    body: JSON.stringify(val),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(y => y.json())
    .then(y => {
        console.log(y);
    })

}


error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}
