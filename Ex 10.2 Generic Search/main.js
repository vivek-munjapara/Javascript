// https://fakestoreapi.com/products


async function search() {

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
// search();

display = (data) => {
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