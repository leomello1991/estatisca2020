// pegando o valor da variavel continua discritiva

function mostrar(){
const nome = document.getElementById('nomeVariavel').value


//console.log(nome)

}

function mostrarValor(){
  //pegar valor das variavel
  let numero = document.getElementById('valor').value
  //retirar o separador
  let novo = numero.split(/\s*;\s*/)
  let soNumeros = new Array
  //transformando os valores de String em numeros
  for(let i = 0; i < novo.length; i++){
    soNumeros.push(parseInt(novo[i]))
  }
  soNumeros.sort((a,b) =>{
    return a-b
  })

  //calculo amplitude
  let calculo = (resultado, linha) =>{
     this.resultado = soNumeros[soNumeros.length-1] - soNumeros[0]
  //calculo frequencia
     this.linha = Math.floor(Math.sqrt(soNumeros.length))
    return console.log(`o valor da amplitude é ${this.resultado}, e o valor de frequencia ${this.freq}`)
  }
  calculo()
  // até aqui ok
  let resultado = this.resultado
  let linha = this.linha
  let a = linha+1
  let b = linha-1

  do{

    resultado++

    
  }while(resultado % linha != 0 && resultado % a != 0 && resultado % b != 0)

  let Valorintervalo = 0

  let qtdeLinha = 0


  if(resultado % linha == 0 ){
    
    Valorintervalo = resultado/linha
    this.qtdelinha = linha
     
  }else if(resultado % a == 0){
    Valorintervalo = resultado/a
    this.qtdeLinha = a
  }else if (resultado % b == 0){
    Valorintervalo = resultado % b
    this.qtdeLinha = b
  }
 let frequencia = []

 for(let i = 0 ; i <= soNumeros.length; i++){
   if(soNumeros[i] != soNumeros[i+1]){
     frequencia.push(soNumeros[i])
   }
 }
 
 
  let contador = soNumeros.reduce(function(todos, repeticao){
    if(repeticao in todos){
      todos[repeticao]++
    }else{
      todos[repeticao] =1
    }
    return todos
  }, {})
  console.log(contador)
   
  var table = document.getElementById('tabela');// sugestão, coloque um id na tabela para usar getElementById.
  var tbody = document.getElementById('tbody');
  
  // limpar tbody
  
  // tbody.innerHTML="";
  
  //adicionar as linha na tabela
  
  for(var i=0; i< frequencia.length; i++){
           tbody.innerHTML += "<tr><td>"+frequencia[i]+"</td><td>"+contador[i]+"</td><td>";                          
  }
         /*                       
  //  
                                
  for(var i=0, carro; carro = carros[i]; i++){
           tbody.innerHTML += "<tr><td>"+carro.placa+"</td><td>"+carro.ano+"</td><td>"+carro.fabricante+"</td><td>"+carro.modelo+"</td></tr>";                          
  }   
                                
  //
                                
  for(var i=0, carro; carro = carros[i]; i++){
           tbody.innerHTML += `<tr><td>${carro.placa}</td><td>${carro.ano}</td><td>${carro.fabricante}</td><td>${carro.modelo}</td></tr>`;                          
  }                              
*/
  
   


}

