let frminput = document.forms['frm'];
let data = {};


getData = () => {

    for (const key of frminput) {
        console.log(key);
        data[key.name] = key.value;
    }



}
// getData();




signup = () => {
    getData();

    fetch("http://localhost:4000/accounts/register", {

        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => y.json()).then(y => { 
        document.getElementById("demo").innerHTML = y;
    })


}