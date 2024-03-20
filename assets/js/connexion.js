
let connexion = document.querySelector("#form")
connexion.addEventListener('submit', function (e) {
  e.preventDefault()
  let mot_passe = document.querySelector("#passe").value
  let email = document.querySelector("#nom").value
  console.log("mot de passe= "+mot_passe + " mail = " + email);
  const data = {
    email:email,
    password:mot_passe
  }
 fetch("http://localhost:5678/api/users/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then((res) => {
      if(res.ok){
        return res.json() 
      }
     else if (res.status === 404) {
      console.log("utilisateur inconnu");
        document.querySelector("#erreur").innerHTML = "utilisateur inconnu"
        document.querySelector("#erreur").style.color = "red"
     }
     else if(res.status === 401) {
      console.log("utilisateur non autoriser");
      document.querySelector("#erreur").innerHTML = "utilisateur non autoriser"
        document.querySelector("#erreur").style.color = "red"
     }
    })
    .then(res => {
      if (res?.token) {
        localStorage.setItem("code", res.token)
        document.location.href = `editer.html`;
      }
      console.log(res)
    })

})
