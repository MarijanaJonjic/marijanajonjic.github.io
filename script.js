function izracunaj() {
    let spolovi = document.getElementsByName("spolovi");
    let visina  = document.getElementById("visina").value;
    let tezina  = document.getElementById("tezina").value;
    let starost = document.getElementById("starost").value;
    let bmr = 0;
    let spol = "";
    
    for (i = 0; i < spolovi.length; i++) {
        if (spolovi[i].checked) {
            spol = spolovi[i].value;
            break;
        }
    }

    if(spol == "muškarac")
    {
        bmr = (10 * tezina) + (6.25 * visina) - (5 * starost) + 5;
    }
    else if (spol == "žena")
    {
        bmr = (10 * tezina) + (6.25 * visina) - (5 * starost) - 161;
    }

    let rezultat = "<p>Tvoj BMR: <strong>" + Math.round(bmr) + "</strong></p>" +
        "<p><strong>Ovisno o razini sportske aktivnosti:</strong></p>" +
        "<ul>" +
        "<li>Sjedilački tip (Lagano aktivni tip): <strong>" + Math.round(bmr * 1.2) + "</strong></li>" +
        "<li>Lagano aktivni tip (trening 1-3 puta tjedno): <strong>" + Math.round(bmr * 1.375) + "</strong></li>" +
        "<li>Umjereno aktivni tip (trening 3-5 puta tjedno): <strong>" + Math.round(bmr * 1.55) + "</strong></li>" +
        "<li>Umjereno aktivni tip (trening 6-7 puta tjedno): <strong>" + Math.round(bmr * 1.725) + "</strong></li>" +
        "<li>Izuzetno aktivni tip (vrlo intenzivan svakodnevni trening ili fizički zahtjevan rad): <strong>" + Math.round(bmr * 1.9) + "</strong></li>" +
        "</ul>";

    document.getElementById("rezultati").innerHTML = rezultat;
}