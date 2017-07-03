'use strict'
var smileLink = document.getElementById("smileLink");
var newLink = document.getElementById("newLink");
var proyectSmile = document.getElementById("proyectSmile");
var proyectNew = document.getElementById("proyectNew");

function showProyectSmile(e){
  e.preventDefault();
  proyectSmile.classList.toggle("show-proyect");
  smileLink.classList.add("proyects-btn-container-active");
      newLink.classList.remove("proyects-btn-container-active");
  if(proyectNew.classList.contains("show-proyect")){
      proyectNew.classList.remove("show-proyect");
  }
  if(proyectSmile.classList.contains("show-proyect") === false){
    smileLink.classList.remove(("proyects-btn-container-active"))
  }
}
smileLink.addEventListener("click", showProyectSmile);

function showProyectNew(e){
  e.preventDefault();
  proyectNew.classList.toggle("show-proyect");
  newLink.classList.add("proyects-btn-container-active");
      smileLink.classList.remove("proyects-btn-container-active");
  if(proyectSmile.classList.contains("show-proyect")){
      proyectSmile.classList.remove("show-proyect");
  }
  if(proyectNew.classList.contains("show-proyect") === false){
    newLink.classList.remove(("proyects-btn-container-active"))
  }
}

newLink.addEventListener("click", showProyectNew);


$(".nav-link").click(function(e){
    $(".nav-link[href!='"+$(this).attr("href")+"']").css("color","#00a99d");
    $(this).css("color","white");
});
