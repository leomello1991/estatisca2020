// pegando o valor da variavel

function mostrar(){
const nome = document.getElementById('nomeVariavel').value

//até aqui funcionou
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
  let calculo = (resultado, freq) =>{
     this.resultado = soNumeros[soNumeros.length-1] - soNumeros[0]
  //calculo frequencia
     this.freq = Math.floor(Math.sqrt(soNumeros.length))
    return console.log(`o valor da amplitude é ${this.resultado}, e o valor de ${this.freq}`)
  }
  calculo()
  // até aqui ok
  let resultado = this.resultado
  let freq = this.freq
  let a = freq+1
  let b = freq-1

  do{

    resultado++

    
  }while(resultado % freq != 0 && amplitute % a != 0 && amplitute % b != 0)

  let Valorintervalo = 0

  if(resultado % freq == 0 ){
    
    Valorintervalo = resultado/freq
     
  }else if(resultado % a == 0){
    Valorintervalo = resultado/freq
  }else if (resultado % freq == 0){
    Valorintervalo = resultado % freq
  }
  for(let i = 0; i < soNumeros.length-1; i++){
    
  }

let body = document.getElementsByTagName("body")[0]

let tabela = document.createElement("table")
let tbBody = document.createElement("tbody")

for(let i = 0;)

console.log(intervalo)
  
console.log(soNumeros)
  

}

