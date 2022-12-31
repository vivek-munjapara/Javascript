let newArray = [];

async function getValue() {
    let error = [
        {
            'Error':"Sorry Data is not Found"
        }
    ];
    let url1 = await fetch("https://jsonplaceholder.typicode.com/comments")
    let comment = await url1.json();

    let url2 = await fetch("https://jsonplaceholder.typicode.com/posts")
    let post = await url2.json();


    await new Promise((success, reject) => {
        if (url1.status == 200 && url2.status == 200) {


            for (let index = 0; index < post.length; index++) {
                post[index]["name"] = comment[index].name;
            }

            success(display(post));

        } else {
            
            reject(display(error));

            // reject(document.getElementById("spn").innerHTML = "Sorry Data not Found")
        }

    });

}

getValue();


display = (data) => {
    for (const iterator in data[0]) {
        document.getElementById("headrow").innerHTML += `<th>${iterator}</th>`;
    }

    document.getElementById("tbl").innerHTML = data.map((value) => {
        let d = "";

        for (const iterator in value) {
            d += `<td>${value[iterator]}</td>`
        }
        return `<tr>${d}</tr>`
    }).join("");
}