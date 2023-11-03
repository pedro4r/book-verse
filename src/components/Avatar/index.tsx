import Image from 'next/image'
import { AvatarContainer } from './styles'
import { useSession } from 'next-auth/react'
import { UserCircle } from 'phosphor-react'

interface AvatarProps {
    avatarSize?: 'md' | 'sm'
}

export function Avatar({ avatarSize = 'md' }: AvatarProps) {
    const session = useSession()
    if (session.data) {
        return (
            <AvatarContainer
                avatarMode={'withAvatar'}
                sizeOfAvatar={avatarSize}
            >
                <Image
                    src={session.data?.user?.avatar_url ?? ''}
                    alt={session.data?.user.name}
                    height={32}
                    width={32}
                />
            </AvatarContainer>
        )
    } else {
        return (
            <AvatarContainer
                avatarMode={'withoutAvatar'}
                sizeOfAvatar={avatarSize}
            >
                <UserCircle size={28} weight='light' />
            </AvatarContainer>
        )
    }
}
