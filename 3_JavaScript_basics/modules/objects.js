function TestObject(number){
    this.name = "Объект";
    this.number = number;
}

const firstObject = new TestObject(1);

// Прототипное наследование
TestObject.prototype.getValues = function() {
    return `Имя: ${this.name}, номер: ${this.number}`
}

// Унаследованный объект
const secondObject = new TestObject(2);
// Функция добавленная без наследования
secondObject.getNumber = function() {
    return this.number;
}

export {
    firstObject,
    secondObject
}