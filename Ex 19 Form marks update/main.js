
add = () => {
    let fname = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    document.getElementById("dsply").innerHTML +=
        `<div> ${fname}
        <input type="text" value=" ${marks} " class="marks" >
        <input type="checkbox">
            <button onclick="incremarks(this)"> + </button>
            <button onclick="decremarks(this)"> - </button>
        </div>`
}

changemarks = () => {
    let chngmarks = document.getElementById("updatedmarks").value;

    let a = document.querySelectorAll("input:checked").length;
    let allmarkschng = document.querySelectorAll(".marks");

    // console.log(a);
    if (a == 0) {
        for (const iterator of allmarkschng) {
            iterator.value = chngmarks;
        }
    } else {
        for (const iterator of allmarkschng) {

            // console.log(iterator);
            if (iterator.parentElement.querySelector("input:checked")) {
                iterator.value = chngmarks;


            }
        }
    }


}



function incremarks(data) {
    data.parentElement.getElementsByTagName('input')[0].value++;
    // console.log(data);
}
function decremarks(data) {
    data.parentElement.getElementsByTagName('input')[0].value--;
    // console.log(data);
}

