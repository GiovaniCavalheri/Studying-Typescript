// ==> Interfaces são usadas em sua maioria das vezes para a criação de Objetos.

interface CelestialBody {
    name: string
    mass: number
}

// ==> Com interfaces conseguimos herdar outra Interface;

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star 
sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

class MilkWhayPlanet implements Planet {
    name: string
    population: number
    mass: number

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string) {
        // ...
    }
}

