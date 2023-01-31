import brain from 'assets/svg/AdvCards/brain.svg'
import graph from 'assets/svg/AdvCards/graph.svg'
import key from 'assets/svg/AdvCards/key.svg'
import trend from 'assets/svg/AdvCards/trend.svg'

interface IServiceCardProps {
  icon: string
  title: string
  text: string
  id: number
}

export const cards: IServiceCardProps[] = [
  {
    icon: brain,
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    title: 'Machine learning',
    id: 1,
  },
  {
    icon: trend,
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    title: 'Embed analytics',
    id: 2,
  },
  {
    icon: key,
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    title: 'Access control',
    id: 3,
  },
  {
    icon: graph,
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    title: 'Data analytics',
    id: 4,
  },
]
