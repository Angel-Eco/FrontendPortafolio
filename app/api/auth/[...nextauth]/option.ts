import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { AuthOptions } from 'next-auth'

const authOptions: AuthOptions = {
    session: {
      strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma), 
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        profile(profile) {
          return {
            id: profile.sub,
            name: `${profile.given_name} ${profile.family_name}`,
            email: profile.email,
            image: profile.picture,
            role: profile.role ? profile.role : "user",
          };
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user.role = token.role;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };

  export default authOptions;