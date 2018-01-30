webpackJsonp([0xd7f3171de121],{359:function(p,e){p.exports={data:{markdownRemark:{html:'<p>обрезка страниц книги для удобного чтения не электронной книге с разрешением 1024х758 (для другого разрешения достаточно поменять 1024х758 на своё в коде в 3 строчках)</p>\n<p>[cut]</p>\n<p>[pre lang=js]#!/bin/bash</p>\n<h1>скрипт для преобразования PDF и DJVU файлов в формат для эклектронной книги 1024х758</h1>\n<h1>использование: скрипт документ -in<em>[pdf|djvu] -out</em>[pdf|djvu] -img<em>format</em>[png|jpg]</h1>\n<p>in<em>format=$2\nout</em>format=$3\nimg_format=$4</p>\n<p>if [ "$img<em>format" = "-img</em>format_png" ];\nthen\nimg<em>format=png\nelse\nimg</em>format=jpg\nfi</p>\n<p>mask="<em>.</em>"</p>\n<p>if [ "$in<em>format" = "-in</em>djvu" ];\nthen</p>\n<h1>если это DJVU то приобразовываем его в многостраничный TIFF</h1>\n<p>   ddjvu -format=tiff $1 1.tiff</p>\n<h1>режем получившийся TIFF в по страницам</h1>\n<p>   tiffsplit 1.tiff\nrm 1.tiff\nmask="x*.tif"\nelse</p>\n<h1>режем PDF по страницам</h1>\n<p>   pdftk $1 burst\nmask="pg_*.pdf"\nfi</p>\n<p>pages=""</p>\n<h1>обработать все страницы</h1>\n<p>for p in <code>ls -1 $mask</code>; do</p>\n<h1>конвертируем страничку в JPG и преобразуем в оттенки серого</h1>\n<p>   if [ "$in<em>format" = "-in</em>djvu" ];\nthen\nconvert -colorspace gray -normalize -contrast $p $p.${img<em>format}\nelse\nconvert -density 300 -colorspace gray -normalize -contrast $p $p.${img</em>format}\nfi</p>\n<p>   rm $p</p>\n<p>   p=${p}.${img_format}</p>\n<h1>обрезаем все поля автоматически</h1>\n<p>   convert -trim +repage $p $p</p>\n<h1>вырезаем верхнюю часть картинки</h1>\n<p>   convert -gravity North -crop 100%x35% +repage $p 1_$p</p>\n<h1>вырезаем вторую часть картинки</h1>\n<p>   convert -gravity Center -crop 100%x35% +repage $p 2_$p</p>\n<h1>вырезаем третью часть картинки</h1>\n<p>   convert -gravity South -crop 100%x35% +repage $p 3_$p</p>\n<p>   rm $p</p>\n<h1>меняем разрешение на 1024х758</h1>\n<p>   convert -scale 1024x758! 1<em>$p 1</em>$p\nconvert -scale 1024x758! 2<em>$p 2</em>$p\nconvert -scale 1024x758! 3<em>$p 3</em>$p</p>\n<h1>разворачиваем на 90 градусов</h1>\n<p>   convert -rotate 90 1<em>$p 1</em>$p\nconvert -rotate 90 2<em>$p 2</em>$p\nconvert -rotate 90 3<em>$p 3</em>$p</p>\n<h1>улучшаем качество картинки</h1>\n<p>   convert -sharpen 0.01 1<em>$p 1</em>$p\nconvert -sharpen 0.01 2<em>$p 2</em>$p\nconvert -sharpen 0.01 3<em>$p 3</em>$p</p>\n<h1>если выходной файл DJVU</h1>\n<p>   if [ "$out<em>format" = "-out</em>djvu" ];\nthen\n# конвертируем странички в djvu-формат\nc44 -dpi 150 1<em>$p 1</em>$p.djvu\nc44 -dpi 150 2<em>$p 2</em>$p.djvu\nc44 -dpi 150 3<em>$p 3</em>$p.djvu\n<br>\n# список страничек\npages=${pages}\' 1<em>\'${p}\'.djvu 2</em>\'${p}\'.djvu 3<em>\'${p}\'.djvu\'\nelse\nconvert -define pdf:use-trimbox=true -density 200 1</em>$p 1<em>$p.pdf\nconvert -define pdf:use-trimbox=true -density 200 2</em>$p 2<em>$p.pdf\nconvert -define pdf:use-trimbox=true -density 200 3</em>$p 3<em>$p.pdf\n<br>\n# список страничек\npages=${pages}\' 1</em>\'${p}\'.pdf 2<em>\'${p}\'.pdf 3</em>\'${p}\'.pdf\'\nfi</p>\n<pre><code>rm 1_$p 2_$p 3_$p\n</code></pre>\n<p>done</p>\n<h1>создаем выходной файл книжки</h1>\n<p>if [ "$out<em>format" = "-out</em>djvu" ];\nthen</p>\n<h1>собрать в единый DjVu</h1>\n<p>  djvm -c out.djvu $pages\nelse</p>\n<h1>собрать в единый PDF</h1>\n<p>  pdftk $pages cat output out.pdf\nfi</p>\n<p>rm $pages\n[/pre]\n_ Запуск:\n_ Открываем консоль в папке со скриптом и файлом, который необходимо подрезать.\n_ Пишем [pre lang=js]./bookkrop.sh Ytug.pdf[/pre]\n_ Если наш файл Ytug.pdf\n_ Источник скрипта: <a href="http://geektimes.ru/post/130308/">http://geektimes.ru/post/130308/</a>\n_ Также я использую Master Pdf Editor - выбираю сколько обрезать и он просто режет все страницы по заданным отступам.</p>',frontmatter:{date:"2015-11-21 13:08:46",path:"/page/pyton-skript-dlja-narezki-knigi-na-udobnochitaemye-chasti-iz-1-stranicy",title:"Pyton скрипт оптимизации книги для чтения на e-ink"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-pyton-skript-dlja-narezki-knigi-na-udobnochitaemye-chasti-iz-1-stranicy-400e464c17c0ecd8078c.js.map