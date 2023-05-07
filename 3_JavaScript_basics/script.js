import * as types from "./modules/types.js";
import * as objects from "./modules/objects.js";
import * as json from "./modules/json.js";
import * as msa from "./modules/map_set_array.js";

const body = document.getElementById("body");
body.onload = function() { listeners() }

function listeners(){
    const printTypesButton = document.getElementById("printTypesButton");
    printTypesButton.onclick = function() {
        printTypes();
    }

    const objectTest = document.getElementById("objectTest");
    objectTest.onclick = function() {
        testObjects();
    }

    const jsonTest = document.getElementById("jsonTest");
    jsonTest.onclick = function() {
        testJson();
    }

    const msaTest = document.getElementById("msaTest");
    msaTest.onclick = function() {
        testMsa();
    }

    const equalityTest = document.getElementById("equalityTest");
    equalityTest.onclick = function() {
        testEquality();
    }
}

function printTypes() {
    // Вывод импортированных переменных и их типов
    for (const type in types) {
        console.log(`Тип ${typeof types[type]}:`, types[type]);
    }
}

function testObjects() {
    console.log(objects.firstObject);                   // Вывод первого объекта
    console.log(objects.firstObject.getValues());       // Вызов прототипной функции
    // console.log(objects.firstObject.getNumber());    // Нельзя вызвать не прототипную функцию

    console.log(objects.secondObject);                  // Вывод первого объекта
    console.log(objects.secondObject.getValues());      // Вызов прототипной функции
    console.log(objects.secondObject.getNumber());      // Вызов не прототипной функции
}

function testJson() {
    console.log(json.testJson);                 // Вывод JSON объекта

    let sJson = JSON.stringify(json.testJson);  // Преобразование в строку
    console.log(sJson);

    let oJson = JSON.parse(sJson);              // Преобразование из строки в объект
    console.log(oJson);
}

function testMsa() {
    console.log("Размер map:", msa.map.size);
    let key = "Один";
    console.log(key + ":", msa.map.get(key));
    key = "Два";
    console.log(key + ":", msa.map.get(key));
    key = "Три";
    console.log(key + ":", msa.map.get(key));
    key = "Один";
    console.log(`Удаление ${key} из map`);
    msa.map.delete(key);
    console.log("Размер map:", msa.map.size);
    console.log(key + ":", msa.map.get(key));
    msa.map.clear();
    console.log("Размер map:", msa.map.size);

    console.log();

    console.log("Размер set:", msa.set.size);
    let item = 1;
    console.log(item + ":", msa.set.has(item));
    item = 2;
    console.log(item + ":", msa.set.has(item));
    item = 3;
    console.log(item + ":", msa.set.has(item));
    item = 4;
    console.log(item + ":", msa.set.has(item));
    item = 1;
    msa.set.add(item);
    console.log(`Добавление ${item} в set`);
    console.log("Размер set:", msa.set.size);
    console.log(`Удаление ${item} из set`);
    msa.set.delete(item);
    console.log(item + ":", msa.set.has(item));
    console.log("Размер set:", msa.set.size);

    console.log();

    console.log("Размер array:", msa.arr.length);
    console.log(msa.arr);
}

function testEquality(){
    let none = 1;
    let sone = "1";
    let ntwo = 2;
    let stwo = "2";
    let btrue = true;
    let strue = "true";
    let zero = 0;
    let und = undefined;
    let nn = null;

    console.log(`Равенство ${none} (${typeof none}) и ${sone} (${typeof sone}):`, none == sone);
    console.log(`Равенство ${ntwo} (${typeof ntwo}) и ${stwo} (${typeof stwo}):`, ntwo == stwo);
    console.log(`Равенство ${none} (${typeof none}) и ${ntwo} (${typeof ntwo}):`, none == ntwo);
    console.log(`Равенство ${sone} (${typeof sone}) и ${stwo} (${typeof stwo}):`, none == stwo);

    console.log(`Равенство ${none} (${typeof none}) и ${btrue} (${typeof btrue}):`, none == btrue);
    console.log(`Равенство ${btrue} (${typeof btrue}) и ${strue} (${typeof strue}):`, btrue == strue);
    console.log(`Равенство ${none} (${typeof none}) и ${strue} (${typeof strue}):`, none == strue);

    console.log(`Равенство ${zero} (${typeof zero}) и ${und} (${typeof und}):`, zero == und);
    console.log(`Равенство ${zero} (${typeof zero}) и ${nn} (${typeof nn}):`, zero == nn);
    console.log(`Равенство ${und} (${typeof und}) и ${nn} (${typeof nn}):`, zero == nn);

    console.log();

    console.log(`Строгое равенство ${none} (${typeof none}) и ${sone} (${typeof sone}):`, none === sone);
    console.log(`Строгое равенство ${ntwo} (${typeof ntwo}) и ${stwo} (${typeof stwo}):`, ntwo === stwo);
    console.log(`Строгое равенство ${none} (${typeof none}) и ${ntwo} (${typeof ntwo}):`, none === ntwo);
    console.log(`Строгое равенство ${sone} (${typeof sone}) и ${stwo} (${typeof stwo}):`, none === stwo);

    console.log(`Строгое равенство ${none} (${typeof none}) и ${btrue} (${typeof btrue}):`, none === btrue);
    console.log(`Строгое равенство ${btrue} (${typeof btrue}) и ${strue} (${typeof strue}):`, btrue === strue);
    console.log(`Строгое равенство ${none} (${typeof none}) и ${strue} (${typeof strue}):`, none === strue);

    console.log(`Строгое равенство ${zero} (${typeof zero}) и ${und} (${typeof und}):`, zero === und);
    console.log(`Строгое равенство ${zero} (${typeof zero}) и ${nn} (${typeof nn}):`, zero === nn);
    console.log(`Строгое равенство ${und} (${typeof und}) и ${nn} (${typeof nn}):`, zero === nn);

    console.log();

    console.log(`Равенство Object.is ${none} (${typeof none}) и ${sone} (${typeof sone}):`, Object.is(none, sone));
    console.log(`Равенство Object.is ${ntwo} (${typeof ntwo}) и ${stwo} (${typeof stwo}):`, Object.is(ntwo, sone));
    console.log(`Равенство Object.is ${none} (${typeof none}) и ${ntwo} (${typeof ntwo}):`, Object.is(none, ntwo));
    console.log(`Равенство Object.is ${sone} (${typeof sone}) и ${stwo} (${typeof stwo}):`, Object.is(sone, stwo));

    console.log(`Равенство Object.is ${none} (${typeof none}) и ${btrue} (${typeof btrue}):`, Object.is(none, btrue));
    console.log(`Равенство Object.is ${btrue} (${typeof btrue}) и ${strue} (${typeof strue}):`, Object.is(btrue, btrue));
    console.log(`Равенство Object.is ${none} (${typeof none}) и ${strue} (${typeof strue}):`, Object.is(none, strue));

    console.log(`Равенство Object.is ${zero} (${typeof zero}) и ${und} (${typeof und}):`, Object.is(zero, und));
    console.log(`Равенство Object.is ${zero} (${typeof zero}) и ${nn} (${typeof nn}):`, Object.is(zero, nn));
    console.log(`Равенство Object.is ${und} (${typeof und}) и ${nn} (${typeof nn}):`, Object.is(und, nn));
}