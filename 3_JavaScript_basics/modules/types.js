const num = 12.5;               // Число
const str = "Строка";           // Строка
const bint = 123n;              // Целое число произвольной длины
const bool = true;              // Булевый тип
const nn = null;                // Отсутствие значения
const und = undefined;          // Неопределенное значение
const symb = Symbol("Символ");  // Уникальный идентификатор

// Конструктор
function Obj(field1, field2){
    this["Поле 1"] = field1;
    this["Поле 2"] = field2;
}

// Инициализация объекта
const obj = new Obj("Значение поля 1", "Значение поля 2");


// Экспорт
export {
    num,
    str,
    bint,
    bool,
    nn,
    und,
    symb,
    obj
}