// ==> Interfaces são usadas em sua maioria das vezes para a criação de Objetos.
let sun;
sun.name = 'Sol';
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
class MilkWhayPlanet {
    name;
    population;
    mass;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        // ...
    }
}
