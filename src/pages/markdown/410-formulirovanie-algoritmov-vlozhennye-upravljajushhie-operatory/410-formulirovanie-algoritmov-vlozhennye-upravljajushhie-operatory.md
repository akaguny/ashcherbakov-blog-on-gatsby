---
path: "/page/410-formulirovanie-algoritmov-vlozhennye-upravljajushhie-operatory"
date: "2015-10-11"
title: "4.10 Формулирование алгоритмов: вложенные управляющие операторы"
---
— Как программировать на C++ Дейтел, стр. 233
— Хотя данный пример принципиально от примера 4.9 не отличается, к нему есть упражнение 4.20, где нас попросят модифицировать пример 4.10

[xcut]

— Псевдокод
[spoiler=показать/скрыть]
— Инициализировать нулём счётчик сдавших
— Инициализировать нулём счётчик не сдавших
— Инициализировать единицей счётчик студентов
— 
— Пока счётчик студентов меньше или равен десяти
— 

  Предложить пользователю ввести очередной результат экзамена

  Ввести следующий результат экзамена

— 
  Если студент сдал экзамен

        * Прибавить единицу к счётчику сдавших

  Иначе

        * Прибавить единицу к счётчику студентов
[/spoiler]

—  *Код:*
[spoiler=показать/скрыть]

—  *Интерфейс класса*

```
//рис. 4.16: Analysis.h
// Определение класса Analysis, анализирующего результаты экзамена.
// Элемент-функции определяются в Analysis.cpp

class Analysis
{
	public:
	void processExamResults (); // обработать 10 студентов
}; // конец класса Analysis

```

—  *Реализация класса*

```
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

```

—  *Тестирование класса*

```
// рис 4.18

#include  "Analysis.h"

int main()
{
	Analysis application;
	application.processExamResults();
	return 0;
}

```
[/spoiler]
—  *Код на codepad*: <a href="http://codepad.org/fC0abboS">codepad</a>
—  *Файлы исходного кода(в архиве):* 
ul
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/17/analysis.7z">Analysis.7z</a>
/ul
—  *ОС:* ArchLinux
—  *IDE:* Geany