$('.append').click(function(e) {
    e.stopPropagation()
    $('.container1').append('<div id="child" style="height: 50px; width: 50px; background: red;"></div>')
})
$('.prepend').click(function(e) {
    e.stopPropagation()
    $('.container1').prepend('<div id="child" style="height: 50px; width: 50px; background: blue;"></div>')
})
$('.after').click(function(e){
    e.stopPropagation()
    $('.container1').after('<div id="child" style="height: 50px; width: 50px; background: red;"></div>')
})
$('.before').click(function(e){
    e.stopPropagation()
    $('.container1').before('<div id="child" style="height: 50px; width: 50px; background: blue;"></div>')
})
$('body').click(function(e){
    e.stopPropagation()
    $('.container1').slideToggle()
})

//                                                          test

//1
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideDown()
})

//2
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideUp()
})

//3
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideToggle()
})

//4
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button и установите время анимации на 4s
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideDown(4000)
})

//5
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button и установите время анимации на 5s
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideUP(5000)
})

//6
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button и установите время анимации на 6s
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideToggle(6000)
})

//7
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вверх"
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideUp(5000).alert("up")
})

//8
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вниз"
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideDown(5000).alert("down")
})

//9
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Движение"
// <div class="slide"></div>
// <button class="btn"></button>

$('.btn').click(function() {
    $('.slide').slideToggle(5000).alert("moving")
})

//10
// Создайте эффект движения в лево для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>

$(".btn").click(function() {
    $(".slide").animate({
        marginRight: "50px"
    }, "fast")
})

//11
// Создайте эффект увеличения высоты и ширины для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>

$(".btn").click(function() {
    $(".slide").animate({
        height: "+150px"
    }, "fast")
})

//12
// Для чего используется метод .stop()?

//  дл] остановки анимации

//13
// Какие 2 параметра принимает в себя .stop() метод?
//  остановить все, идти в конец

//14
// Для чего мы используем метод .css({})?
//  чтобы изменить css параметры

//15
// Является ли скрипт ниже ошибочным?
$("#p1").css("color", "red").slideUp(2000).slideDown(2000)

//  нет, все правильно