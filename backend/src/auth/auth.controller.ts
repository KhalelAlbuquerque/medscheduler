import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("login/patient")
    async patientLogin(@Body() loginDto: loginDto) {
        return await this.authService.patientLogin(loginDto)
    }

    @Post("register/patient")
    async patientRegister(@Body() createPatientDto: CreatePatientDto) {
        return await this.authService.patientRegister(createPatientDto)
    }

    @Post("login/doctor")
    async doctorLogin(@Body() loginDto: loginDto) {
        return await this.authService.doctorLogin(loginDto)
    }

    @Post("register/doctor")
    async doctorRegister(@Body() createDoctorDto: CreateDoctorDto) {
        return await this.authService.doctorRegister(createDoctorDto)
    }
}
