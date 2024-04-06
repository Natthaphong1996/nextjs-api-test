import React from 'react'

function Header() {
  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-white text-5xl'>NextJS Pokemon Finder App</h1>
            <p className='text-white text-2xl'>Find Your favourite Pokemon</p>
            <form className='flex mt-2'>
                <input 
                    type='text'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md'
                    placeholder='Pokemon Name...'
                />
                <button className='inline-flex item-center mx-2 px-4 py-2 rounded-md bg-green-400 text-white shadow-md' type='submit'>Search</button>
            </form>
        </div>
    </header>
  )
}

export default Header
