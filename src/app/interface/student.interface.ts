export interface IStudentExam {
  _id: string;
  notes: string;
  subjectName: string;
  email: string;
  Result: string;
}

export interface IStudentExamResponse {
  data: IStudentExam[];
  message: string;
  statusCode: number;
  userId: string;
}

export interface IStudentProfile {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface IStudentProfileResponse {
  data: IStudentProfile;
  message: string;
  statusCode: number;
}