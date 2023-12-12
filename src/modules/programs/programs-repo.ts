import { DataSource } from "typeorm";
import { Program } from "../database/entities/Program.entity";

export class ProgramsRepo {
  constructor(private readonly connection: DataSource) {}

  async getProgram(idProgram: number) {
    const programs = await this.connection
      .createQueryBuilder(Program, "program")
      .where("program.id = :idProgram", { idProgram })
      .getOne();
    return programs;
  }

  async deleteProgram(program: Program) {
    // await this.connection.createQueryBuilder(Program, 'p').where('p.id = :idProgram', { idProgram }).delete()
    await this.connection.getRepository(Program).remove(program);
  }

  async insertProgram(program: Program) { 
    await this.connection.createEntityManager().save(program);
  }

  async updateProgram(program: Program) { 
    await this.connection.createEntityManager().save(program);
  }
}