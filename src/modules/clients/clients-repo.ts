import { DataSource } from "typeorm";
import { Client } from "../database/entities/Client.entity";

export class ClientsRepo {
  constructor(private readonly connection: DataSource) {}

  async getClient(idClient: number) {
    // SELECT * FROM clients WHERE clients.id = :idClient
    const clients = await this.connection
      .createQueryBuilder(Client, "client")
      // Тут client.id берется из database/Client.entity.ts
      .where("client.id = :idClient", { idClient })
      .getOne();
    return clients;
  }

  async deleteClient(client: Client) {
    // SELECT * FROM clients WHERE clients.id = :idClient
    await this.connection.getRepository(Client).remove(client);
  }

}
