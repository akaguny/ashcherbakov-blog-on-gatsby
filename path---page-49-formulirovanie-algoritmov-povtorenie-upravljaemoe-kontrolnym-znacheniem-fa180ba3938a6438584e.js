webpackJsonp([19387607675060],{336:function(n,e){n.exports={data:{markdownRemark:{html:'<p>_ Как программировать на C++ Дейтел, стр.221\n_ В главе разбирается методика разработки алгоритма на псевдокоде путём нисходящего последовательно уточнения.</p>\n<p>[xcut]</p>\n<p>_ Метод нисходящего последовательного уточнения, тезисы:\nul</p>\n<ul>\n<li>Каждое уточнение, как и сам верхний уровень является полной спецификацией алгоритма, меняется только уровень детализации.\n_ Другими словами каждый уровень должен давать исчерпывающий ответ на то, что должно получиться в итоге работы алгоритма.</li>\n<li>Когда алгоритм на псевдокоде специфицирован со степенью детализации, достаточной для того, чтобы вы могли преобразовать его в программу на C++, завершите процесс нисходящего уточнения.\n/ul\n_  <em>Псевдокод:</em>\n[spoiler=показать/спрятать]\nul</li>\n<li><em>Верхний уровень</em>\n_ Определить среднюю по группе оценку за контрольную</li>\n<li><em>Первое уточнение</em>\n_ Инициализировать переменные\n_ Ввести, просуммировать и подсчитать оценки за контрольную\n_ Вычислить и напечатать общую сумму оценок студентов и среднее по группе</li>\n<li><em>Второе уточнение</em>\n_ [s]Инициализировать переменные[/s]\n_ Инициализировать нулём сумму\n_ Инициализировать нулём счётчик\n_ [s]Ввести, просуммировать и подсчитать оценки за контрольную[/s]\n_ Предложить пользователю ввести первую оценку\n_ Ввести первую оценку(возможно контрольное значение)\n_ Пока пользователь не ввел контрольное значение</li>\n</ul>\n<p>_(pad10-l)  Прибавить данную оценку к текущей сумме</p>\n<p>_(pad10-l)  Прибавить единицу к счётчику оценок</p>\n<p>_(pad10-l)  Предложить пользователю ввести следующую оценку</p>\n<p>_(pad10-l)  Ввести следующую оценку (возможно контрольное значение)</p>\n<p>_ [s]Вычислить и напечатать общую сумму оценок студентов и среднее по группе[/s]\n_ Если счётчик не равен нулю\n_(pad10-l) Установить среднее равное сумме, поделённой на счётчик</p>\n<p>_(pad10-l) Напечатать сумму оценок всех студентов в группе</p>\n<p>_(pad10-l) Напечатать среднее по группе</p>\n<p>_ Иначе</p>\n<p>_(pad10-l) Напечатать "Оценки не были введены"</p>\n<ul>\n<li><em>Итоговый псевдокод</em>\n_ Инициализировать нулём сумму\n_ Инициализировать нулём счётчик</li>\n</ul>\n<p>_ Предложить пользователю ввести первую оценку\n_ Ввести первую оценку(возможно контрольное значение)</p>\n<p>_ Пока пользователь не ввел контрольное значение</p>\n<p>_(pad10-l)  Прибавить данную оценку к текущей сумме</p>\n<p>_(pad10-l)  Прибавить единицу к счётчику оценок</p>\n<p>_(pad10-l)  Предложить пользователю ввести следующую оценку</p>\n<p>_(pad10-l)  Ввести следующую оценку (возможно контрольное значение)</p>\n<p>_ Если счётчик не равен нулю</p>\n<p>_(pad10-l) Установить среднее равное сумме, поделённой на счётчик</p>\n<p>_(pad10-l) Напечатать сумму оценок всех студентов в группе</p>\n<p>_(pad10-l) Напечатать среднее по группе</p>\n<p>_ Иначе</p>\n<p>_(pad10-l) Напечатать "Оценки не были введены"</p>\n<p>/ul\n[/spoiler]\n_  <em>Заметки:</em>\n_ </p>\n<p>_  <em>Код:</em>\n[spoiler=показать/спрятать]</p>\n<p>_  <em>Интерфейс класса</em>\n[pre]\n// Определение класса GradeBook, усредняющего оценки в группе</p>\n<h1>include <string></h1>\n<p>using std::string;</p>\n<p>class GradeBook\n{\npublic:\nGradeBook( string ); // конструктор инициализирует название курса\nvoid setCourseName ( string ); // функция установки названия курса\nstring getCourseName (); // функция для получения имени курса\nvoid displayMessage(); // вывести привтственное сообщение\nvoid determineClassAverage(); // усредняет введённые значения\nprivate:\nstring courseName; // название курса для данного GradeBook\n}; //конец класса GradeBook\n[/pre]</p>\n<p>_  <em>Реализация класса</em>\n[pre]\n// Определение элементов-функций класса gradeBook, реализующего программу вычисления среднего с повторением по счётчику.</p>\n<h1>include <iostream></h1>\n<p>using std::cout;\nusing std::cin;\nusing std::endl;\nusing std::fixed; // гарантирует вывод десятичной точки</p>\n<h1>include <iomanip> //  параметризированные манипуляторы потока</h1>\n<p>using std::setprecision; // устанавливает точность вывода чисел</p>\n<h1>include "GradeBook.h"</h1>\n<p>// Конструктор инициализирует courseName переданный строкой\nGradeBook::GradeBook(string name)\n{\nsetCourseName(name);\n}// Конец конструктора GradeBook</p>\n<p>// функция установки названия курса\nvoid GradeBook::setCourseName(string name)\n{\nif ( name.length() &#x3C;= 25 ) // если не более 25 символов\n{\ncourseName = name; // сохранить название курса в объекте\n}\nelse\n{\ncourseName = name.substr( 0, 25 ); // сохранить н.к. в об. начать с 0, длина 25\ncout &#x3C;&#x3C; "Имя "" &#x3C;&#x3C; name &#x3C;&#x3C; "" за пределами максимальной длины.\n"\n&#x3C;&#x3C; "ограничение courseName - первые 25 символов\n" &#x3C;&#x3C; endl;\n}\n} // конец функции setCourseName</p>\n<p>string GradeBook::getCourseName()\n{\nreturn courseName;\n} // конец функции  getCourseName</p>\n<p>void GradeBook::displayMessage()\n{\ncout &#x3C;&#x3C; "Добро пожаловть в классный журнал\n" &#x3C;&#x3C; getCourseName() &#x3C;&#x3C; "!" &#x3C;&#x3C; endl;\n}// конец функции displayMessage</p>\n<p>// определить среднее по группе, исходя из 10 введённых оценок\nvoid GradeBook::determineClassAverage()\n{\nint total; // сумма оценок, введённых пользователем\nint gradeCounter; // номер следующей вводимой оценки\nint grade;\ndouble average; // средняя оценка</p>\n<pre><code>// этап инициализации\ntotal = 0;\ngradeCounter = 0;\n\n// этап обработки\n// запросить ввод и прочитать введённую пользователем оценку\ncout &#x3C;&#x3C; "Введите оценку от 1 до 100 или -1 для выхода: ";\ncin >> grade; // ввести оценку или контрольное значение \nwhile (grade != -1) // повторить 10 раз\n{\n    total = total + grade; // прибавить оценку к total\n    gradeCounter = gradeCounter + 1; // увеличить счётчик на 1\n    cout &#x3C;&#x3C; "Введите оценку от 1 до 100 или -1 для выхода: ";\n    cin >> grade; // ввести оценку или контрольное значение \n} // конец while\n\n// этап завершения\nif (gradeCounter != 0) //если введена хотя-бы одна оценка\n{\n    // вычислить среднее по всем введённым оценкам\n    average = static_cast&#x3C; double >( total ) / gradeCounter; // явное приведение типа, при этом создаётся копия аргумента (total) и уже эта копия делится на целое тотал\n    \n    // вывести сумму и среднее значение оценок\n    cout &#x3C;&#x3C; "\n</code></pre>\n<p>В сумме: " &#x3C;&#x3C; total &#x3C;&#x3C; endl;\ncout &#x3C;&#x3C; "Среднее значение:" &#x3C;&#x3C; setprecision( 2 ) &#x3C;&#x3C; fixed &#x3C;&#x3C; average &#x3C;&#x3C; endl;\n/*\n*setprecision - парметризированный\n*манипулятор потока, требует #include\n*округляет до заданного кол-ва знаков после\n*запятой\n*<iomanip>, endl - непараметризированный\n*манипулятор потока, iomanip не трубует.\n*fixed - манипулятор потока, указывает, что значения с плавающей точкой\n*должны выводиться в так называемом формате\n*с фиксированной точкой, в\n*противополоэность научной нотации\n*стр.232\n*/\n\n}\nelse // ничего не введено, gradeCounter = 0\n{\ncout &#x3C;&#x3C; "Не введено никаких оценок" &#x3C;&#x3C; endl;\n}\n} // конец функции determineClassAverage\n[/pre]</p>\n<p>_  <em>Тестирование класса</em>\n[pre]\n// Тестирование GradeBook\n// Создать GradeBook и вызвать его функцию determineClassAverage</p>\n<h1>include "GradeBook.h"</h1>\n<p>int main ()\n{\n// создать объект myGradeBook класса GradeBook\n// передать конструктору название курса\nGradeBook myGradeBook ( "CS101 C++ Programming" );</p>\n<pre><code>myGradeBook.displayMessage(); // вывести приветствие\nmyGradeBook.determineClassAverage(); // найти среднее 10 оценок\nreturn 0;\n</code></pre>\n<p>} // конец main\n<a href="">/pre</a>\n_  <em>Код на codepad</em>: <a href="http://codepad.org/hlvFLbxb">codepad</a>\n_  <em>Файлы исходного кода:</em>\nul</p>\n<ul>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/gradebook.cpp">GradeBook.cpp</a></li>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/gradebook.h">GradeBook.h</a></li>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/main.cpp">main.cpp</a>\n/ul\n_  <em>ОС:</em> ArchLinux\n_  <em>IDE:</em> Geany</li>\n</ul>',frontmatter:{date:"2015-10-03 20:52:12",path:"/page/49-formulirovanie-algoritmov-povtorenie-upravljaemoe-kontrolnym-znacheniem",title:"4.9 Формулирование алгоритмов: повторение, управляемое контрольным значением"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-49-formulirovanie-algoritmov-povtorenie-upravljaemoe-kontrolnym-znacheniem-fa180ba3938a6438584e.js.map