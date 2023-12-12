import { Program } from "../database/entities/Program.entity";
import { ProgramsRepo } from "./programs-repo";

export class ProgramService {
  constructor(private readonly programRepo: ProgramsRepo) {}

  async getProgramInfo(idProgram: number) {
    const program = await this.programRepo.getProgram(idProgram);
    if (!program) throw new Error("Программа не найдена!");
    return program;
  }

  async deleteProgram(idProgram: number) {
    const program = await this.programRepo.getProgram(idProgram);
    if (!program) throw new Error("Программа не найдена!");
    await this.programRepo.deleteProgram(program);
  }

  async createProgram(title: string, room_code: string) {
    const program = new Program()
    program.title = title;
    program.room_code = room_code;
    await this.programRepo.insertProgram(program);
  }

  async updateProgram(idProgram: number, title: string, room_code: string) {
    const program = await this.programRepo.getProgram(idProgram);
    if (!program) throw new Error("Программа не найдена!");
    program.title = title;
    program.room_code = room_code;
    await this.programRepo.updateProgram(program);
  }
}