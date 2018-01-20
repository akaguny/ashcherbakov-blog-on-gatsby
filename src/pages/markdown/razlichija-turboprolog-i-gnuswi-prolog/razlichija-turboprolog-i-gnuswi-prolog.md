---
path: "/page/razlichija-turboprolog-i-gnuswi-prolog"
date: "2015-10-12"
title: "Различия TurboProlog и GNU/SWI Prolog"
---
— Во многих учебниках и методичках рассказывают как программировать на TurboProlog, однако он морально устарел.
— SWI и gprolog - современные интерпритации Prolog, наиболее приближенные к стандарту. Немного отличаются по производительности, gprolog быстрее, однако на первых парах этого не будет заметно. Swi имеет онлайн редактор и оффлайн, последний можно вызвать набрав в его консоли "emacs."


[xcut]

* Нет разделов domains, goal, раздел predicates не объявляется
* Переменная не может быть выведена при помощи write вместе со строкой. Однако можно поставить между ними знак +(-=..) и тогда сработает. Иначе необходимо 2 write
* названия предикатов должны быть в плотную к скобкам, иначе появится ошибка:
syntax error: . or operator expected after expression
* сравнение 2-х переменных, аналогичное X<>Y TurboProlog будет выглядеть как X=Y
* Одинаковые предикаты должны быть вместе
* Строки оборачиваются только одинарными кавычками
* Если в результате работы есть не 1 ответ, тогда программа будет выдавать по 1, предлагая продолжить вывод, для этого необходимо нажать точку с запятой ";" или для окончания работы точку.
* Строки обрамляются в одинарные кавычки(Прогр. 2 в-т 1), иначе могут возникнуть непредвиденные ошибки. Но можно принудительно дать прологу понять, что в двойных кавычках строки, делается это размещением в начале программы :- set_prolog_flag(double_quotes, string). (Прогр. 2 в-т 2) <a href ="http://www.cyberforum.ru/prolog/thread1551889.html">Обсуждение на cyberforum</a>

— Примеры программ:

— Программа 2
*  Turbo-Prolog

```
DOMAINS
dog_list= symbol* /* здесь «*» указывает на список*/
PREDICATES
dogs(dog_list).
CLAUSES
dogs(["лайка","борзая","дог","болонка"]).
print_list([ ]).
print_list([X|Y]) :- write(X),nl, print_list([Y]).

```


*  SWI-prolog вариант 1

```
dogs(['лайка','борзая','дог','болонка']).
 
print_dogs([]).
print_dogs([X|Y]) :-
    write(X), nl,
    print_dogs(Y).

```


*  SWI-prolog Вариант 2

```
:- set_prolog_flag(double_quotes, string).
 
dogs(["лайка","борзая","дог","болонка"]).
 
print_dogs([]).
print_dogs([X|Y]) :-
    write(X), nl,
    print_dogs(Y).

```


— Программа 1
*  TurboProlog

```
PREDICATES
add(integer,integer)
fadd(real,real)
maximum(real,real,real)
n3(integer,integer)
gipotenuza(integer,integer)
CLAUSES
gipotenuza(X,Y):- Z = sqrt(X*X + Y*Y),write("Gipotenuza= ",Z),nl.
add(X,Y):-Z=X+Y,write("Sum= ",Z),nl.
fadd(X,Y):-Z=X+Y,write("FSum=",Z),nl.

maximum(X,X,X).
maximum(X,Y,X):- X>Y.
maximum(X,Y,Y):- X<Y.
n3(X,Y):-maximum(X,Y,Z),R=3*Z,write("n3=",R),nl.

```


*  SWI-prolog

```
gipotenuza(X,Y):- Z is sqrt(X*X + Y*Y),write('Gipotenuza= '),
write(Z),nl.
add(X,Y):-Z is X+Y,write('Sum = '),write(Z),nl.
fadd(X,Y):-Z is X+Y,write('FSum = '),write(Z),nl.

maximum(X,X,X).
maximum(X,Y,X):- X>Y.
maximum(X,Y,Y):- X<Y.
nThree(X,Y):-maximum(X,Y,Z),R is 3*Z,write('Число n3 = '), write(R),nl.

```




 <!-- nosimple -->
— Программа 3
*  TurboProlog

```
PREDICATES
add(integer,integer)
fadd(real,real)
maximum(real,real,real)
n3(integer,integer)
gipotenuza(integer,integer)
CLAUSES
gipotenuza(X,Y):- Z = sqrt(X*X + Y*Y),write("Gipotenuza= ",Z),nl.
add(X,Y):-Z=X+Y,write("Sum= ",Z),nl.
fadd(X,Y):-Z=X+Y,write("FSum=",Z),nl.

maximum(X,X,X).
maximum(X,Y,X):- X>Y.
maximum(X,Y,Y):- X<Y.
n3(X,Y):-maximum(X,Y,Z),R=3*Z,write("n3=",R),nl.

```


*  SWI-prolog

```
gipotenuza(X,Y):- Z is sqrt(X*X + Y*Y),write('Gipotenuza= '),
write(Z),nl.
add(X,Y):-Z is X+Y,write('Sum = '),write(Z),nl.
fadd(X,Y):-Z is X+Y,write('FSum = '),write(Z),nl.

maximum(X,X,X).
maximum(X,Y,X):- X>Y.
maximum(X,Y,Y):- X<Y.
nThree(X,Y):-maximum(X,Y,Z),R is 3*Z,write('Число n3 = '), write(R),nl.

```


 <!-- 
osimple -->
— Также предлагаю ознакомиться с курсом лабораторных работ и готовыми программами:
— <a title="byrakov.pdf" href="http://stud.ashcherbakov.ru/uploads/_pages/24/byrakov.pdf">byrakov.pdf</a>
— <a title="labswiprolog.pl_.7z" href="http://stud.ashcherbakov.ru/uploads/_pages/24/labswiprolog.pl_.7z">labswiprolog.pl_.7z</a>