"use strict";
import express from "express";
import logger from "../logger"; // Предполагаем, что logger.ts находится в src

const app = express();

// Логирование запросов
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Middleware для регистрации входящих запросов и статуса ответа
app.use((req, res, next) => {
    const requestData = {
        url: req.originalUrl,
        method: req.method,
        query: req.query,
        body: req.body
    };
    res.on('finish', () => {
        logger.info('Incoming Request:', requestData);
        logger.info('Response Status:', res.statusCode);
    });
    next();
});

// Middleware для регистрации необработанных ошибок и возврата стандартного сообщения 500
app.use((err, req, res, next) => {
    logger.error('Error occurred:', err);
    res.status(500).send('Internal Server Error');
});


// Обработка отклоненных промисов
process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Обязательно завершаем процесс после отклоненного промиса
});

// Обработка необработанных исключений
process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    console.error('Error occurred during uncaught exception handling:', err);
    process.exit(1); // Обязательно завершаем процесс после необработанного исключения
});

// Запуск сервера
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

