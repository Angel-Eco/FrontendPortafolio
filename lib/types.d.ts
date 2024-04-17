import NextAuth from "next-auth";
import { User } from "@prisma/client";
import { JWT } from "next-auth/jwt";

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: string | null
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      role: string | null
    }
  }
}