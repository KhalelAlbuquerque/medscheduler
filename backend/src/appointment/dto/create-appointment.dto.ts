import { IsDate, IsEmpty, IsNotEmpty, IsTimeZone } from "class-validator"
import { Status } from "../enum/status.enum"

export class CreateAppointmentDto {

    @IsNotEmpty()
    doctor: string

    @IsNotEmpty()
    patient: string

    @IsNotEmpty()
    @IsDate()
    date: string

    @IsNotEmpty()
    time: string

    @IsEmpty()
    status?: Status

    notes?: string
}
