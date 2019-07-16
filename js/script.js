(function($){
    var Menu = {

    el: {
        ham: $('.menu__mob'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },
    
    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham
            .on(
            'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
        }
        );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
    };

    Menu.init();


    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.027929, 37.406064],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div>$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.027929, 37.406064], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/body/square.png',
            // Размеры метки.
            iconImageSize: [158, 48],
            iconImageOffset: [-100, -50],        
        });

        myMap.geoObjects.add(myPlacemark);
        });
            })(jQuery);