import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        phone: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // MongoDB user validation
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const user = await db.collection("users").findOne({ email: credentials?.email });

        if (user && user.password === credentials?.password) {
          return { email: user.email, phone: user.phone };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);
