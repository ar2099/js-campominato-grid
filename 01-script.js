let inizia = document.getElementById("bottone-difficolta");


inizia.addEventListener("click",
function() {
    let valueDifficolta = document.getElementById("difficolta-id").value;
     //abbiamo estratto il valore dalle opzioni
    
    
    
    

    if (valueDifficolta == 7){
      difficolta = "difficile";
        
    }
    else if (valueDifficolta == 9){
      difficolta = "media";
        
    }
    else {
     difficolta = "facile";
        
    }
    console.log(difficolta)

    
}
)


for (i = 1; i > 50; i++) {
    let grid = document.getElementById("griglia");
    let box = document.createElement("div");
    grid.appendChild(box)

}