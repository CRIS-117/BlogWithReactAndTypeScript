import React from 'react'

// import TextReveal from "../../components/magicui/Text-reveal";

import {Card, CardBody, Image} from "@nextui-org/react";

import { blog1 } from '../../../public'

import { Posts } from '../../utils/data/dummyData';

const Home = () => {
  return (
    <section className='bg-concrete-100'>
      <div className='flex flex-col items-center'>
        <div className='w-[85%] flex flex-col lg:flex-row gap-3 bg-white mt-8 md:mt-14'>
          <div className='lg:flex lg:justify-center w-full h-[10rem] overflow-hidden lg:w-1/2 lg:h-auto'>
            <Image
              radius='none'
              src={blog1}
              fallbackSrc="https://via.placeholder.com/"
              alt="WomenWriter"
              className='h-full'
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <h3 className='stroke-text font-Kanit-Bold leading-none uppercase p-3 text-chicago-700 text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
              <span>Explora el Mundo de las Ideas:</span>
              <br/>
              <span>Tu Portal de Blogs</span>
              <br/>
              <span>Inspiradores</span>
            </h3>
          </div>
        </div>
        <div className='w-[85%] bg-mindaro-400 rounded-sm mt-10'>
          <p className='font-Kanit-Regular text-lg leading-none p-3 lg:text-2xl lg:p-6'>Bienvenido a nuestro portal de creatividad y conocimiento, donde cada entrada de blog es una puerta a nuevas perspectivas. Desde ciencia y tecnología hasta arte y gastronomía, sumérgete en contenidos cuidadosamente elaborados para inspirar, educar y entretener. Descubre, aprende y comparte en la comunidad que celebra la pasión por escribir y leer sobre los temas que más te interesan.</p>
        </div>
        <div className='w-[85%] m-5'>
          {
            Posts.map((post,index)=> (
              <Card
              key={index}
              isBlurred
              isPressable
              className="border-none bg-white dark:bg-sulu-200/50 my-5"
              radius='none'
              shadow='none'
            >
              <CardBody>
                <div className={index % 2 === 0 ? "flex flex-col md:flex-row md:gap-4 items-center justify-between":"flex flex-col md:flex-row-reverse md:gap-4 items-center justify-between" }>
                  <div className="relative md:w-1/3">
                    <Image
                      radius='none'
                      alt="Album cover"
                      className="object-cover"
                      height={200}
                      shadow="none"
                      src={post.imgUrl}
                      width="100%"
                    />
                  </div>
        
                  <div className="flex flex-col md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div className='my-5 lg:my-0 lg:px-5'>
                        <p className='font-Kanit-Regular text-lg text-justify leading-tight tracking-tighter lg:text-4xl'>{post.title}</p>
                        <br />
                        <p className='font-Kanit-Light text-justify leading-tight text-base tracking-tighter lg:text-2xl'>{post.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home