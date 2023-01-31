import first from 'assets/images/ReviewCards/001_img_person_1.png'
import second from 'assets/images/ReviewCards/002_img_person_1.png'
import third from 'assets/images/ReviewCards/003_img_person_1.png'
import fourth from 'assets/images/ReviewCards/004_img_person_1.png'
import five from 'assets/images/ReviewCards/005_img_person_1.png'

export interface IReviewCardProps {
  avatar: string
  text: string
  name: string
  position: string
  id: number
}

export const cards: IReviewCardProps[] = [
  {
    avatar: first,
    text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    id: 1,
  },
  {
    avatar: second,
    text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
    name: 'Ruben Chifundo',
    position: 'Data analyst',
    id: 2,
  },
  {
    avatar: third,
    text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
    name: 'Tigran Nazaret',
    position: 'CEO by NOX',
    id: 3,
  },
  {
    avatar: fourth,
    text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    id: 4,
  },
  {
    avatar: five,
    text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
    name: 'Ruben Chifundo',
    position: 'Data analyst',
    id: 5,
  },
]
