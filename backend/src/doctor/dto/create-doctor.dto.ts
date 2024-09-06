import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateDoctorDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail({}, {message:"Please enter a valid email"})
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    speciality: string;

    @IsString()
    @IsNotEmpty()
    med_code: string

    @IsEmpty()
    role: string
}
