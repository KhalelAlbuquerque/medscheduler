import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    DoctorModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONN_URL),
    PatientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
