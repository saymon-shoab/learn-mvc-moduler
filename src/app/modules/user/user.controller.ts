import { NextFunction, Request, Response } from "express"
import User from "./user.model"
import { createUserToDB, getAllAdminUserFromDb, getUserByIdFromDb, getUserFromDb } from "./user.service"

export const createUser = async (req:Request,
     res:Response,
     next:NextFunction) => {

    const data = req.body
    const user = await createUserToDB(data);
    res.status(200).json({
       status: "success",
       data: user,
    })

}

export const getUsers = async (req:Request,
     res:Response,
     next:NextFunction) => {
    const user = await getUserFromDb();
    res.status(200).json({
       status: "success",
       data: user,
    })

}


export const getUserById = async (
    req:Request,
    res:Response,
    next:NextFunction) => {
   const {id} = req.params;
   const user = await getUserByIdFromDb(id);
   console.log('hitted get user by id')
   res.status(200).json({
      status: "success",
      data: user,
   })

}



export const getAdminUsers = async (req:Request,
   res:Response,
   next:NextFunction) => {
//   const {id} = req.params;
  const user = await getAllAdminUserFromDb();
  console.log('hitted from get admin user...')
  res.status(200).json({
     status: "success",
     data: user,
  })

}
// patternsss...

// router -> controller -> service