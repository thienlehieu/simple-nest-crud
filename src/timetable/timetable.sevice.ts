import { Injectable } from '@nestjs/common';
import { Timetable } from './interfaces/timetable.interface';

@Injectable()
export class TimetableService {
  private timeTable: Timetable[] = [];

  create(data: Timetable): void {
    if (this.isStudentExisted(data.studentId)) {
      throw `this studentId ${data.studentId} is already existed`;
    }
    this.timeTable.push(data);
  }

  findAll(): Timetable[] {
    return this.timeTable;
  }

  findById(studentId: string): Timetable {
    if (!this.isStudentExisted(studentId)) {
      throw `this studentId ${studentId} is not existed`;
    }
    return this.timeTable.find(table => table.studentId === studentId);
  }

  update(data: Timetable): void {
    if (!this.isStudentExisted(data.studentId)) {
      throw `this studentId ${data.studentId} is not existed`;
    }
    this.timeTable = this.timeTable.filter(table => table.studentId !== data.studentId);
    this.timeTable.push(data);
  }

  delete(studentId: string): void {
    if (!this.isStudentExisted(studentId)) {
      throw `this studentId ${studentId} is not existed`;
    }
    this.timeTable = this.timeTable.filter(table => table.studentId !== studentId);
  }

  private isStudentExisted(studentId: string) {
    return this.timeTable.find(table => table.studentId === studentId) ? true : false;
  }
}