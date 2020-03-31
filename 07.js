var nombre1 = prompt("1er nombre");
var nombre2 = prompt("2nd nombre");

if(nombre1 < nombre2){
    document.write("Votre 1er nombre : " + nombre1 + " est plus petit que votre 2nd : " + nombre2);
}
else if(nombre1 > nombre2){
    document.write("Votre 1er nombre : " + nombre1 + " est plus grand que votre 2nd : " + nombre2);
}
else if(nombre1 == nombre2){
    document.write("Votre 1er nombre : " + nombre1 + " est égal votre 2nd : " + nombre2);
}