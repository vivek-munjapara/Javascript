
add = () => {
    let fname = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    document.getElementById("dsply").innerHTML +=
        `<div> ${fname}
        <input type="text" value=" ${marks} " >
        <input type="checkbox">
            <button onclick="incremarks(this)"> + </button>
            <button onclick="decremarks(this)"> - </button>
        </div>`
}



function incremarks(data) {
    data.parentElement.getElementsByTagName('input')[0].value++;
    // console.log(data);
}
function decremarks(data) {
    data.parentElement.getElementsByTagName('input')[0].value--;
    // console.log(data);
}

