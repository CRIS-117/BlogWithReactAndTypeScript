import React from 'react'

import { slime } from '../../../public'

import { Button, Link } from "@nextui-org/react";

const NotFound = () => {
  return (
    <section className='bg-gradient-to-t from-purple-500/20 via-sky-400/20 to-purple-500/20 h-[100vh]'>
      <div className='flex flex-col items-center'>
        <div>
          <img src={slime} alt="" className='drop-shadow-[-10px_5px_10px_rgba(0,0,0,0.5)]' />
        </div>
        <b className='font-Kanit-Bold text-4xl md:text-7xl text-center'>Hey, creo que estas perdido eh?</b>
        <br />
        <p className='font-Kanit-Light text-center text-xl md:text-3xl'>La pagina que estas buscando no se encuentra, regresa al inicio.</p>
        <br />
        <Button as={Link} href='/' radius='sm' size='lg' className='text-3xl bg-sulu-600 h-14 max-w-xs font-Kanit-Bold text-white'>Ir al Home</Button>
      </div>
    </section>
  )
}

export default NotFound