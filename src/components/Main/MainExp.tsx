import Lottie from 'lottie-react'
import animationData  from '../../json/animation.json';
import { IconDeviceImac } from '@tabler/icons-react';
import { Text } from "@chakra-ui/react";

const MainExp = () => {
  return (
    <>
          <div className="relative flex flex-col mt-[3rem]"> 

            <h1 className="text-1xl ml-[1rem] md:text-4xl lg:text-5xl text-white text-center font-bold text-balance md:mt-[1rem] lg:mt-[1rem] ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">Experiences</span> 
            </h1>

            <div className="flex flex-col xl:flex-row items-center lg:justify-evenly gap-2 ">
            <Lottie animationData={animationData} loop={true} className="h-[15rem] md:h-[25rem] lg:h-[25rem] mt-[1rem] "/>
            <div className="bg-slate-700 rounded-lg flex flex-col shadow-lg shadow-orange-200  ">
                <Text className="text-green-500 text-center font-bold tracking-[0.2rem] whitespace-nowrap mt-2 text-sm ">
                    {`(June2024 - Present)`}
                </Text>
                <div className="flex justify-start items-center mt-[1rem] px-[2rem] py-[2rem] md:px-[4rem] md:py-[4rem] lg:py-[5rem] lg:px-[5rem]  gap-5">
                    <IconDeviceImac stroke={2} className="text-slate-300 w-[5rem] h-[4rem] " />
                    <div>
                    <Text className="text-white font-bold tracking-[0.2rem] whitespace-nowrap">FullStack Developer</Text>
                    <Text className="text-white font-bold tracking-[0.1rem] whitespace-nowrap">Gobal wireless co.ltd</Text>
                    </div>
                </div>
            </div>
            </div>

            </div>
    </>
  )
}

export default MainExp