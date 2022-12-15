let data = '';
let editName = -1;

submit = () => {

    if (document.getElementById("fname").value == "") {
        alert("Please input Name");
    } else {

        if (localStorage.getItem("FirstName") == null) {

            localStorage.setItem("FirstName", document.getElementById("fname").value);

        } else {

            let existingData = localStorage.getItem("FirstName").split(",");
            if (editName != -1) {
                
                existingData[editName] = document.getElementById("fname").value;
                
                localStorage.setItem("FirstName", existingData.toString());

            } else {

                existingData.push(document.getElementById("fname").value);

                localStorage.setItem("FirstName", existingData.toString());
                // console.log(existingData);
            }
            editName = -1;
        }
    }
    displayData();
}
displayData = () => {

     data = localStorage.getItem("FirstName").split(",");

    document.getElementById("dis").innerHTML = data.map((element, index) => {
        return `<div><p>${element}</p><button onclick="editData(${index})">Edit</button><button onclick="dltData(${index})">Delete</button></div>`
    }).join("");

    // console.log(data);
}

dltData = (index) => {
    // console.log(index);
    data.splice(index, 1);
   
    localStorage.setItem("FirstName", data.toString());
    
    displayData();
}

editData = (index) => { 
    
    editName = index;

    document.getElementById("fname").value = data[index];
}
