import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("login/patient")
    async patientLogin(@Body() loginDto: loginDto) {
        return await this.authService.patientLogin(loginDto) 
    }

    @Post("register/patient")
    @UseInterceptors(FileInterceptor('picture')) 
    async patientRegister(@Body() createPatientDto: CreatePatientDto, @UploadedFile() picture: Express.Multer.File | null | undefined) {
        return await this.authService.patientRegister(createPatientDto, picture)
    }

    @Post("login/doctor")
    async doctorLogin(@Body() loginDto: loginDto) {
        return await this.authService.doctorLogin(loginDto)
    }

    @Post("register/doctor")
    @UseInterceptors(FileInterceptor('picture')) 
    async doctorRegister(@Body() createDoctorDto: CreateDoctorDto, @UploadedFile() picture: Express.Multer.File | null | undefined) {
        return await this.authService.doctorRegister(createDoctorDto, picture)
    }
}
