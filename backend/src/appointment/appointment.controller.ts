import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/enum/roles.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Status } from './enum/status.enum';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get("getall")
  @UseGuards(AuthGuard("jwt"))
  getAllAppointments(@Req() request) {
    const userId = request.user.id
    const role = request.user.role

    return this.appointmentService.getAppointments(role, userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }

  @Post("approve/:id")
  @Roles(Role.DOCTOR)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  approveAppointment(@Req() request, @Param("id") appointmentId){
    const userId = request.user.id

    return this.appointmentService.changeStatus(appointmentId, userId, Status.APPROVED)
  }

  @Post("reject/:id")
  @Roles(Role.DOCTOR)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  recuseAppointment(@Req() request, @Param("id") appointmentId){
    const userId = request.user.id

    return this.appointmentService.changeStatus(appointmentId, userId, Status.REJECTED)
  }

  @Post("complete/:id")
  @Roles(Role.DOCTOR)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  completeAppointment(@Req() request, @Param("id") appointmentId){
    const userId = request.user.id

    return this.appointmentService.changeStatus(appointmentId, userId, Status.COMPLETED)
  }

  @Post("cancel/:id")
  @Roles(Role.DOCTOR)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  cancelAppointment(@Req() request, @Param("id") appointmentId){
    const userId = request.user.id

    return this.appointmentService.changeStatus(appointmentId, userId, Status.CANCELED)
  }


}
