"use client"
import Back from '@/app/components/Back'
import CategoryItem from '@/app/components/CategoryItem'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const page = () => {
    const { meaalName } = useParams()
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${meaalName}`)
            .then(res => {
                if (res.status === 200) {
                    setCategory(res.data.meals)
                    console.log(res.data.meals);
                }
                else {
                    <CategoryItem />
                }
            })
    }, [meaalName])
    console.log(meaalName)
    return (
        <div className='flex flex-col gap-[10px]' >
            <h1 className='flex items-center justify-center font-bold mt-[20px]'>{meaalName}</h1>
            <Back />
            <div className='flex flex-wrap gap-[20px] items-center font-bold ml-[50px] mr-[50px] justify-between'>
                {category.map(categ => {
                    return <CategoryItem key={categ.idMeal} {...categ} />
                })}
            </div>
        </div>
    )
}
// https://themealdb.com/api/json/v1/1/lookup.php?i=${id}
export default page

