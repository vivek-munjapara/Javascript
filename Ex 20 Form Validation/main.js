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
        i += 1;

    }
}

error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}
