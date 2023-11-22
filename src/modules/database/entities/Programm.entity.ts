import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientProgramm } from "./ClientProgramm.entity";

@Entity({ name: "public.programms" })
export class Programm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  room_code!: string;

  @OneToMany(() => ClientProgramm, (clientProgramm) => clientProgramm.programm)
  clientProgramms!: ClientProgramm[];
}
