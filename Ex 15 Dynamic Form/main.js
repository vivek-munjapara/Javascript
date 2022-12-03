let arry = [];
let data = document.getElementsByTagName("input");


function submit() {
  let ob = {};

  for (const key in data) {
    ob[data[key].name] = data[key].value;
  }

    arry.push(ob);
    
    document.getElementById('tbl').innerHTML = arry.map(function (value) {
        return `<tr>
                    <td>${value.firstName}</td>
                    <td>${value.lastName}</td>
                    <td>${value.mobileNumber}</td>
                    <td>${value.email}</td>
                </tr>`;

    }).join("");
}
