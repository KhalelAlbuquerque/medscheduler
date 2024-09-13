import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
    token: string;  
  }

  interface Session {
    user: User; 
  }

  interface JWT {
    user: User;
    picture: string;
  }
}
