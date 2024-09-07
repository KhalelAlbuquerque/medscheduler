import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { CreateAppointmentDto } from 'src/appointment/dto/create-appointment.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/enum/roles.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }

  @Post("/schedule/:id")
  @Roles(Role.PATIENT)
  @UseGuards(AuthGuard("jwt"), RoleGuard)
  schedule(@Req() request, @Param("id") doctorId ,@Body() data: {date: string, time: string, notes?:string}) {
    const newScheduleObject : CreateAppointmentDto = {
      doctor: doctorId,
      patient: request.user.id,
      date: data.date,
      time: data.time,
      notes: data?.notes
    }

    return this.patientService.scheduleAppointment(newScheduleObject)
  }
}
