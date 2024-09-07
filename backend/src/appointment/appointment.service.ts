import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './schemas/appointment.schema';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { Status } from './enum/status.enum';
import { Role } from 'src/auth/enum/roles.enum';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel(Appointment.name) private readonly appointmentModel: Model<Appointment>,
              private readonly patientService: PatientService,
              private readonly doctorService: DoctorService) {}


  async create(createAppointmentDto: CreateAppointmentDto) {
    return 'This action adds a new appointment';
  }

  async findAll() : Promise<Appointment[]> {
    return await this.appointmentModel.find().exec();
  }

  async findOne(id: string) : Promise<Appointment> {
    const foundAppointment : Appointment  = await this.appointmentModel.findOne({_id: id}).exec()

    if(!foundAppointment) throw new NotFoundException("Appointment not found")

    return foundAppointment
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) : Promise<Appointment> {
    const foundAppointment : Appointment  = await this.findOne(id)

    if(updateAppointmentDto?.doctor) foundAppointment.doctor = updateAppointmentDto.doctor
    if(updateAppointmentDto?.patient) foundAppointment.patient = updateAppointmentDto.patient
    if(updateAppointmentDto?.date) foundAppointment.date = updateAppointmentDto.date
    if(updateAppointmentDto?.time) foundAppointment.time = updateAppointmentDto.time
    if(updateAppointmentDto?.notes) foundAppointment.notes = updateAppointmentDto.notes

    return await foundAppointment.save()
  }

  async remove(id: string) : Promise<void> {
    const foundAppointment : Appointment | undefined = await this.findOne(id)

    if(!foundAppointment) throw new NotFoundException("Appointment not found")

      return await this.appointmentModel.findByIdAndDelete(id)
  }

  async changeStatus(id: string, userId: string, newStatus: Status) : Promise<Appointment>{
    const foundAppointment : Appointment | undefined = await this.findOne(id) 

    if(foundAppointment.patient!=userId && foundAppointment.doctor!=userId){
      throw new UnauthorizedException("Only the doctor or the patient can change the status of the appointment")
    }

    if(foundAppointment.status==newStatus) throw new BadRequestException("Appointment already in this status")

    if(
       foundAppointment.status==Status.CANCELED || 
       foundAppointment.status==Status.COMPLETED || 
       foundAppointment.status == Status.REJECTED
      ){
      throw new BadRequestException("This appointment status cannot be changed anymore")
    }

    foundAppointment.status = newStatus

    await foundAppointment.save()

    return foundAppointment
  }

  async getAppointments(role: Role, userId: string): Promise<Appointment[]> {
    let mainService;
    let userField;
    let populateField
  
    if (role === Role.DOCTOR) {
      mainService = this.doctorService;
      userField = 'doctor';
      populateField = 'patient';
    } else if (role === Role.PATIENT) {
      mainService = this.patientService;
      userField = 'patient';
      populateField = 'doctor';
    }
  
    const foundUser = await mainService.findOne(userId);
  
    if (!foundUser) throw new NotFoundException("User not found");
  
    const appointments = await this.appointmentModel
      .find({ [userField]: foundUser._id })
      .populate(populateField)
  
    return appointments;
  }
}
