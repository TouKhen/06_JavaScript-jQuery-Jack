while(true){
    p = prompt("Alors on joue au Ni oui Ni non ?");
    if(p == "oui" || p == "non"){
        document.write("Vous avez perdu");
        break;
    }
    else if(p == " oui" || p == " non"){
        document.write("Vous avez perdu");
        break;
    }
    else if(p == "oui " || p == "non "){
        document.write("Vous avez perdu");
        break;
    }
    else{
        continue;
    }
}