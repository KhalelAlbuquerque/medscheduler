import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { Role } from './enum/roles.enum';
import * as bcrypt from "bcrypt"
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';
import { AuthData } from 'src/interfaces/authInterface';

@Injectable()
export class AuthService {
    constructor(private readonly patientService: PatientService,
                private readonly doctorService: DoctorService,
                private readonly jwtService: JwtService){}


    async patientLogin(loginDto: loginDto) : Promise<AuthData>{
        const {email, password} = loginDto

        const patient = await this.patientService.findByEmail(email)

        if(!patient) throw new UnauthorizedException("Invalid email or password")

        const matchedPassword = await bcrypt.compare(password, patient.password)

        if(!matchedPassword) throw new UnauthorizedException("Invalid email or password")

        const token = this.jwtService.sign({id: patient._id, role: Role.PATIENT})

        const dataToReturn = {
            token,
            email: patient.email,
            name: patient.name,
            id: patient._id,
            // picture: patient.image || 
            picture: patient.picture 
        } as AuthData

        return dataToReturn
    }

    async doctorLogin(loginDto: loginDto) : Promise<AuthData>{
        const {email, password} = loginDto

        const doctor = await this.doctorService.findByEmail(email)

        if(!doctor) throw new UnauthorizedException("Invalid email or password")

        const matchedPassword = await bcrypt.compare(password, doctor.password)

        if(!matchedPassword) throw new UnauthorizedException("Invalid email or password")

        const token = this.jwtService.sign({id: doctor._id, role: Role.DOCTOR})

        const dataToReturn = {
            token,
            email: doctor.email,
            name: doctor.name,
            id: doctor._id,
            // picture: doctor.image || 
            picture: doctor.picture 
        } as AuthData

        return dataToReturn
    }

    async patientRegister(createPatientDto: CreatePatientDto, picture: Express.Multer.File): Promise<AuthData>{
        const newPatient = await this.patientService.create(createPatientDto, picture)

        if(newPatient){
            const token = this.jwtService.sign({id: newPatient._id, role: Role.PATIENT})

            const dataToReturn = {
                token,
                email: newPatient.email,
                name: newPatient.name,
                id: newPatient._id,
                // picture: patient.image || 
                picture: newPatient.picture 
            } as AuthData

            return dataToReturn
        }
    }

    async doctorRegister(createDoctorDto: CreateDoctorDto, picture: Express.Multer.File): Promise<AuthData>{
        const newDoctor = await this.doctorService.create(createDoctorDto, picture)

        if(newDoctor){
            const token = this.jwtService.sign({id: newDoctor._id, role: Role.DOCTOR})

            const dataToReturn = {
                token,
                email: newDoctor.email,
                name: newDoctor.name,
                id: newDoctor._id,
                picture: newDoctor.picture 
            } as AuthData

            return dataToReturn
        }
    }

}
