import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import {
  currentUserRouter,
  signInRouter,
  signOutRouter,
  signUpRouter,
} from "./routes";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";

const app = express();
app.use(json());

app.use(currentUserRouter, signInRouter, signOutRouter, signUpRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startDb = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

startDb();
