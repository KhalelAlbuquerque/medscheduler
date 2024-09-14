import { forwardRef, Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { PatientModule } from 'src/patient/patient.module';
import { DoctorModule } from 'src/doctor/doctor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './schemas/appointment.schema';
import { DoctorService } from 'src/doctor/doctor.service';
import { PatientService } from 'src/patient/patient.service';
import { ImageService } from 'src/image/image.service';
import { FirebaseService } from 'src/config/firebase.config';

@Module({
  imports: [
    forwardRef(()=>PatientModule), 
    DoctorModule,
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }])
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService, DoctorService, PatientService, ImageService, FirebaseService],
  exports: [AppointmentModule, MongooseModule]
})
export class AppointmentModule {}
