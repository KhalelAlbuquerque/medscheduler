import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Status } from "../enum/status.enum";

@Schema()
export class Appointment extends Document{
    @Prop({type: Types.ObjectId, ref: "Doctor"})
    doctor: string

    @Prop({type: Types.ObjectId, ref: "Patient"})
    patient: string

    @Prop()
    date: string

    @Prop()
    time: string

    @Prop({default: Status.PENDING})
    status: Status

    @Prop({default: ""})
    notes?: string
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)