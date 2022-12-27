timeNew = () => {
    setInterval(() => {
        document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
    }, 1000)
}
timeNew();


reverseCountdown = () => {

    setInterval(() => {
        let endDate = new Date("2022-12-31 00:00:00");
        // console.log(endDate)
        let currentDate = new Date();
        let remainingTime = endDate-currentDate;

        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("time2").innerHTML = days +`Day `
            + hours + `:` + minutes + `:` + seconds;
        
        
        if (remainingTime < 0) {
            clearInterval();
            document.getElementById("time2").innerHTML = "EXPIRED";
        }
        
        
        
    }, 1000)

}

reverseCountdown();