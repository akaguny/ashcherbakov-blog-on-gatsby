---
path: "/page/funkcija-vychislenie-ugla-mezhdu-dvumja-vektorami"
date: "2015-11-14 00:34:55"
title: "Функция вычисление угла между двумя векторами"
---
Постарался максимально использовать встроенные методы работы с массивами, но думаю можно ещё лучше). Так что жду комментариев(по поводу орфографии/пунктуации тоже)!
[cut]
[pre lang=js]
"use strict";
// Функция для вычисления угла между 2 векторами
var angleBetweenTwoVectors = function(vector1, vector2) {
    // скалярное произведение векторов
    var scalMultVectors = vector1.reduce(function(sum, current, i) {
        return sum + (current * vector2[i])
    }, 0);
    // модуль вектора равен квадратному корню из суммы квадратов его координат
    var moduleVector = function(v) {
        // Находим квадраты слагаемых
        var step1 = v.map(function(currentValue) {
            return Math.pow(currentValue, 2)
        });
        // Складываем их
        var step2 = step1.reduce(function(sum, current) {
            return sum + current
        });
        // Вычисляем квадратный корень
        return Math.sqrt(step2, 2)
    };
    // Вычисляем косинус угла между векторами
    var cosA = scalMultVectors / (moduleVector(vector1) * moduleVector(vector2));
    console.log("cos(" + cosA + ")");
    return Math.acos(cosA);

}
Тест
var v1 = [4, 3, 4];
var v2 = [4, 4, 4];
console.log(angleBetweenTwoVectors(v1, v2) + " радиан");
[/pre]
_ Открыть в песочнице: <a href="http://plnkr.co/edit/o8R1eTaXx57J6Ag89OYW">plnkr.co</a>
_ Источник формулы:<a href ="http://ru.onlinemschool.com/math/library/vector/angl/">ru.onlinemschool.com</a>