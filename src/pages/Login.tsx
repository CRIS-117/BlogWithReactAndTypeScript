import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button
} from "@nextui-org/react";

const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return {
    isVisible,
    toggleVisibility
  };
};

const Login = () => {

  const { isVisible, toggleVisibility } = useVisible();

  return (
    <div className='absolute h-[100vh] w-[100vw] bg-gradient-to-r from-sulu-300 via-mindaro-300 to-concrete-100'>
      <div className='flex justify-center items-center h-full w-full'>
        <Card radius='sm' className="w-96 bg-white/30 backdrop-blur-sm">
          <CardHeader className="flex gap-3">
            <h3 className='font-Kanit-Bold text-2xl'>Login</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <form action="" className='flex flex-col gap-5'>
              <Input
                isRequired
                size='sm'
                type="email"
                label="Email"
                variant='underlined'
                placeholder="Enter your email"
                classNames={{
                  base:'font-Kanit-Light',
                  label:'font-Kanit-Medium',
                  description:'',
                  input:'',
                  mainWrapper:'',
                  innerWrapper:'',
                  inputWrapper:'border-sulu-500 hover:border-sulu-300',
                  errorMessage:''
                }}
                // className=''
              />

              <Input
                isRequired
                size='sm'
                label="Password"
                variant='underlined'
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <i className='bi bi-eye-slash text-2xl text-default-400 pointer-events-none'></i>
                    ) : (
                      <i className='bi bi-eye text-2xl text-default-400 pointer-events-none'></i>
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className=""
              />
               <Button 
                size="sm"
                variant='ghost'>
                Small
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Login