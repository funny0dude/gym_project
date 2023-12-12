import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";
import { Program } from "./Program.entity";

@Entity({ name: "public.clients_programms" })
export class ClientProgramm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  buy_date!: string;

  @ManyToOne(() => Client, (client) => client.clientPrograms)
  @JoinColumn({ name: "client_id" })
  client!: Client;

  @ManyToOne(() => Program, (program) => program.clientPrograms)
  @JoinColumn({ name: "programm_id" })
  programm!: Program;
}
