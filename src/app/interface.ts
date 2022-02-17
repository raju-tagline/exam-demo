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