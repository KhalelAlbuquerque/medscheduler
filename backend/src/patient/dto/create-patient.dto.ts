import { IsEmail, IsEmpty, IsNotEmpty } from "class-validator";

export class CreatePatientDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, {message:"Please insert a valid email"})
    email: string;

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    ssnOrCpf: string

    @IsEmpty()
    role: string
}
