# Restork

## Перед началом установки

* Рекомендуемая версия Node.js - 14.19.1
* Рекомендуемая версия npm - 6.14.16
* Зарегистрировать аккаунт в облачном хранилище [Selectel](https://selectel.ru/)
* Зарегистрировать аккаунт у СМС провайдера [Stream Telecom](https://stream-telecom.ru/)
* База данных MySQL

## Клонирование
```
git clone https://github.com/ilya-soloveyv/restork.git
```

## Настройка
* Скопировать файл ```.env.example``` и переименовать его в ```.env```
* Заменить в файле ```.env``` значения переменных на ваши
* Создать папку ```./static/upload``` и дать ей полные права

## Установка
> Установка пакетов
```
npm install
```
> Создание базы данных, накатывание миграций и заполнение тестовыми данными
```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

## Запуск
```
npm run dev
```

## Билд
```
npm run build
npm run start
```
