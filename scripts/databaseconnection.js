window.activeVip1 = function() {
  const myurlParams = new URLSearchParams(window.location.search);

  $.ajax({
    url: 'http://localhost/ativar_premium1.php',
    data: {
      userToken: myurlParams.get('userToken')
    },
    method: 'GET',
    success: function(response) {
      alert(response);
      console.log("Ativou premium da conta de ID " + myurlParams.get('userToken'));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      alert("Erro ao ativar o premium");
    }
  });
}

window.activeVip2 = function() {
  const myurlParams = new URLSearchParams(window.location.search);

  $.ajax({
    url: 'http://localhost/ativar_premium2.php',
    data: {
      userToken: myurlParams.get('userToken')
    },
    method: 'GET',
    success: function(response) {
      alert(response);
      console.log("Ativou premium da conta de ID " + myurlParams.get('userToken'));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      alert("Erro ao ativar o premium");
    }
  });
}

window.activeVip3 = function() {
  const myurlParams = new URLSearchParams(window.location.search);

  $.ajax({
    url: 'http://localhost/ativar_premium3.php',
    data: {
      userToken: myurlParams.get('userToken')
    },
    method: 'GET',
    success: function(response) {
      alert(response);
      console.log("Ativou premium da conta de ID " + myurlParams.get('userToken'));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      alert("Erro ao ativar o premium");
    }
  });
}