---
path: "/page/matlab-subplot"
date: "2016-01-10 13:13:16"
title: "Matlab subplot"
---
Шпаргалка по стандартной функции subplot для отображения нескольких графиков в 1 окне(figure)
_ [image=http://stud.ashcherbakov.ru/uploads/_pages/32/mini/subplot.png subplot.png]http://stud.ashcherbakov.ru/uploads/_pages/32/subplot.png[/image]
_ subplot(a,b,c); a - количество строк, b - столбцов, c - текущая позиция, subplot заполняется построчно, слева на право.
[cut]
_ Код, в котором использована функция
[pre]
% ex4 max и min
unionAB = max(A,B); % объединение
subplot(2,2,3);
plot(x,unionAB);
title('unionAB');
intersecAB = min(A,B); % пересечение
subplot(2,2,4);
plot(x,intersecAB);
title('intersecAB')
[/pre]
_ Результат:
_ [image=http://stud.ashcherbakov.ru/uploads/_pages/32/mini/ex4img1.jpg ex4img1.jpg]http://stud.ashcherbakov.ru/uploads/_pages/32/ex4img1.jpg[/image]
_ Версия matlab 2012b(рекомендую именно её из соображений производительность/удобство)