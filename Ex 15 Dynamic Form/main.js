let arry = [];
let data = document.getElementsByTagName("input");
let forminpt = document.forms["form"];

let validate = true;
// console.log(forminpt);



validation = () => {
  // console.log(formitem[0]);
  let i = 0;

  for (const iterator of forminpt) {
    // console.log(iterator);
    document.getElementsByClassName("error")[i].innerHTML = "";
    if (iterator.value.length == 0) {
      error(i, "Please enter a Value");
      validate = false;
    }
    else if (iterator.name == "mobileNumber") {
      if (!Number.isInteger(parseInt(iterator.value))) {
        error(i, "Please Number Only");
        validate = false;
      }
    } else if (iterator.name == "email") {
      if (iterator.value.indexOf("@") == -1) {
        error(i, "Please valid email id");
        validate = false;
      }
    }
    i += 1;

  }
}

error = (id, error) => {
  // console.log(id + error);
  document.getElementsByClassName("error")[id].innerHTML = error;
}


function submit() {
  let ob = {};

  for (const key in data) {
    ob[data[key].name] = data[key].value;
  }

  if (validation != false) {
    arry.push(ob);
  }

  document.getElementById('tbl').innerHTML = arry.map(function (value) {
    return `<tr>
                    <td>${value.firstName}</td>
                    <td>${value.lastName}</td>
                    <td>${value.mobileNumber}</td>
                    <td>${value.email}</td>
                </tr>`;

  }).join("");


  validation();
}
