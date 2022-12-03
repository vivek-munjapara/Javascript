fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((data) => display(data));

// let myData = [];
// console.log(display())
function display(data) {
  //   myData = data;
  document.getElementById("tbl").innerHTML = data
    .map(function (value) {
      return `<tr>
                  <td>${value.userId}</td>
                  <td>${value.id}</td>
                  <td>${value.title}</td>
                  <td>${value.body}</td>
               </tr>`;
    })
    .join("");

  data.map((value, index) => {
    if (index == 0)
      for (const key in value) {
        document.getElementById(
          "headrow"
        ).innerHTML += `<th>${key}<button onclick=("ascending()")> ▲ </button><button onclick=("descending()"> ▼ </button></th>`;
      }
  });
}

function ascending() {
    
};
