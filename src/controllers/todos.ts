import { RequestHandler } from "express";
import { Todo } from "../models/todo";
export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string })?.text;

  const newTodo: Todo = new Todo(text, String(Math.random() * 100));

  res.status(201).json({
    msg: "Todo created",
    todo: newTodo,
  });
};
