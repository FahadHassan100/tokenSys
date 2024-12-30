import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import { authConfig } from "@/auth/config"
 
export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session:{
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    pages:{
        signIn: "/",
        error: "/error,"
    },
    callbacks: {
        // Attach user data to the token
    async jwt({ token, user }:any) {
        if (user) {
          // Add user fields to the token (initial login)
          // token.id = user.ID;
          // token.email = user.Email_Adress;
          // token.firstName = user.First_Name;
          // token.lastName = user.Last_Name;
          // token.role = user.Client_Status; // Example field
          token.id = user.ID;
          token.email = user.Client_Email;
          token.ClientName = user.Client_Name;
        }
        return token;
      },
  
      // Make the token available in the session
      async session({ session, token }:any) {
        if (session.user) {
          session.user.id = token.id;
          session.user.Client_Email = token.email;
          session.user.Client_Name = token.ClientName;
          //session.user.lastName = token.lastName;
          //session.user.role = token.role; // Example field
        }
        return session;
      },
    },
  ...authConfig
})