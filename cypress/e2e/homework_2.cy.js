describe('Тест для https://huntingpony.com/', function() {

    it('Позитивный кейс авторизации', function() {
        // переход на сайт
        cy.visit('https://huntingpony.com/');
        // ожидание 2 секунды
        cy.wait(2000);
        // переход в раздел Лежанки        
        cy.get('[href="/collection/lezhanki"] > .banner-list__item-photo > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        // выбор лежанки "Пони-Колосони" Бежевая
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        // ожидание 2 секунды
        cy.wait(2000);
        // добавление товара в корзину
        cy.get('.add-cart-counter__btn').click();
        // ожидание 2 секунды
        cy.wait(2000);
        // добавление товара до количества 2 шт.
        cy.get('[data-add-cart-counter-plus=""]').click();
        // переход в корзину
        cy.get('.header__cart > .icon').click();
        // переход в оформление заказа
        cy.get('.cart-controls > .button').click();
        // проверка наличия текста в оформлении заказа
        cy.contains('Оформление заказа');
        // очистка куки
        cy.clearAllCookies();
    })

    
})