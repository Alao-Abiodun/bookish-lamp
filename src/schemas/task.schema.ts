/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as mongoose from 'mongoose';


export const TaskSchema = new mongoose.Schema({

  title: String,

  description: String,

  completed: Boolean,
})
