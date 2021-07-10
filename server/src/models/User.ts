import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  isExec: boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isExec: { type: Boolean, default: false },
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User };
