//1
// С помощью каких методов мы можем получить контент в Jquery?
//  get set

//2
// Для чего нужен метод .text()
// чтобы действовать с текстом внутри элемента

//3
// Для чего нужен метод .html()
// чтобы действовать с тегами внутри элемента

//4
// Для чего нужен метод .val()
//  чтобы действовать с текстом внутри незакрывающихся элементов

//5
// Получите контент из элемента ниже c помощью .text()
//<div class="text">Some text</div>
console.log($("div").text())

//6
// Получите контент из элемента ниже c помощью .html()
//<div class="text">Some text</div>
console.log(div.html())

//7
// Получите контент из элемента ниже c помощью .val()
// <input type="text" class="text">
console.log(input.val())

//8
// Поместите текст "New Text" в тег ниже с помощью .text() 
//<div class="text">Some text</div>
div.text("new text")

//9
// Поместите текст "New Text" в тег ниже с помощью .html() 
//<div class="text">Some text</div>
div.html("new text")

//10
// Поместите текст "New Text" в тег ниже с помощью .val()
// <input type="text" class="text">
input.val("new text")

//11
// Для чего нужен метод .attr()
//  чтобы добавлять/менять атрибуты элементу

//12
// Установите атрибут title="text" для элемента ниже
//<a href="#">Link</a>
a.attr({
    title: "text"
})

//13
// Установите атрибут title="text" для элемента ниже
//<a href="#">Link</a>
a.attr("title", "text")


//14
// Измените атрибут title="text" на title="title" для элемента ниже
//<a href="#" title="text">Link</a>
a.title = "text"

//15
// Установите атрибуты title="text" и class="text" для элемента ниже с помощью одного метода .attr()
//<a href="#">Link</a>
a.attr({
    title: "text",
    class: "text"
})

//16
// Добавьте первый тег div ниже внутрь в конец второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>
parent.append("<div class='child'></div>")

//17
// Добавьте первый тег div ниже внутрь в начало второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>
parent.prepend("<div class='child'></div>")

//18
// Добавьте первый тег div ниже до второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>
body.prepend("<div class='child'></div>")

//19
// Добавьте первый тег div ниже после второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>
body.append("<div class='child'></div>")

//20
// Удалите элемент ниже
//<div class="child"></div>
$("document").remove($(".child"))

//21
// Очистите элемент ниже
//<div class="child"></div>
$(".child").clear()