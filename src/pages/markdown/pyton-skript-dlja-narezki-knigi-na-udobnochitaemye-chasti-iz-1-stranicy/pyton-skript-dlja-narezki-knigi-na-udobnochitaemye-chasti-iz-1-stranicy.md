---
path: "/page/pyton-skript-dlja-narezki-knigi-na-udobnochitaemye-chasti-iz-1-stranicy"
date: "2015-11-21 13:08:46"
title: "Pyton скрипт оптимизации книги для чтения на e-ink"
---
обрезка страниц книги для удобного чтения не электронной книге с разрешением 1024х758 (для другого разрешения достаточно поменять 1024х758 на своё в коде в 3 строчках)

[cut]

[pre lang=js]#!/bin/bash
# скрипт для преобразования PDF и DJVU файлов в формат для эклектронной книги 1024х758

# использование: скрипт документ -in_[pdf|djvu] -out_[pdf|djvu] -img_format_[png|jpg]
in_format=$2
out_format=$3
img_format=$4

if [ "$img_format" = "-img_format_png" ];
then
  img_format=png
else
  img_format=jpg
fi

mask="*.*"

if [ "$in_format" = "-in_djvu" ];
then
   # если это DJVU то приобразовываем его в многостраничный TIFF
   ddjvu -format=tiff $1 1.tiff
   # режем получившийся TIFF в по страницам
   tiffsplit 1.tiff
   rm 1.tiff
   mask="x*.tif"
else
   # режем PDF по страницам
   pdftk $1 burst
   mask="pg_*.pdf"
fi

pages=""

# обработать все страницы
for p in `ls -1 $mask`; do

   # конвертируем страничку в JPG и преобразуем в оттенки серого
   if [ "$in_format" = "-in_djvu" ];
   then
      convert -colorspace gray -normalize -contrast $p $p.${img_format}
   else
      convert -density 300 -colorspace gray -normalize -contrast $p $p.${img_format}
   fi

   rm $p

   p=${p}.${img_format}

   # обрезаем все поля автоматически
   convert -trim +repage $p $p
   
   # вырезаем верхнюю часть картинки
   convert -gravity North -crop 100%x35% +repage $p 1_$p
   # вырезаем вторую часть картинки
   convert -gravity Center -crop 100%x35% +repage $p 2_$p
   # вырезаем третью часть картинки
   convert -gravity South -crop 100%x35% +repage $p 3_$p

   rm $p
   
   # меняем разрешение на 1024х758
   convert -scale 1024x758! 1_$p 1_$p
   convert -scale 1024x758! 2_$p 2_$p
   convert -scale 1024x758! 3_$p 3_$p
   
   # разворачиваем на 90 градусов
   convert -rotate 90 1_$p 1_$p
   convert -rotate 90 2_$p 2_$p
   convert -rotate 90 3_$p 3_$p
   
   # улучшаем качество картинки
   convert -sharpen 0.01 1_$p 1_$p
   convert -sharpen 0.01 2_$p 2_$p
   convert -sharpen 0.01 3_$p 3_$p
   
   # если выходной файл DJVU
   if [ "$out_format" = "-out_djvu" ];
   then
      # конвертируем странички в djvu-формат
      c44 -dpi 150 1_$p 1_$p.djvu
      c44 -dpi 150 2_$p 2_$p.djvu
      c44 -dpi 150 3_$p 3_$p.djvu
	  
      # список страничек
      pages=${pages}' 1_'${p}'.djvu 2_'${p}'.djvu 3_'${p}'.djvu'
    else
      convert -define pdf:use-trimbox=true -density 200 1_$p 1_$p.pdf
      convert -define pdf:use-trimbox=true -density 200 2_$p 2_$p.pdf
      convert -define pdf:use-trimbox=true -density 200 3_$p 3_$p.pdf
      
      # список страничек
      pages=${pages}' 1_'${p}'.pdf 2_'${p}'.pdf 3_'${p}'.pdf'
    fi

    rm 1_$p 2_$p 3_$p
done

# создаем выходной файл книжки
if [ "$out_format" = "-out_djvu" ];
then
  # собрать в единый DjVu
  djvm -c out.djvu $pages
else
  # собрать в единый PDF
  pdftk $pages cat output out.pdf
fi

rm $pages
[/pre]
_ Запуск:
_ Открываем консоль в папке со скриптом и файлом, который необходимо подрезать.
_ Пишем [pre lang=js]./bookkrop.sh Ytug.pdf[/pre]
_ Если наш файл Ytug.pdf
_ Источник скрипта: http://geektimes.ru/post/130308/
_ Также я использую Master Pdf Editor - выбираю сколько обрезать и он просто режет все страницы по заданным отступам.