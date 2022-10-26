export class TimetableDto {
  studentId: string;
  details: Semester[];
}

export class Semester {
  semesterId: string;
  subjects: SubjectDetails[];
}

export class SubjectDetails {
  subjectId: string;
  subjectName: string;
  credit: number;
  classNumber: string;
  location: string;
}