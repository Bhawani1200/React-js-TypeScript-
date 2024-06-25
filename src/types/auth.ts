export type LoginInput={
    email:string;
    password:string;
}
export type RegisterInput={
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}
export type User={
    id:string;
    name:string;
    email:string;
    roles:string;
}