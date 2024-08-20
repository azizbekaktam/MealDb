import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CategoryItem = ({ strMealThumb, idMeal, strMeal }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal.slice(0, 10)}...</Card.Title>
          <Link href={`/recipe/${idMeal}`}>
          <Button variant="primary">Buy</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryItem