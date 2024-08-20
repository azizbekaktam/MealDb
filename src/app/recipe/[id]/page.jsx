"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

const page = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    const [showTable, setShowTable] = useState(false)
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                if (res.status === 200) {
                    setRecipe(res.data.meals[0])
                }
            })
    }, [id])
    const ingredients = Object.keys(recipe)
        .filter((item) => item.slice(0, 13) === "strIngredient")
        .map((elem) => recipe[elem]);
    const measure = Object.keys(recipe)
        .filter((item) => item.slice(0, 10) === "strMeasure")
        .map((elem) => recipe[elem]);
    return (

        <div style={{ marginTop: "100px" }}>
            <Button
                variant="success"
                onClick={() => {
                    setShowTable((prev) => !prev);
                }}
            >
                Show Table
            </Button>
            {showTable ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((elem, index) => {
                            if (elem.length !== 0) {
                                return (
                                    <tr>
                                        <td>{elem}</td>
                                        <td>{measure[index]}</td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </Table>
            ) : null}
        </div>
    )
}

export default page