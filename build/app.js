import express from 'express';
const app = express();
app.use((_req, res, _next) => {
    // Пример использования переменной res
    console.log('Request received');
    res.send('Hello, World!'); // Отправляем ответ клиенту
});
app.use((err, _req, res, _next) => {
    // Обработка ошибок
    console.error(err);
    res.status(500).send('Something went wrong');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=app.js.map