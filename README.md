# films
react-redux SPA

## How to Install:
To install and launch project run theese commands in console:
```
yarn assemble
yarn start:http-server
```
That should start App in your browser, anyway you could check it on localhost:7000
To start webpack dev-server without assembing project run:
```
yarn start:dev-server
```

If you need just to build the app (without running a dev server), simply run:
```
yarn assemble:release
```
or
```
yarn assemble
```
to build in debug mode.

### Note
note that first of all you have to launch [nodeJS API](https://github.com/pustovitDmytro/films-api)

## Boilerplate

To read more about webpack.config and project-structure check docs of used [boilerplate](https://github.com/pustovitDmytro/react). Also boilarplate docs includes instructions *How to change default ports in all modes*.

But be careful and **note** that version of boilerpate, used in [films](https://github.com/pustovitDmytro/films) will be less than in [boilerplate](https://github.com/pustovitDmytro/react). 

## Task

Необходимо реализовать веб-приложение для хранения информации о фильмах.

Вместе с реализацией требуется предоставить документ объясняющий архитектуру приложения и содержащий инструкцию по запуску приложения.

Информация о фильме:
1. Уникальный идентификатор
2. Название фильма
3. Год выпуска
4. Формат (VHS, DVD, Blu-Ray)
5. Список актеров (“Имя и фамилия актера”)

Функции, которые должна поддерживать система:
1. Добавить фильм
2. Удалить фильм
3. Показать информацию о фильме
4. Показать список фильмов отсортированных по названию в алфавитном порядке	
5. Найти фильм по названию.
6. Найти фильм по имени актера.
7. Импорт фильмов с текстового файла (пример файла прилагается “sample_movies.txt”). Файл должен загружаться через веб-интерфейс.

В первую очередь, важно чтобы была реализована вся функциональность с точки зрения пользователя. 

Задание необходимо реализовать, как одностраничное приложение и REST API к нему.

Одностраничное приложение необходимо написать используя ReactJS.

Сервер, который будет предоставлять REST API, должен быть написан на nodejs, данные должны сохранятся между перезапусками сервера, для хранения данных можно использовать любой механизм, это может быть MongoDB, MySQL или просто файлы.

При желании можно использовать ES6, Webpack, Flux/Redux, это даже будет плюсом.


К приложению желательно написать автоматизированные функциональные тесты, рекомендуется использовать mocha, chai (и дополнительные фреймворки по необходимости). Тесты должны запускаться командой “npm test”

Если Вы претендуете на позицию React Native разработчика, то вместо одностраничного приложения на ReactJs, можете реализовать мобильное приложение под Android на React Native. Это не обязательное требование, но это будет плюсом. 
