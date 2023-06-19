//                                                          test


//1
//Что такое событие?
//  методы в jQuery

//2
//Перечисли ниже общие события из Jquery
//  click ready mousedown mouseup hover mouseenter mouseleave

//3
//Назнать для тега ниже событие клика 
//<p class="btn">Click me</p>
$('$btn').click(() => {
    console.log('#btn clicked')
})

//4
//Назнать для тега ниже событие клика которое выводит в консоли сообщение "Click"
//<p id="btn">Click me</p>
$('$btn').click(() => {
    console.log('click')
})

//5
//Для чего нужен метод ниже?
$(document).ready();
//  чтобы запустить функцию при загрузке сайта

//6
//Для чего предназначен метод ниже?
$("p").hide();
//   скрыть

//7
//Для чего предназначен метод ниже?
$("p").show();
//   показать

//8
//Для чего предназначен метод ниже опиши его работу?
$(".block").dblclick(() => {
    $("#block").hide();
});
//  при двойном нажатии на элемент в КЛАСОМ block элемент с АЙДИ block скроется

//9
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseenter(() => {
    $("#block").hide();
});
//  когда мышка будет на элементе в КЛАСОМ block элемент с АЙДИ block скроется

//10
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseleave(() => {
    alert("Please enter email...")
});
//  когда мышка уйдет с элемента с КЛАСОМ block придет сообщение "Please enter email..."

//11
//Для чего предназначен метод ниже опиши его работу?
$(".block").mousedown(() => {
    alert("Please enter tel...")
});
//  пока мышка будет зажата на элементе в КЛАСОМ block придет сообщение "Please enter tel..."

//12
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseup(() => {
    alert("Please enter password...")
});
//  когда мышка перестанет быть зажата на элементе в КЛАСОМ block придет сообщение "Please enter password..."

//13
//Для чего предназначен метод ниже опиши его работу?
$(".block").hover(() => {
    alert("Please enter address...")
});
//  когда мышка будет на элементе с класом block то придет сообщение "Please enter address..."

//14
//Для чего предназначен метод ниже опиши его работу?
$(".block").focus(() => {
    alert("Please enter birthday...")
});
//  во время фокусировки на элементы с класом block придет сообщение "Please enter birthday..."

//15
//Для чего предназначен метод ниже опиши его работу?
$(".block").blur(() => {
    alert("Please enter name...")
});
//  во время того как элемент с класом block теряет фокусировку  придет сообщение "Please enter name..."

//16
//Обьедини все события ниже с помощью on?
$(".block").blur(() => {
    alert("Please enter name...")
});

$(".block").focus(() => {
    alert("Please enter birthday...")
});

$(".block").mouseup(() => {
    alert("Please enter password...")
});

$('.block').on({
    focus: () => {
        alert("Please enter name...")
    },
    blur: () => {
        alert("Please enter birthday...")
    },
    mouseup: () => {
        alert("Please enter password...")
    }
})
//                                                          tesks


//1
$('.div11').click(function() {
    $(this).css({"background": "red"})
})

//2
$('#div2').hover(() => {
    $(this).css({"background": "green"})
},
() => {
    $(this).css({"background": "yellow"})
})

//3
$('#hide').click(() => {
    $('#div3').hide()
})
$('#show').click(() => {
    $('#div3').show()
})

//4
$('#div4').on({
    mousedown: () => {
        $(this).css({
            "background": "green"
        })
    },
    mouseup: () => {
        $(this).css({
            "background": "red"
        })
    }
})

//5
$('#slide-up').click(() => {
    $('#div5').slideUp()
})
$('#slide-down').click(() => {
    $('#div5').slideDown()
})