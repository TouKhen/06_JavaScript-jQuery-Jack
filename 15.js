var p = parseInt(prompt("Veuillez choisir un nombre entre 1 et 9:"));

if(p >= 1 && p <= 9){ 
        for (var i = 1; i <= 10; i++) {
            j = i;
            document.write(p + " x " + j + " = " + p*j + "<br>");
        }
    }
else{
    alert("Error");
}