import { Application, Router } from "express";
import { TypeormConnection } from "../database/TypeormConnection";
import { ClientsRepo } from "./clients-repo";
import { ClientService } from "./service";
import { ClientsController } from "./controller";

const clientRepo = new ClientsRepo(TypeormConnection);
const service = new ClientService(clientRepo);
const controller = new ClientsController(service);

export const ClientsRouter = Router();
ClientsRouter.get("/:idClient", controller.getClientInfo.bind(controller));
ClientsRouter.delete("/:idClient", controller.deleteClient.bind(controller));
//ClientsRouter.post("/:idClient", controller.insertClient.bind(controller));
//ClientsRouter.update("/:idClient", controller..bind(controller));