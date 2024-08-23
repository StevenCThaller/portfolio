import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { port, onListen } from "./config/app.config";
import router from "./routes";
import { validationErrorHandler } from "./middleware/errors.middleware";
import mongoose from "mongoose";
import path from "path";
import {
  db_url,
  onDbConnectionFail,
  onDbConnectionSuccess,
} from "./config/db.config";

mongoose.connect(db_url).then(onDbConnectionSuccess).catch(onDbConnectionFail);

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
  });
}

app.use(validationErrorHandler);

app.listen(port, onListen);

export default app;
