alert('Boas vindas ao jogo: Número secreto')
let numeroSecreto = 3
let chute
let tentativas = 1

// enquanto chute for diferente ao numero secreto
while(chute != numeroSecreto) {
  chute = prompt('Digite um numero de 1 a 10')

  // se chute for igual ao numero secreto exexute o 1 alert, se não execute o segundo if
  
  if(chute == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas}  ; )`)
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
