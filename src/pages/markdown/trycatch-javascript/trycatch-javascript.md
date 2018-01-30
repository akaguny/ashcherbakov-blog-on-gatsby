---
path: "/page/trycatch-javascript"
date: "2015-10-17"
title: "try/catch javascript"
---
```
function factorial(x){
// Если x неправильное, генерируется исключение
if(x<0) throw new Error("X должно быть положительным");
for(var f=1; x>1; f*=x, x--);
// Вычисление возвращаемого значения
return f;
};
try{
// Приглашение ввести число
var n = Number(prompt("Введите число",""));
// Вычисление факториала, исходя из предположения,
// что введено правильное число
var f = factorial(n);
alert(n + "! = " + f);
}
catch (ex) { // Произошло исключение
alert(ex); // Вывод сообщения об ошибке
}
```