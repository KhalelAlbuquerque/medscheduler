import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { Role } from './enum/roles.enum';
import * as bcrypt from "bcrypt"
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';

@Injectable()
export class AuthService {
    constructor(private readonly patientService: PatientService,
                private readonly doctorService: DoctorService,
                private readonly jwtService: JwtService){}


    async patientLogin(loginDto: loginDto) : Promise<{token:string}>{
        const {email, password} = loginDto

        const patient = await this.patientService.findByEmail(email)

        if(!patient) throw new UnauthorizedException("Invalid email or password")

        const matchedPassword = await bcrypt.compare(password, patient.password)

        if(!matchedPassword) throw new UnauthorizedException("Invalid email or password")

        const token = this.jwtService.sign({id: patient._id, role: Role.PATIENT})

        return {token}
    }

    async doctorLogin(loginDto: loginDto) : Promise<{token:string}>{
        const {email, password} = loginDto

        const doctor = await this.doctorService.findByEmail(email)

        if(!doctor) throw new UnauthorizedException("Invalid email or password")

        const matchedPassword = await bcrypt.compare(password, doctor.password)

        if(!matchedPassword) throw new UnauthorizedException("Invalid email or password")

        const token = this.jwtService.sign({id: doctor._id, role: Role.DOCTOR})

        return {token}
    }

    async patientRegister(createPatientDto: CreatePatientDto): Promise<{token:string}>{
        const newPatient = await this.patientService.create(createPatientDto)

        if(newPatient){
            const token = this.jwtService.sign({id: newPatient._id, role: Role.PATIENT})

            return {token}
        }
    }

    async doctorRegister(createDoctorDto: CreateDoctorDto): Promise<{token:string}>{
        const newDoctor = await this.doctorService.create(createDoctorDto)

        if(newDoctor){
            const token = this.jwtService.sign({id: newDoctor._id, role: Role.DOCTOR})

            return {token}
        }
    }

}
