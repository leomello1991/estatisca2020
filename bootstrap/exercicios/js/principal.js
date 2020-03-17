// pegando o valor da variavel continua discritiva

function mostrar() {
  const nome = document.getElementById('nomeVariavel').value


  //console.log(nome)

}

function mostrarValor() {
  //pegar valor das variavel
  let numero = document.getElementById('valor').value
  //retirar o separador
  let novo = numero.split(/\s*;\s*/)
  let soNumeros = new Array
  //transformando os valores de String em numeros
  for (let i = 0; i < novo.length; i++) {
    soNumeros.push(parseInt(novo[i]))
  }
  soNumeros.sort((a, b) => {
    return a - b
  })

  //calculo amplitude
  let calculo = (resultado, freq) => {
    resultado = soNumeros[soNumeros.length - 1] - soNumeros[0]
    //calculo frequencia
    freq = Math.floor(Math.sqrt(resultado))
    return console.log(resultado, freq)
  }
  calculo()
  // até aqui ok

  let a = freq + 1
  let b = freq - 1

  do {

    resultado++


  } while (resultado % freq != 0 && amplitute % a != 0 && amplitute % b != 0)

  if (amplitute % freq == 0 || amplitute % a == 0 || amplitute % b == 0) {


  }


}

