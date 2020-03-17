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
    return console.log(`o valor da amplitude é ${this.resultado}, e o valor de frequencia ${this.freq}`)
  }
  calculo()
  // até aqui ok
  let resultado = this.resultado
  let freq = this.freq
  let a = freq+1
  let b = freq-1

  do{

    resultado++

    
  }while(resultado % freq != 0 && resultado % a != 0 && resultado % b != 0)

  let Valorintervalo = 0

  let linha = 0


  if(resultado % freq == 0 ){
    
    Valorintervalo = resultado/freq
    this.linha = freq
     
  }else if(resultado % a == 0){
    Valorintervalo = resultado/a
    this.linha = a
  }else if (resultado % b == 0){
    Valorintervalo = resultado % b
    this.linha = b
  }
 

  // class = 

  function tableCreate(){
    let tabbody = document.getElementById('tabela')

    let tabela = document.createElement("table")
    let tbBody = document.createElement("tbody")

    for(var i = 0; i < linha ; i++){

        var tr = document.createElement("tr")
      for(var j=0; j <2; j++){
        if(i ==2 && j  == 1){
          break
        }else{
          var td = document.createElement('td')
          td.appendChild(document.createTextNode('algo'))
          i ==1 && j ==1 ? td.setAttribute('rowSpan','2'):null
          tr.appendChild(linha).value
        }
      }
      tbBody.appendChild(tr)
    }
    tabela.appendChild(tbBody)
    tabbody.appendChild(tabela)
  } 
tableCreate()

// console.log(intervalo)
  
// console.log(soNumeros)
  

}

