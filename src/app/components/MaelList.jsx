
"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import MealItem from './MealItem'
const MaelList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => {
                if (res.status === 200) {
                    setData(res.data.categories)
                    console.log(data);

                }
            }
            )
    }, [])
    return (
        <div className="pt-4 flex justify-center gap-4 flex-wrap ">
            {data.map(el => {
                return <MealItem key={el.idMeal} {...el}/>
            })}
        </div>
    )
}

export default MaelList