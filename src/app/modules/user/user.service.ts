import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser>=> {

    const user =  new User(payload); // user class user ->
    await user.save() // built in instance method....
    // user.fullName();
    console.log(user.fullName());
    return user;
}

export const getUserFromDb = async(): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDb = async(payload:string): Promise<IUser | null> => {
    const user = await User.findOne({id:payload},{name:1});
    return user;
}

export const getAllAdminUserFromDb = async() => {
   const admin = await User.getAdminUsers()
   return admin;
}