export interface IUserData {
  name: string;
  email: string;
  password: string;
  role: string;
  token: string;
}

export interface IUserDataResponse {
  data: IUserData;
  statusCode: number;
  message: string;
}

export interface IStudentData {
  status: string;
  _id: number;
  name: string;
  email: string;
}
