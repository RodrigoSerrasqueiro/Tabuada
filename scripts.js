function gerarTabuada(){
  let input1 = document.getElementById('numero')
  let numero = input1.value
  let input2 = document.getElementById('multiplicante')
  let multiplicante = input2.value //a tabuada sera multiplicada até esse numero
  let tabuada = document.getElementById('resultado')
  let multiplicador = 0 //primeiro numero que será multiplicado pelo numero preenchido pelo usuário
  tabuada.innerHTML='' //limpa tabuada anterior

  if(numero == 0 || multiplicante <= 0){
    alert('[ERRO] Dados faltantes ou inválidos!')
    limpar()
  }else{
    while(multiplicador <= multiplicante){ //A cada iteração, uma linha é exibida em tela. Ao final da iteração o resultado será a tabuada completa.
      let resultado = numero * multiplicador
      let paragrafo = document.createElement("p");                                            
      let textnode = document.createTextNode(`${numero} x ${multiplicador} = ${resultado}`); //ex: 7x1=7
      paragrafo.appendChild(textnode);
      document.getElementById("resultado").appendChild(paragrafo); 
      multiplicador++
    }
  }
}
function limpar(){
  location.reload()
}