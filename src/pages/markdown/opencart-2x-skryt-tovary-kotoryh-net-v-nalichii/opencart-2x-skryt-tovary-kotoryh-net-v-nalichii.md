---
path: "/page/opencart-2x-skryt-tovary-kotoryh-net-v-nalichii"
date: "2016-06-19"
title: "Opencart 2.x скрыть товары, которых нет в наличии"
---
Если товара нет в наличии, то он не отображается в отображении сеткой/списком в категории.
Решение не элегантное, при обновлении придётся повторять все действия.
[xcut]
Ограничения:
Решение будет работоспособно только в случае стандартного вывода товаров категории(с помощью шаблона /template/product/category.tpl);
При обновлении движка/темы решение перестанет работать.
Внимание: создайте резервные копии изменяемых файлов, используйте нормальные текстовые редакторы, н-р notepad++.

[hr]

1. в файле контроллера [pre]/catalog/controller/product/category.php[/pre]
1.1 перед [pre lang=php]$data['products'][] = array([/pre]
добавить
[pre lang=php]if     ($result['quantity']<=0) {
 $in_stock = false;
} else {
 $in_stock = true;
}[/pre]
1.2 после
[pre lang=php]'href' => $this->url->link('product/product', 'path=' . $this->request->get['path'] . '&product_id=' . $result['product_id'] /*. $url*/),[/pre]
добавить
[pre lang=php]'in_stock' => $in_stock[/pre]
2. в файле шаблона [pre]/catalog/view/theme/***/template/product/category.tmpl[/pre]
где *** - название вашего шаблона 
 2.1 после
[pre lang=php]&lt;?php foreach ($products as $product) { ?&gt;[/pre]
добавить
[pre lang=php]&lt;?php if($product['in_stock']){?&gt;[/pre]
2.2 после закрытия [pre lang=php]&lt;?php foreach ($products as $product) { ?&gt;[/pre] **код отображения одной(каждой) карточки товара** [pre lang=php]&lt;?php } ?&gt;[/pre] добавить ещё одно [pre lang=html]&lt;?php } ?&gt;[/pre] 3. Обязательно проверить что закрываются необходимые скобки. Открывающая скобка {, закрывающая }