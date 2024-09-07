import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import * as bcrypt from "bcrypt"
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from './schemas/doctor.schema';

@Injectable()
export class DoctorService {

  constructor(@InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto) : Promise<Doctor> {

    const {med_code, email} = createDoctorDto

    const matchedMedCode = await this.doctorModel.findOne({med_code}).exec()
    const matchedEmail = await this.doctorModel.findOne({email}).exec()

    if(matchedMedCode || matchedEmail) throw new BadRequestException("Duplicated email or MedCode")

    const hashedPassword = await bcrypt.hash(createDoctorDto.password, 10)

    createDoctorDto.password = hashedPassword

    const newDoctor = await this.doctorModel.create(createDoctorDto)

    return newDoctor;
  }

  async findAll() : Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string) : Promise<Doctor> {
    const foundDoctor = await this.doctorModel.findOne({_id: id}).exec()

    if(!foundDoctor) throw new NotFoundException("Doctor not found")

    return foundDoctor
  }

  async findByEmail(email: string) : Promise<Doctor>{
    const foundDoctor = await this.doctorModel.findOne({email}).select("+password").exec()

    if(!foundDoctor) throw new NotFoundException("Doctor not found")

    return foundDoctor
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) : Promise<Doctor>{
    const foundDoctor = await this.findOne(id)

    if(updateDoctorDto?.email) foundDoctor.email = updateDoctorDto.email
    if(updateDoctorDto?.med_code) foundDoctor.med_code = updateDoctorDto.med_code
    if(updateDoctorDto?.name) foundDoctor.name = updateDoctorDto.name
    if(updateDoctorDto?.speciality) foundDoctor.speciality = updateDoctorDto.speciality
    if(updateDoctorDto?.phoneNumber) foundDoctor.phoneNumber = updateDoctorDto.phoneNumber

    await foundDoctor.save()

    return foundDoctor;
  }

  async remove(id: string) : Promise<void> {
    const foundDoctor = await this.findOne(id)

    await this.doctorModel.findByIdAndDelete(id)
  }
}
