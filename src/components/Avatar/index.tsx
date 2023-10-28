import Image from 'next/image'
import avatar from '../../../public/avatar.jpeg'
import { AvatarContainer } from './styles'
import { useSession } from 'next-auth/react'

export function Avatar() {
    const session = useSession()
    if (session.data) {
        // const avatarUrl = session.data?.user.avatar_url
        return (
            <AvatarContainer>
                <Image
                    src={session.data?.user?.avatar_url ?? ''}
                    priority
                    alt={session.data?.user.name}
                    height={32}
                    width={32}
                />
            </AvatarContainer>
        )
    }
}
