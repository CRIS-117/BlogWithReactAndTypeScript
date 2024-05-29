import React from 'react'

import { logo } from '../../public/';

import {
  Image,
  Button
} from "@nextui-org/react";

import {
  Link
} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-sulu-200 w-full flex flex-col items-center'>
      <div className='my-6'>
        <Image
          isBlurred
          width={screen.width < 340 ? 10 : 100}
          src={logo}
          alt="NextUI Album Cover"
        />
      </div>
      <div className='my-2'>
        <ul className='font-Kanit-Regular text-chicago-800 flex gap-3'>
          <li className='hover:text-chicago-300'>
            <Link to={'/'}>
              Inicio
            </Link>
          </li>
          <li className='hover:text-chicago-300'>
            <Link to={'/about'}>
              Sobre nosotros
            </Link>

          </li>
          <li className='hover:text-chicago-300'>
            <Link to={'/write'}>
              Blog
            </Link>
          </li>
          <li className='hover:text-chicago-300'>
            <Link to={'/contact'}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className='my-6'>
        <ul className='flex gap-3'>
          <li>
            <Button as={Link} href='https://www.linkedin.com/' isIconOnly size='sm' radius='full' variant="bordered" aria-label="Linkedin" className='border-chicago-800 text-chicago-800 hover:text-chicago-300 hover:border-chicago-300'>
              <i className="bi bi-linkedin"></i>
            </Button>
          </li>
          <li>
            <Button as={Link} href='https://x.com/' isIconOnly size='sm' radius='full' variant="bordered" aria-label="X" className='border-chicago-800 text-chicago-800 hover:text-chicago-300 hover:border-chicago-300'>
              <i className="bi bi-twitter-x"></i>
            </Button>
          </li>
          <li>
            <Button as={Link} href='https://github.com/' isIconOnly size='sm' radius='full' variant="bordered" aria-label="Github" className='border-chicago-800 text-chicago-800 hover:text-chicago-300 hover:border-chicago-300'>
              <i className="bi bi-github"></i>
            </Button>
          </li>
        </ul>
      </div>
      <div className='w-full bg-chicago-700 text-center'>
        <small className='font-Kanit-Light text-mindaro-400'>© 2024 CrisDevs. All rights reserved. <span className='text-sulu-400'>Cristofer Angeles Developer.</span></small>
      </div>
    </footer>
  )
}

export default Footer