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

export interface IStudentExamPaper {
  options: string;
  question: string;
  _id: string;
}

export interface IStudentExamPaperResponse {
  data: IStudentExamPaper[];
  message: string;
  statusCode: number;
}

export interface IEditStudent {
  email: string;
  id: string;
  name: string;
}

export interface IEditStudentResponse {
  data: IEditStudent;
  message: string;
  statusCode: number;
}

export interface IUserId{
  name?:string | null
}

export interface IChangeUserPassword{
  name: string;
  email: string; 
  id: string;
}

export interface IChangeUserPasswordResponse {
  statusCode: number;
  message: string;
  data: IChangeUserPassword
}

export interface IuserPassword {
  oldPassword: string;
  Password: string;
  ConfirmPassword:string;
}
