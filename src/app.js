"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(function (_req, res, _next) {
    // Пример использования переменной res
    console.log('Request received');
    res.send('Hello, World!'); // Отправляем ответ клиенту
});
app.use(function (err, _req, res, _next) {
    // Обработка ошибок
    console.error(err);
    res.status(500).send('Something went wrong');
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
