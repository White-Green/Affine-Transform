window.addEventListener("load", function () {
    let controller = document.getElementById("controller");
    let a = controller.getElementsByClassName("a")[0];
    let b = controller.getElementsByClassName("b")[0];
    let c = controller.getElementsByClassName("c")[0];
    let d = controller.getElementsByClassName("d")[0];
    let e = controller.getElementsByClassName("e")[0];
    let f = controller.getElementsByClassName("f")[0];

    let box = document.getElementById("box");
    function transform() {
        let valA = parseFloat(a.value);
        let valB = -parseFloat(b.value);
        let valC = parseFloat(c.value);
        let valD = -parseFloat(d.value);
        let valE = parseFloat(e.value) * 50;
        let valF = -parseFloat(f.value) * 50;
        if (isNaN(valA) ||
            isNaN(valB) ||
            isNaN(valC) ||
            isNaN(valD) ||
            isNaN(valE) ||
            isNaN(valF)) return;
        box.style = "transform:matrix(" + valA + "," + valB + "," + valC + "," + valD + "," + valE + "," + valF + ")";
    }
    a.addEventListener("change", transform);
    b.addEventListener("change", transform);
    c.addEventListener("change", transform);
    d.addEventListener("change", transform);
    e.addEventListener("change", transform);
    f.addEventListener("change", transform);
    this.console.log("test");
});