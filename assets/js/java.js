fetch("http://localhost:5678/api/works")
         .then((res) => res.json())
         .then(data => {
            console.log(data)
            let produit = "";
            for (let i of data) {
               produit = `
              <figure id="supParent">
                     <img src="${i.imageUrl}" alt="Abajour Tahina">
                     <figcaption>${i.title}</figcaption>
                </figure>`
               const ajout = document.querySelector(".gallery")
               ajout.insertAdjacentHTML("beforeend", produit)
         }

         })


const bouton = document.querySelectorAll(".bordire_bouton");
bouton[0].classList.add("bleux")
console.log(bouton);
const b = document.querySelector("#t");
console.log(b.innerHTML);
bouton.forEach(element => {
   element.addEventListener("click", e=> {
      //pour recuperer les valeurs passer dans ul li
      let dataNme = element.closest("li")
      let data1 = dataNme.getAttribute("data-name")
      const supP = document.querySelector(".gallery")
      const supEnf = document.querySelector("#supParent")
      console.log(supEnf);
      if(supEnf){
         const EnfSupprimer = document.querySelectorAll("#supParent")
         EnfSupprimer.forEach(element => {
            console.log("suprimer");
            supP.removeChild(element)
         });
         
      }
      let categorie 
      categorie= e.target.innerHTML;
      fetch("http://localhost:5678/api/works")
         .then((res) => res.json())
         .then(data => {
            console.log(data)
            let produit = "";
            for (let i of data) {
               if(data1 == i.category.name){
               produit = `
              <figure id="supParent">
                     <img src="${i.imageUrl}" alt="Abajour Tahina">
                     <figcaption>${i.title}</figcaption>
                </figure>`
               const ajout = document.querySelector(".gallery")
               ajout.insertAdjacentHTML("beforeend", produit)
            }
            else if (categorie=="Tous"){
               produit = `
               <figure id="supParent">
                      <img src="${i.imageUrl}" alt="Abajour Tahina">
                      <figcaption>${i.title}</figcaption>
                 </figure>`
                const ajout = document.querySelector(".gallery")
                ajout.insertAdjacentHTML("beforeend", produit)

            }
         }

         })


      bouton.forEach(element => {
         element.classList.remove("bleux")

      });
      element.classList.add("bleux")

   })
});



console.log("fetch----");