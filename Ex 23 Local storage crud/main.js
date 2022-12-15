

submit = () => {

    if (localStorage.getItem("First Name") == null) {

        localStorage.setItem("First Name", document.getElementById("fname").value);

    } else {

        let existingData = localStorage.getItem("First Name").split(",");
        
        existingData.push(document.getElementById("fname").value);

        localStorage.setItem("First Name", existingData.toString());
        // console.log(existingData);

    }


}