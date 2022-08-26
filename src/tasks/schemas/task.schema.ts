/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as mongoose from 'mongoose';


export const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: Number,
    completed: { type: Boolean, required: true },
  });
  