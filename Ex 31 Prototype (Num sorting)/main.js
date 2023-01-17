const myArray = [12345, 123, 1234, 12, 1];

Array.prototype.numsort = function () {

    return this.sort((num1, num2) => {
        if (num1 > num2) {
            return 1;
        } else return -1;
    })

}

let finalData = myArray.numsort();
// console.log(finalData);

document.getElementById("result").innerHTML = `${finalData}`;