let blankArray = [];


document.getElementById("add").addEventListener('click', () => {
    let fname = document.createElement("input");
    fname.placeholder = "Enter Your First Name";
    fname.type = "text";
    fname.name = "FirstName";
    // fname.setAttribute('readonly', "");

    let lname = document.createElement("input");
    lname.placeholder = "Enter Your Last Name";
    lname.type = "text";
    lname.name = "LastName";

    let mnumber = document.createElement("input");
    mnumber.placeholder = "Enter Your Mobile Number";
    mnumber.type = "tel";
    mnumber.name = "moible";


    document.getElementById('frm').appendChild(fname);
    document.getElementById('frm').appendChild(lname);
    document.getElementById('frm').appendChild(mnumber);
    // console.log(inpt)
})

display = () => {
    let blankobj = {};
    let keyarray = [];
    let th = '';


    let d = document.querySelectorAll("input")

    for (let i = 0; i < d.length; i++) {
        blankobj[d[i].name] = d[i].value;
    }
    blankArray.push(blankobj);


    for (const key in blankobj) {

        keyarray.push(key);

    }
    for (const i of keyarray) {
        th += `<th>${i}</th>`
    }
    document.getElementById('headrow').innerHTML = th;


    document.getElementById('tbl').innerHTML = blankArray.map((value) => {
        let td = '';
        for (const key in value) {
            td += `<td>${value[key]}</td>`
        }

        return `<tr>${td}</tr>`
        // console.log();
    })

}

