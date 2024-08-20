"use client"
import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MealItem = ({ idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription, }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription.slice(0, 20)}
                    </Card.Text>
                    <Link href={`/category/${strCategory}`}>
                        <Button variant="primary">Buy</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MealItem