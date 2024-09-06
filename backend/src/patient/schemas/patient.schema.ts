import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Patient extends Document {
    @Prop()
    name: string;

    @Prop({unique: true})
    email: string;

    @Prop()
    password: string

    @Prop()
    phoneNumber: string

    @Prop({unique: true})
    ssnOrCpf: string

    @Prop({default: "patient"})
    role: string
}


export const PatientSchema = SchemaFactory.createForClass(Patient)