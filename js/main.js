'use strict'
var smileLink = document.getElementById("smileLink");
var newLink = document.getElementById("newLink");

function showProyectSmile(e){
  e.preventDefault();
  $("#smileLink").addClass("proyects-btn-container-active");
  $("#newLink").removeClass("proyects-btn-container-active");

  if ($('#proyectNew').hasClass("is__visible")) {
        $('#proyectNew').animate({ 'opacity': 'hide', 'top': '200%' }, 1200);
        $("#proyectNew").removeClass("animated hinge");
  }


  if ($('#proyectSmile').hasClass("is__visible")) {
      $('#proyectSmile').animate({ 'opacity': 'hide', 'top': '-200%' }, 1600);
      $('#proyectSmile').removeClass("is__visible");
      return;
  }

    $('#proyectNew').removeClass("is__visible");
    $('#proyectSmile').addClass("is__visible");
    $('#proyectSmile').fadeIn('slow', function () {
      $('#proyectSmile').animate({ 'opacity': 'show', 'top': '0'}, 1500, function () {
      });
    });
};
smileLink.addEventListener("click", showProyectSmile);

function showProyectNew(e) {
  e.preventDefault();
  $("#newLink").addClass("proyects-btn-container-active");
  $("#smileLink").removeClass("proyects-btn-container-active");

  if ($('#proyectSmile').hasClass("is__visible")) {
      $('#proyectSmile').animate({ 'opacity': 'hide', 'top': '-200%' }, 1200);
  }

  if ($('#proyectNew').hasClass("is__visible")) {
    $('#proyectNew').animate({ 'opacity': 'hide', 'top': '200%' }, 1600);
    $('#proyectNew').removeClass("is__visible");
    $("#newLink").removeClass("proyects-btn-container-active");
    return;
  }

  $('#proyectSmile').removeClass("is__visible");
  $('#proyectNew').addClass("is__visible");
  $('#proyectNew').fadeIn('slow', function () {
    $('#proyectNew').animate({ 'opacity': 'show', 'top': '0' }, 1500, function(){

    });
  });
};

newLink.addEventListener("click", showProyectNew);



$(".nav-link").click(function(e){
    $(".nav-link[href!='"+$(this).attr("href")+"']").css("color","#00a99d");
    $(this).css("color","white");
});
