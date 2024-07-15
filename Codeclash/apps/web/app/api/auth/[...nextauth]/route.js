import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own authentication logic here
        const user = await prisma.User.findUnique({
          where: { email: credentials.email }
        });

        if (user && user.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin" // Specify your custom sign-in page path
  },
  session: {
    jwt: true
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    }
  }
});


export { handler as GET, handler as POST }