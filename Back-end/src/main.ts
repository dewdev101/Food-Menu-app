import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";
import cors from "cors"
const app: Application = express();
app.use(express.json());
app.use(cors());

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.listen(5000, () => {
  console.log("Server start on port 5000");
});
