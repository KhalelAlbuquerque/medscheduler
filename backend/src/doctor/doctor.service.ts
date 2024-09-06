import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import * as bcrypt from "bcrypt"
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from './schemas/doctor.schema';

@Injectable()
export class DoctorService {

  constructor(@InjectModel("Doctor") private readonly doctorModel: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto) {

    const {med_code, email} = createDoctorDto

    const matchedMedCode = await this.doctorModel.findOne({med_code}).exec()
    const matchedEmail = await this.doctorModel.findOne({email}).exec()

    if(matchedMedCode || matchedEmail) throw new BadRequestException("Duplicated email or MedCode")

    const hashedPassword = await bcrypt.hash(createDoctorDto.password, 10)

    createDoctorDto.password = hashedPassword

    const newDoctor = await this.doctorModel.create(createDoctorDto)

    return newDoctor;
  }

  async findAll() {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string) {
    const foundDoctor = await this.doctorModel.findOne({_id: id}).exec()

    if(!foundDoctor) throw new NotFoundException("Doctor not found")

    return foundDoctor
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const foundDoctor = await this.findOne(id)

    if(updateDoctorDto?.email) foundDoctor.email = updateDoctorDto.email
    if(updateDoctorDto?.med_code) foundDoctor.med_code = updateDoctorDto.med_code
    if(updateDoctorDto?.name) foundDoctor.name = updateDoctorDto.name
    if(updateDoctorDto?.speciality) foundDoctor.speciality = updateDoctorDto.speciality

    await foundDoctor.save()

    return foundDoctor;
  }

  async remove(id: string) {
    const foundDoctor = await this.findOne(id)

    await this.doctorModel.findByIdAndDelete(id)
  }
}
