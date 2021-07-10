import { Schema, model } from 'mongoose';

// Create an interface representing a document:
export interface IUser {
  email: string;
  password: string;
  isExec: boolean;
}

// Create an Schema associating with it the user interface (IUser)
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isExec: { type: Boolean, required: true, default: false },
});

// Create a model from the schema, using the interface IUser:
const User = model<IUser>('User', UserSchema);

export { User };
