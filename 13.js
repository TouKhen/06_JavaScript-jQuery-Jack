var p = parseInt(prompt("Choisir un nombre entier"));

for (var i = p; i <= p + 10; i++) {
    if (i % 2 === 0) {
    document.write(i + " est pair" + "<br>");
    }
    else{
    document.write(i + " est impair" + "<br>");
    }
}