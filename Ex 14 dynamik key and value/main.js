fetch("https://jsonplaceholder.typicode.com/users")
  .then((y) => y.json())
  .then((y) => display(y));

var myRawData = [];


function display(y) {
  myRawData=y
  document.getElementById("tbl").innerHTML = y
    .map((value) => {
      return `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.username}</td><td>${value.body}</td></tr>`;
    })
    .join("");
}
