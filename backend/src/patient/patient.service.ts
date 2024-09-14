import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './schemas/patient.schema';
import * as bcrypt from "bcrypt"
import { CreateAppointmentDto } from 'src/appointment/dto/create-appointment.dto';
import { Appointment } from 'src/appointment/schemas/appointment.schema';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private readonly patientModel:Model<Patient>,
    @InjectModel(Appointment.name) private readonly appointmentModel:Model<Appointment>,
    private imageService:ImageService
  ){}

  async create(createPatientDto: CreatePatientDto, file: Express.Multer.File) : Promise<Patient> {
    const {email, ssnOrCpf} = createPatientDto

    const matchedEmail = await this.patientModel.findOne({email}).exec()
    const matchedSSN = await this.patientModel.findOne({ssnOrCpf}).exec()

    if(matchedEmail || matchedSSN) throw new BadRequestException("Duplicated email or SSN/CPF")

    const profileUrl = await this.imageService.uploadImage(file)

    const hashedPassword = await bcrypt.hash(createPatientDto.password, 10)

    createPatientDto.password = hashedPassword 
    createPatientDto.picture = profileUrl

    const newPatient = await this.patientModel.create(createPatientDto)
    
    return newPatient
  }

  async findAll() : Promise<Patient[]> {
    return await this.patientModel.find().exec();
  }

  async findOne(id: string) : Promise<Patient> {
    const patient: Patient | undefined = await this.patientModel.findOne({_id: id})

    if(!patient) throw new NotFoundException("Patient not found")

    return patient
  }

  async findByEmail(email: string) : Promise<Patient>{
    const foundPatient = await this.patientModel.findOne({email}).select("+password").exec()

    if(!foundPatient) throw new NotFoundException("Patient not found")

    return foundPatient
  }

  async update(id: string, updatePatientDto: UpdatePatientDto, picture:Express.Multer.File | undefined | null) : Promise<Patient> {
    const patient: Patient = await this.findOne(id)

    if(updatePatientDto?.email) patient.email = updatePatientDto.email
    if(updatePatientDto?.ssnOrCpf) patient.ssnOrCpf = updatePatientDto.ssnOrCpf
    if(updatePatientDto?.name) patient.name = updatePatientDto.name
    if(updatePatientDto?.phoneNumber) patient.phoneNumber = updatePatientDto.phoneNumber

    if(picture) {
      console.log(picture)
      patient.picture = await this.imageService.uploadImage(picture) 
    }else{
      patient.picture = patient.picture
    }
    
    return await patient.save()
  }

  async remove(id: string) : Promise<void> {
    const patient: Patient = await this.findOne(id)

    return await this.patientModel.findByIdAndDelete(patient._id);
  }

  async scheduleAppointment(createAppointmentDto: CreateAppointmentDto) : Promise<Appointment>{
    const {patient, doctor, date, time} = createAppointmentDto

    const isAlreadyScheduled = await this.appointmentModel.findOne({patient, doctor, date, time}).exec()

    if(isAlreadyScheduled) throw new BadRequestException("Already scheduled")

    const newSchedule = await this.appointmentModel.create(createAppointmentDto)

    return newSchedule
  }
}
