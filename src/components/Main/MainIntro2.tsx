import { Stack } from "@chakra-ui/react"
import { IconDownload, IconUser } from "@tabler/icons-react"


const MainIntro2 = () => {
  return (
    <>
        <div className="flex flex-col-reverse  lg:flex-row items-center ">
                    <Stack>
                      <h1 className="text-1xl ml-[1rem]  md:text-3xl lg:text-4xl text-white font-bold text-balance md:mt-[1rem] lg:mt-[1rem] mt-[1rem] ">
                          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">WHO I AM ?</span>
                      </h1>
                      <p className="ml-[1rem]  text-white text-pretty md:text-balance lg:md:text-balance text-sm md:text-lg lg:text-base mt-[0.1rem] ">
                                I creating software solution 
                                I enjoy working on both front-end and back-end development and 
                                I’m constantly building my skills to improve my projects. 
                                Looking forward to growing and 
                                collaborating with others to create useful and efficient applications!
                      </p> 
                      <div className="flex gap-4">
                          <button className="relative flex items-center justify-center gap-1 w-[9rem] h-[3rem] font-bold text-white text-sm bg-slate-600 rounded-full border-solid border-3 border-pink-500">
                                CONTACT ME <IconUser stroke={2}  />
                          </button>
                          <button className="relative flex items-center justify-center gap-1 w-[9rem] h-[3rem] font-bold text-white text-sm bg-slate-600 rounded-full border-solid border-3  border-pink-500">
                                GET RESUME <IconDownload stroke={2} />
                          </button>
                      </div>
                    </Stack>
            {/*  <img src="src/assets/profile.jpg" className="relative h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] lg:h-[20rem] lg:w-[20rem] rounded-lg mr-[1rem] mt-[2rem]"/> */}
        </div>
    </>
  )
}

export default MainIntro2