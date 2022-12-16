fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((data) => display(data));

let myData = [];
let mykeys = [];

display = (data) => {

  mykeys = [];
  myData = data;

  document.getElementById("tbl").innerHTML = data.map(function (value) {
    return `<tr>
                  <td>${value.userId}</td>
                  <td>${value.id}</td>
                  <td>${value.title}</td>
                  <td>${value.body}</td>
               </tr>`;
  }).join("");

  for (const key in data[0]) {
    // const element = key;
    mykeys.push(key);
  }

  let th = mykeys.map((value, index) => {
    return `<th>${value}<button onclick="ascending(${index})"> ▲ </button><button onclick="descending(${index})"> ▼ </button></th>`;
  }).join("");

  document.getElementById("headrow").innerHTML = th;
  // console.log(mykeys);
}

ascending = (index) => {

  let usercl = mykeys[index];


  let sortData = myData.sort(function (a, b) {
    if (a[usercl] > b[usercl]) {
      return 1
    }
    return -1;
  })

  display(sortData);

}

descending = (index) => {

  let usercl = mykeys[index];


  let sortData = myData.sort(function (a, b) {
    if (a[usercl] < b[usercl]) {
      return 1
    }
    return -1;
  })

  display(sortData);

}

