import { Schema, model, Date } from 'mongoose';

// Create an interface representing a document:
export interface IUser {
  firstName: string;
  lastName: string;
  studentNumber: number;
  signupDate: Date;
  prefferedPronoum?: string[];
  phone?: { canada: string; whatsapp: string };
  avatar?: string;
  // bio?: string;
  // social?: { website: string; linkedin: string; github: string };
  // codingSkills?: string[];
  // userType?: number;
  // program?: string;
  // expectedGraduationDate?: Date;
  // courses: string[];
  // isWorkingDeveloper?: boolean;
  email: string;
  password: string;
  isExec: boolean;
}

// Create an Schema associating with it the user interface (IUser)
const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentNumber: {
    type: String,
    required: false,
  },
  signupDate: {
    type: Date,
    default: Date.now,
  },
  preferredPronoum: {
    type: [String],
    required: false,
  },
  phone: {
    whatsapp: {
      type: String,
      required: false,
    },
    canadian: {
      type: String,
      required: false,
    },
  },
  avatar: {
    type: String,
    required: false,
  },
  // bio: {
  //   type: String,
  //   required: false,
  // },
  // social: {
  //   website: {
  //     type: String,
  //     required: false,
  //   },
  //   linkedin: {
  //     type: String,
  //     required: false,
  //   },
  //   github: {
  //     type: String,
  //     required: false,
  //   },
  // },
  // codingSkills: {
  //   type: [String],
  //   required: true,
  // },
  // userType: {
  //   type: Number,
  //   required: false,
  // },
  // program: {
  //   type: String,
  //   required: false,
  // },
  // expectedGraduationDate: {
  //   type: Date,
  //   required: false,
  // },
  // courses: {
  //   type: [String],
  //   required: false,
  // },
  // isWorkingDeveloper: {
  //   type: Boolean,
  //   required: false,
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isExec: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Create a model from the schema, using the interface IUser:
const User = model<IUser>('User', UserSchema);

export { User };
