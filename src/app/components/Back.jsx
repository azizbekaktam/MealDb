import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {
    const rout = useRouter()
    return (
        <div className='flex items-center justify-start'>
            <span
                className='flex ml-[50px] mt-[-30px] cursor-pointer'
                onClick={() => {
                    rout.back()
                }}
            >Exit</span>
        </div>
    )
}

export default Back