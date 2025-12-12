import { UserDto } from "./user"

export interface RegisterUserData{
    userName:string,
    email:string,
    password:string,
    address :string
}

export interface LoginReq{
    email:string,
    password:string
}

export interface LoginResData{
    accessToken:string
    refreshToken:string
    userData:UserDto
}
