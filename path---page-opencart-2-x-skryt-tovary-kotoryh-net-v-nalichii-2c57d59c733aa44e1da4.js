webpackJsonp([64551099194070],{550:function(n,e){n.exports={data:{markdownRemark:{html:'<p>Если товара нет в наличии, то он не отображается в отображении сеткой/списком в категории.\nРешение не элегантное, при обновлении придётся повторять все действия.\n[xcut]\nОграничения:\nРешение будет работоспособно только в случае стандартного вывода товаров категории(с помощью шаблона /template/product/category.tpl);\nПри обновлении движка/темы решение перестанет работать.\nВнимание: создайте резервные копии изменяемых файлов, используйте нормальные текстовые редакторы, н-р notepad++.</p>\n<p>[hr]</p>\n<ol>\n<li>\n<p>в файле контроллера </p>\n<pre><code>1.1 перед \n</code></pre>\n<p>добавить</p>\n</li>\n</ol>\n<pre><code>&#x3C;=0) {\n $in_stock = false;\n} else {\n $in_stock = true;\n}\n</code></pre>\n<p>1.2 после</p>\n<pre><code>добавить\n</code></pre>\n<ol start="2">\n<li>\n<p>в файле шаблона </p>\n<pre><code>где *** - название вашего шаблона \n2.1 после\n</code></pre>\n</li>\n</ol>\n<pre><code>добавить\n</code></pre>\n<p>2.2 после закрытия </p>\n<pre><code> 3. Обязательно проверить что закрываются необходимые скобки. Открывающая скобка {, закрывающая }\n</code></pre>',frontmatter:{date:"2016-06-19",path:"/page/opencart-2x-skryt-tovary-kotoryh-net-v-nalichii",title:"Opencart 2.x скрыть товары, которых нет в наличии"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-opencart-2-x-skryt-tovary-kotoryh-net-v-nalichii-2c57d59c733aa44e1da4.js.map