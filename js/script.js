$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});


window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("init-day");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Ajoute class "success" ou "error"

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Merci! :)";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Il y a eu une erreur!";
  }




  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// fonction "aidante" pour ajax

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


