alert('Boas vindas ao jogo: Número secreto')
let intervaloFinal = 10 
let numeroSecreto = parseInt(Math.random() * intervaloFinal + 1)
console.log(numeroSecreto);
let chute
let tentativas = 1

// enquanto chute for diferente ao numero secreto
while (chute != numeroSecreto) {
  chute = prompt(`Digite um numero de 1 a ${intervaloFinal}`)

  
  // se chute for igual ao numero secreto exexute o 1 alert, se não execute o segundo if
  if (chute == numeroSecreto) {
    break
    } else {
      if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`)
      } else {
        alert(`O número secreto é maior que ${chute}`)
        }
        //tentativas =  tentativas + 1
        tentativas++
        }
        }
let palavraTentativa = tentativas > 1 ? 'tentativas' :  'tentativa'
alert(`Você acertou o número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}  ; )`)