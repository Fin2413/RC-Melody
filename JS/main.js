$(document).ready(function() {
    var currentFloor = 2; //переменная, где храниться текущий этаж
    var counterUp = $(".counter-up"); //Кнопка увеличения этажа
    var counterDown = $(".counter-down"); //кнопка уменьшения этажа
    var floorPath = $(".home-img path"); //каждый отдельный этаж в SVG
    var modal = $(".modal"); //Переменная открытия окна при нажатии на этаж
    var modalCloseButton = $(".modal-close-button"); // Переменная закрытия окна
    var currentFlats = 1;
    var flatsPath = $(".flats path"); //каждая отдельная квартирв в SVG
    var flatsPathItem = $(".flat-item a"); //Характериски квартиры
    var viewFlatsButton = $(".view-flats"); //Переменная для открытия окна по кнопке

    //Функция при навидении мышкой на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); //получаем значение текущего этажа
        $(".counter").text(currentFloor); //Записываем значения этажа в счетчик справа
    });

    //Функция при навидении мышкой на квартиру
    flatsPath.on('mouseover', function() {
        currentFlats = $(this).attr("data-flats"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })

    flatsPathItem.on('mouseover', function() {
        currentFlats = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })

    floorPath.on("click", toggleModal); //При клике на этаж вызвать окно

    modalCloseButton.on("click", toggleModal); //При клике закрыть окно

    viewFlatsButton.on("click", toggleModal);

    //Функция отслеживания клика по кнопке вврех
    counterUp.on("click", function() {
        if (currentFloor < 18) { //Проверка значения этажа, не должно быть больше 18
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //Форматирование переменной с этажом что бы было 01, а не 1
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж
        }
    });


    //Функция отслеживания клика по кнопке вниз
    counterDown.on("click", function() {
        if (currentFloor > 2) { //Проверка значения этажа, не должно быть меньше 2
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //Форматирование переменной с этажом что бы было 01, а не 1
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж
        }
    });

    function toggleModal() { //Функция открытия и закрытия окна
        modal.toggleClass("is-open");
    }
});