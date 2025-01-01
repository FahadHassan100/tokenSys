export const publicRoutes: string[] = ["/verify","/tokensys/login",'/register'];

export const authRoutes: string[] = [
  "/error",
  "/resend",
  "/reset",
  "/new-password",
  "/two-factor",
  "/tokensys"
];

export const apiAuthPrefix: string = "/tokensys/api/auth";

export const DEFAULT_LOGIN_REDIRECT: string = "/tokensys/login";
