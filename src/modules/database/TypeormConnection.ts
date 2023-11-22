import { DataSource } from "typeorm";
import { Client } from "./entities/Client.entity";
import { Programm } from "./entities/Programm.entity";
import { ClientProgramm } from "./entities/ClientProgramm.entity";

export const TypeormConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "0000",
  database: "fitness",
  synchronize: false,
  logging: true,
  entities: [Client, Programm, ClientProgramm],
});
