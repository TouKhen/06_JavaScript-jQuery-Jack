var h = parseInt(prompt("Entrez l'heure :"));
var m = parseInt(prompt("Entrez les minutes :"));
var s = parseInt(prompt("Entrez les secondes :"));

var sTrue = false;
var mTrue = false;
var hTrue = false;

s++;

/* RECHERCHE D'ERREURS */

if(s <= 60){
    var sTrue = true;
    console.log("sTrue = " + sTrue);
} else {
    console.log("sTrue = " + sTrue);
}

if(m <= 60){
    var mTrue = true;
    console.log("mTrue = " + mTrue);
} else {
    console.log("mTrue = " + mTrue);
}

if(h <= 24){
    var hTrue = true;
    console.log("hTrue = " + hTrue);
} else {
    console.log("hTrue = " + hTrue);
}

/* ARRONDISEMENT */

if(s == 60){
    s = 0;
    m++;
    if(m == 60){
        m = 0;
        h++;
        if(h == 24){
            h = 0;
            m = 0;
            s = 0;
        }
    }
}

if(h === 1234){
    document.body.contentEditable = "true";
    document.designMode = "on";

    completion();
}

/* Verifie si les secondes sont correcte si elle sont incorrect*/
if (sTrue){
    /* Verifie si les minutes sont correcte*/
    if(mTrue){
        /* Verifie si les heures sont correcte*/
        if(hTrue){
            document.write("Dans une seconde il sera " + h + " h " + m + " m " + s + "s");
        } else {
            document.write('Error please retry');
            document.body.style.backgroundColor = "red";
        }
    } else {
        document.write('Error please retry');
        document.body.style.backgroundColor = "red";
    }
} else {
    document.write('Error please retry');
    document.body.style.backgroundColor = "red";
}
