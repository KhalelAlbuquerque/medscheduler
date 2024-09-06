import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { PatientModule } from 'src/patient/patient.module';
import { DoctorModule } from 'src/doctor/doctor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './schemas/appointment.schema';
import { DoctorService } from 'src/doctor/doctor.service';
import { PatientService } from 'src/patient/patient.service';

@Module({
  imports: [
    PatientModule, 
    DoctorModule,
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }])
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService, DoctorService, PatientService],
})
export class AppointmentModule {}
