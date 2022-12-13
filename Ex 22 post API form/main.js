let formitem = document.forms["frm"];
let frminput = [];

getvalue = () => {
    // console.log(formitem[0]);

    let val = {};
    let validate = true;

    let i = 0;

    for (const iterator of frm) {
        val[iterator.name] = iterator.value;

    }


    for (const iterator of formitem) {
        // console.log(iterator);
        document.getElementsByClassName("error")[i].innerHTML = "";
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

    if (validate != false) {
        // console.log("blank");
        frminput.push(val);
    }


}

error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}
