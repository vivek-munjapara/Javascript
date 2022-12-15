var mydata = [{

    countyName: 'India',
    state: [{
        stateName: "gujrat",
        city: ["vadodara", "anand", "rajkot"]
    },
    {
        stateName: "mahrastra",
        city: ["pune", "mumbai"]
    }]

},

{

    countyName: 'Canada',
    state: [{
        stateName: "Ontario",
        city: ["Toronto", "Bramtomp"]
    },
    {
        stateName: "Alberta",
        city: ["Calgary", "Camrose","Chestermere"]
    }]

}];



selectCountry = () => {
    document.getElementById("country").innerHTML = mydata.map((element) => {
        return `<option value="${element.countyName}">${element.countyName}</option>`
    }).join("");

    document.getElementById("country").onchange();
    document.getElementById("state").onchange();
}

selectState = () => {
    let country = document.getElementById("country").value;
    
    let state = mydata.find((element) => {
        // console.log(element);
        return element.countyName == country;
        
    }).state.map((value) => {
        return `<option value="${value.stateName}">${value.stateName}</option>`
        
    }).join("");
    
    document.getElementById("state").innerHTML = state;
};

selectCity = () => {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    
    let city1 = mydata.find((ctry) => {
        return ctry.countyName == country;
        
    }).state.find((st) => {
        return st.stateName == state;
    }).city.map((value) => {
        return `<option value="${value}">${value}</option>`
    }).join("");
    
    // console.log(city);
    document.getElementById("city").innerHTML = city1;
}
selectCountry(); 