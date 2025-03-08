import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"


export const handler = NextAuth({
  providers: [

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
    // Outros provedores de autenticação podem ser configurados aqui
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session(session, user) {

      // adiciona a role ao session, pode ser feito um get na api de usuário para pegar a role
      session.user.role = user.email === "admin@example.com" ? "admin" : "user"
      return session
    },
  },
})

export { handler as GET, handler as POST } // Para lidar com as requisições GET e POST
