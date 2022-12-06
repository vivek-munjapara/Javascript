let lbl = document.getElementById("lbl");
let spn = document.getElementById("spn").classList;
let vdoply = document.getElementById("vdo");

lbl.addEventListener("click", () => {
    let cls = lbl.classList;
    if (document.querySelector("input").checked) {
        cls.add("switchclk");
        spn.add("buttonclk");
        vdoply.play();
    } else {
        cls.remove("switchclk")
        spn.remove("buttonclk")
        vdoply.pause();
    }
})