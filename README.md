# _Прокси для отключения CORS_

## _Использовать только при разработке_

## quick start:

1. Склонировать репозиторий:

```sh
git clone git@github.com:vladislav149/proxy-disabling-cors.git
```

2. Перейти в директорию склонированного репозитория и запустить установку зависимостей:

```sh
npm i
```

3. Создать файл с названием ".env" в корне проекта и указать в нём переменные окружения.
   Пример можно посмотреть в файле .env.example

```sh
API_SERVICE_URL = 'тут указать url api к которому вы пытаетесь получить доступ'
API_SERVICE_PORT = 'указать любой свободны порт на вашей системе'
```

4. Запустить прокси сервер командой

```sh
npm run start
```

5. В консоли вы увидите надпись, будет отличаться только порт, на тот который вы указали в файле ".env"

```sh
Starting Proxy Server at http://localhost:1234
```

Вы прекрасны ✨Используйте этот адрес для подключения к api

### Если есть вопросы, welcome to [My telegram](https://t.me/Vlad_Okenchits)
