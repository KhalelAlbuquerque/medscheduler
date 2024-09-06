import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './schemas/appointment.schema';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel(Appointment.name) private readonly appointmentModel: Model<Appointment>,
              private readonly patientService: PatientService,
              private readonly doctorService: DoctorService) {}


  async create(createAppointmentDto: CreateAppointmentDto) {
    return 'This action adds a new appointment';
  }

  async findAll() {
    return await this.appointmentModel.find().exec();
  }

  async findOne(id: string) {
    const foundAppointment : Appointment  = await this.appointmentModel.findOne({_id: id}).exec()

    if(!foundAppointment) throw new NotFoundException("Appointment not found")

    return foundAppointment
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    const foundAppointment : Appointment  = await this.findOne(id)

    if(updateAppointmentDto?.doctor) foundAppointment.doctor = updateAppointmentDto.doctor
    if(updateAppointmentDto?.patient) foundAppointment.patient = updateAppointmentDto.patient
    if(updateAppointmentDto?.date) foundAppointment.date = updateAppointmentDto.date
    if(updateAppointmentDto?.time) foundAppointment.time = updateAppointmentDto.time
    if(updateAppointmentDto?.notes) foundAppointment.notes = updateAppointmentDto.notes

    return await foundAppointment.save()
  }

  async remove(id: string) {
    const foundAppointment : Appointment | undefined = await this.findOne(id)

    if(!foundAppointment) throw new NotFoundException("Appointment not found")

      return await this.appointmentModel.findByIdAndDelete(id)
  }
}
