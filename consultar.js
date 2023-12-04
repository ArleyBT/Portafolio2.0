`use strict`

function consulDatos(){
    fetch("./informacion-json/informacion-about.json")
        .then(respuesta => {
            if (!respuesta.ok){
                throw new Error("no response")
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            console.log(data)
            const seleccionReferencias = document.querySelector("#referencias")

            for (let i = 0; i < data.tarjetas.length; i++){
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("container-experiancia")
                crearDoc.classList.add("reumen-items")
                crearDoc.classList.add("list-2")
                crearDoc.classList.add("icono1")                     

                const crearP = document.createElement("p")
                const crearImg = document.createElement("img")
                crearImg.src = data.tarjetas[i].imagen;
                crearImg.classList.add('icono1')

                crearP.textContent = data.tarjetas[i].calendario
                crearP.classList.add('calendario');

                crearP.insertBefore(crearImg, crearP.firstChild);

                const crearCargo = document.createElement("p");
                crearCargo.classList.add("cargo");
                crearCargo.textContent = data.tarjetas[i].cargo;

                const crearDescripcion = document.createElement("p");
                crearDescripcion.classList.add("descricion");
                crearDescripcion.textContent = data.tarjetas[i].descricion;


                crearDoc.appendChild(crearP);
                crearDoc.appendChild(crearCargo);
                crearDoc.appendChild(crearDescripcion);
                seleccionReferencias.appendChild(crearDoc) 
                
            }

            
        })
        .catch(error => {
            console.error(error, "errorrrr");
        });
}

consulDatos();