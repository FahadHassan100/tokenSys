"use server";
import { db } from "@/lib/db";

export const getUserByEmail = async (email:string) => {
    try {
        const user = await db.clients.findUnique({
            where:{
                Email_Adress: email,
            }
        });
        return user;

    } catch (error) {
        return error;
    }
}

// export const getUserById = async (id: string) => {
//     try {
//       const user = await db.clients.findUnique({ where: { ID } });
  
//       return user;
//     } catch {
//       return null;
//     }
//   };


  