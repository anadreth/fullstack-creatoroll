import React from 'react'

function CharChart({character}) {
  return (
    <div className='grid grid-cols-3 gap-4 font-poppins text-orange bg-light'>
        <div className='border-red border-2 col-span-3 text-3xl'>
            <h2>{character.charName}</h2>
        </div>

        <div className=' border-red border-2 grid grid-cols-2 place-items-center p-3'>
            <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
            <div className='grid grid-cols-1'>
                <div className='text-md '>
                    <h2>{character.race.name.slice(0, 1).toUpperCase() + character.race.name.slice(1)}</h2>
                </div>
                <div className='text-sm text-red'>
                    <p>{character.traits.toLowerCase()}</p>
                </div>
            </div>
        </div>
        <div className=' border-red border-2 flex justify-center items-center'>
            <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
            <div className='grid grid-cols-1'>
                <div className='text-md '>
                    <h2>{character.charClass.slice(0, 1).toUpperCase() + character.charClass.slice(1)}</h2>
                </div>
            </div>
        </div>
        <div className=' border-red border-2 flex justify-center items-center'>
            <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
            <div className='grid grid-cols-1'>
                <div className='text-md '>
                    <h2>Background</h2>
                </div>
            </div>
        </div>

        <div className='border-red border-2 grid grid-cols-1 gap-4'>
            <div className='grid grid-rows-3 place-items-center'>
                <p>Strength</p>
                <p className='text-xl row-span-2 border-red border-2 px-3 py-2 rounded-full'>{character.strength}</p>
            </div>
            <div className='grid grid-rows-3 place-items-center'>
                <p>Dexterity</p>
                <p className='text-xl row-span-2 border-red border-2 px-3 py-2 rounded-full'> {character.dexterity}</p>
            </div>
            <div className='grid grid-rows-3 place-items-center'>
                <p>Intelligence</p>
                <p className='text-xl row-span-2 border-red border-2 px-3 py-2 rounded-full'> {character.intelligence}</p>
            </div>
        </div>
        <div className='grid grid-rows-4 gap-4'>
            <div className=' border-red border-2 flex justify-center items-center'>
                <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
                <div className='grid grid-cols-1'>
                    <div className='text-md '>
                        <h2>Background</h2>
                    </div>
                </div>
            </div>
            <div className=' border-red border-2 flex justify-center items-center'>
            <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
            <div className='grid grid-cols-1'>
                <div className='text-md '>
                    <h2>Background</h2>
                </div>
            </div>
            </div>
            <div className=' border-red border-2 flex justify-center items-center'>
                <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
                <div className='grid grid-cols-1'>
                    <div className='text-md '>
                        <h2>Background</h2>
                    </div>
                </div>
            </div>
            <div className=' border-red border-2 flex justify-center items-center'>
                <img src={character.race.iconPath} className="aspect-[3/4] w-auto h-12 m-3" />
                <div className='grid grid-cols-1'>
                    <div className='text-md '>
                        <h2>Background</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-red border-2 grid grid-cols-1 gap-8 p-6'>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
            <div className='flex justify-around items-center'>
                <p className=''>Strength </p>
                <span className='text-xl border-red border-2 px-3 py-2 rounded-full'>{character.strength}</span>
            </div>
        </div>
    </div>
  )
}

export default CharChart
