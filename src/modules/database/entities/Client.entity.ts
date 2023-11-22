import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientProgramm } from "./ClientProgramm.entity";

@Entity({ name: "public.clients" })
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @OneToMany(() => ClientProgramm, (clientProgramm) => clientProgramm.client)
  clientProgramms!: ClientProgramm[];
}
