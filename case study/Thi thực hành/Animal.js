class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weigth = weight;
    }
    setName = function (a) {
        this.name = a;
    }
    setWeight = function (b) {
        this.weight = b;
    }
    getName = function () {
        this.name = name;
    }
    getWeight = function () {
        this.weight = weight;
    }
    toString = function () {
        let str = "Name animal is "+ this.name+","+ "Weight animal is "+ this.weight;
        document.write(str)
        
    }
}