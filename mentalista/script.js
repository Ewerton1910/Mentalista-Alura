var numeroSecreto = 0;
var numeroSecreto = parseInt(Math.random() * 10);
//console.log(numeroSecreto);
var tentativas = 3;

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which == 13) {
      verificar();
      document.querySelector("#chute").value = "";
    }
  },
  false
);

function verificar() {
  while (tentativas > 0) {
    var input = document.querySelector("#chute");
    var chute = parseInt(input.value);
    if (chute > 10 || chute < 1) {
      h3.innerHTML = "Esse número não vale";
      return;
    }

    if (chute === numeroSecreto) {
      h3.innerHTML = "você acertou";
      break;
    } else if (chute > numeroSecreto) {
      h3.innerHTML = "Meu número é menor";
      tentativas = tentativas - 1;
      break;
    } else if (chute < numeroSecreto) {
      h3.innerHTML = "Meu número é maior";
      tentativas = tentativas - 1;
      break;
    }
  }

  if (tentativas === 0) {
    h3.innerHTML = "Você Perdeu!! <br> O número era: " + numeroSecreto + ".";
  }
}
