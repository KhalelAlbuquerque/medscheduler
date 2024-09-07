import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import {Strategy, ExtractJwt} from "passport-jwt"
import { Doctor } from "src/doctor/schemas/doctor.schema";
import { Patient } from "src/patient/schemas/patient.schema";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(@InjectModel (Doctor.name) private doctorModel:Model<Doctor>,
                @InjectModel (Patient.name) private patientModel:Model<Patient>){
                    super({
                        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                        secretOrKey: process.env.JWT_SECRET
                    })
                }

    async validate(payload){
        const {id} = payload

        const isDoctor = await this.doctorModel.findById(id).exec();
        const isPatient = await this.patientModel.findById(id).exec();

        if (!isDoctor && !isPatient) {
            throw new UnauthorizedException('Login to access this endpoint');
        }
    
        if (isDoctor) {
            return { id: isDoctor._id, role: 'doctor' };
        } else if (isPatient) {
            return { id: isPatient._id, role: 'patient' };
        }
    }



}