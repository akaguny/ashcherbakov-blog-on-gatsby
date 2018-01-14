---
path: "/page/bash-vhosts-xampp-linux"
date: "2016-06-13"
title: "Bash vhosts XAMPP linux"
---
Скрипт создаёт символичесткую ссылку из папки пользователя к папке /opt/lampp/htdocs, что позволяет работать с папкой, принадлежашей пользователю, а не root. Помимо этого скрипт добавляет виртуальный хост для XAMPP. Список изменяемых файлов находится в шапке. Откат изменений только ручной, бэкап изменяемых файлов не предусмотрен.

[cut]

Todo:
ul
* бэкап файлов
* запись в определённую секцию hosts
* удаление виртуальных хостов
/ul

<script src="https://gist.github.com/akaguny/f111e33f546af1516e36f70ffcce0f60.js"></script>
Скрипт для windows XAMPP: [url=https://gist.github.com/dflynn15/e4743e6d7ce360cd3fa6]dflynn15/xampp.sh[/url]