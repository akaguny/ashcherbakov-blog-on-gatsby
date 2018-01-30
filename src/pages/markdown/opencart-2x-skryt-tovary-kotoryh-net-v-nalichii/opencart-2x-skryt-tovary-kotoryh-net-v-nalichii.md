---
path: "/page/opencart-2x-skryt-tovary-kotoryh-net-v-nalichii"
date: "2016-06-19"
title: "Opencart 2.x скрыть товары, которых нет в наличии"
---
Если товара нет в наличии, то он не отображается в отображении сеткой/списком в категории.
Решение не элегантное, при обновлении придётся повторять все действия.

Ограничения:
  Решение будет работоспособно только в случае стандартного вывода товаров категории(с помощью шаблона /template/product/category.tpl);
  При обновлении движка/темы решение перестанет работать.
  Внимание: создайте резервные копии изменяемых файлов, используйте нормальные текстовые редакторы, н-р notepad++.


* в файле контроллера `/catalog/controller/product/category.php`
    * перед `$data['products'][] = array(`
добавить
```
if ($result['quantity']<=0) {
 $in_stock = false;
} else {
 $in_stock = true;
}
```
    * после
`'href' => $this->url->link('product/product', 'path=' . $this->request->get['path'] . '&product_id=' . $result['product_id'] /*. $url*/),`
добавить
`'in_stock' => $in_stock`
* в файле шаблона `/catalog/view/theme/***/template/product/category.tmpl`
где `***` - название вашего шаблона 
    * после `&lt;?php foreach ($products as $product) { ?&gt;`
добавить
`&lt;?php if($product['in_stock']){?&gt;`
    * после закрытия `&lt;?php foreach ($products as $product) { ?&gt;` **код отображения одной(каждой) карточки товара** `&lt;?php } ?&gt;` добавить ещё одно `&lt;?php } ?&gt;`
    * Обязательно проверить что закрываются необходимые скобки. Открывающая скобка `{,` закрывающая `}`