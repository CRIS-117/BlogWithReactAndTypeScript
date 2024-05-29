import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button
} from "@nextui-org/react";

import { useNavigate } from 'react-router-dom';

const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return {
    isVisible,
    toggleVisibility
  };
};


const Register = () => {

  const { isVisible, toggleVisibility } = useVisible();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className='absolute h-[100vh] w-[100vw] bg-gradient-to-r from-sulu-300 via-mindaro-300 to-concrete-100'>
      <div className='flex justify-center items-center h-full w-full'>
        <Card radius='sm' className="w-96 bg-white/30 backdrop-blur-sm">
          <CardHeader className="flex justify-center">
            <h3 className='font-Kanit-Bold text-3xl text-mindaro-800'>Sign Up</h3>
          </CardHeader>
          <Divider />
          <CardBody className='p-5'>
            <form action="" className='flex flex-col gap-5'>
              <Input
                isRequired
                size='sm'
                type="text"
                label="Username"
                variant='underlined'
                placeholder="Enter your username"
                errorMessage='Fill out this field.'
                classNames={{
                  base: 'font-Kanit-Light',
                  label: 'font-Kanit-Medium',
                  inputWrapper: 'border-sulu-500 hover:border-sulu-300',
                  errorMessage: 'font-Kanit-Light'
                }}
              />

              <Input
                isRequired
                size='sm'
                type="email"
                label="Email"
                variant='underlined'
                placeholder="Enter your email"
                errorMessage='Fill out this field and include an "@" sign in the email address.'
                classNames={{
                  base: 'font-Kanit-Light',
                  label: 'font-Kanit-Medium',
                  inputWrapper: 'border-sulu-500 hover:border-sulu-300',
                  errorMessage: 'font-Kanit-Light'
                }}
              />

              <Input
                isRequired
                size='sm'
                label="Password"
                autoComplete='off'
                variant='underlined'
                placeholder="Enter your password"
                errorMessage='Fill out this field.'
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <i className='bi bi-eye-slash text-2xl text-default-600 pointer-events-none'></i>
                    ) : (
                      <i className='bi bi-eye text-2xl text-default-600 pointer-events-none'></i>
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                classNames={{
                  base: 'font-Kanit-Light bg-transparent',
                  label: 'font-Kanit-Medium',
                  inputWrapper: 'border-sulu-500 hover:border-sulu-300',
                  errorMessage: 'font-Kanit-Light'
                }}
              />
              <Button
                size="sm"
                variant='solid'
                className='bg-mindaro-600 text-white font-Kanit-Medium text-lg shadow-lg'>
                Sign Up
              </Button>
              <div className='flex flex-col'>
                <small className='font-Kanit-Light'>Do you have an account?</small>
                <Button
                  size="sm"
                  variant='bordered'
                  onClick={handleNavigate}
                  className='text-mindaro-500 font-Kanit-Medium text-lg shadow-lg border-mindaro-500 hover:text-white hover:bg-mindaro-500'>
                  Cancel
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Register