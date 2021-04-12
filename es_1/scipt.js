// inserisci la prima parola
var primaParola = prompt("inserisci la prima parola")

// inserisci la secconda parola
var seccondaParola = prompt("inerisci la secconda parola")

if (primaParola.length === seccondaParola.length) {
    alert("hai inserito le parole di lungezza uguale ")

} else if (primaParola.length > seccondaParola.length) {
    console.log("la prima parola e piu lunga" + " "+ primaParola + " " + " la secconda parola e piu corta"+" " + seccondaParola)

} else if (primaParola.length < seccondaParola.length) {
    console.log("la secconda parola e piu lunga " + " "+ seccondaParola + " " +" la secconda parola e piu corta"+" " +primaParola)
}





