webpackJsonp([19387607675060],{537:function(n,e){n.exports={data:{markdownRemark:{html:'<pre><code>* Как программировать на C++ Дейтел, стр.221\n* В главе разбирается методика разработки алгоритма на псевдокоде путём нисходящего последовательно уточнения.\n</code></pre>\n<p>[xcut]</p>\n<pre><code>* Метод нисходящего последовательного уточнения, тезисы:\n</code></pre>\n<p>ul</p>\n<ul>\n<li>\n<p>Каждое уточнение, как и сам верхний уровень является полной спецификацией алгоритма, меняется только уровень детализации.</p>\n<ul>\n<li>Другими словами каждый уровень должен давать исчерпывающий ответ на то, что должно получиться в итоге работы алгоритма.</li>\n</ul>\n</li>\n<li>\n<p>Когда алгоритм на псевдокоде специфицирован со степенью детализации, достаточной для того, чтобы вы могли преобразовать его в программу на C++, завершите процесс нисходящего уточнения.\n/ul</p>\n<ul>\n<li><em>Псевдокод:</em>\n[spoiler=показать/спрятать]\nul</li>\n</ul>\n</li>\n<li>\n<p><em>Верхний уровень</em></p>\n<ul>\n<li>Определить среднюю по группе оценку за контрольную</li>\n</ul>\n</li>\n<li>\n<p><em>Первое уточнение</em></p>\n<ul>\n<li>Инициализировать переменные</li>\n<li>Ввести, просуммировать и подсчитать оценки за контрольную</li>\n<li>Вычислить и напечатать общую сумму оценок студентов и среднее по группе</li>\n</ul>\n</li>\n<li>\n<p><em>Второе уточнение</em></p>\n<ul>\n<li>[s]Инициализировать переменные[/s]</li>\n<li>Инициализировать нулём сумму</li>\n<li>Инициализировать нулём счётчик</li>\n<li>[s]Ввести, просуммировать и подсчитать оценки за контрольную[/s]</li>\n<li>Предложить пользователю ввести первую оценку</li>\n<li>Ввести первую оценку(возможно контрольное значение)</li>\n<li>Пока пользователь не ввел контрольное значение</li>\n</ul>\n<p>Прибавить данную оценку к текущей сумме</p>\n<p>Прибавить единицу к счётчику оценок</p>\n<p>Предложить пользователю ввести следующую оценку</p>\n<p>Ввести следующую оценку (возможно контрольное значение)</p>\n<ul>\n<li>[s]Вычислить и напечатать общую сумму оценок студентов и среднее по группе[/s]</li>\n<li>Если счётчик не равен нулю\nУстановить среднее равное сумме, поделённой на счётчик</li>\n</ul>\n</li>\n</ul>\n<p>  Напечатать сумму оценок всех студентов в группе</p>\n<p>  Напечатать среднее по группе</p>\n<pre><code>* Иначе\n</code></pre>\n<p>  Напечатать "Оценки не были введены"</p>\n<ul>\n<li>\n<p><em>Итоговый псевдокод</em></p>\n<ul>\n<li>Инициализировать нулём сумму</li>\n<li>Инициализировать нулём счётчик</li>\n</ul>\n</li>\n</ul>\n<pre><code>* Предложить пользователю ввести первую оценку\n* Ввести первую оценку(возможно контрольное значение)\n\n\n* Пока пользователь не ввел контрольное значение\n</code></pre>\n<p>   Прибавить данную оценку к текущей сумме</p>\n<p>   Прибавить единицу к счётчику оценок</p>\n<p>   Предложить пользователю ввести следующую оценку</p>\n<p>   Ввести следующую оценку (возможно контрольное значение)</p>\n<pre><code>* Если счётчик не равен нулю\n</code></pre>\n<p>  Установить среднее равное сумме, поделённой на счётчик</p>\n<p>  Напечатать сумму оценок всех студентов в группе</p>\n<p>  Напечатать среднее по группе</p>\n<pre><code>* Иначе\n</code></pre>\n<p>  Напечатать "Оценки не были введены"</p>\n<p>[/spoiler]\n*  <em>Заметки:</em>\n* </p>\n<pre><code>*  *Код:*\n</code></pre>\n<p>[spoiler=показать/спрятать]</p>\n<pre><code>*  *Интерфейс класса*\n</code></pre>\n<pre><code>// Определение класса GradeBook, усредняющего оценки в группе\n\n#include &#x3C;string>\nusing std::string;\n\nclass GradeBook\n{\n    public:\n    GradeBook( string ); // конструктор инициализирует название курса\n    void setCourseName ( string ); // функция установки названия курса\n    string getCourseName (); // функция для получения имени курса\n    void displayMessage(); // вывести привтственное сообщение\n    void determineClassAverage(); // усредняет введённые значения\n    private:\n    string courseName; // название курса для данного GradeBook\n}; //конец класса GradeBook \n</code></pre>\n<pre><code>*  *Реализация класса*\n</code></pre>\n<pre><code>// Определение элементов-функций класса gradeBook, реализующего программу вычисления среднего с повторением по счётчику.\n\n#include &#x3C;iostream>\nusing std::cout;\nusing std::cin;\nusing std::endl;\nusing std::fixed; // гарантирует вывод десятичной точки\n\n#include &#x3C;iomanip> //  параметризированные манипуляторы потока\nusing std::setprecision; // устанавливает точность вывода чисел\n\n#include "GradeBook.h"\n\n// Конструктор инициализирует courseName переданный строкой\nGradeBook::GradeBook(string name)\n{\n    setCourseName(name);\n}// Конец конструктора GradeBook\n\n// функция установки названия курса\nvoid GradeBook::setCourseName(string name)\n    {\n        if ( name.length() &#x3C;= 25 ) // если не более 25 символов\n        {\n            courseName = name; // сохранить название курса в объекте\n        }\n        else\n        {\n            courseName = name.substr( 0, 25 ); // сохранить н.к. в об. начать с 0, длина 25\n            cout &#x3C;&#x3C; "Имя "" &#x3C;&#x3C; name &#x3C;&#x3C; "" за пределами максимальной длины.\n"\n            &#x3C;&#x3C; "ограничение courseName - первые 25 символов\n" &#x3C;&#x3C; endl;\n        }\n    } // конец функции setCourseName\n\nstring GradeBook::getCourseName()\n{\n    return courseName;\n} // конец функции  getCourseName\n\nvoid GradeBook::displayMessage()\n{\n    cout &#x3C;&#x3C; "Добро пожаловть в классный журнал \n" &#x3C;&#x3C; getCourseName() &#x3C;&#x3C; "!" &#x3C;&#x3C; endl;\n}// конец функции displayMessage\n\n// определить среднее по группе, исходя из 10 введённых оценок\nvoid GradeBook::determineClassAverage()\n{\n    int total; // сумма оценок, введённых пользователем\n    int gradeCounter; // номер следующей вводимой оценки\n    int grade;\n    double average; // средняя оценка\n\n    // этап инициализации\n    total = 0;\n    gradeCounter = 0;\n\n    // этап обработки\n    // запросить ввод и прочитать введённую пользователем оценку\n    cout &#x3C;&#x3C; "Введите оценку от 1 до 100 или -1 для выхода: ";\n    cin >> grade; // ввести оценку или контрольное значение \n    while (grade != -1) // повторить 10 раз\n    {\n        total = total + grade; // прибавить оценку к total\n        gradeCounter = gradeCounter + 1; // увеличить счётчик на 1\n        cout &#x3C;&#x3C; "Введите оценку от 1 до 100 или -1 для выхода: ";\n        cin >> grade; // ввести оценку или контрольное значение \n    } // конец while\n\n    // этап завершения\n    if (gradeCounter != 0) //если введена хотя-бы одна оценка\n    {\n        // вычислить среднее по всем введённым оценкам\n        average = static_cast&#x3C; double >( total ) / gradeCounter; // явное приведение типа, при этом создаётся копия аргумента (total) и уже эта копия делится на целое тотал\n        \n        // вывести сумму и среднее значение оценок\n        cout &#x3C;&#x3C; "\nВ сумме: " &#x3C;&#x3C; total &#x3C;&#x3C; endl;\n        cout &#x3C;&#x3C; "Среднее значение:" &#x3C;&#x3C; setprecision( 2 ) &#x3C;&#x3C; fixed &#x3C;&#x3C; average &#x3C;&#x3C; endl;\n        /*\n         *setprecision - парметризированный\n         *манипулятор потока, требует #include\n         *округляет до заданного кол-ва знаков после\n         *запятой\n         *&#x3C;iomanip>, endl - непараметризированный\n         *манипулятор потока, iomanip не трубует.\n         *fixed - манипулятор потока, указывает, что значения с плавающей точкой\n         *должны выводиться в так называемом формате\n         *с фиксированной точкой, в\n         *противополоэность научной нотации\n         *стр.232\n        */\n        \n    }\n    else // ничего не введено, gradeCounter = 0\n    {\n        cout &#x3C;&#x3C; "Не введено никаких оценок" &#x3C;&#x3C; endl;\n    }\n} // конец функции determineClassAverage\n</code></pre>\n<pre><code>*  *Тестирование класса*\n</code></pre>\n<pre><code>// Тестирование GradeBook\n// Создать GradeBook и вызвать его функцию determineClassAverage\n#include "GradeBook.h"\nint main ()\n{\n    // создать объект myGradeBook класса GradeBook\n    // передать конструктору название курса\n    GradeBook myGradeBook ( "CS101 C++ Programming" );\n\n    myGradeBook.displayMessage(); // вывести приветствие\n    myGradeBook.determineClassAverage(); // найти среднее 10 оценок\n    return 0;\n} // конец main\n</code></pre>\n<p>[/spoiler]\n*  <em>Код на codepad</em>: <a href="http://codepad.org/hlvFLbxb">codepad</a>\n*  <em>Файлы исходного кода:</em>\nul</p>\n<ul>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/gradebook.cpp">GradeBook.cpp</a></li>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/gradebook.h">GradeBook.h</a></li>\n<li>\n<p><a href="http://stud.ashcherbakov.ru/uploads/_pages/16/main.cpp">main.cpp</a>\n/ul</p>\n<ul>\n<li><em>ОС:</em> ArchLinux</li>\n<li><em>IDE:</em> Geany</li>\n</ul>\n</li>\n</ul>',frontmatter:{date:"2015-10-03",path:"/page/49-formulirovanie-algoritmov-povtorenie-upravljaemoe-kontrolnym-znacheniem",title:"4.9 Формулирование алгоритмов: повторение, управляемое контрольным значением"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-49-formulirovanie-algoritmov-povtorenie-upravljaemoe-kontrolnym-znacheniem-4aae8590bd3c47794e29.js.map