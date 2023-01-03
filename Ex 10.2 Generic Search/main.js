// https://fakestoreapi.com/products
let myArray = [];

async function api() {

    let url = await fetch("https://fakestoreapi.com/products")
    let productData = await url.json();

    await new Promise((success, reject) => {
        if (url.status == 200) {
            success(display(productData))
        } else {
            reject(console.log("error"))
        }
    })
}
api();

display = (data) => {

    myArray = data;

    document.getElementById("headrow").innerHTML = ""

    for (const key in data[0]) {
        document.getElementById("headrow").innerHTML += `<th>${key}</th>`
    }

    document.getElementById("tbl").innerHTML = data.map((element) => {

        tbl = "";

        for (const key in element) {

            if (key == "image") {
                tbl += `<td><img src="${element[key]}" width=100px></td>`
            } else {
                tbl += `<td>${element[key]}</td>`
            }

        }

        return `<tr>${tbl}</tr>`

    }).join("");
}

search = () => {
    // myData = productData;
    let input = document.getElementById("inpt").value;

    let searchData = myArray.filter((value) => {
        let v = Object.values(value).join(" ");
        return v.indexOf(input) != -1;
    })


    document.getElementById("spn").innerHTML = ``

    if (input.length == 0) {
        api();
    } else if (searchData.length == 0) {
        document.getElementById("spn").innerHTML = `There is no such a input you enterd`
    } else {
        display(searchData);
        console.log(searchData)
    }
}