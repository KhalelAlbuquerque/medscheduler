import { forwardRef, Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schemas/patient.schema';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { ImageService } from 'src/image/image.service';
import { FirebaseService } from 'src/config/firebase.config';
@Module({
  imports:[MongooseModule.forFeature([{name: "Patient", schema: PatientSchema}]), forwardRef(()=>AppointmentModule)],
  controllers: [PatientController],
  providers: [PatientService, ImageService, FirebaseService],
  exports: [PatientModule, PatientService, MongooseModule]
})
export class PatientModule {}
