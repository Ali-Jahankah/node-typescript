"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const createTodo = (req, res) => {
    var _a;
    const text = (_a = req.body) === null || _a === void 0 ? void 0 : _a.text;
    const newTodo = new todo_1.Todo(text, String(Math.random() * 100));
    res.status(201).json({
        msg: "Todo created",
        todo: newTodo,
    });
};
exports.createTodo = createTodo;
