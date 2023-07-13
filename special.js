document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 500;
    canvas.height = 500;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });
  
  // Sélectionner le bouton "Ajouter au panier"
var boutonAjouterAuPanier = document.getElementById("ajouter-au-panier");

// Ajouter un gestionnaire d'événement au clic sur le bouton
boutonAjouterAuPanier.addEventListener("click", function() {
  // Effectuer les actions d'ajout au panier ici
  // Par exemple, vous pouvez afficher un message de confirmation ou mettre à jour un compteur de produits ajoutés au panier

  // Exemple de message de confirmation
  alert("Produit ajouté au panier !");
});

  /*poll system*/

  const options = document.querySelectorAll("label");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", ()=>{
      for (let j = 0; j < options.length; j++) {
        if(options[j].classList.contains("selected")){
          options[j].classList.remove("selected");
        }
      }
  
      options[i].classList.add("selected");
      for (let k = 0; k < options.length; k++) {
        options[k].classList.add("selectall");
      }
  
      let forVal = options[i].getAttribute("for");
      let selectInput = document.querySelector("#"+forVal);
      let getAtt = selectInput.getAttribute("type");
      if(getAtt == "checkbox"){
        selectInput.setAttribute("type", "radio");
      }else if(selectInput.checked == true){
        options[i].classList.remove("selected");
        selectInput.setAttribute("type", "checkbox");
      }
  
      let array = [];
      for (let l = 0; l < options.length; l++) {
        if(options[l].classList.contains("selected")){
          array.push(l);
        }
      }
      if(array.length == 0){
        for (let m = 0; m < options.length; m++) {
          options[m].removeAttribute("class");
        }
      }
    });
  }