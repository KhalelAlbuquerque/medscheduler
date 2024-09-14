import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enum/roles.enum';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @UseInterceptors(FileInterceptor('picture')) 
  create(@Body() createDoctorDto: CreateDoctorDto, @UploadedFile() picture: Express.Multer.File | null | undefined) {
    return this.doctorService.create(createDoctorDto, picture);
  }

  @Get() 
  @Roles(Role.DOCTOR)
  @UseGuards(AuthGuard("jwt"), RoleGuard)
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('picture')) 
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto, @UploadedFile() picture: Express.Multer.File | null | undefined) {
    return this.doctorService.update(id, updateDoctorDto, picture);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorService.remove(id);
  }
}
