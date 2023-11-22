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
}
