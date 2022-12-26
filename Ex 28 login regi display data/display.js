let myArray = [];
let edit = -1;


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


display = (rawdata) => {
    myArray = rawdata;
    let key = "";

    for (const iterator in rawdata[0]) {
        key += `<th scope="col">${iterator}</th>`
    }

    if (rawdata.message != "Unauthorized") {
        key += `<th>Action</th>`;
    }

    document.getElementById("key").innerHTML = key;

    document.getElementById("raw").innerHTML = rawdata.map((element, index) => {

        let text = "";

        for (const i in element) {
            // console.log(element[i]);
            text += `<td>${element[i]}</td> `
        }
        return `<tr>${text} 
                    <td>
                        <button class="btn btn-info" onclick="editContent(${index})">Edit</button>
                        <a href="display.html"><button class="btn btn-danger"               
                         onclick="dltContent(${index})">Delete</button></a>
                    </td>
                </tr>`
    }).join("");
}





editContent = (index) => {

    edit = index;

    document.querySelector(".flt").style.display = "block";

    document.getElementById("title").value = myArray[index].title;
    document.getElementById("firstName").value = myArray[index].firstName;
    document.getElementById("lastName").value = myArray[index].lastName;
    document.getElementById("email").value = myArray[index].email;



}

update = () => {
    let tkn = localStorage.getItem("token");

    let id = myArray[edit].id;

    let updt = {
        title: document.getElementById("title").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        emai: document.getElementById("email").value
    }

    fetch("http://localhost:4000/accounts/" + id, {
        method: 'put',
        headers: {
            'Authorization': "bearer " + tkn,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updt)
    })


    getdisplay();

    document.querySelector(".flt").style.display = "none";
}









dltContent = (index) => {

    let tkn = localStorage.getItem("token");

    let id = myArray[index].id;

    fetch("http://localhost:4000/accounts/" + id, {
        method: 'delete',
        headers: {
            "Authorization": "bearer " + tkn
        }
    })
}

getdisplay();
