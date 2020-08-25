import { Document } from 'mongoose';

export interface Apple extends Document {
 readonly title: string;
 readonly price: number;
 readonly description: string;
}
