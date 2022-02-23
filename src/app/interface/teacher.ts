export interface Teacher {
  status: string;
  _id: string;
  name: string;
  email: string;
}
export interface VerifyStudentData {
  _id: string;
  name: string;
  email: string;
  Result: Result[];
}

export interface Result {
  _id: string;
  rank: number;
  subjectName: string;
  score: number;
  studentId: string;
  resultStatus: string;
  __v: string;
}

export interface VerifyStudentDataResponse {
  data: VerifyStudentData[];
  statusCode: number;
  message: string;
}

export interface ViewExam {
  notes: string;
  _id: string;
  subjectName: string;
  email: string;
  _v: string;
}

export interface ViewExamResponse {
  data: ViewExam[];
  message: string;
  statusCode: number;
  notes: string;
}

export interface StudentData {
  name: string;
  email: string;
  password: string;
  _id: string;
}

export interface ShowStudentData {
  name: string;
  email: string;
  password: string;
  _id: string;
  status: string;
  role: Role;
}
export interface Role {
  teacher: string;
  student: string;
}

export interface ShowStudentDataResponse {
  count: number;
  data: ShowStudentData[];
  message: string;
  statusCode: number;
}

export interface ShowStudentProfile {
  name: string;
  email: string;
  password: string;
  _id: string;
  status: string;
}

export interface ShowStudentProfileResponse {
  data: ShowStudentProfile[];
  message: string;
  statusCode: number;
}

export interface Reset {
  email: string;
  value?: string;
}

export interface Questions {
  answer: string;
  options: string[];
  question: string;
  questions: string;
}

export interface ViewStudentExamResponse {
  data: Questions[];
  message: string;
  statusCode: number;
}
