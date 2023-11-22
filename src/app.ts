import "dotenv/config";
import "reflect-metadata";
import express, { Router } from "express";
import { ClientsRouter } from "./modules/clients/router";
import { TypeormConnection } from "./modules/database/TypeormConnection";

export const app = express();
const subrouter = Router();

TypeormConnection.initialize();

subrouter.use("/clients", ClientsRouter);

app.use("/api", subrouter);

app.listen(8765);
