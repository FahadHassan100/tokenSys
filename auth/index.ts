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
          token.id = user.ID;
          token.email = user.Email_Adress;
          token.firstName = user.First_Name;
          token.lastName = user.Last_Name;
          token.role = user.Client_Status; // Example field
        }
        return token;
      },
  
      // Make the token available in the session
      async session({ session, token }:any) {
        if (session.user) {
          session.user.id = token.id;
          session.user.email = token.email;
          session.user.firstName = token.firstName;
          session.user.lastName = token.lastName;
          session.user.role = token.role; // Example field
        }
        return session;
      },
    },
  ...authConfig
})