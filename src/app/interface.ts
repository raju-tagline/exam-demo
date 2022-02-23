export interface UserData{
    name:string,
    email:string,
    password:string,
    role:Role
}
export interface Role {
    teacher:string,
    student:string
}

export interface UserDataResponse{
    data:UserData;
    statusCode:number;
    message:string;
}

export interface StudentData{
    status:string,
    _id:number,
    name:string,
    email:string
}
export interface ResetPassword{
    email:string,
    message:string
}