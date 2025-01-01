import NextAuth from "next-auth";
import { authConfig } from "@/auth/config";
import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes";


export const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;

    //console.log("checking Url:"+req.nextUrl.pathname);
    //console.log("checking Url:"+pathname);


    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    //const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

    //console.log(isPublicRoutes);

    //console.log(nextUrl.pathname);

    // console.log(`Route ${pathname} is protected: ${isProtectedRoute(pathname)}`);

    // if (!isLoggedIn && !isPublicRoutes) {
    //     return Response.redirect(new URL("/tokensys/login", nextUrl));
    //   }

});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };