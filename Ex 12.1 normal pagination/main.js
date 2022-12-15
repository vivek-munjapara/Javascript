fetch("https://jsonplaceholder.typicode.com/todos")
  .then((y) => y.json())
  .then((y) => {
    displayPage(y);
  });

let myData = [];
let perPage = 20;
let totalPage = "";
let startInd = 1; //btn start
let endInd = 3; //btn end

function displayPage(y) {
  myData = y;
  totalPage = Math.ceil(y.length / perPage);
  console.log(totalPage);

  disButton(startInd, totalPage);
  disData(0, perPage);
}

function disData(start, end) {
  let d = myData.slice(start, end);

  let myd = d.map((value) => {
    return `<tr>
            <td>${value.userId}</td>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.completed}</td>
        </tr>`;
  });

  document.getElementById("test").innerHTML = myd.join(" ");
  //    console.log(myd);
}

function disButton(start, end) {
  document.getElementById("btn").innerHTML = "";
  for (i = start; i <= end; i++) {
    document.getElementById(
      "btn"
    ).innerHTML += `<button onclick="pageButton(${i})">${i}</button>`;
  }
}

function pageButton(currentPage) {
  let start = (currentPage - 1) * perPage;
  let end = start + 20;

  disData(start, end);
}

// function nextButton() {
// if (endInd < totalPage && startInd >= 1) {
//     startInd = startInd + 3;
//     endInd = endInd + 3;
// } else {
//     startInd = 1;
//     endInd = 3;
//   }
//   displayPage(myData);
// }

// function preButton() {
// debugger;
// if (endInd <= totalPage && startInd > 1) {
//     startInd = startInd - 3;
//     endInd = endInd - 3;
//   } else {
//     startInd = 1;
//     endInd = 3;
//   }
//   displayPage(myData);
// }
