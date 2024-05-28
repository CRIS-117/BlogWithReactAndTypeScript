import React from 'react'

import { Card, CardBody, CardFooter, Image, Avatar, Button } from "@nextui-org/react";

import { blogPost1, blogPost2, blogPost3 } from '../../../public';

import { Posts } from '../../utils/data/dummyData';

const Single = () => {
  return (
    <section className='bg-concrete-100'>
      <div className='flex flex-col items-center'>
        <div className='w-[85%] my-8 md:my-14 md:flex md:justify-between gap-5'>
          <div className='bg-white w-full  md:w-8/12 lg:w-9/12'>
            <div className='w-full bg-cover h-[10rem] md:h-[15rem] lg:h-[25rem] xl:h-[30rem]' style={{ backgroundImage: `url(${blogPost1})` }} >
            </div>
            <div className='flex my-3 md:mx-5 lg:mx-16'>
              <Button
                color='default'
                variant='light'
                radius='none'
                className='bg-transparent h-auto'
              >
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  size="lg" />
                <div className='flex flex-col text-left'>
                  <b className='font-Kanit-Regular text-concrete-900'>Cristofer Angeles</b>
                  <small className='font-Kanit-Light text-concrete-600'>Publicado el: 13/04/2022</small>
                </div>
              </Button>
              <div className='flex flex-col'>
                <Button isIconOnly radius='none' size='sm' variant='light' color="primary" aria-label="edit">
                  <i className="bi bi-pencil"></i>
                </Button>
                <Button isIconOnly radius='none' size='sm' variant='light' color="danger" aria-label="delete">
                  <i className="bi bi-trash2"></i>
                </Button>
              </div>
            </div>
            <div className='my-5 mx-5 md:mx-10 lg:mx-20 lg:text-lg text-justify tracking-tight font-Kanit-Regular'>
              <b className='text-lg leading-none'>BACTERIAS MAGNETOTÁCTICAS – VIVIR CON UN IMÁN</b>
              <br />
              <br />
              <p>Corría el año 1963, y el médico italiano Salvatore Bellini, había estado recopilando muestras de agua de diferentes pantanos y lagos de la zona de Pavía donde trabajaba. Como de costumbre, cuando llegó al laboratorio analizó las muestras bajo el microscopio a la búsqueda de bacterias para sus estudios. No tardo en darse cuenta de que algunas de esas bacterias se movían de una forma extraña. Si giraba la placa, las bacterias también giraban. Daba igual como las colocará, ellas siempre nadaban hacía el mismo punto.</p>
              <br />
              <p>Sorprendido por ese extraño comportamiento, empezó a pensar que quizás tenía que ver con el campo magnético de la Tierra, y que las bacterias, en realidad, se dirigían hacía el polo Norte. Para testar su hipótesis usó un potente imán. Lo situó al lado de las bacterias y comprobó maravillado cómo las bacterias modificaban su rumbo y se dirigían ahora hacía el polo negativo del mismo. Nunca había oído nada igual.</p>
              <br />
              <p>Para intentar comprender mejor este intrigante fenómeno realizó diferentes experimentos. Probó con bacterias vivas y muertas, diluyendo el medio y añadiendo sales de hierro. Al final llegó a la conclusión de que <b>sus bacterias debían poseer una especie de “imán” interno formado por compuestos de hierro.</b> Un imán que les permitía orientarse según el campo magnético de la Tierra. Pero a pesar de lo asombroso del descubrimiento, únicamente publicó sus datos en una pequeña revista local y su hallazgo pronto quedó olvidado.</p>
              <br />
              <img src={blogPost2} alt="" />
              <small>IMAGEN DE MICROSCOPÍA ELECTRÓNICA DE UNA BACTERIA MAGNETOTÁCTICA. FUENTE <a className='text-mindaro-600' href="https://www.nature.com/scitable/knowledge/library/bacteria-that-synthesize-nano-sized-compasses-to-15669190/">NATURE</a></small>
              <br />
              <br />
              <h3 className='text-mindaro-600 text-3xl'>Bacterias magnetotácticas: una brujula en el interior</h3>
              <br />
              <div className='lg:flex lg:gap-10'>
                <div className='lg:w-1/2'>
                  <p>Unos años más tarde, en 1973, al otro lado del Atlántico, un estudiante de doctorado, Richard Blakemore, halló unas bacterias similares analizando sedimentos marinos. Al igual que Bellini, descubrió que sus <b>bacterias se movían según las líneas de campo magnético terrestre.</b></p>
                  <p>Intrigado observó las bacterias bajo un microscopio electrónico. Allí, en el interior del cuerpo alargado había una serie de 10 o 20 cristales minúsculos colocados en línea. Eran los <b>magnetosomas: pequeñas nanoparticulas de magnetita que las bacterias sintetizaban.</b> Así, ordenados en línea, se comportaban como la aguja de una brújula. Había descubierto el secreto de las bacterias magnetotácticas</p>
                  <br />
                </div>
                <div className='lg:w-1/2'>
                  <img src={blogPost3} alt="" />
                  <small>MAGNETOSOMES EN MAGNETOSPIRILLUM GRYPHISWALDENSE – <a className='text-mindaro-600' href="https://creativecommons.org/licenses/by%2Dsa/3.0">FRANK MICKOLEIT CC BY-SA 3.0</a></small>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className='hidden bg-white w-full md:flex md:flex-col md:w-4/12 lg:w-3/12'>
            {
              Posts.map((post, index) => (
                <Card shadow="none" radius='none' key={index} isPressable className='mb-3' onPress={() => console.log("item pressed")}>
                  <CardBody className="overflow-visible">
                    <Image
                      shadow="none"
                      radius="none"
                      width="100%"
                      alt={post.title}
                      className="w-full object-cover h-[140px]"
                      src={post.imgUrl}
                    />
                  </CardBody>
                  <CardFooter className="text-small font-Kanit-Regular text-justify leading-tight tracking-tight flex flex-col ">
                    <b>{post.title}</b>
                    <p className='text-mindaro-600 mt-2'>Ver mas...</p>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Single