import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateDoctorDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail({}, {message:"Please insert a valid email"})
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    speciality: string;

    @IsString()
    @IsNotEmpty()
    med_code: string
}
