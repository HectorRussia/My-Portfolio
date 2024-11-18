import { Stack } from '@chakra-ui/react'

const MainIntro1 = () => {
  return (
    <>
        <div className="relative flex justify-center flex-col ">
                <div className=" flex md:justify-center lg:justify-evenly items-center gap-[2rem] md:gap-[4rem]  ">
                    <Stack >
                    <img src="src/assets/introl.png" className="inline md:hidden lg:hidden"/>
                    <h1 className="text-1xl ml-[1rem]  md:text-2xl lg:text-4xl xl:text-5xl text-white font-bold text-balance md:mt-[1rem] lg:mt-[1rem] mt-[1rem] ">
                        Hello! I’m a <span className=" text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">Full-Stack Developer </span>
                        with a passion for learning and 
                        creating software solutions.
                    </h1>
                    </Stack>
                    <img src="src/assets/introl.png" className="h-[13rem] md:h-[21rem] lg:h-[22rem] xl:h-[35rem] hidden md:inline lg:inline rounded-lg mr-[1rem]  md:mt-[1rem] lg:mt-[1rem] xl:mt-[1rem] "/>
                </div>
        </div>
    </>
  )
}

export default MainIntro1