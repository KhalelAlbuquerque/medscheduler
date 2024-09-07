import { forwardRef, Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schemas/patient.schema';
import { AppointmentService } from 'src/appointment/appointment.service';
import { AppointmentModule } from 'src/appointment/appointment.module';
@Module({
  imports:[MongooseModule.forFeature([{name: "Patient", schema: PatientSchema}]), forwardRef(()=>AppointmentModule)],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientModule, PatientService, MongooseModule]
})
export class PatientModule {}
