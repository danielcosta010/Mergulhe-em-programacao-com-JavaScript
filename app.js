alert('Boas vindas ao jogo: Número secreto')
let intervaloFinal = 100 
let numeroSecreto = parseInt(Math.random() * intervaloFinal + 1)
console.log(numeroSecreto);
let chute
let tentativas = 1

// enquanto chute for diferente ao numero secreto
while (chute != numeroSecreto) {
  chute = prompt(`Digite um numero de 1 a ${intervaloFinal}`)
  
  // (if) se chute for igual ao número secreto pare e execute o alert fora do while, (else) se não execute o segundo if
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
alert(`Você acertou com ${tentativas} ${palavraTentativa}, o número secreto era ${numeroSecreto}  ; )`)

