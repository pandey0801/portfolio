import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

function NavBar() {
  const[nav,setNav] = useState(false);
  const links = [
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'Portfolio',
    },

    {
      id:4,
      link: 'experiecne',
    },
    {
      id:1,
      link:'Contact',
    },
  ]
  return (
    <>
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 '>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Vinay</h1>
      </div>


      {/* <ul className='hidden md:flex'>
        {links.map(({id , link})=>(
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105'>{link}


<Link to={link} smooth duration={500}>
              {link}
            </Link>

        </li>
         ))}
         
      </ul> */}

<ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      

      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>} 
        </div>

         {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500'>
            {links.map(({id , link})=>(
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}
            </li>
             ))}
    
            </ul>
         )}
        
    </div>
   
    </>
  )
}

export default NavBar