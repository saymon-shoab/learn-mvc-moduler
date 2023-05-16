import { HydratedDocument, Model } from "mongoose";
// import { IUser } from './user.interface';

  
export interface IUser{
    id: string;
    role:'student';
    password: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    }
    dateOfBirth?: string;
    gender: "male"|"female";
    email?: string;
    contactNo:string;
    emergencyContactNo:string;
    presentAddress:string;
    permanentAddress:string;
}
// statics...
// export interface UserModel extends Model<IUser> {
//     getAllAdminUsers(): IUser[];
// }



export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }


// instance methods...
export interface IUserMethods {
    fullName(): string;
  }