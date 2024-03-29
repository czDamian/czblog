import User from "@/models/userModel";
import { connectDB } from "@/utils/connect";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
  try {
    await connectDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("User does not exist");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Errror("Password does not match");
    return user;
  } catch (error) {
    console.log("errror logging in");
    throw new Error("error logging in!!!");
  }
}
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          console.log({ credentials });
          const user = await login(credentials);
          console.log("this is the user", user);
          return user;
        } catch (error) {
          throw new Error("failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
