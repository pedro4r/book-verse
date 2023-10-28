/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from 'next-auth/next'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '../../../lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'

export function buildNextAuthOptions(
    req: NextApiRequest | NextPageContext['req'],
    res: NextApiResponse | NextPageContext['res']
): NextAuthOptions {
    return {
        adapter: PrismaAdapter(req, res),

        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID ?? '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
                profile(profile: GoogleProfile) {
                    return {
                        id: profile.sub,
                        name: profile.name,
                        email: profile.email,
                        avatar_url: profile.picture,
                    }
                },
            }),
        ],

        callbacks: {
            async session({ session, user }) {
                return {
                    ...session,
                    user,
                }
            },
        },
    }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, buildNextAuthOptions(req, res))
}
