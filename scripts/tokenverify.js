$(document).ready(function() {
  if (!getCookie('userToken')) {
      
    // remove o userToken da URL e atualiza o cookie se necessário
      var url = window.location.href;
      var index = url.indexOf("?userToken=");
      if (index >= 0) {
        url = url.substring(0, index);
        history.replaceState({path: url}, '', url);
      }

    $("#steamid-dialog").dialog({
      autoOpen: true,
      modal: true,
      closeOnEscape: false,
      open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
      },
      create: function() {
        $(this).html('<label for="steamid-input">SteamID:</label><input type="text" id="steamid-input" name="steamid">');
      },
      buttons: {
        "Enviar": function() {
          var steamid = $("#steamid-input").val();
          if (steamid !== "") {
            // salva o SteamID na url
            window.location.href = window.location.href + "?userToken=" + steamid;
            setCookie('userToken', steamid, 7); // define um cookie para indicar que o userToken foi enviado
            $(this).dialog("close");
          }
        }
      }
    });
  }
});

// função para definir um cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// função para obter um cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}