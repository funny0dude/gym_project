import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientProgram } from "./ClientProgram.entity";

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

  @OneToMany(() => ClientProgram, (clientProgram) => clientProgram.client)
  clientProgramms!: ClientProgram[];
}
