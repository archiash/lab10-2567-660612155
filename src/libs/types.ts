 interface UserCardProps{
    name: string
    email: string
    imgUrl: string
    address: string
}

 interface UserCardDetail{
    email: string
    address: string
}

export type {UserCardProps, UserCardDetail};