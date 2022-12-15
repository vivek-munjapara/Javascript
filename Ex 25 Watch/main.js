timeNew = () => {
    setInterval(() => {
        document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
    }, 1000)
}
timeNew();