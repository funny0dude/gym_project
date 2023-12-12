import { Application, Router } from "express";
import { TypeormConnection } from "../database/TypeormConnection";
import { ProgramsRepo } from "./programs-repo";
import { ProgramService } from "./service";
import { ProgramController } from "./controller";

const ProgramRepo = new ProgramsRepo(TypeormConnection);
const service = new ProgramService(ProgramRepo);
const controller = new ProgramController(service);

export const ProgramsRouter = Router();
ProgramsRouter.get("/:idProgram", controller.getProgramInfo.bind(controller));
ProgramsRouter.delete("/:idProgram", controller.deleteProgram.bind(controller));
ProgramsRouter.post("/:idProgram", controller.createProgram.bind(controller));
ProgramsRouter.put("/:idProgram", controller.updateProgram.bind(controller));