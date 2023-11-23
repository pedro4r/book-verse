import Image from 'next/image'
import { AvatarContainer } from './styles'
import { useSession } from 'next-auth/react'
import { UserCircle } from 'phosphor-react'

interface AvatarProps {
    avatarSize?: 'md' | 'sm'
    avatarUrl?: string
    altName?: string
}

export function Avatar({ avatarSize = 'md', avatarUrl, altName }: AvatarProps) {
    if (avatarUrl) {
        return (
            <AvatarContainer
                avatarMode={'withAvatar'}
                sizeOfAvatar={avatarSize}
            >
                <Image
                    src={avatarUrl}
                    alt={altName ?? ''}
                    height={300}
                    width={300}
                    quality={100}
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
