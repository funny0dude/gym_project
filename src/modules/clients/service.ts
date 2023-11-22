import { Client } from "../database/entities/Client.entity";
import { ClientsRepo } from "./clients-repo";

export class ClientService {
  constructor(private readonly clientRepo: ClientsRepo) {}

  async getClientInfo(idClient: number) {
    const client = await this.clientRepo.getClient(idClient);
    if (!client) throw new Error("Клиент не найден!");
    return client;
  }

  async deleteClient(idClient: number) {
    const client = await this.clientRepo.getClient(idClient);
    if (!client) throw new Error("Клиент не найден!");
    await this.clientRepo.deleteClient(client);
  }

  async createClient(firstname: string, surname: string, patronymic: string, phone: string) {
    const client = new Client()
    client.firstname = firstname;
    client.surname = surname;
    client.patronymic = patronymic;
    client.phone = phone;
    await this.clientRepo.insertClient(client);
  }

  async updateClient(idClient: number, firstname: string, surname: string, patronymic: string, phone: string) {
    const client = await this.clientRepo.getClient(idClient);
    if (!client) throw new Error("Клиент не найден!");
    client.firstname = firstname;
    client.surname = surname;
    client.patronymic = patronymic;
    client.phone = phone;
    await this.clientRepo.updateClient(client);
  }
}