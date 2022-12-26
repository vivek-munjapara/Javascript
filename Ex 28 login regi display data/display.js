let myArray = [];


getdisplay = () => {
    let tkn = localStorage.getItem("token");
    console.log(tkn);

    fetch("http://localhost:4000/accounts", {

        method: 'Get',
        headers: {
            "Authorization": "bearer " + tkn
        }
    }).then(data => data.json()).then(rawdata => {
        // console.log(rawdata);
        display(rawdata);
    })
}
getdisplay();


display = (rawdata) => {
    let key = "";
    for (const iterator in rawdata[0]) {
        key += `<th scope="col">${iterator} </th>`
    }
    document.getElementById("key").innerHTML = key;

    document.getElementById("raw").innerHTML = rawdata.map((element) => {
        let text = "";

        for (const i in element) {
            console.log(element[i]);
            text += `<td>${element[i]}</td>`
        }
        return `<tr>${text}</tr>`
    }).join("");
}