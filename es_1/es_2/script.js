
// inserisci 10 nr
var soma = 0;

for (i = 0; i < 11; i++) {
    var iMieiNumeri = parseInt(prompt("inserisci 10 nr" + " " +(10 - i)))
    console.log("i numeri sono" + " " + iMieiNumeri)

    soma += iMieiNumeri

    if (Number.isNaN(iMieiNumeri)) {
        alert("immeti numeri")
        
    }

}

console.log("la soma e " + soma)

