//supprimer image
const token = localStorage.getItem("code")
let params = new URL(document.location.href);
let id = params.searchParams.get("id")
if(token){
   document.querySelector("#connecter").innerHTML = "logout"
}
document.querySelector("#connecter").addEventListener("click", function(){
   localStorage.clear()
   document.location.href = `accueil.html`
})

if (id) {
   Supprimer(id)
   Modal()
}
function Supprimer(id){
   fetch(`http://localhost:5678/api/works/${id}`, {
   method:"DELETE",
      headers: {
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       }
   })
      .then((res) => res.json())
      .then(function (data) {
         console.log("oui supprimer avec succee")
         //document.querySelector(".add").style.display = "block";
      })
}
//affiche les images dans pages editer
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


//afficher images dans hipope de etditer
const editt = document.querySelector(".edit");
editt.addEventListener("click", function () {
   Modal()
})
function Modal(){
   const supP = document.querySelector(".gallerie")
   const supEnf = document.querySelector("#gallerie1")
   console.log(supEnf);
   if (supEnf) {
      const EnfSupprimer = document.querySelectorAll("#gallerie1")
      EnfSupprimer.forEach(element => {
         console.log("suprimer");
         supP.removeChild(element)
      });
   }
   fetch("http://localhost:5678/api/works")
      .then((res) => res.json())
      .then(data => {
         console.log(data)
         let produit = "";
         for (let i of data) {
            produit = `
         <figure id="gallerie1">
             <a href="./editer.html?id=${i.id}"> <i  class="corbeil fa-solid fa-trash-can"></i></a> 
              <img src="${i.imageUrl}" alt="">
         </figure>`
            const ajout = document.querySelector(".gallerie")
            ajout.insertAdjacentHTML("beforeend", produit)
         }

      })
   document.querySelector(".add").style.display = "block";
}fetch(`http://localhost:5678/api/works/${id}`, {
   method:"DELETE",
      headers: {
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       }
   })
      .then((res) => res.json())
      .then(function (data) {
         console.log("oui supprimer avec succee")
         //document.querySelector(".add").style.display = "block";
      })
const fermer = document.querySelector(".hipope2")
fermer.addEventListener("click", function () {
   console.log("c'est bon");
   document.querySelector(".add").style.display = "none"
})
let image = document.querySelector("#image-ajouter")
let input = document.querySelector("#input-file")
console.log(image);
console.log(input);
input.onchange = function () {
   image.src = URL.createObjectURL(input.files[0])
   console.log("ouioo");
   console.log(input.value);
}

//hipoe pour ajouter un element 

let ajouter = document.querySelector(".bordire_bouton1")
ajouter.addEventListener("click", function (e) {
   e.preventDefault()
   document.querySelector(".add1").style.display = "block";
   let nom = document.querySelector("#name").value;
   let cate = document.querySelector("#categorie").value
   console.log('ce bien lui');
   console.log(nom + " " + cate);
   ViderFormulaire()
})
//ajouter element 
let valider = document.querySelector("#form")
valider.addEventListener("submit", function (e) {
   e.preventDefault()
   //  document.querySelector(".add1").style.display = "none";
   
  // "Authorization":`Bearer + ${token}`
 
  const donnee = new FormData(valider)
  // "Authorization":" Bearer e yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";
   fetch("http://localhost:5678/api/works",{
      method: "POST",
      headers: {
         "Authorization":`Bearer ${token}`
       },
      body:donnee
    })
      .then((res) => res.json())
      .then(function (data) {
         console.log("oui oui ajouter avec succee broth..");
         console.log(data)
      })
      document.querySelector(".add1").style.display = "none";
      //Modal()
      document.location.href = `editer.html`;
})
const fermer_formulaire_image = document.querySelector(".hipope-fleche")
fermer_formulaire_image.addEventListener("click", function () {
   console.log("c'est bon");
   document.querySelector(".add1").style.display = "none"
})

function ViderFormulaire(){
   let titre = document.querySelector("#nom").innerHTML = "";
   //let idCategorie= document.querySelector("#categorie").innerHTML = "";
   let cate = document.querySelector("#categorie");
   let categori = cate.options[cate.selectedIndex].text;
   console.log('ce bien lui');
   console.log(titre + " " + idCategorie+"  "+categori);
   image.src = URL.createObjectURL("")
}