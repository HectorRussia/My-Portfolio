import Lottie from 'lottie-react'
import education  from '../../json/education.json';

const MainProject = () => {
  return (
    <>
         {/*  Project */}
        <div className="relative flex flex-col justify-center items-center mt-[3rem]"> 
                  <h1 className="text-1xl ml-[1rem] md:text-4xl lg:text-5xl text-white font-bold text-balance md:mt-[1rem] lg:mt-[1rem] ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">Projects</span> 
                  </h1>
                  <Lottie animationData={education} loop={true} className="h-[15rem] md:h-[25rem] lg:h-[25rem] mt-[1rem] "></Lottie>
        </div>
    </>
  )
}

export default MainProject