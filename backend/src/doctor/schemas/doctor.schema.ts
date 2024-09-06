import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Doctor extends Document{
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    speciality: string;

    @Prop()
    med_code: string

    @Prop({default: "doctor"})
    role: string
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);