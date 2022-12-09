let formitem = document.forms["frm"];

validation = () => {
    // console.log(formitem[0]);
    let i = 0;

    for (const iterator of formitem) {
        // console.log(iterator);
        document.getElementsByClassName("error")[i].innerHTML = "";
        if (iterator.value.length == 0) {
            error(i, "Please enter a Value");
        }
        else if (iterator.name == "mnumber") {
            if (!Number.isInteger(parseInt(iterator.value))) {
                error(i, "Please Number Only");
            }
        } else if (iterator.name == "email") {
            if (iterator.value.indexOf("@") == -1) {
                error(i, "Please valid email id");
            }
        }
        i += 1;

    }
}

error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}
