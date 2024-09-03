function calcularFatorial(n){
  if (n < 0) 
    return "O número deve ser inteiro positivo."
  if (n === 0 || n === 1) 
    return 1
  let fatorial = 1
  for (let i = 2; i <= n; i++){
    fatorial *= i
    }
  return fatorial
}
function calcularFibonacci(n){
  if (n < 0) 
    return "O número deve ser inteiro positivo."
  let fibonacci = [0, 1]
  while (fibonacci[fibonacci.length - 1] <= n) {
    let proximo =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    if (proximo > n) break
    fibonacci.push(proximo)
  }
  return fibonacci
}
function calcularValores(numero){
  if (numero < 0) {
    console.log("O número deve ser inteiro positivo.")
    return
  }
    const fatorial = calcularFatorial(numero)
    const fibonacci = calcularFibonacci(numero)

  document.write(`Fatorial de ${numero}: ${fatorial}`)
  document.write(`Sequência de Fibonacci até ${numero}: ${fibonacci.join(", ")}`)
}
const numero = Number(prompt("Digite um número:"))
calcularValores(numero)