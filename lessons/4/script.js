//                                                          tesks


//1
$('#btn1').click(function(){
    $('#block1').css({
        "background": "orange"
    })
})
//2
$('#css').click(function() {
    $('#block2').css({
        "border-radius": "50%"
    })
})

//3
$('#hide3').click(function() {
    $('#block3').hide(1000)
})
$('#show3').click(function() {
    $('#block3').show(1000)
})
$('#toggle3').click(function() {
    $('#block3').toggle(1000)
})

//4
$('#slide-up4').click(function(){
    $('#block4').slideUp()
})
$('#slide-down4').click(function(){
    $('#block4').slideDown()
})
$('#slide-toggle4').click(function(){
    $('#block4').slideToggle()
})

//5
$('#hide5').click(function(){
    $('#block5').hide()
})
$('#show5').click(function(){
    $('#block5').show()
})

//6
$('#toggle6').click(function() {
    $('#block6').toggle()
})

//7
$('#dblclick7').click(function() {
    $('#block7').css({
        "background": "orange"
    })
})


//                                                          test


//1 
// С помощью какого метода можно скрыть элемент?
hide()

//2
// Создайте опработчик события для элемента ниже, который при клике будет скрывать его
//      <div class="block"></div>
$('.block').click(function() {
    $(this).hide()
})

//3
// С помощью какого метода можно показать элемент?
show()

//4
// Создайте опработчик события для элемента ниже, который при клике будет показывать его
//      <div class="block"></div>
$('.block').click(function() {
    $(this).show()
})

//6
// Установите время анимации 4s
$(selector).show(4000);

//6
// Установите время анимации 5s
$(selector).hide(5000);


//7
// Создайте опработчик события для элемента ниже, который при клике будет скрывать его, а после выводить в alert() сообщение "Скрыто"
//      <div class="block"></div>
$('.block').click(function() {
    $(this).hide()
    alert('hiden')
})

//8
// Создайте опработчик события для элемента ниже, который при клике будет показывать его, а после выводить в alert() сообщение "Показано"
//      <div class="block"></div>
$('.block').click(function() {
    $(this).show()
    alert('shown')
})

//9
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeIn() затем письменно обьясните как он работает 
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeIn()
    //начинает медленно отображать $(this)
})

//10
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeOut() затем письменно обьясните как он работает 
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeOut()
    //начинает медленно скрывать $(this)
})

//11
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeToggle() затем письменно обьясните как он работает 
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeToggle()
    //начинает медленно отображать/скрывать $(this)
})

//12
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeTo() затем письменно обьясните как он работает 
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeTo()
    //начинает медленно настравивать прозрачность $(this)
})

//13
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeIn() затем задайте время анимации 3s
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeIn(3000)
})

//14
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeOut() затем задайте время анимации 6s
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeOut(6000)
})

//15
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeToggle() затем задайте время анимации 8s
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeToggle(8000)
})

//16
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeTo() затем задайте время анимации 10s
//      <div class="block"></div>
$('.block').click(function() {
    $(this).fadeTo(10000)
})