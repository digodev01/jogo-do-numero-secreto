alert('boas vindas ao jogo do número secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`); 
   //se o chute for igual ao numeroSecreto
   if ( chute == numeroSecreto) {
    break;
   } else {
       if(chute > numeroSecreto) {
          alert(` o número é menor que o ${chute}`);
        } else {
            alert(`o número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++
   }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);