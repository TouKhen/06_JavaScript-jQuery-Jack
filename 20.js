var m = Math.floor(Math.random() * 3);

if(m == 0){
    var n = m;
    n = "pierre";
}

else if(m == 1){
    var n = m;
    n = "ciseau";
}

else if(m == 2){
    var n = m;
    n = "feuille";
}

document.write("Choix de l'ordinateur : " + n + "<br>");

var p = prompt("Que choisissez-vous : pierre, feuille ou ciseau ?");
console.log("tg");

if(p == "pierre"){
    p = 0;
    if(p == m){
        document.write("Vous avez choisi la même chose : égalité !");
    }
    else if(m == 1){
        document.write("La pierre écrase le ciseau : vous gagnez !");
    }
    else if(m == 2){
        document.write("La feuille recouvre la pierre : vous perdez !");
    }
}

else if(p == "ciseau"){
    p = 1;
    if(p == m){
        document.write("Vous avez choisi la même chose : égalité !");
    }
    else if(m == 0){
        document.write("La pierre écrase le ciseau : vous perdez !");
    }
    else if(m == 2){
        document.write("La feuille est découpée par le ciseau : gagnez !");
    }
}

else if(p == "feuille"){
    p = 2;
    if(p == m){
        document.write("Vous avez choisi la même chose : égalité !");
    }
    else if(m == 1){
        document.write("La feuille est découpée par le ciseau : vous perdez !");
    }
    else if(m == 0){
        document.write("La feuille recouvre la pierre : vous gagnez !");
    }
}