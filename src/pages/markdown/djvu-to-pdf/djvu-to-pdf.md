---
path: "/page/djvu-to-pdf"
date: "2016-05-14"
title: "djvu to pdf"
---
Bash скрипт для конвертации djvu в pdf с относительным качеством, используя djvulibre-bin ([i]apt-get install djvulibre-bin[/i])
[cut]
[pre]
#!/bin/bash
# convert DjVu -> PDF
# usage:  djvu2pdf.sh  <file.djvu>
i="$1"
echo "------------ converting $i to PDF ----------------";
o="`basename $i .djvu`"
o="$o".pdf
echo "[ writing output to $o ] "
cmd="ddjvu -format=pdf -quality=85 -verbose $i $o "
$cmd
[/pre]
[show Модифицированный]
[pre]
#!/bin/bash
# convert DjVu -> PDF
# usage:  djvu2pdf.sh [-q quality | -b] <infile.djvu> [outfile.pdf]

mode='color'
quality=80

aparse() {
  while [ $# != 0 ] ; do
    case "$1" in
    -q|--quality)
      quality=${2}
      shift
      ;;
    -b|--black)
      mode='black'
      ;;
  esac
  shift
done
}
aparse "$@"

i="$1"
o=${2:-$(basename $i .djvu).pdf}
if [ -f  "$o" ]; then 
  echo "file $o exists, override [Y/n]?"
  read ans
  case "$ans" in 
   n|N) exit 1;;
  esac
fi
echo "[ converting $i to $o ] "

cmd="ddjvu -format=pdf -quality=$quality -mode=$mode -verbose $i $o "

echo "[ executing $cmd ] "
$cmd
[/pre][/show]
[url=http://superuser.com/questions/100572/how-do-i-convert-a-djvu-document-to-pdf-in-linux-using-only-command-line-tools]Источник[/url]