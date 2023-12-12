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

  async createClient(req: Request, res: Response) {
    const firstname = String(req.body.firstname);
    if (!firstname) {
      res.status(400).send({ message: "Не указано имя клиента!" });
      return;
    }
    const surname = String(req.body.surname);
    if (!surname) {
      res.status(400).send({ message: "Не указана фамилия клиента!" });
      return;
    }
    const patronymic = String(req.body.patronymic);
    if (!patronymic) {
      res.status(400).send({ message: "Не указано отчество клиента!" });
      return;
    }
    const phone = String(req.body.phone);
    if (!phone) {
      res.status(400).send({ message: "Не указан телефон клиента!" });
      return;
    }
    try {
    await this.clientsService.createClient(firstname, surname, patronymic, phone);
      res.status(200).end();
    } catch (error) {
      res.status(500).send({ message: `Внутренняя ошибка: ${error}` });
    }
  }

  async updateClient(req: Request, res: Response) {
    const idClient = Number(req.params.idClient);
    if (!idClient) {
      res.status(400).send({ message: "Не указан идентификатор клиента!" });
      return;
    }
    const firstname = String(req.body.firstname);
    if (!firstname) {
      res.status(400).send({ message: "Не указано имя клиента!" });
      return;
    }
    const surname = String(req.body.surname);
    if (!surname) {
      res.status(400).send({ message: "Не указана фамилия клиента!" });
      return;
    }
    const patronymic = String(req.body.patronymic);
    if (!patronymic) {
      res.status(400).send({ message: "Не указано отчество клиента!" });
      return;
    }
    const phone = String(req.body.phone);
    if (!phone) {
      res.status(400).send({ message: "Не указан телефон клиента!" });
      return;
    }
    try {
    await this.clientsService.updateClient(idClient, firstname, surname, patronymic, phone);
      res.status(200).end();
    } catch (error) {
      res.status(500).send({ message: `Внутренняя ошибка: ${error}` });
    }
  }
}