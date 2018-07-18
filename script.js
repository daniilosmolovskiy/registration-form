document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('button').onclick = showForm;
  document.querySelector('#cancel').onclick = hideForm;
});

  function showForm(){
    document.querySelector('.background').style.display='block';
  }

  function hideForm(){
    document.querySelector('.background').style.display='none';
  }

//нажатие вне формы - она закроется
let modal = document.querySelector('.background');
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//валидация почты, если почта невалидна - будет сообщение об ошибке
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
  	$( "form" ).submit();
  }
   else {
  	alert('E-mail недействителен!')
  }
  return false;
}

$("#sing-up").bind("click", validate);