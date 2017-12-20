---
path: "/page/sozdanie-obekta-nasledujushhego-prototip"
date: "2015-10-17 09:48:33"
title: "Создание объекта, наследующего прототип"
---
_Пример ECMAScript3 совместимого кода(со спецификацией ECMAScript 5, если доступно)
[Книги javascript] JavaScript Карманный справочник, стр 109
[xcut]
[pre lang=js]
// Функция inherit() возвращает объект, наследующий
// свойства прототипа p. В нём используется
// введённая в ECMAScript 5 функция object.create()
// если она определена(не возвращает undefined). В противном случае
// применяется устаревшая методика.
function inherit(p){
if (p == null) //объект p не должен быть равен null
throw TypeError(); // throw - исключение, сигнал о том, что во время выполнения произошла ошибка //(стр.97), если так, то генерируем ошибку TypeError() - для ECMASCript3/5 в нестрогом режиме, т.к
// если явно не указать, то интерпретатор никак не отреагирует.
if(Object.create) // Вызов Object.create()
return Object.create(p)
var t = typeof p; // Убедимся, что p -- объект
if (t !== "object" && t !== "function")
throw TypeError();
function f() {}; // определение конструктора
f.prototype = p // установка свойства prototype
return new f(); // создание наследника p
}
[/pre]
<script>
// Функция inherit() возвращает объект, наследующий
// свойства прототипа p. В нём используется
// введённая в ECMAScript 5 функция object.create()
// если она определена(не возвращает undefined). В противном случае
// применяется устаревшая методика.
function inherit(p){
if (p == null) //объект p не должен быть равен null
throw TypeError(); // throw - исключение, сигнал о том, что во время выполнения произошла ошибка //(стр.97), если так, то генерируем ошибку TypeError() - для ECMASCript3/5 в нестрогом режиме, т.к
// если явно не указать, то интерпретатор никак не отреагирует.
if(Object.create) // Вызов Object.create()
return Object.create(p)
var t = typeof p; // Убедимся, что p -- объект
if (t !== "object" && t !== "function")
throw TypeError();
function f() {}; // определение конструктора
f.prototype = p // установка свойства prototype
return new f(); // создание наследника p
}
</script>
_ Протестировать работу кода можно из консоли.
_ Для этого в код статьи добавлен код скрипта(можно найти в исходном коде страницы, нажав F12)
[image=http://stud.ashcherbakov.ru/uploads/_pages/26/mini/snimok-ekrana_2015-10-17_13-43-33.png snimok-ekrana_2015-10-17_13-43-33.png]http://stud.ashcherbakov.ru/uploads/_pages/26/snimok-ekrana_2015-10-17_13-43-33.png[/image]
[spoiler= ! Внимание]Это не будет работать если вы используете визуальный редактор, по крайней мере необходимо будет его на время откюбчить и вставить код в исходный текст статьи(читайте документацию по своему редактору)[/spoiler]
_ Сам тест:
[show test][image=http://stud.ashcherbakov.ru/uploads/_pages/26/mini/snimok-ekrana_2015-10-17_13-42-07.png snimok-ekrana_2015-10-17_13-42-07.png]http://stud.ashcherbakov.ru/uploads/_pages/26/snimok-ekrana_2015-10-17_13-42-07.png[/image]
_ В консоли(F12 => console) создаём объект - родитель:
[pre lang=js]// Создадим тестовый родительский объект
var testParentObject = {
// добавим произвольные свойства
tesOne : "Hellow",
testTwo : "World"
};[/pre]
_ создадим дочерний объект, успех - если у дочернего объекта будут те-же свойства
[pre lang=js]inherit(testParentObject)[/pre]
_ ответ
[pre lang=js]Object {tesOne: "Hellow", testTwo: "World"}[/pre]
Функция вернула объект с теме-же свойствами, а это то, чего мы и хотели добиться[/show]