alert("Bienvenue");

var n = Math.floor(Math.random() * 100);

console.log(n);

var q = 0;

for(i = 0; i < 6; i++){
    var p = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));
    console.log("tg");
    if(p > n){
        q++;
        alert("Le nombre est plus petit, essai " + q + " sur 6");
        if(q == 6){
            alert("La bonne réponse est " + n);
        }
    }
    else if(p < n){
        q++;
        alert("Le nombre est plus grand, essai " + q + " sur 6");
        if(q == 6){
            alert("La bonne réponse est " + n);
        }
    }

    else if(p == n){
        alert("Bravo vous avez trouvé !");
        alert("La bonne réponse est " + n);
        break;
    }
}