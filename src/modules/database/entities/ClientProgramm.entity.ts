import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";
import { Programm } from "./Programm.entity";

@Entity({ name: "public.clients_programms" })
export class ClientProgramm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  buy_date!: string;

  @ManyToOne(() => Client, (client) => client.clientProgramms)
  @JoinColumn({ name: "client_id" })
  client!: Client;

  @ManyToOne(() => Programm, (programm) => programm.clientProgramms)
  @JoinColumn({ name: "programm_id" })
  programm!: Programm;
}
