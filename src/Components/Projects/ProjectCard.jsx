import { Card, Button } from 'react-bootstrap';

export const ProjectCard = ({img, title, text, btnText}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="warning">{btnText}</Button>
      </Card.Body>
    </Card>
  )
}
