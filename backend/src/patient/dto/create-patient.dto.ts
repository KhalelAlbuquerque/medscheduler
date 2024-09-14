import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreatePatientDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, {message:"Please insert a valid email"})
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    ssnOrCpf: string

    picture:string

    @IsEmpty()
    role: string
}
