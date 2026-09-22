import React from 'react'

function Navlinks() {
    return (
        <div className='font-sans text-xl p-1.5 hidden w-[70%] justify-center gap-3 items-center lg:flex'>
            <a href="/" className='hover:text-accent-orange hover:border-b-2  '>New Drop</a>
            <a href="/" className='hover:text-accent-orange hover:border-b-2  '>Collections</a>
            <a href="/" className='hover:text-accent-orange hover:border-b-2  '>Lens Tech</a>
            <a href="/" className='hover:text-accent-orange hover:border-b-2  '>About</a>
        </div>
    )
}

export default Navlinks
