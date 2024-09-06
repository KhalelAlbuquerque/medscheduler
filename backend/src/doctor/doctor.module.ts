import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from './schemas/doctor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }])],
  controllers: [DoctorController],
  providers: [DoctorService],
  exports: [DoctorModule, DoctorService, MongooseModule]
})
export class DoctorModule {}
