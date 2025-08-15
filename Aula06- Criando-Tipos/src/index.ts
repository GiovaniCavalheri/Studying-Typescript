type planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";


  let planet: planet



function checkPlanet(planet: planet) {
    if (planet === "Terra") {
        console.log("Aqui é o nosso planeta!");
    } else {
        console.log("Não é o nosso planeta!");
    }
}

// No TypeScript também podemos definir um Alias para uma função
// Podemos fazer isso através da sintaxe de arrow functions
// mencionando os parâmetros e o tipo de retorno
type GreetingCallback = (name: string) => void

// A partir disso podemos anotar esse tipo
function greet(callback: GreetingCallback) {
  const name = prompt("Qual é o seu nome?")

  callback(name)
}

// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet((name) => {
  alert(`Olá, ${name}! Essa é uma saudação executada como callback!`)
})