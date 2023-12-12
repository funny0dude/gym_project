import { Client } from "../database/entities/Client.entity";
import { ClientsRepo } from "./clients-repo";

export class ClientService {
  constructor(private readonly subscriptionRepo: ClientsRepo) {}

  async getClientInfo(idClient: number) {
    const client = await this.clientsRepo.getClient(idClient);
    if (!client) throw new Error("Клиент не найден!");
    return client;
  }

  async deleteClient(idClient: number) {
    const client = await this.clientsRepo.getClient(idClient);
    if (!client) throw new Error("Абонимент не найден!");
    await this.clientsRepo.deleteClient(client);
  }

  async createClient(firstname: string, surname: string, patronymic: string, phone: string) {
    const client = new Client()
    client.firstname = firstname;
    client.surname = surname;
    client.patronymic = patronymic;
    client.phone = phone;
    await this.clientsRepo.insertClient(client);
  }

  async updateClient(idClient: number, firstname: string, surname: string, patronymic: string, phone: string) {
    const client = await this.clientsRepo.getClient(idClient);
    if (!client) throw new Error("Абонимент не найден!");
    client.firstname = firstname;
    client.surname = surname;
    client.patronymic = patronymic;
    client.phone = phone;
    await this.subscriptionRepo.updateClient(client);
  }
}