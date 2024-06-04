import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import logger from './logger'; // Предполагаем, что logger.ts находится в src
import fs from 'fs';
import path from 'path';

const app = express();

// Логирование запросов
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use((_req: Request, res: Response, _next: NextFunction) => {
    // Пример использования переменной res
    console.log('Request received');
    res.send('Hello, World!'); // Отправляем ответ клиенту
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    // Обработка ошибок
    logger.error(err.stack || err.message);
    res.status(500).send('Something went wrong');
});

// Обработка необработанных исключений
process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    process.exit(1); // Обязательно завершаем процесс после необработанного исключения
});

// Обработка необработанных отклоненных промисов
process.on('unhandledRejection', (reason) => {
    logger.error('Unhandled Rejection:', reason);
    process.exit(1); // Обязательно завершаем процесс после необработанного отклонения
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//throw new Error('Oops!'); // Исключение для проверки uncaughtException
// Promise.reject(new Error('Oops!')); // Исключение для проверки unhandledRejection
