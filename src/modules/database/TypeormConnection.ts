import { DataSource } from "typeorm";
import { Client } from "./entities/Client.entity";
import { Program } from "./entities/Program.entity";
import { ClientProgramm } from "./entities/ClientProgram.entity";

export const TypeormConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "0000",
  database: "fitness",
  synchronize: false,
  logging: true,
  entities: [Client, Program, ClientProgramm],
});
