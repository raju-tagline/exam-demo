export interface ITeacher {
  status: string;
  _id: string;
  name: string;
  email: string;
}
export interface IVerifyStudentData {
  _id: string;
  name: string;
  email: string;
  Result: IResult[];
}

export interface IResult {
  _id: string;
  rank: number;
  subjectName: string;
  score: number;
  studentId: string;
  resultStatus: string;
  __v: string;
}

export interface IVerifyStudentDataResponse {
  data: IVerifyStudentData[];
  statusCode: number;
  message: string;
}

export interface IViewExam {
  notes: string;
  _id: string;
  subjectName: string;
  email: string;
  _v: string;
}

export interface IViewExamResponse {
  data: IViewExam[];
  message: string;
  statusCode: number;
  notes: string;
}

export interface IStudentData {
  name: string;
  email: string;
  password: string;
  _id: string;
}

export interface IShowStudentData {
  name: string;
  email: string;
  password: string;
  _id: string;
  status: string;
  role: string;
}
export interface IRole {
  teacher: string;
  student: string;
}

export interface IStudentDataResponse {
  count: number;
  data: IShowStudentData[];
  message: string;
  statusCode: number;
}

export interface IShowStudentProfile {
  name: string;
  email: string;
  password: string;
  _id: string;
  status: string;
}

export interface IShowStudentProfileResponse {
  data: IShowStudentProfile[];
  message: string;
  statusCode: number;
}

export interface IResetPassword {
  email: string;
  value?: string;
}

export interface IResetPasswordResponse {
  email: string;
  value?: string;
  message: string;
}

export interface IQuestions {
  answer: string;
  options: string[];
  question: string;
  questions: string;
}

export interface IViewStudentExamResponse {
  data: IQuestions;
  message: string;
  statusCode: number;
}

export interface IDeleteExamPaper {}

export interface IDeleteExamPaperResponse {
  statusCode: number;
  message: string;
  data: IDeleteExamPaper;
}

export interface ICreateExamQuestions {
  question: string;
  answer: string;
  options: string[];
}

export interface ICreateExam {
  subjectName: string;
  questions: ICreateExamQuestions[];
  notes: string[];
}

export interface ICreateExamResponse {
  data: ICreateExam;
  message: string;
  statusCode: number;
}
