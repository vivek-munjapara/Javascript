fetch("https://jsonplaceholder.typicode.com/posts")
  .then((y) => y.json())
  .then((myJson) => display(myJson));

let myArray = [];
let dkey = [];
display = (data) => {
  myArray = data;

  let kay = Object.keys(myArray[0]);
    dkey = kay;
    console.log(kay)
  let printKey = kay.map((val, index) => {
    return `
        <tr>
        <th>${val}<button class="btn" onclick="arrayAsc(${index})">&uarr;</button>
        <button class="btn" onclick="arrayDsc(${index})">&darr;</button></th>
        </tr>
        `;
  });

  let printData = myArray.map((value) => {
    return `<tr>
        <td>${value.userId}</td>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.body}</td>
        </tr>`;
  });
  document.getElementById("tblhead").innerHTML = printKey.join(" ");
  document.getElementById("tblbody").innerHTML = printData.join(" ");
};

arrayAsc = (ele) => {
  let data = dkey[ele];

  let Sorting = myArray.sort(function (a, b) {
    if (a[data] > b[data]) {
      return 1;
    } else {
      return -1;
    }
  });
  display(Sorting);
};

arrayDsc = (ele) => {
  let data = dkey[ele];

  let Sorting = myArray.sort(function (a, b) {
    if (a[data] < b[data]) {
      return 1;
    } else {
      return -1;
    }
  });
  display(Sorting);
};
