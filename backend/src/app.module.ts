import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ImageService } from './image/image.service';
import { ImageController } from './image/image.controller';
import { FirebaseService } from './config/firebase.config';

@Module({
  imports: [
    DoctorModule,
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONN_URL),
    PatientModule,
    AppointmentModule,
    AuthModule
  ],
  controllers: [AppController, ImageController],
  providers: [AppService, ImageService, FirebaseService],
})
export class AppModule {}
