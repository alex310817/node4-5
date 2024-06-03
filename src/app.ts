import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use((_req: Request, res: Response, _next: NextFunction) => {
    // Пример использования переменной res
    console.log('Request received');
    res.send('Hello, World!'); // Отправляем ответ клиенту
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    // Обработка ошибок
    console.error(err);
    res.status(500).send('Something went wrong');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

