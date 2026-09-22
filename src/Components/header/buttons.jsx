import React from 'react'
import { ShoppingBag,FaceGrinning } from 'lucide-react'
function Buttons() {
    return (
        <div className='w-[15%] text-xl p-1.5 flex items-center  justify-evenly gap-3 '>
            <button className='hover:cursor-pointer hover:text-accent-orange hover:border-b-2'><ShoppingBag/></button>
            <button className='flex items-center text-xl bg-accent-orange hover:cursor-pointer  hover:border-b-2'>
                Shop Now <FaceGrinning className='bg-white p-0.5' /> 
            </button>
        </div>
    )
}

export default Buttons
