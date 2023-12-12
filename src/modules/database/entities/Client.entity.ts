import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientProgramm } from "./ClientProgram.entity";

@Entity({ name: "public.clients" })
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  surname!: string;

  @Column()
  patronymic!: string;

  @Column()
  phone!: string;

  @OneToMany(() => ClientProgramm, (clientProgramm) => clientProgramm.client)
  clientProgramms!: ClientProgramm[];
}
