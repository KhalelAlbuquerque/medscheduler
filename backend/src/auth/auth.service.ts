import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { Role } from './enum/roles.enum';
import * as bcrypt from "bcrypt"

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

}
