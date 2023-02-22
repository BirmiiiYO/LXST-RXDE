interface Social {
  linkedin: string
  inst: string
  twitter: string
  google: string
}

export interface ITeamCardDataProps {
  id: number
  avatar: string
  name: string
  position: string
  socials: Social[]
}
