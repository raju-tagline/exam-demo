export interface StudentExam {
  _id: string;
  notes: string;
  subjectName: string;
  email: string;
  Result: string;
}

export interface StudentExamResponse{
  data:StudentExam[];
  message:string;
  statusCode:number;
  userId:string;
}

export interface StudentProfile {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface StudentProfileResponse {
  data:StudentProfile;
  message:string;
  statusCode:number;
}
