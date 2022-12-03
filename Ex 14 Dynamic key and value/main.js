fetch("https://jsonplaceholder.typicode.com/users")
  .then((y) => y.json())
  .then((y) => display(y));

function display(y) {
  let tbody = y.map((value) => {
    let trow = "";
    let obj1 = {};

    for (const key in value) {
      obj1 = value[key];
      if (typeof obj1 === "object") {
        for (const key2 in obj1) {
          trow += `<td>${obj1[key2]}</td>`;
        }
      } else {
        trow += `<td>${value[key]}</td>`;
      }
    }

    return `<tr> ${trow}</tr>`;
  });
  document.getElementById("tbl").innerHTML = tbody.join(" ");
}
