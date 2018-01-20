---
path: "/page/311-modifikacija-klassa-gradebook"
date: "2015-09-30"
title: "3.11 Модификация класса GradeBook"
---
стр.194

[cut]

—  *Задание:*
— a) Введите второй элемент данных string, представляющий имя преподавателя, 
ведущего курс. 
— b) Предусмотрите в классе set-функцию для изменения имени преподавателя 
и get-функцию для его извлечения. 
— c) Модифицируйте конструктор, чтобы он специфицировал два параметра: один 
для названия курса и второй — для имени преподавателя. 
— d) Модифицируйте элемент-функцию displayMessage так, чтобы она сначала 
выводила приветствие и название курса, а затем «This course is presented by: » 
и имя преподавателя.
—  *Рекомендации:*
— Выполняйте модификацию в том порядке, в котором это предложено в задании.
—  *Код:*
[spoiler=Показать]
—  *Интерфейс класса*

```
// Рис. 3.15 GradeBook.h
// Определение класса GradeBook представляет собой открытый интерфейс
// класса. Определение элемент-функции находится в GradeBook.cpp
#include <string> // программа использует стандартный класс string
using std::string;

// определение класа GradeBook
class GradeBook
{
public:
	GradeBook ( string name1, string name2 ); // конструктор, инициализирующий courseName
	void setCourseName (string name1); // установает courseName
	string getCourseName(); // получает название курса
	void setTeacherName (string name2); // устанавливает им преподавателя
	string getTeacherName(); // получает имя преподавателя
	void displayMessage(); // выводит сообщение приветствия
	private:
		string courseName; //  название курса для данного GradeBook
		string teacherName; //  название курса для данного GradeBook
};	//конец класса GradeBook

```
—  *Реализация класса*

```
// Рис. 3.16 GradeBook.cpp
// Реализация элемент-функции GradeBook
// Фунция setCourseName производит подтверждение данных.
#include <iostream>
using std::cout;
using std::endl;

#include "GradeBook.h" // включить определение класса GradeBook

// конструктор инициализирует courseName переданный строкой
GradeBook::GradeBook (string name1, string name2)
{
	setCourseName(name1); // инициализировать вызовом set-функции
	setTeacherName(name2); // инициализировать вызовом set-функции
} // конец конструктора GradeBook

// Функция, устанавливающая название курса
// гарантирует, что название курса в пределах 25 символов
void GradeBook::setCourseName(string name)
	{
		if ( name.length() <= 25 ) // если не более 25 символов
		{
			courseName = name; // сохранить название курса в объекте
		}
		if ( name.length() > 25 ) // если больше 25
		{
			courseName = name.substr( 0, 25 ); // сохранить н.к. в об. начать с 0, длина 25
			cout << "Имя "" << name << "" за пределами максимальной длины.
"
			<< "ограничение courseName - первые 25 символов
" << endl;
		}
	} // конец функции setCourseName

// функция, получающая название курса
string GradeBook::getCourseName()
	{
		return courseName; // возвратить courseName объекта
	}
// этот оператор вызывает getCourseName, что-бы получить название курса, представленного данным GradeBook

// Функция, устанавливающая имя преподавателя
void GradeBook::setTeacherName(string name)
	{
		teacherName = name; // сохранить название курса в объекте
	} // конец функции setTeacherName

// функция, получающая имя преподавателя
string GradeBook::getTeacherName()
	{
		return teacherName; // возвратить teacherName
	} // конец фунцкии getTeacherName

void GradeBook::displayMessage()
	{
		cout << "Добро пожаловть в классный журнал 
" << getCourseName() << "..." << endl;
		cout << "Курс ведёт: 
" << getTeacherName() << "
" << endl;
	}// конец функции displayMessage
```
—  *Тестирование класса*

```
// Рис. 3.10: fig03_10.cpp
// Включение класса GradeBook из GrradeBook.h в главную программу
#include <iostream>
using std::cout;
using std::endl;

#include "GradeBook.h" // включить определение класса GradeBook


// фукнция main начинает исполнение программы
int main ()
	{
	// создать два объекта GradeBook
	GradeBook gradeBook1 ("CS101 Введение в программирование на C++", "Иванов");
	GradeBook gradeBook2 ("CS102 структура данных в C++", "Титов");
	// вывести исходное значение courseName для каждого GradeBook
	cout << "Сейчас есть 2 журнала:
gradeBook1 созданная для: " << gradeBook1.getCourseName() << "
" << "gradebook2 созданная для: " << gradeBook2.getCourseName() << endl;
	gradeBook1.displayMessage() ;
	gradeBook2.displayMessage() ;
	return 0;
	}// конец main

```
[/spoiler]
—  *Код на codepad*: http://codepad.org/HqfPrP6B
—  *Файлы исходного кода:* 
ul
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/13/GradeBook.cpp">GradeBook.cpp</a>
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/13/GradeBook.h">GradeBook.h</a>
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/13/fig03_13.cpp">fig03_13.cpp</a>
/ul
—  *ОС:* ArchLinux
—  *IDE:* Geany