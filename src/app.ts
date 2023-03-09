import express, { NextFunction, Request, Response } from "express";
import { json } from "body-parser";
import todosRoutes from "./routes/todos";
const app = express();
app.use(json());

app.use("/todos", todosRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: err.message,
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
