
describe('Тесты для https://login.qa.studio/', function() {

    it('Позитивный кейс авторизации', function() {
        cy.visit('https://login.qa.studio/');        // переход на сайт
        cy.get('#mail').type('german@dolnikov.ru');  // ввод email
        cy.get('#pass').type('iLoveqastudio1');      // ввод пароля
        cy.get('#loginButton').click();              // нажатие кнопки авторизации
        cy.contains('Авторизация прошла успешно');   // поиск текста на странице
        cy.get('#exitMessageButton > .exitIcon');    // проверка наличия крестика
        cy.clearAllCookies();                        // очистка куки
    })

    it('Проверка логики восстановления пароля', function() {
        cy.visit('https://login.qa.studio/');               // переход на сайт
        cy.get('#forgotEmailButton').click();               // нажатие кнопки восстановления пароля
        cy.get('#mailForgot').type('some@email.ru');        // ввод email
        cy.get('#restoreEmailButton').click();              // нажатие кнопки отправления кода
        cy.contains('Успешно отправили пароль на e-mail');  // поиск текста на странице
        cy.get('#exitMessageButton > .exitIcon');           // проверка наличия крестика
        cy.clearAllCookies();                               // очистка куки
    })

    it('Негативный кейс авторизации. Неправильный пароль', function() {
        cy.visit('https://login.qa.studio/');          // переход на сайт
        cy.get('#mail').type('german@dolnikov.ru');    // ввод email 
        cy.get('#pass').type('iLoveqastudio');         // ввод пароля
        cy.get('#loginButton').click();                // нажатие кнопки авторизации
        cy.contains('Такого логина или пароля нет');   // поиск текста на странице
        cy.get('#exitMessageButton > .exitIcon');      // проверка наличия крестика
        cy.clearAllCookies();                          // очистка куки
    })

    it('Негативный кейс авторизации. Неправильный логин', function() {
        cy.visit('https://login.qa.studio/');          // переход на сайт
        cy.get('#mail').type('some@email.ru');         // ввод email 
        cy.get('#pass').type('iLoveqastudio1');        // ввод пароля
        cy.get('#loginButton').click();                // нажатие кнопки авторизации
        cy.contains('Такого логина или пароля нет');   // поиск текста на странице
        cy.get('#exitMessageButton > .exitIcon');      // проверка наличия крестика
        cy.clearAllCookies();                          // очистка куки
    })

    it('Негативный кейс валидации. Логин без "@"', function() {
        cy.visit('https://login.qa.studio/');               // переход на сайт
        cy.get('#mail').type('germandolnikov.ru');          // ввод email
        cy.get('#pass').type('iLoveqastudio1');             // ввод пароля
        cy.get('#loginButton').click();                     // нажатие кнопки авторизации
        cy.contains('Нужно исправить проблему валидации');  // поиск текста на странице
        cy.clearAllCookies();                               // очистка куки
    })

    it('Проверка приведения к строчным буквам значения логина', function() {
        cy.visit('https://login.qa.studio/');        // переход на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');  // ввод email
        cy.get('#pass').type('iLoveqastudio1');      // ввод пароля
        cy.get('#loginButton').click();              // нажатие кнопки авторизации
        cy.contains('Авторизация прошла успешно');   // поиск текста на странице
        cy.get('#exitMessageButton > .exitIcon');    // проверка наличия крестика
        cy.clearAllCookies();                        // очистка куки
    })
})