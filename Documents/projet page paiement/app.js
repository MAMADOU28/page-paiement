const other = document.getElementById('other');
const visa = document.getElementById('visa');
const btc = document.getElementById('btc');
const wave = document.getElementById('wave');
const om = document.getElementById('om');
const free = document.getElementById('free');
const exp = document.getElementById('exp');
const wiz = document.getElementById('wiz');
const opt = document.getElementById('optima');

function showOrHideDivOpt() {
    const optima = document.getElementById("opt");
    const other = document.getElementById("autre");

    if (optima.style.display === "none") {
        optima.style.display = "flex";
        other.style.display = "none";

    } else {
        optima.style.display = "flex";
       other.style.display = "none";
    }
}

function showOrHideDivOther() {
    const other = document.getElementById("autre");
    const optima = document.getElementById("opt");

    if (other.style.display === "none") {
        other.style.display = "flex";
        optima.style.display = "none";

    } 
    else {
        other.style.display = "flex";
        //optima.style.display = "none";
    }
}

function selectShow(selectedOption) {
    if (selectedOption.value === 'SN') {
        wave.style.display = "flex";
        om.style.display = "flex";
        free.style.display = "flex";
        opt.style.display = "flex";
        exp.style.display = "flex";
        wiz.style.display = "flex";
        btc.style.display = "flex";
        visa.style.display = "flex";
    } 
    else {
        wave.style.display = "none";
        om.style.display = "none";
        free.style.display = "none";
        opt.style.display = "none";
        exp.style.display = "none";
        wiz.style.display = "none";
        btc.style.display = "flex";
        visa.style.display = "flex";
    }
}

