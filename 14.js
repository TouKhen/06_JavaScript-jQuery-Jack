while(true){
    p = parseInt(prompt("entrer un nombre entre 50 et 100 :"))
    if(p > 50 && p < 100){
        document.write("Votre nombre est " + p);
        break;
    }
    else{
        continue;
    }
}