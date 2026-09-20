import React from 'react'
import { LucideShoppingBag,FaceSlightlySmiling } from 'lucide-react'

function Header() {
    return (
        <div className='flex justify-between  items-center bg-bg-cream w-full px-4 py-3 border-outlines-muted border   '>
            <div className='text-2xl font-dela text-accent-orange'>Clearview Co.</div>
            <div className='flex justify-between gap-6 text-[1rem] font-sans'>
                <a href="/">New Drop</a>
                <a href="/">Collections</a>
                <a href="/">Lens Tech</a>
                <a href="/">About</a>
            </div>
            <div className='flex justify-between gap-3.5 font-sans' >
                <button className='border p-1.5 items-center hover:cursor-pointer border-outlines-muted'>
                    <LucideShoppingBag/>
                </button>
                <button className='flex justify-between gap-1.5 border items-center p-1.5  hover:cursor-pointer border-black  '>
                    <span className='text-[1rem] bg-(--primary-accent-orange) font-sans p-1 h-full'>Shop Now</span> <span><FaceSlightlySmiling /></span>
                </button>
            </div>
        </div>
    )
}

export default Header
