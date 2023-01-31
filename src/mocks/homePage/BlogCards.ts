import first from 'assets/images/BlogCards/img_1.png'
import second from 'assets/images/BlogCards/img_2.png'
import third from 'assets/images/BlogCards/img_3.png'
import fourth from 'assets/images/BlogCards/img_4.png'
import five from 'assets/images/BlogCards/img_5.png'

interface IBlogCardProps {
  id: number
  date: string
  image: string
  name: string
  text: string
  title: string
  topics: string[]
}

export const cards: IBlogCardProps[] = [
  {
    id: 1,
    date: '22 June 2022',
    image: first,
    name: '5 web portal examples your business can learn from',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    title: 'Sed ut perspiciatis unde omnis at vero blanditils',
    topics: ['App', 'CIO', 'Future'],
  },
  {
    id: 2,
    date: '05 Jule 2021',
    image: second,
    name: 'ISO 13485 compliance of medical devices',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    title: 'Sed ut perspiciatis unde omnis at vero blanditils',
    topics: ['REDUX', 'STORE', 'Future'],
  },
  {
    id: 3,
    date: '14 February 2019',
    image: third,
    name: 'Staffing software: key capabilities and top products',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    title: 'Sed ut perspiciatis unde omnis at vero blanditils',
    topics: ['App', 'WEB', 'NEXT'],
  },
  {
    id: 4,
    date: '24 October 2002',
    image: fourth,
    name: '5 web portal examples your business can learn from',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    title: 'Sed ut perspiciatis unde omnis at vero blanditils',
    topics: ['App', 'ISO', 'Past'],
  },
  {
    id: 5,
    date: '1 January 1970',
    image: five,
    name: 'ISO 13485 compliance of medical devices',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    title: 'Sed ut perspiciatis unde omnis at vero blanditils',
    topics: ['App', 'CIO', 'Future'],
  },
]
