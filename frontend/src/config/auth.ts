import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "./axios";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error(JSON.stringify({type: "no_credentials", body: ""}))
        }
      
        try {
          const res = await api.post("/auth/login/patient", {
            email: credentials.email,
            password: credentials.password,
          });

          if (res.status === 201) {
            const data = res.data;
      
            if (data) {
              return {
                name: data.name,
                email: data.email,
                picture: data.picture,
                id: data.id,
                token: data.token
              };
            }
          }
      
          return null;
        } catch (err:any) {
          throw new Error(JSON.stringify(({type: "unauthorized", body: err.response.data})))
        }
      }
    }),
  ],
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.user = user;
        token.picture = user.picture
      }
      
      return token;
    },
    session({ session, token }) {
      session.user = token.user as User;
      session.user.image = token.picture;
      return session;
    },
  }
};
