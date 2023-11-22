import { Request, Response } from "express";
import { ClientService } from "./service";

export class ClientsController {
  constructor(private readonly clientsService: ClientService) {}

  async getClientInfo(req: Request, res: Response) {
    const idClient = Number(req.params.idClient);
    if (!idClient) {
      res.status(400).send({ message: "Не указан идентификатор клиента!" });
      return;
    }
    try {
      const client = await this.clientsService.getClientInfo(idClient);
    res.status(200).send({
      firstname: client.firstname,
    });
    } catch (error) {
      res.status(500).send({ message: `Внутренняя ошибка: ${error}` });
    }
    
  }
  async deleteClient(req: Request, res: Response) {
    const idClient = Number(req.params.idClient);
    if (!idClient) {
      res.status(400).send({ message: "Не указан идентификатор клиента!" });
      return;
    }
    try {
    await this.clientsService.deleteClient(idClient);
      res.status(200).end();
    } catch (error) {
      res.status(500).send({ message: `Внутренняя ошибка: ${error}` });
    }
  }
}
