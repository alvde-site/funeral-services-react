# Frontend для API проекта Funeral-services с системой авторизации администратора. Работа с базой клиентов в личном кабинете, которые оставили заявку (удаление, редактирование данных).
Репозиторий для frontend проекта `Funeral-services`.
Работа Демиденко Александра.

## ССылки
* [Ссылка на выложенную на сервер работающую фронтенд часть приложения: https://alvdediploma.nomoredomains.xyz/](https://alvdediploma.nomoredomains.xyz/)
* [Ссылка на api: https://api.alvdediploma.nomoredomains.xyz](https://api.alvdediploma.nomoredomains.xyz)



Технологии используемые в проекте:
* Flexbox, Grid
* Верстка по БЭМ(Nested)
* Адаптивная верстка
* Figma
* JS
* popup
* Валидация формы
* ООП
* JS Классы
* webpack
* React, useState, useEffect, useHistory


### Breakpoints in project:
* 1200px
* 992px
* 768px
* 575px
* 320px

Инструкция по развертыванию:
* Клонировать проект: git clone git@github.com:alvde-site/funeral-services-react.git
* Перейти в корневую директорию и установить зависимости: npm install
* Запустить frontend часть приложения на 3000 порту: npm run start
* Для работы приложения нужно так же клонировать backend: git clone git@github.com:alvde-site/funeral-services-api.git
* Перейти в корневую директорию и установить зависимости: npm install
* Запустить backend часть приложения на 3001 порту: npm run dev
* Так как доступ к личному кабинете может получить только администратор, для безопасности не предусмотрена регистрация в интефейсе фронтенда. Что бы зарегестировать нового пользователя нужно через Postman, отправить запрос POSt запрос с body:  {"email": "ваш email", "password": "Ваш пароль"}на  http://https://api.alvdediploma.nomoredomains.xyz/signup
* Для использования личного кабинет, нужно войти в личный кабинет по ссылке "Войти в footer" и заполнить форму авторизации используя email и password, которые были созданы при регистрации.
* Добавление новых клиентов происходит оправкой формы отправки Заказа на главной странице.
* Фотографии и шаблон соглашения для демонстрационных целей загружаются из внешних сторонних источников. Поэтому не использовалось их сжатие.

