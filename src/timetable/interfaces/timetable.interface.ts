export interface Timetable {
  studentId: string;
  details: Semester[];
}

export interface Semester {
  semesterId: string;
  subjects: SubjectDetails[];
}

export interface SubjectDetails {
  subjectId: string;
  subjectName: string;
  credit: number;
  classNumber: string;
  location: string;
}