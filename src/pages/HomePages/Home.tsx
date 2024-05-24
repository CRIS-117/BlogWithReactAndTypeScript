import React from 'react'

import { Image } from "@nextui-org/react";

import { blog1 } from '../../../public'

const Home = () => {
  return (
    <section className='bg-concrete-50'>
      <div className='flex flex-col items-center'>
        <div className='w-[85%] bg-white'>
          <div className='w-full h-[10rem] lg:w-1/2 overflow-hidden'>
            <Image
              radius='none'
              src={blog1}
              fallbackSrc="https://via.placeholder.com/"
              alt="WomenWriter"
              classNames={{
                img: ''
              }}
              className=' lg:w-1/3'
            />
          </div>
          <div className='w-full'>
            <h3 className='stroke-text font-Kanit-Bold leading-none uppercase text-2xl md:text-4xl lg:text-6xl'><span>Explora el Mundo de las Ideas:</span><br/><span>Tu Portal de Blogs</span><br/><span>Inspiradores</span></h3>
            {/* <p className='font-Kanit-Regular leading-tight text-chicago-800'>Bienvenido a nuestro rincón de creatividad y conocimiento, donde cada entrada de blog es una puerta a nuevas perspectivas. Desde ciencia y tecnología hasta arte y gastronomía, sumérgete en contenidos cuidadosamente elaborados para inspirar, educar y entretener. Descubre, aprende y comparte en la comunidad que celebra la pasión por escribir y leer sobre los temas que más te interesan.</p> 
            https://magicui.design/docs/components/flip-text*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home