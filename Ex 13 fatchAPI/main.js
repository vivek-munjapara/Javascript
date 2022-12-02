fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((data) => display(data));

function display(data) {
  document.getElementById("tbl").innerHTML = data
    .map((value) => {
      return `<tr><td>${value.userId}</td><td>${value.id}</td><td>${value.title}</td><td>${value.body}</td></tr>`;
    })
    .join("");
}
