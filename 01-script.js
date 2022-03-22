let inizia = document.getElementById("bottone-difficolta");

let difficolta = document.getElementById("difficolta-id").value ;

console.log(difficolta)

let box = document.createElement("div");

let grid = document.getElementById("griglia");


inizia.addEventListener("click",


function() {
    document.getElementById("griglia").classList.add("griglia")
    document.getElementById("griglia").classList.remove("none")
    document.getElementById("benvenuto").classList.add("none")
    let difficolta = document.getElementById("difficolta-id").value;
    let startConteggio = document.getElementById("conteggio").innerHTML = `<span>0</span>`
    grid.innerHTML = ""

    

    let conteggio = 0;

    if (difficolta == "facile"){
        
        for(let i = 1; i < 101; i++){
            
           let box = document.createElement("div");

            let grid = document.getElementById("griglia");
           
            grid.appendChild(box);
            box.classList.add("box10")
            box.innerHTML = `<span>${i}</span>`
            box.classList.remove("box9")
            box.classList.remove("box7")
            
            box.addEventListener("click",
                function () {
                    this.classList.add("box-toccato")
                    conteggio = conteggio +1;
                    document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                }
            )
        }
        
    }

     else if (difficolta == "media"){
        for (let y = 1; y < 82; y++) {
            let box = document.createElement("div");

           let grid = document.getElementById("griglia");
           
            grid.appendChild(box)
            box.classList.add("box9")
            box.innerHTML = `<span>${y}</span>`
            box.classList.remove("box10")
            box.classList.remove("box7")

            box.addEventListener("click",
                function () {
                    this.classList.add("box-toccato")
                    conteggio = conteggio + 1;
                    document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                }
            )
     }
    }

    else {
        for (let f = 1; f < 50; f++) {
            let box = document.createElement("div");

            let grid = document.getElementById("griglia");
            grid.appendChild(box)
            box.classList.add("box7")
            box.innerHTML = `<span>${f}</span>`
            box.classList.remove("box10")
            box.classList.remove("box9")

            box.addEventListener("click",
                function () {
                    this.classList.add("box-toccato")
                    conteggio = conteggio + 1;
                    document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                }
            )
        }
    }


}
)

