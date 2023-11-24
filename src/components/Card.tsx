import Item from '../domain/models/Item'
import { StyledCard } from './styles/Card.styled'

interface CardProps {
    item: Item
}

export default function Card({ item: { id, title, body, image } }: CardProps) {
  return (
    <StyledCard layout={id % 2 === 0 ? 'row-reverse': 'row'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={image} alt='' />
      </div>
    </StyledCard>
  )
}