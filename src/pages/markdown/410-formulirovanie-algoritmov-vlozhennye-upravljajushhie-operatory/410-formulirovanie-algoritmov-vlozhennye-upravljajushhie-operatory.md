---
path: "/page/410-formulirovanie-algoritmov-vlozhennye-upravljajushhie-operatory"
date: "2015-10-11 20:52:55"
title: "4.10 Формулирование алгоритмов: вложенные управляющие операторы"
---
_ Как программировать на C++ Дейтел, стр. 233
_ Хотя данный пример принципиально от примера 4.9 не отличается, к нему есть упражнение 4.20, где нас попросят модифицировать пример 4.10

[xcut]

_ Псевдокод
[spoiler=показать/скрыть]
_ Инициализировать нулём счётчик сдавших
_ Инициализировать нулём счётчик не сдавших
_ Инициализировать единицей счётчик студентов
_ 
_ Пока счётчик студентов меньше или равен десяти
_ 

_(pad10-l) Предложить пользователю ввести очередной результат экзамена

_(pad10-l) Ввести следующий результат экзамена

_ 
_(pad10-l) Если студент сдал экзамен

_(pad20-l) Прибавить единицу к счётчику сдавших

_(pad10-l) Иначе

_(pad20-l) Прибавить единицу к счётчику студентов
[/spoiler]

_  *Код:*
[spoiler=показать/скрыть]

_  *Интерфейс класса*
[pre lang=cplusplus]
//рис. 4.16: Analysis.h
// Определение класса Analysis, анализирующего результаты экзамена.
// Элемент-функции определяются в Analysis.cpp

class Analysis
{
	public:
	void processExamResults (); // обработать 10 студентов
}; // конец класса Analysis
[/pre]

_  *Реализация класса*
[pre lang=cplusplus]
// Рис 4.17
#include <iostream>
using std::cin;
using std::cout;
using std::endl;

// Включить определение класса Analysis из Analysis.h
#include "Analysis.h"

// Обработать экзаменационные результаты 10 студентов
void Analysis::processExamResults()
{
	// инициализация переменных при объявлении
	int passes = 0; // число сдавших
	int failures = 0; // число провалившихся
	int studentCounter = 1; // счётчик студентов
	int result; // один результат экзамена (1 = сдал, 2 = не сдал)

	//обработать 10 студентов, используя цикл по счётчику
	while (studentCounter <= 10)
	{
		// запросить у пользвателя и ввести значение
		cout << "Enter result (1 = pass, 2 = fail) : ";
		cin >> result; // ввести результат
		// if..else вложенный в while
		if( result == 1)
		{
			passes = passes +1;
		}
		else
		{
			failures = failures +1;
		}
		// увеличить studentCounter на 1, что-бы цикл мог закончиться
		studentCounter = studentCounter + 1;
	}//конец цикла while

	//Этап завершения; вывести число сдавших и не сдавших
	cout << "Сдавших: " << passes << "
Провалились " << failures << endl;
	// определить прошло ли более восьми студентов
	if ( passes > 8 )
		cout	<< "Повысить стоимость" << endl;
} // конец функции processExamResults
[/pre]

_  *Тестирование класса*
[pre lang=cplusplus]
// рис 4.18

#include  "Analysis.h"

int main()
{
	Analysis application;
	application.processExamResults();
	return 0;
}
[/pre]
[/spoiler]
_  *Код на codepad*: <a href="http://codepad.org/fC0abboS">codepad</a>
_  *Файлы исходного кода(в архиве):* 
ul
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/17/analysis.7z">Analysis.7z</a>
/ul
_  *ОС:* ArchLinux
_  *IDE:* Geany