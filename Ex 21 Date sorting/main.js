const personDetail = [{
    name: "Jack",
    dob: "09/07/1993",
    city: "Paris",

},
{
    name: "Martin",
    dob: "05/15/1996",
    city: "New York",

},
{
    name: "Julia",
    dob: "04/14/1997",
    city: "Qutar",

},
{
    name: "Monty",
    dob: "02/18/2000",
    city: "Ontario",

},
{
    name: "Zoro",
    dob: "11/23/1991",
    city: "Tokyo",

},
{
    name: "Stiven",
    dob: "10/23/2004",
    city: "London",

}]

display = (personDetail) => {
    let disData = personDetail.map(dis = (value) => {
        return `<tr><td>${value.name}</td><td>${value.dob}</td><td>${value.city}</td></tr>`
    })
    document.getElementById('tbl').innerHTML = disData.join("");
}
display(personDetail);

sorting = () => {
    let sorted = personDetail.sort(srt = (a, b) => {
        if (new Date(a.dob) > new Date(b.dob)) {
            return 1;
        } return -1;
    });
    display(sorted);
}