---
path: "/page/vizualnyj-redaktor-latex-generacija-v-png"
date: "2015-09-20"
title: "Визуальный редактор LaTex, генерация в png"
---
_ Визуальный(wysiwyg) онлайн редактор LaTex, генерирует изображение в формате .png, изображение необходтимо скачать н-р используя правую кнопку мыши на изображении формулы => сохранить
_ Пример:

[image=http://stud.ashcherbakov.ru/uploads/_pages/1/mini/snimok-ekrana_2015-07-14_19-09-53.png snimok-ekrana_2015-07-14_19-09-53.png]http://stud.ashcherbakov.ru/uploads/_pages/1/snimok-ekrana_2015-07-14_19-09-53.png[/image]

_ Генератор взят от сюда: [url=http://www.codecogs.com/latex/quick-install.php]latex[/url]
[cut]
<link rel="stylesheet" type="text/css"
  href="http://latex.codecogs.com/css/equation-embed.css" />
<!--[if lte IE 7]>
<link rel="stylesheet" href="http://latex.codecogs.com/css/ie6.css" type="text/css"/>
<![endif]-->
<script type="text/javascript" 
  src="http://latex.codecogs.com/js/eq_config.js" ></script>
<script type="text/javascript" 
  src="http://latex.codecogs.com/js/eq_editor-lite-18.js" ></script>


<div id="editor"></div>
<textarea id="testbox" rows="3" cols="40"></textarea>
<img id="equation" />

<script type="text/javascript">
EqEditor.embed('editor','','mini','ru-ru');

var a=new EqTextArea('equation', 'testbox');
EqEditor.add(a,false);
</script>
