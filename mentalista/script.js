var numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
var tentativas = 3;

function verificar() {
  while (tentativas > 0) {
    
   var input = document.querySelector("#chute");
   var chute = parseInt(input.value)

    if (chute === numeroSecreto) {
      
      h3.innerHTML = "Você acertou o númwero é: "+ numeroSecreto;
      break;
    } else if (chute > 10) {
      h3.innerHTML = "Esse número não vale";
    } else if (chute > numeroSecreto) {
      h3.innerHTML = "O número é menor";
      tentativas = tentativas - 1;
      break;
    } else if (chute < numeroSecreto) {
      h3.innerHTML = "O número é maior";
      tentativas = tentativas - 1;
      break;
    }
  }

  if (tentativas == 0) {
    h3.innerHTML = "Você<br>perdeu!!O número era: " + numeroSecreto;
  }
}
