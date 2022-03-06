import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.Facebook_ID,
      clientSecret: process.env.Facebook_SECRET,
    }),
    // ...add more providers here
  ],
});
