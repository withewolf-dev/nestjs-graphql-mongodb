import * as mongoose from 'mongoose';

export const AppleSchema = new mongoose.Schema({
 title: String,
 price: Number,
 description: String,
});