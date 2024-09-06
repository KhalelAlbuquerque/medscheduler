import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schemas/patient.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: "Patient", schema: PatientSchema}])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
