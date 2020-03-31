var moyenne = parseInt(prompt("Quelle est ta moyenne au bac ?"));

if(moyenne < 10){
    document.write("Tu es recalé");
}
else if(moyenne == 10){
    document.write("Tu es reçu");
}
else if(moyenne == 11){
    document.write("Tu es reçu");
}
else if(moyenne >= 12){
    document.write("Tu es reçu avec mention");
}