fetch("https://jsonplaceholder.typicode.com/users")
  .then((y) => y.json())
  .then((y) => display(y));

var myRawData = [];

function display(y) {
  myRawData = y;

  for (const key in myRawData) {
    let disData= myRawData.map(){
      return `<tr></tr>`
    }
  }
}
